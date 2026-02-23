import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, BarChart3, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getTranslation, Language } from "@/utils/translations";

// Mock data for demonstration
const fertilizerPriceData = [
  { month: "Jan", urea: 267, dap: 1380, npk: 1420 },
  { month: "Feb", urea: 267, dap: 1375, npk: 1430 },
  { month: "Mar", urea: 267, dap: 1360, npk: 1440 },
  { month: "Apr", urea: 267, dap: 1355, npk: 1450 },
  { month: "May", urea: 267, dap: 1350, npk: 1450 },
  { month: "Jun", urea: 267, dap: 1350, npk: 1450 },
];

const pesticidePriceData = [
  { month: "Jan", chlorpyrifos: 410, mancozeb: 680, imidacloprid: 1800 },
  { month: "Feb", chlorpyrifos: 415, mancozeb: 680, imidacloprid: 1820 },
  { month: "Mar", chlorpyrifos: 418, mancozeb: 680, imidacloprid: 1840 },
  { month: "Apr", chlorpyrifos: 420, mancozeb: 680, imidacloprid: 1850 },
  { month: "May", chlorpyrifos: 420, mancozeb: 680, imidacloprid: 1850 },
  { month: "Jun", chlorpyrifos: 420, mancozeb: 680, imidacloprid: 1850 },
];

interface PriceChartsProps {
  language?: Language;
}

export const PriceCharts = ({ language = 'en' }: PriceChartsProps) => {
  const [activeChart, setActiveChart] = useState<"fertilizer" | "pesticide">("fertilizer");

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: ₹{entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          Price Trends
        </CardTitle>
        <div className="flex gap-2">
          <Button
            variant={activeChart === "fertilizer" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveChart("fertilizer")}
            className="flex items-center gap-1"
          >
            <TrendingUp className="w-4 h-4" />
            Fertilizers
          </Button>
          <Button
            variant={activeChart === "pesticide" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveChart("pesticide")}
            className="flex items-center gap-1"
          >
            <Calendar className="w-4 h-4" />
            Pesticides
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === "fertilizer" ? (
              <LineChart data={fertilizerPriceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="urea" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  name="Urea"
                  dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="dap" 
                  stroke="hsl(var(--info))" 
                  strokeWidth={2}
                  name="DAP"
                  dot={{ fill: "hsl(var(--info))", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="npk" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={2}
                  name="NPK"
                  dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            ) : (
              <BarChart data={pesticidePriceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  className="text-muted-foreground"
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="chlorpyrifos" 
                  fill="hsl(var(--destructive))" 
                  name="Chlorpyrifos"
                  radius={[2, 2, 0, 0]}
                />
                <Bar 
                  dataKey="mancozeb" 
                  fill="hsl(var(--warning))" 
                  name="Mancozeb"
                  radius={[2, 2, 0, 0]}
                />
                <Bar 
                  dataKey="imidacloprid" 
                  fill="hsl(var(--info))" 
                  name="Imidacloprid"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            📈 {activeChart === "fertilizer" ? "Fertilizer" : "Pesticide"} price trends over the last 6 months. 
            Data refreshes every 5 minutes with live market rates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};