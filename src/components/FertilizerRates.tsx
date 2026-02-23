import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getTranslation, Language, translateItemName } from "@/utils/translations";

interface FertilizerRatesProps {
  searchQuery: string;
  language: Language;
}

// Comprehensive fertilizer data from Indian markets
const fertilizerData = [
  {
    name: "Urea",
    type: "Inorganic",
    price: 267,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0,
    subsidyRate: 2067.75,
    company: "IFFCO",
    use: "Nitrogen source for leaf growth, suitable for all crops especially cereals",
    benefits: "Boosts vegetative growth and green foliage"
  },
  {
    name: "DAP (Di-ammonium Phosphate)",
    type: "Inorganic", 
    price: 1350,
    unit: "₹/50kg bag",
    trend: "down",
    change: -2.1,
    subsidyRate: 1583.50,
    company: "Coromandel",
    use: "Phosphorus and nitrogen for root development and flowering",
    benefits: "Improves root strength and early flowering"
  },
  {
    name: "NPK (12:32:16)",
    type: "Inorganic",
    price: 1450,
    unit: "₹/50kg bag", 
    trend: "up",
    change: 1.5,
    subsidyRate: 1200.25,
    company: "Tata Chemicals",
    use: "Balanced nutrition for overall plant growth and fruit development",
    benefits: "Enhances yield and fruit size"
  },
  {
    name: "NPK (10:26:26)",
    type: "Inorganic",
    price: 1380,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0.2,
    subsidyRate: 1150.75,
    company: "IFFCO",
    use: "Supports root growth and flowering in cereals and oilseeds",
    benefits: "Supports root growth and flowering in cereals and oilseeds"
  },
  {
    name: "NPK (20:20:0:13)",
    type: "Inorganic",
    price: 1250,
    unit: "₹/50kg bag",
    trend: "up",
    change: 1.8,
    subsidyRate: 1050.50,
    company: "Krishak Bharati",
    use: "Balanced N and P with Sulphur for protein and oil synthesis",
    benefits: "Balanced N and P with Sulphur for protein and oil synthesis"
  },
  {
    name: "Single Super Phosphate (SSP)",
    type: "Inorganic",
    price: 890,
    unit: "₹/50kg bag",
    trend: "down",
    change: -1.2,
    subsidyRate: 750.25,
    company: "Zuari Agro",
    use: "Phosphorus source for root development and flowering",
    benefits: "Improves root development and enhances flowering and fruiting"
  },
  {
    name: "Muriate of Potash (MOP)",
    type: "Inorganic",
    price: 1680,
    unit: "₹/50kg bag",
    trend: "up",
    change: 2.3,
    subsidyRate: 1400.75,
    company: "IPL",
    use: "Potassium source for fruit development and disease resistance",
    benefits: "Improves drought tolerance, disease resistance, and fruit quality"
  },
  {
    name: "Sulphate of Potash (SOP)",
    type: "Inorganic",
    price: 2200,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0.1,
    subsidyRate: 1800.50,
    company: "Coromandel",
    use: "Potassium source for fruit development and disease resistance",
    benefits: "Supplies K and S; ideal for chloride-sensitive crops"
  },
  {
    name: "Calcium Ammonium Nitrate (CAN)",
    type: "Inorganic",
    price: 1150,
    unit: "₹/50kg bag",
    trend: "up",
    change: 1.4,
    subsidyRate: 950.25,
    company: "Nagarjuna Fertilizers",
    use: "Provides readily available N and Ca; reduces soil acidity",
    benefits: "Provides readily available N and Ca; reduces soil acidity"
  },
  {
    name: "Ammonium Sulphate",
    type: "Inorganic",
    price: 920,
    unit: "₹/50kg bag",
    trend: "down",
    change: -0.8,
    subsidyRate: 720.75,
    company: "Rashtriya Chemicals",
    use: "Supplies N and S; promotes protein formation",
    benefits: "Supplies N and S; promotes protein formation"
  },
  {
    name: "Organic Compost",
    type: "Organic",
    price: 280,
    unit: "₹/50kg bag",
    trend: "up",
    change: 3.2,
    subsidyRate: 0,
    company: "Local Co-op",
    use: "Soil conditioner, improves soil structure and water retention",
    benefits: "Improves soil health and microbial activity"
  },
  {
    name: "Vermi Compost",
    type: "Organic",
    price: 450,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0,
    subsidyRate: 150,
    company: "Multiple",
    use: "Enhances microbial activity and nutrient availability",
    benefits: "Enhances microbial activity and nutrient availability"
  },
  {
    name: "Bio-Fertilizer (Rhizobium)",
    type: "Organic",
    price: 180,
    unit: "₹/kg",
    trend: "down",
    change: -1.8,
    subsidyRate: 50,
    company: "NCOF",
    use: "Fixes atmospheric nitrogen in legumes; reduces urea need",
    benefits: "Fixes atmospheric nitrogen in legumes; reduces urea need"
  },
  {
    name: "Bio-Fertilizer (Azotobacter)",
    type: "Organic",
    price: 195,
    unit: "₹/kg",
    trend: "stable",
    change: 0.3,
    subsidyRate: 60,
    company: "NCOF",
    use: "Nitrogen fixation in non-legumes; improves seedling vigor",
    benefits: "Nitrogen fixation in non-legumes; improves seedling vigor"
  },
  {
    name: "Bio-Fertilizer (PSB)",
    type: "Organic",
    price: 175,
    unit: "₹/kg",
    trend: "up",
    change: 1.1,
    subsidyRate: 45,
    company: "NCOF",
    use: "Solubilizes phosphorus; increases P uptake",
    benefits: "Solubilizes phosphorus; increases P uptake"
  },
  {
    name: "Neem Cake",
    type: "Organic",
    price: 850,
    unit: "₹/50kg bag",
    trend: "up",
    change: 2.5,
    subsidyRate: 200,
    company: "Multiple",
    use: "Acts as bio-pesticide; slow-release nutrients",
    benefits: "Acts as bio-pesticide; slow-release nutrients"
  },
  {
    name: "Bone Meal",
    type: "Organic",
    price: 1200,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0.5,
    subsidyRate: 300,
    company: "Local Units",
    use: "Rich in phosphorus and calcium; boosts flowering",
    benefits: "Rich in phosphorus and calcium; boosts flowering"
  },
  {
    name: "Seaweed Extract",
    type: "Organic",
    price: 3200,
    unit: "₹/10kg bag",
    trend: "up",
    change: 4.1,
    subsidyRate: 500,
    company: "Sea6 Energy",
    use: "Improves stress tolerance and root growth",
    benefits: "Improves stress tolerance and root growth"
  },
  {
    name: "Humic Acid",
    type: "Organic",
    price: 2800,
    unit: "₹/25kg bag",
    trend: "stable",
    change: 0.2,
    subsidyRate: 400,
    company: "Dhanuka Agritech",
    use: "Enhances nutrient uptake and soil structure",
    benefits: "Enhances nutrient uptake and soil structure"
  },
  {
    name: "Liquid NPK (19:19:19)",
    type: "Inorganic",
    price: 420,
    unit: "₹/Liter",
    trend: "up",
    change: 1.9,
    subsidyRate: 120,
    company: "Multiplex",
    use: "Quick foliar feed for balanced macro-nutrients",
    benefits: "Quick foliar feed for balanced macro-nutrients"
  }
];

export const FertilizerRates = ({ searchQuery, language }: FertilizerRatesProps) => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredFertilizers = fertilizerData.filter(fertilizer => {
    const matchesSearch = fertilizer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || fertilizer.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-success" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <span className="w-4 h-4 flex items-center justify-center text-muted-foreground">—</span>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-success" />
          {getTranslation('fertilizerRates', language)}
        </CardTitle>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {getTranslation('all', language)}
          </button>
          <button
            onClick={() => setFilterType("organic")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "organic" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {getTranslation('organic', language)}
          </button>
          <button
            onClick={() => setFilterType("inorganic")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "inorganic" ? "bg-info text-info-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {getTranslation('inorganic', language)}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredFertilizers.map((fertilizer, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{translateItemName(fertilizer.name, language, 'fertilizer')}</h4>
                  <Badge variant={fertilizer.type === "Organic" ? "outline" : "secondary"} 
                         className={fertilizer.type === "Organic" ? "border-success text-success" : ""}>
                    {fertilizer.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">₹{fertilizer.price}</span>
                  {getTrendIcon(fertilizer.trend)}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>{getTranslation('unit', language)}: {fertilizer.unit}</span>
                  <span>{getTranslation('company', language)}: {fertilizer.company}</span>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-foreground">{getTranslation('use', language)}: </span>
                  <span>{fertilizer.use}</span>
                </div>
                {fertilizer.benefits && (
                  <div className="mb-2">
                    <span className="font-medium text-foreground">{getTranslation('benefits', language)}: </span>
                    <span>{fertilizer.benefits}</span>
                  </div>
                )}
                {fertilizer.subsidyRate > 0 && (
                  <div className="flex justify-between">
                    <span>{getTranslation('subsidy', language)}: ₹{fertilizer.subsidyRate}/MT</span>
                    <span className={fertilizer.trend === "up" ? "text-success" : fertilizer.trend === "down" ? "text-destructive" : "text-muted-foreground"}>
                      {fertilizer.change !== 0 && (
                        <>{fertilizer.change > 0 ? "+" : ""}{fertilizer.change}%</>
                      )}
                      {fertilizer.change === 0 && getTranslation('noChange', language)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};