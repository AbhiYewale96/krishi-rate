import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Language, getTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";

type WeatherNow = {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
};

type NewsItem = { title: string; url: string; source: string; time: string };

type DailyForecast = {
  date: string;
  tmax: number;
  tmin: number;
  wcode: number;
  precipProb: number | null;
  windMax: number | null;
};

const fetchWeather = async (lat: number, lon: number): Promise<WeatherNow | null> => {
  // Use stable Open-Meteo current_weather endpoint
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const current = data.current_weather;
  return current
    ? {
        temperature: current.temperature,
        windspeed: current.windspeed,
        winddirection: current.winddirection,
        weathercode: current.weathercode,
      }
    : null;
};

const fetchNews = async (): Promise<NewsItem[]> => {
  // Use PIB India RSS via rss2json; fallback to raw RSS via allorigins
  const feed = "https://pib.gov.in/PressReleaseRssFeed.aspx?Ministry=All";
  const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`;
  try {
    const res = await fetch(api);
    if (res.ok) {
      const data = await res.json();
      return (data?.items || []).slice(0, 10).map((n: any) => ({
        title: n.title,
        url: n.link,
        source: n.author || "PIB",
        time: n.pubDate ? new Date(n.pubDate).toLocaleString() : new Date().toLocaleTimeString(),
      }));
    }
  } catch {}
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feed)}`;
  const proxied = await fetch(proxyUrl);
  if (!proxied.ok) return [];
  const text = await proxied.text();
  const items = Array.from(text.matchAll(/<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<pubDate>([\s\S]*?)<\/pubDate>/g)).slice(0, 10);
  return items.map((m: any) => ({
    title: m[1].replace(/<!\[CDATA\[|\]\]>/g, ""),
    url: m[2].trim(),
    source: "PIB",
    time: new Date(m[3]).toLocaleString(),
  }));
};

const WeatherPage = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [weather, setWeather] = useState<WeatherNow | null>(null);
  const [daily, setDaily] = useState<DailyForecast[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState<string>("");
  const mapRef = useRef<any>(null);
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<any>(null);

  const geocode = async (name: string): Promise<{ lat: number; lon: number; label: string } | null> => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=en&format=json`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const first = data?.results?.[0];
    if (!first) return null;
    return { lat: first.latitude, lon: first.longitude, label: `${first.name}${first.admin1 ? ", " + first.admin1 : ""}` };
  };

  const fetchForecast = async (lat: number, lon: number): Promise<DailyForecast[]> => {
    // Use heavy precipitation and better model selection; include probability and wind max
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=auto&models=best_match`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    const d = data.daily;
    if (!d) return [];
    return d.time.map((t: string, i: number) => ({
      date: t,
      tmax: d.temperature_2m_max[i],
      tmin: d.temperature_2m_min[i],
      wcode: d.weathercode[i],
      precipProb: d.precipitation_probability_max?.[i] ?? null,
      windMax: d.wind_speed_10m_max?.[i] ?? null,
    }));
  };

  // Optional: Fetch hourly next 24h for higher accuracy (not rendered but can be used later)
  const fetchHourly = async (lat: number, lon: number) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,wind_speed_10m&timezone=auto&forecast_days=2&models=best_match`;
      await fetch(url);
    } catch {}
  };

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        setLoading(true);
        // Get browser location; fallback to New Delhi if blocked
        await new Promise<void>((resolve) => {
          if (!navigator.geolocation) {
            setCoords({ lat: 28.6139, lon: 77.2090 });
            resolve();
            return;
          }
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude });
              resolve();
            },
            () => {
              setCoords({ lat: 28.6139, lon: 77.2090 });
              resolve();
            },
            { enableHighAccuracy: true, timeout: 8000 }
          );
        });

        // Fetch weather, forecast and news separately so one failure doesn't block the others
        try {
          const location = coords || { lat: 28.6139, lon: 77.2090 };
          const w = await fetchWeather(location.lat, location.lon);
          if (!cancelled) {
            setWeather(w);
            setWeatherError(w ? null : "Failed to load weather");
          }
        } catch {
          if (!cancelled) setWeatherError("Failed to load weather");
        }

        try {
          const location = coords || { lat: 28.6139, lon: 77.2090 };
          const d = await fetchForecast(location.lat, location.lon);
          if (!cancelled) setDaily(d);
        } catch {}
        try {
          const location = coords || { lat: 28.6139, lon: 77.2090 };
          await fetchHourly(location.lat, location.lon);
        } catch {}

        try {
          const n = await fetchNews();
          if (!cancelled) {
            setNews(n);
            setNewsError(n.length ? null : "Failed to load news");
          }
        } catch {
          if (!cancelled) setNewsError("Failed to load news");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    init();

    const interval = setInterval(init, 5 * 60 * 1000); // refresh every 5 minutes
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [coords?.lat, coords?.lon]);

  const refresh = () => {
    setCoords((c) => (c ? { ...c } : { lat: 28.6139, lon: 77.2090 }));
  };

  const onSearch = async () => {
    if (!query.trim()) return;
    const result = await geocode(query.trim());
    if (result) {
      setCoords({ lat: result.lat, lon: result.lon });
      setPlace(result.label);
      // Pan map immediately
      if ((window as any).L && mapRef.current) {
        mapRef.current.setView([result.lat, result.lon], 7);
      }
    } else {
      setWeatherError("Location not found");
    }
  };

  // Initialize Leaflet map once
  useEffect(() => {
    const L = (window as any).L;
    if (!L || mapRef.current || !mapElRef.current) return;
    const initial = coords || { lat: 20.5937, lon: 78.9629 }; // India center
    const map = L.map(mapElRef.current).setView([initial.lat, initial.lon], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    mapRef.current = map;
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }, [coords]);

  // Update marker/center when coords change
  useEffect(() => {
    const L = (window as any).L;
    if (!L || !mapRef.current || !coords) return;
    mapRef.current.setView([coords.lat, coords.lon], 7);
    if (markerRef.current) {
      markerRef.current.remove();
    }
    markerRef.current = L.marker([coords.lat, coords.lon]).addTo(mapRef.current);
    setTimeout(() => mapRef.current.invalidateSize(), 0);
  }, [coords?.lat, coords?.lon]);

  const codeToEmoji = (code: number): string => {
    // Basic mapping per WMO weather codes
    if ([0].includes(code)) return "☀️"; // Clear
    if ([1,2,3].includes(code)) return "⛅"; // Mainly clear/partly cloudy/overcast
    if ([45,48].includes(code)) return "🌫️"; // Fog
    if ([51,53,55,56,57].includes(code)) return "🌦️"; // Drizzle
    if ([61,63,65].includes(code)) return "🌧️"; // Rain
    if ([66,67].includes(code)) return "🌧️❄️"; // Freezing rain
    if ([71,73,75,77].includes(code)) return "❄️"; // Snow
    if ([80,81,82].includes(code)) return "🌧️"; // Rain showers
    if ([85,86].includes(code)) return "❄️"; // Snow showers
    if ([95,96,99].includes(code)) return "⛈️"; // Thunderstorm
    return "🌡️";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={""} setSearchQuery={() => {}} language={language} />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-2xl font-semibold text-foreground">Weather & News</h2>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search location (e.g., Mumbai)"
              className="px-3 py-2 rounded-md border bg-card text-foreground"
            />
            <Button variant="default" size="sm" onClick={onSearch}>Search</Button>
            <Button variant="secondary" size="sm" onClick={refresh}>Refresh</Button>
          </div>
        </div>

        {(weatherError || newsError) && (
          <div className="text-destructive space-y-1">
            {weatherError && <div>{weatherError}</div>}
            {newsError && <div>{newsError}</div>}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Live Weather {place && (<span className="text-sm text-muted-foreground">· {place}</span>)}</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && <div className="text-muted-foreground">Loading...</div>}
              {!loading && weather && (
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{codeToEmoji(weather.weathercode)} {Math.round(weather.temperature)}°C</div>
                  <div className="text-sm text-muted-foreground">Wind: {Math.round(weather.windspeed)} km/h · Dir: {weather.winddirection}°</div>
                  <div className="text-xs text-muted-foreground">Auto-refreshes every 5 minutes</div>
                </div>
              )}
              {!loading && !weather && (
                <div className="text-muted-foreground">No weather data</div>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Latest Major News</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && <div className="text-muted-foreground">Loading...</div>}
              {!loading && news.length === 0 && (
                <div className="text-muted-foreground">No news found</div>
              )}
              <div className="space-y-3">
                {news.map((n, idx) => (
                  <div key={idx} className="p-3 rounded-md border border-border/50 bg-muted/30">
                    <div className="flex items-center justify-between gap-2">
                      <a className="font-medium text-foreground hover:underline" href={n.url} target="_blank" rel="noreferrer">
                        {n.title}
                      </a>
                      <Badge variant="outline" className="text-xs">{n.source}</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{n.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div ref={mapElRef} id="map" className="w-full h-80 rounded-md border" />
              <div className="text-xs text-muted-foreground mt-2">Move/zoom to explore. Centered on selected location.</div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>7-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && <div className="text-muted-foreground">Loading...</div>}
              {!loading && daily.length === 0 && (
                <div className="text-muted-foreground">No forecast data</div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {daily.map((d, i) => (
                  <div key={i} className="p-3 rounded-md border border-border/50 bg-muted/30 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{new Date(d.date).toLocaleDateString()} {codeToEmoji(d.wcode)}</div>
                      <div className="text-xs text-muted-foreground">{d.precipProb != null ? `Rain: ${d.precipProb}%` : ''}{d.windMax != null ? `${d.precipProb != null ? ' • ' : ''}Wind: ${Math.round(d.windMax)} km/h` : ''}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{Math.round(d.tmax)}° / {Math.round(d.tmin)}°C</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WeatherPage;


