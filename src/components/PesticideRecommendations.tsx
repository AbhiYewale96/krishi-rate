import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Target,
  Info,
  Bug
} from 'lucide-react';
import { CropCareInfo } from '@/data/cropCareData';
import { getTranslation, Language, translateEnum, translatePhrase } from '@/utils/translations';

interface PesticideRecommendationsProps {
  crop: CropCareInfo;
  language: Language;
}

export const PesticideRecommendations: React.FC<PesticideRecommendationsProps> = ({ 
  crop, 
  language 
}) => {
  // use global translations

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Insecticide': return 'bg-red-100 text-red-800';
      case 'Fungicide': return 'bg-blue-100 text-blue-800';
      case 'Herbicide': return 'bg-green-100 text-green-800';
      case 'Biopesticide': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            {getTranslation('pesticideRecommendations', language)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="insecticide">Insecticide</TabsTrigger>
              <TabsTrigger value="fungicide">Fungicide</TabsTrigger>
              <TabsTrigger value="herbicide">Herbicide</TabsTrigger>
              <TabsTrigger value="biopesticide">Biopesticide</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {crop.pesticides.map((pesticide, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{pesticide.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getTypeColor(pesticide.type)}>
                            {translateEnum(pesticide.type, language)}
                          </Badge>
                          <Badge variant="outline">
                            {pesticide.activeIngredient}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {getTranslation('dosage', language)}
                        </p>
                        <p className="text-sm">{pesticide.dosage}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">
                          {getTranslation('timing', language)}
                        </p>
                        <p className="text-sm">{translatePhrase(pesticide.timing, language)}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {getTranslation('applicationMethod', language)}
                      </p>
                      <p className="text-sm">{translatePhrase(pesticide.applicationMethod, language)}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                        <Target className="w-4 h-4 text-blue-500" />
                        {getTranslation('targetPests', language)}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pesticide.targetPests.map((pest, idx) => (
                          <Badge key={idx} variant="secondary">
                            {pest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {getTranslation('benefits', language)}
                        </p>
                        <ul className="text-sm space-y-1">
                          {pesticide.benefits.map((benefit, idx) => (
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
                          {pesticide.precautions.map((precaution, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{translatePhrase(precaution, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        {getTranslation('waitingPeriod', language)}
                      </p>
                      <p className="text-sm text-yellow-800">{pesticide.waitingPeriod}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {['insecticide', 'fungicide', 'herbicide', 'biopesticide'].map((type) => (
              <TabsContent key={type} value={type} className="space-y-4">
                {crop.pesticides
                  .filter(p => p.type.toLowerCase() === type)
                  .map((pesticide, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{pesticide.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={getTypeColor(pesticide.type)}>
                                {translateEnum(pesticide.type, language)}
                              </Badge>
                              <Badge variant="outline">
                                {pesticide.activeIngredient}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {getTranslation('dosage', language)}
                            </p>
                            <p className="text-sm">{pesticide.dosage}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-1">
                              {getTranslation('timing', language)}
                            </p>
                            <p className="text-sm">{pesticide.timing}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-1">
                            {getTranslation('applicationMethod', language)}
                          </p>
                          <p className="text-sm">{pesticide.applicationMethod}</p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                            <Target className="w-4 h-4 text-blue-500" />
                            {getTranslation('targetPests', language)}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {pesticide.targetPests.map((pest, idx) => (
                              <Badge key={idx} variant="secondary">
                                {pest}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {getTranslation('benefits', language)}
                            </p>
                            <ul className="text-sm space-y-1">
                              {pesticide.benefits.map((benefit, idx) => (
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
                              {pesticide.precautions.map((precaution, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-orange-500 mt-1">•</span>
                                  <span>{precaution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                            <Clock className="w-4 h-4 text-yellow-500" />
                            {getTranslation('waitingPeriod', language)}
                          </p>
                          <p className="text-sm text-yellow-800">{pesticide.waitingPeriod}</p>
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
          <strong>{getTranslation('generalTips', language)}:</strong> Always follow the recommended dosage and safety precautions. 
          Use protective equipment while applying pesticides. Rotate different pesticides to prevent resistance. 
          Consider using biopesticides for sustainable pest management.
        </AlertDescription>
      </Alert>
    </div>
  );
};
