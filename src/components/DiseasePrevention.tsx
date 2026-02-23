import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  Bug,
  Info,
  Eye,
  Zap
} from 'lucide-react';
import { CropCareInfo } from '@/data/cropCareData';
import { getTranslation, Language, translateEnum, translatePhrase } from '@/utils/translations';

interface DiseasePreventionProps {
  crop: CropCareInfo;
  language: Language;
}

export const DiseasePrevention: React.FC<DiseasePreventionProps> = ({ 
  crop, 
  language 
}) => {
  // use global translations

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Fungal': return 'bg-orange-100 text-orange-800';
      case 'Bacterial': return 'bg-red-100 text-red-800';
      case 'Viral': return 'bg-purple-100 text-purple-800';
      case 'Nematode': return 'bg-blue-100 text-blue-800';
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
            <Heart className="w-5 h-5" />
            {getTranslation('diseasePrevention', language)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fungal">Fungal</TabsTrigger>
              <TabsTrigger value="bacterial">Bacterial</TabsTrigger>
              <TabsTrigger value="viral">Viral</TabsTrigger>
              <TabsTrigger value="nematode">Nematode</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {crop.diseases.map((disease, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{disease.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getTypeColor(disease.type)}>
                            {translateEnum(disease.type, language)}
                          </Badge>
                          <Badge className={getSeverityColor(disease.severity)}>
                                {translateEnum(disease.severity, language)} {getTranslation('severity', language)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                          <Eye className="w-4 h-4 text-blue-500" />
                          {getTranslation('symptoms', language)}
                        </p>
                        <ul className="text-sm space-y-1">
                          {disease.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{translatePhrase(symptom, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                          <Bug className="w-4 h-4 text-red-500" />
                          {getTranslation('causes', language)}
                        </p>
                        <ul className="text-sm space-y-1">
                          {disease.causes.map((cause, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>{translatePhrase(cause, language)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                        <Shield className="w-4 h-4 text-green-500" />
                        {getTranslation('prevention', language)}
                      </p>
                      <ul className="text-sm space-y-1">
                        {disease.prevention.map((prevention, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{translatePhrase(prevention, language)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        {getTranslation('treatment', language)}
                      </p>
                      <ul className="text-sm space-y-1">
                        {disease.treatment.map((treatment, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span>{translatePhrase(treatment, language)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {getTranslation('affectedParts', language)}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {disease.affectedParts.map((part, idx) => (
                          <Badge key={idx} variant="outline">
                            {part}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            {['fungal', 'bacterial', 'viral', 'nematode'].map((type) => (
              <TabsContent key={type} value={type} className="space-y-4">
                {crop.diseases
                  .filter(d => d.type.toLowerCase() === type)
                  .map((disease, index) => (
                    <Card key={index} className="border-l-4 border-l-orange-500">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{disease.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={getTypeColor(disease.type)}>
                                {disease.type}
                              </Badge>
                              <Badge className={getSeverityColor(disease.severity)}>
                                {disease.severity} {getTranslation('severity', language)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <Eye className="w-4 h-4 text-blue-500" />
                              {getTranslation('symptoms', language)}
                            </p>
                            <ul className="text-sm space-y-1">
                              {disease.symptoms.map((symptom, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{symptom}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <Bug className="w-4 h-4 text-red-500" />
                              {getTranslation('causes', language)}
                            </p>
                            <ul className="text-sm space-y-1">
                              {disease.causes.map((cause, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-red-500 mt-1">•</span>
                                  <span>{cause}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                            <Shield className="w-4 h-4 text-green-500" />
                            {getTranslation('prevention', language)}
                          </p>
                          <ul className="text-sm space-y-1">
                            {disease.prevention.map((prevention, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>{prevention}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            {getTranslation('treatment', language)}
                          </p>
                          <ul className="text-sm space-y-1">
                            {disease.treatment.map((treatment, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>{treatment}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-600 mb-1">
                            {getTranslation('affectedParts', language)}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {disease.affectedParts.map((part, idx) => (
                              <Badge key={idx} variant="outline">
                                {part}
                              </Badge>
                            ))}
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
          <strong>{getTranslation('generalTips', language)}:</strong> Regular field monitoring is essential for early disease detection. 
          Practice crop rotation and use disease-resistant varieties. Maintain proper field hygiene and avoid over-irrigation. 
          Consult with agricultural experts for severe disease outbreaks.
        </AlertDescription>
      </Alert>
    </div>
  );
};
