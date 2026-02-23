import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Droplets,
  Info
} from 'lucide-react';
import { CropCareInfo } from '@/data/cropCareData';
import { getTranslation, Language, translateEnum, translatePhrase } from '@/utils/translations';

interface FertilizerRecommendationsProps {
  crop: CropCareInfo;
  language: Language;
}

export const FertilizerRecommendations: React.FC<FertilizerRecommendationsProps> = ({ 
  crop, 
  language 
}) => {
  // use global translations instead of local map

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Organic': return 'bg-green-100 text-green-800';
      case 'Inorganic': return 'bg-blue-100 text-blue-800';
      case 'Bio-fertilizer': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            {getTranslation('fertilizerRecommendations', language)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="organic">Organic</TabsTrigger>
              <TabsTrigger value="inorganic">Inorganic</TabsTrigger>
              <TabsTrigger value="bio">Bio-fertilizer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {crop.fertilizers.map((fertilizer, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{fertilizer.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getTypeColor(fertilizer.type)}>
                            {translateEnum(fertilizer.type, language)}
                          </Badge>
                          <Badge variant="outline">
                            {fertilizer.npk}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {getTranslation('dosage', language)}
                        </p>
                        <p className="text-sm">{fertilizer.dosage}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {getTranslation('timing', language)}
                        </p>
                        <p className="text-sm">{translatePhrase(fertilizer.timing, language)}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {getTranslation('applicationMethod', language)}
                      </p>
                      <p className="text-sm">{translatePhrase(fertilizer.applicationMethod, language)}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {getTranslation('benefits', language)}
                        </p>
                        <ul className="text-sm space-y-1">
                          {fertilizer.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              <span>{translatePhrase(benefit, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          {getTranslation('precautions', language)}
                        </p>
                        <ul className="text-sm space-y-1">
                          {fertilizer.precautions.map((precaution, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{translatePhrase(precaution, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {['organic', 'inorganic', 'bio'].map((type) => (
              <TabsContent key={type} value={type} className="space-y-4">
                {crop.fertilizers
                  .filter(f => f.type.toLowerCase() === type || (type === 'bio' && f.type === 'Bio-fertilizer'))
                  .map((fertilizer, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{fertilizer.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={getTypeColor(fertilizer.type)}>
                                {translateEnum(fertilizer.type, language)}
                              </Badge>
                              <Badge variant="outline">
                                {fertilizer.npk}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {getTranslation('dosage', language)}
                            </p>
                            <p className="text-sm">{fertilizer.dosage}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {getTranslation('timing', language)}
                            </p>
                            <p className="text-sm">{fertilizer.timing}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-1">
                            {getTranslation('applicationMethod', language)}
                          </p>
                          <p className="text-sm">{fertilizer.applicationMethod}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {getTranslation('benefits', language)}
                            </p>
                            <ul className="text-sm space-y-1">
                              {fertilizer.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4 text-orange-500" />
                              {getTranslation('precautions', language)}
                            </p>
                            <ul className="text-sm space-y-1">
                              {fertilizer.precautions.map((precaution, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-orange-500 mt-1">•</span>
                                  <span>{precaution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>{getTranslation('generalTips', language)}:</strong> {translatePhrase('Always conduct soil testing before applying fertilizers. Follow recommended dosages and timing for optimal results. Consider using organic fertilizers for sustainable farming', language)}
        </AlertDescription>
      </Alert>
    </div>
  );
};
