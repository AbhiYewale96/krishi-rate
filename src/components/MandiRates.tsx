import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { translateItemName, Language, getTranslation } from "@/utils/translations";

interface MandiRatesProps {
  selectedState: string;
  selectedDistrict: string;
  selectedMarket: string;
  searchQuery: string;
  language?: Language;
}

// Comprehensive commodity data from Indian markets
const commodityData = [
  {
    name: "Wheat",
    minPrice: 2125,
    maxPrice: 2200,
    modalPrice: 2160,
    trend: "up",
    change: 2.5,
    unit: "₹/Quintal"
  },
  {
    name: "Rice (Common)",
    minPrice: 2850,
    maxPrice: 2950,
    modalPrice: 2900,
    trend: "down",
    change: -1.2,
    unit: "₹/Quintal"
  },
  {
    name: "Rice (Basmati)",
    minPrice: 4200,
    maxPrice: 4800,
    modalPrice: 4500,
    trend: "up",
    change: 1.8,
    unit: "₹/Quintal"
  },
  {
    name: "Paddy (Common)",
    minPrice: 1960,
    maxPrice: 2040,
    modalPrice: 2000,
    trend: "stable",
    change: 0,
    unit: "₹/Quintal"
  },
  {
    name: "Paddy (Fine)",
    minPrice: 2200,
    maxPrice: 2350,
    modalPrice: 2275,
    trend: "up",
    change: 1.5,
    unit: "₹/Quintal"
  },
  {
    name: "Maize",
    minPrice: 1850,
    maxPrice: 1920,
    modalPrice: 1885,
    trend: "up",
    change: 3.1,
    unit: "₹/Quintal"
  },
  {
    name: "Cotton",
    minPrice: 6800,
    maxPrice: 7200,
    modalPrice: 7000,
    trend: "up",
    change: 1.8,
    unit: "₹/Quintal"
  },
  {
    name: "Sugarcane",
    minPrice: 340,
    maxPrice: 380,
    modalPrice: 360,
    trend: "stable",
    change: 0.2,
    unit: "₹/Quintal"
  },
  {
    name: "Soybean",
    minPrice: 4200,
    maxPrice: 4400,
    modalPrice: 4300,
    trend: "down",
    change: -0.8,
    unit: "₹/Quintal"
  },
  {
    name: "Groundnut",
    minPrice: 5800,
    maxPrice: 6200,
    modalPrice: 6000,
    trend: "up",
    change: 2.3,
    unit: "₹/Quintal"
  },
  {
    name: "Mustard Seed",
    minPrice: 5200,
    maxPrice: 5600,
    modalPrice: 5400,
    trend: "up",
    change: 1.7,
    unit: "₹/Quintal"
  },
  {
    name: "Sunflower",
    minPrice: 6400,
    maxPrice: 6800,
    modalPrice: 6600,
    trend: "down",
    change: -1.1,
    unit: "₹/Quintal"
  },
  {
    name: "Sesame",
    minPrice: 8200,
    maxPrice: 8800,
    modalPrice: 8500,
    trend: "up",
    change: 2.8,
    unit: "₹/Quintal"
  },
  {
    name: "Turmeric",
    minPrice: 7800,
    maxPrice: 8400,
    modalPrice: 8100,
    trend: "up",
    change: 3.5,
    unit: "₹/Quintal"
  },
  {
    name: "Coriander",
    minPrice: 6800,
    maxPrice: 7200,
    modalPrice: 7000,
    trend: "stable",
    change: 0.1,
    unit: "₹/Quintal"
  },
  {
    name: "Red Chilli",
    minPrice: 8800,
    maxPrice: 9600,
    modalPrice: 9200,
    trend: "up",
    change: 4.2,
    unit: "₹/Quintal"
  },
  {
    name: "Black Pepper",
    minPrice: 45000,
    maxPrice: 48000,
    modalPrice: 46500,
    trend: "down",
    change: -1.8,
    unit: "₹/Quintal"
  },
  {
    name: "Cardamom",
    minPrice: 120000,
    maxPrice: 135000,
    modalPrice: 127500,
    trend: "up",
    change: 2.1,
    unit: "₹/Quintal"
  },
  {
    name: "Jaggery (Gud)",
    minPrice: 3200,
    maxPrice: 3600,
    modalPrice: 3400,
    trend: "stable",
    change: 0.3,
    unit: "₹/Quintal"
  },
  {
    name: "Bajra",
    minPrice: 2100,
    maxPrice: 2250,
    modalPrice: 2175,
    trend: "up",
    change: 1.9,
    unit: "₹/Quintal"
  },
  {
    name: "Jowar",
    minPrice: 2900,
    maxPrice: 3200,
    modalPrice: 3050,
    trend: "up",
    change: 2.4,
    unit: "₹/Quintal"
  },
  {
    name: "Arhar (Tur Dal)",
    minPrice: 5800,
    maxPrice: 6400,
    modalPrice: 6100,
    trend: "down",
    change: -1.5,
    unit: "₹/Quintal"
  },
  {
    name: "Masoor (Lentil)",
    minPrice: 4800,
    maxPrice: 5200,
    modalPrice: 5000,
    trend: "stable",
    change: 0.4,
    unit: "₹/Quintal"
  },
  {
    name: "Moong",
    minPrice: 7200,
    maxPrice: 7800,
    modalPrice: 7500,
    trend: "up",
    change: 1.6,
    unit: "₹/Quintal"
  }
];

export const MandiRates = ({ selectedState, selectedDistrict, selectedMarket, searchQuery, language = 'en' }: MandiRatesProps) => {
  const filteredCommodities = commodityData.filter(commodity =>
    commodity.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-success" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{getTranslation('mandiRates', language)}</span>
          <Badge variant="outline" className="bg-success/10 text-success border-success">
            {getTranslation('live', language)}
          </Badge>
        </CardTitle>
        {selectedMarket && (
          <p className="text-sm text-muted-foreground">
            {selectedMarket}, {selectedDistrict}, {selectedState}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredCommodities.map((commodity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium text-foreground">{translateItemName(commodity.name, language, 'commodity')}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{getTranslation('min', language)}: {commodity.minPrice}</span>
                  <span>•</span>
                  <span>{getTranslation('max', language)}: {commodity.maxPrice}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    ₹{commodity.modalPrice}
                  </span>
                  {getTrendIcon(commodity.trend)}
                </div>
                <div className={`text-sm ${getTrendColor(commodity.trend)}`}>
                  {commodity.change !== 0 && (
                    <>
                      {commodity.change > 0 ? "+" : ""}{commodity.change}%
                    </>
                  )}
                  {commodity.change === 0 && getTranslation('noChange', language)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};