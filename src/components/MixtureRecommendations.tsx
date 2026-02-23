import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Beaker, FlaskConical, Shield, Leaf, Sprout, Info } from 'lucide-react';
import { CropCareInfo } from '@/data/cropCareData';
import { getTranslation, Language, translateEnum, translatePhrase } from '@/utils/translations';

interface MixtureRecommendationsProps {
  crop: CropCareInfo;
  language: Language;
}

export const MixtureRecommendations: React.FC<MixtureRecommendationsProps> = ({ crop, language }) => {
  if (!crop.mixtures || crop.mixtures.length === 0) return null;

  const typeColor = (t: string) => ({
    Fertilizer: 'bg-green-100 text-green-800',
    Insecticide: 'bg-red-100 text-red-800',
    Fungicide: 'bg-blue-100 text-blue-800',
    Herbicide: 'bg-emerald-100 text-emerald-800',
    Biostimulant: 'bg-purple-100 text-purple-800',
  } as Record<string, string>)[t] || 'bg-gray-100 text-gray-800';

  const targetColor = (t: string) => ({
    Nutrient: 'border-l-green-500',
    Pest: 'border-l-red-500',
    Disease: 'border-l-blue-500',
    Weed: 'border-l-emerald-500',
  } as Record<string, string>)[t] || 'border-l-gray-500';

  return (
    <div className="space-y-4">
      {crop.mixtures!.map((mix, idx) => (
        <Card key={idx} className={`border-l-4 ${targetColor(mix.target)}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="w-5 h-5" />
              {translateEnum(mix.stage, language)} — {translateEnum(mix.target, language)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-700">
              {translatePhrase(mix.useCase, language)}
            </p>

            <div className="space-y-2">
              {mix.ingredients.map((ing, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-2 rounded-md bg-muted/40">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-primary" />
                    <span className="font-medium">{ing.name}</span>
                    <Badge className={typeColor(ing.type)}>{translateEnum(ing.type, language)}</Badge>
                  </div>
                  <div className="text-sm text-gray-700">
                    {translatePhrase(ing.dose, language)} • {translateEnum(ing.method, language)}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                  <Sprout className="w-4 h-4 text-green-600" />
                  {getTranslation('benefits', language)}
                </p>
                <ul className="text-sm space-y-1">
                  {mix.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{translatePhrase(b, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                  <Shield className="w-4 h-4 text-orange-600" />
                  {getTranslation('precautions', language)}
                </p>
                <ul className="text-sm space-y-1">
                  {mix.precautions.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{translatePhrase(p, language)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          {translatePhrase('Always do a jar test before tank-mixing products. Avoid mixing incompatible chemistries and follow label instructions.', language)}
        </AlertDescription>
      </Alert>
    </div>
  );
};
