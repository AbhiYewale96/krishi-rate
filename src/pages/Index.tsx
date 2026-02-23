import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { DataNavigation } from "@/components/DataNavigation";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { HelpDesk } from "@/components/HelpDesk";
import { PriceCharts } from "@/components/PriceCharts";
import { LocationSelector } from "@/components/LocationSelector";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";
import farmersHero from "@/assets/farmers-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("app_language") as Language) || "en");

  // Listen for global language change events
  useEffect(() => {
    const handler = (e: any) => setLanguage(e.detail as Language);
    window.addEventListener("app_language_change", handler as any);
    return () => window.removeEventListener("app_language_change", handler as any);
  }, []);

  // Simulate data refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} language={language} />
      
      {/* Hero Image Section */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img 
          src={farmersHero} 
          alt="Indian farmers working in agricultural fields" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {getTranslation('appTitle', language)}
            </h1>
            <div className="flex justify-center gap-3">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <Link to="/weather">
                <Button size="sm" variant="secondary">Weather</Button>
              </Link>
              <Link to="/crop-care">
                <Button size="sm" variant="outline" className="text-black border-black hover:bg-black hover:text-white">Crop Care</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <Card className="border-success/20 bg-success/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-success flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                {getTranslation('liveDataStatus', language)}
              </CardTitle>
              <Badge variant="outline" className="border-success text-success">
                {getTranslation('active', language)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {getTranslation('lastUpdated', language)}: {lastUpdated.toLocaleString('en-IN')} | 
              {getTranslation('nextRefresh', language)}: {Math.ceil((5 * 60 * 1000 - (Date.now() % (5 * 60 * 1000))) / 1000 / 60)} {getTranslation('minutes', language)}
            </p>
          </CardContent>
        </Card>

        {/* Location Selector */}
        <LocationSelector
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
          selectedMarket={selectedMarket}
          setSelectedMarket={setSelectedMarket}
          language={language}
        />

        {/* Data Navigation Dropdown */}
        <DataNavigation
          selectedState={selectedState}
          selectedDistrict={selectedDistrict}
          selectedMarket={selectedMarket}
          searchQuery={searchQuery}
          language={language}
        />

        {/* Additional Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <PriceCharts language={language} />
            <HelpDesk language={language} />
          </div>
          
          <div className="space-y-6">
            <GovernmentSchemes searchQuery={searchQuery} language={language} />
          </div>
        </div>

      </main>
    </div>
  );
};

export default Index;