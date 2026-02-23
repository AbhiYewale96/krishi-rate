import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { MandiRates } from "@/components/MandiRates";
import { FertilizerRates } from "@/components/FertilizerRates";
import { PesticideRates } from "@/components/PesticideRates";
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

const Index = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<Language>("en");

  // Simulate data refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Temporary: show a test toast once on mount to verify notification system
  useEffect(() => {
    toast({ title: "Test notification", description: "If you see this, toasts are working" });
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
            <div className="flex justify-center">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <MandiRates 
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              selectedMarket={selectedMarket}
              searchQuery={searchQuery}
              language={language}
            />
            <FertilizerRates searchQuery={searchQuery} language={language} />
          </div>
          
          <div className="space-y-6">
            <PesticideRates searchQuery={searchQuery} language={language} />
            <PriceCharts language={language} />
          </div>
        </div>

        {/* Government Schemes & Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GovernmentSchemes searchQuery={searchQuery} language={language} />
          <HelpDesk language={language} />
        </div>
      </main>
    </div>
  );
};

export default Index;