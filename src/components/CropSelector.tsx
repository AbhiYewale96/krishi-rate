import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crop, Leaf, Sun, Droplets } from 'lucide-react';
import { cropCareData, CropCareInfo } from '@/data/cropCareData';
import { getTranslation, Language, translateEnum, translateItemName } from '@/utils/translations';

interface CropSelectorProps {
  selectedCrop: CropCareInfo | null;
  onCropSelect: (crop: CropCareInfo) => void;
  language: Language;
}

export const CropSelector: React.FC<CropSelectorProps> = ({ 
  selectedCrop, 
  onCropSelect, 
  language 
}) => {
  // use global getTranslation

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crop className="w-5 h-5" />
            {getTranslation('selectCrop', language)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedCrop?.cropName} onValueChange={(value) => {
            const crop = cropCareData.find(c => c.cropName === value);
            if (crop) onCropSelect(crop);
          }}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getTranslation('selectCrop', language)} />
            </SelectTrigger>
            <SelectContent>
              {cropCareData.map((crop) => (
                <SelectItem key={crop.cropName} value={crop.cropName}>
                  {translateItemName(crop.cropName, language, 'commodity')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedCrop && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              {getTranslation('cropInfo', language)}: {translateItemName(selectedCrop.cropName, language, 'commodity')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {getTranslation('scientificName', language)}
                </p>
                <p className="text-sm">{selectedCrop.scientificName}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {getTranslation('season', language)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedCrop.season.map((season) => (
                    <Badge key={season} variant="outline">
                      {translateEnum(season, language)}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {getTranslation('soilType', language)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedCrop.soilType.map((soil) => (
                    <Badge key={soil} variant="secondary">
                      {translateEnum(soil, language)}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {getTranslation('phRange', language)}
                </p>
                <p className="text-sm">{selectedCrop.phRange}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {getTranslation('temperature', language)}
                  </p>
                  <p className="text-sm">{selectedCrop.temperature}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {getTranslation('rainfall', language)}
                  </p>
                  <p className="text-sm">{selectedCrop.rainfall}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
