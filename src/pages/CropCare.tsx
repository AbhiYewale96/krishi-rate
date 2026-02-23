import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { CropSelector } from '@/components/CropSelector';
import { FertilizerRecommendations } from '@/components/FertilizerRecommendations';
import { PesticideRecommendations } from '@/components/PesticideRecommendations';
// DiseasePrevention component removed
// Mixtures removed; show sections sequentially
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Shield, 
  Heart, 
  Calendar,
  Sun,
  Droplets,
  Info
} from 'lucide-react';
import { Language, getTranslation, translatePhrase } from '@/utils/translations';
import { CropCareInfo, cropCareData } from '@/data/cropCareData';

const CropCare = () => {
  const [selectedCrop, setSelectedCrop] = useState<CropCareInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<Language>(() => 
    (localStorage.getItem("app_language") as Language) || "en"
  );

  // Auto-select first crop on mount
  useEffect(() => {
    if (!selectedCrop && cropCareData.length > 0) {
      setSelectedCrop(cropCareData[0]);
    }
  }, [selectedCrop]);

  // Listen for global language change events
  useEffect(() => {
    const handler = (e: any) => setLanguage(e.detail as Language);
    window.addEventListener("app_language_change", handler as any);
    return () => window.removeEventListener("app_language_change", handler as any);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} language={language} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-12 border-b border-green-800 shadow-[0_10px_30px_-15px_rgba(16,185,129,0.4)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {getTranslation('cropCareTitle', language) || 'Crop Care Guide'}
            </h1>
            <p className="text-xl mb-6">
              {getTranslation('cropCareSubtitle', language) || 'Expert recommendations for fertilizers, pesticides, and disease prevention'}
            </p>
            <div className="flex justify-center">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Crop Selection */}
        <CropSelector 
          selectedCrop={selectedCrop}
          onCropSelect={setSelectedCrop}
          language={language}
        />

        {selectedCrop && (
          <div className="mt-8">
            {/* Crop Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  {selectedCrop.cropName} - {getTranslation('overview', language) || 'Overview'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{getTranslation('season', language) || 'Season'}</h3>
                    <div className="flex flex-wrap justify-center gap-1">
                      {selectedCrop.season.map((season) => (
                        <Badge key={season} variant="outline">
                          {season}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Sun className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{getTranslation('temperature', language) || 'Temperature'}</h3>
                    <p className="text-sm text-gray-600">{selectedCrop.temperature}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Droplets className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{getTranslation('rainfall', language) || 'Rainfall'}</h3>
                    <p className="text-sm text-gray-600">{selectedCrop.rainfall}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fertilizers */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  {getTranslation('fertilizerRecommendations', language) || 'Fertilizer Recommendations'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FertilizerRecommendations crop={selectedCrop} language={language} />
              </CardContent>
            </Card>

            {/* Pesticides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {getTranslation('pesticideRecommendations', language) || 'Pesticide Recommendations'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PesticideRecommendations crop={selectedCrop} language={language} />
              </CardContent>
            </Card>

            {/* Diseases section removed */}

            {/* Growth Stages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {getTranslation('growthStages', language) || 'Growth Stages'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedCrop.growthStages.map((stage, index) => (
                    <div key={index} className="border-l-4 border-l-green-500 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{stage.stage}</h3>
                        <Badge variant="outline">{stage.duration}</Badge>
                      </div>
                      <ul className="text-sm space-y-1">
                        {stage.care.map((careItem, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{careItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* General Tips */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  {getTranslation('generalTips', language) || 'General Tips'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedCrop.generalTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Crop Selected State */}
        {!selectedCrop && (
          <Card className="text-center py-12">
            <CardContent>
              <Leaf className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {getTranslation('selectCropToStart', language) || 'Select a crop to get started'}
              </h3>
              <p className="text-gray-500">
                {getTranslation('selectCropDescription', language) || 'Choose a crop from the dropdown above to view detailed care recommendations, fertilizer suggestions, pesticide information, and disease prevention tips.'}
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default CropCare;
