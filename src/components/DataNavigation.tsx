import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, TrendingUp, Leaf, Shield, Wrench } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";
import { MandiRates } from "@/components/MandiRates";
import { FertilizerRates } from "@/components/FertilizerRates";
import { PesticideRates } from "@/components/PesticideRates";
import { FarmingEquipment } from "@/components/FarmingEquipment";

interface DataNavigationProps {
  selectedState: string;
  selectedDistrict: string;
  selectedMarket: string;
  searchQuery: string;
  language: Language;
}

type DataSection = "mandi" | "fertilizer" | "pesticide" | "equipment";

export const DataNavigation = ({ 
  selectedState, 
  selectedDistrict, 
  selectedMarket, 
  searchQuery, 
  language 
}: DataNavigationProps) => {
  const [activeSection, setActiveSection] = useState<DataSection | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const dataSections = [
    {
      id: "mandi" as DataSection,
      title: getTranslation('mandiRates', language),
      icon: TrendingUp,
      description: getTranslation('mandiRatesDesc', language),
      color: "text-primary"
    },
    {
      id: "fertilizer" as DataSection,
      title: getTranslation('fertilizerRates', language),
      icon: Leaf,
      description: getTranslation('fertilizerRatesDesc', language),
      color: "text-success"
    },
    {
      id: "pesticide" as DataSection,
      title: getTranslation('pesticideRates', language),
      icon: Shield,
      description: getTranslation('pesticideRatesDesc', language),
      color: "text-warning"
    },
    {
      id: "equipment" as DataSection,
      title: getTranslation('farmingEquipment', language),
      icon: Wrench,
      description: getTranslation('farmingEquipmentDesc', language),
      color: "text-info"
    }
  ];

  const renderActiveSection = () => {
    if (!activeSection) return null;

    switch (activeSection) {
      case "mandi":
        return (
          <MandiRates 
            selectedState={selectedState}
            selectedDistrict={selectedDistrict}
            selectedMarket={selectedMarket}
            searchQuery={searchQuery}
            language={language}
          />
        );
      case "fertilizer":
        return (
          <FertilizerRates 
            searchQuery={searchQuery} 
            language={language} 
          />
        );
      case "pesticide":
        return (
          <PesticideRates 
            searchQuery={searchQuery} 
            language={language} 
          />
        );
      case "equipment":
        return (
          <FarmingEquipment 
            language={language} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Dropdown Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {getTranslation('selectDataSection', language)}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              {getTranslation('browseData', language)}
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        
        {isOpen && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-start gap-2 text-left"
                    onClick={() => {
                      setActiveSection(activeSection === section.id ? null : section.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <IconComponent className={`w-5 h-5 ${section.color}`} />
                      <span className="font-medium">{section.title}</span>
                      {activeSection === section.id && (
                        <Badge variant="secondary" className="ml-auto">
                          {getTranslation('active', language)}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground text-left">
                      {section.description}
                    </p>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        )}
      </Card>

      {/* Active Section Content */}
      {activeSection && (
        <div className="space-y-4">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const section = dataSections.find(s => s.id === activeSection);
                  const IconComponent = section?.icon;
                  return (
                    <>
                      {IconComponent && <IconComponent className={`w-5 h-5 ${section.color}`} />}
                      {section?.title}
                    </>
                  );
                })()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderActiveSection()}
            </CardContent>
          </Card>
        </div>
      )}

      {/* No Section Selected State */}
      {!activeSection && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">
              {getTranslation('selectDataToView', language)}
            </h3>
            <p className="text-muted-foreground mb-4">
              {getTranslation('selectDataToViewDesc', language)}
            </p>
            <Button onClick={() => setIsOpen(true)}>
              {getTranslation('browseData', language)}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
