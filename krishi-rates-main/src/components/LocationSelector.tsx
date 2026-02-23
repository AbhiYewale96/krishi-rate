import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { getTranslation, Language } from "@/utils/translations";

interface LocationSelectorProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
  language: Language;
}

// Comprehensive data for all Indian states, districts, and markets
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const districts = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Aurangabad", "Solapur", "Nashik", "Kolhapur", "Sangli", "Satara", "Ahmednagar", "Latur", "Osmanabad", "Beed", "Jalna", "Parbhani", "Hingoli", "Nanded", "Yavatmal", "Akola", "Amravati", "Bhandara", "Buldhana", "Chandrapur", "Gadchiroli", "Gondia", "Nagpur", "Wardha", "Washim"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch", "Dahod", "Kheda", "Mehsana", "Panchmahal", "Patan", "Porbandar", "Sabarkantha", "Surendranagar", "Tapi", "Valsad"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Firozpur", "Hoshiarpur", "Kapurthala", "Mansa", "Moga", "Muktsar", "Pathankot", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", "Muzaffarnagar", "Mathura", "Rampur", "Shahjahanpur", "Farrukhabad"],
  "Haryana": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Panchkula", "Bhiwani", "Bahadurgarh", "Jind", "Sirsa", "Thanesar", "Kaithal", "Palwal", "Rewari", "Hansi", "Narnaul", "Fatehabad"],
  "Karnataka": ["Bangalore", "Hubli-Dharwad", "Mysore", "Gulbarga", "Mangalore", "Belgaum", "Davanagere", "Bellary", "Bijapur", "Shimoga", "Tumkur", "Raichur", "Bidar", "Hospet", "Hassan", "Gadag-Betigeri", "Udupi", "Robertson Pet", "Bhadravati", "Chitradurga"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Ranipet", "Nagercoil", "Thanjavur", "Vellore", "Kancheepuram", "Erode", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Sivakasi", "Pudukkottai", "Neyveli", "Nagapattinam"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Sagar", "Barasat", "Bardhaman", "Jalpaiguri", "Krishnanagar", "Nabadwip", "Medinipur", "Purulia", "Raiganj", "Cooch Behar", "Bankura", "Darjeeling", "Alipurduar", "Balurghat"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Sangareddy", "Medak"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Kurnool", "Kadapa", "Anantapur", "Tirupati", "Eluru", "Rajahmundry"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar", "Bhilwara", "Pali"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnea", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Dewas", "Satna", "Rewa"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Upper Siang", "Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Lohit", "Anjaw", "Namsai", "Changlang", "Tirap", "Longding", "Kamle", "Leparada", "Shi Yomi"]
};

const markets = {
  "Mumbai": ["Vashi APMC", "Turbhe APMC", "Kalamboli Market", "Dadar Market", "Crawford Market"],
  "Pune": ["Pune APMC", "Hadapsar Market", "Gultekdi Market", "Market Yard", "Bavdhan Market"],
  "Nagpur": ["Nagpur APMC", "Kalamna Market", "Sitabuldi Market", "Orange City Market"],
  "Aurangabad": ["Aurangabad APMC", "CIDCO Market", "Krishi Utpadan Market"],
  "Ahmedabad": ["Ahmedabad APMC", "Khodiyar Market", "Jamalpur Market", "Sarkhej Market", "Naroda Market"],
  "Surat": ["Surat APMC", "Varachha Market", "Katargam Market", "Bamroli Market"],
  "Vadodara": ["Vadodara APMC", "Gorwa Market", "Makarpura Market", "Productivity Market"],
  "Rajkot": ["Rajkot APMC", "Aji APMC", "Gondal Market", "Morbi Market"],
  "Ludhiana": ["Ludhiana Grain Market", "Samrala Market", "Khanna Mandi", "Doraha Market"],
  "Amritsar": ["Amritsar Grain Market", "Tarn Taran Market", "Ajnala Market", "Beas Market"],
  "Jalandhar": ["Jalandhar City Market", "Nakodar Market", "Phillaur Market", "Shahkot Market"],
  "Patiala": ["Patiala Grain Market", "Rajpura Market", "Patran Market", "Nabha Market"],
  "Lucknow": ["Lucknow Mandi", "Aminabad Market", "Hazratganj Market", "Chowk Market"],
  "Kanpur": ["Kanpur Grain Market", "Gumti Market", "Kidwai Nagar Market", "Civil Lines Market"],
  "Agra": ["Agra Mandi", "Lohamandi Market", "Shah Market", "Sadar Bazaar"],
  "Varanasi": ["Varanasi Mandi", "Lahurabir Market", "Chowk Market", "Godowlia Market"],
  "Faridabad": ["Faridabad Mandi", "Sector 30 Market", "NIT Market", "Old Faridabad Market"],
  "Gurgaon": ["Gurgaon Mandi", "Sector 14 Market", "Sadar Bazaar", "DLF Market"],
  "Hisar": ["Hisar Grain Market", "Hansi Market", "Fatehabad Market", "Sirsa Market"],
  "Rohtak": ["Rohtak Mandi", "Jhajjar Market", "Sonipat Market", "Panipat Market"],
  "Bangalore": ["Bangalore APMC", "KR Market", "Yeshwantpur Market", "Electronic City Market"],
  "Mysore": ["Mysore APMC", "Devaraja Market", "Sayyaji Rao Road Market", "Chamundi Market"],
  "Hubli-Dharwad": ["Hubli APMC", "Dharwad Market", "Unkal Market", "Vidyanagar Market"],
  "Chennai": ["Chennai Koyambedu Market", "Madhavaram Market", "Tiruvottiyur Market", "Tambaram Market"],
  "Coimbatore": ["Coimbatore Market", "Gandhipuram Market", "RS Puram Market", "Peelamedu Market"],
  "Madurai": ["Madurai APMC", "Mattuthavani Market", "Periyar Market", "Anna Nagar Market"],
  "Kolkata": ["Kolkata Sealdah Market", "Park Street Market", "Shyambazar Market", "Gariahat Market"],
  "Howrah": ["Howrah Market", "Bally Market", "Shibpur Market", "Santragachi Market"],
  "Durgapur": ["Durgapur Market", "Steel Market", "City Centre Market", "Benachity Market"],
  "Hyderabad": ["Bowenpally APMC", "Gaddiannaram Fruit Market", "Monda Market", "Gudimalkapur Market"],
  "Warangal": ["Enumamula Market", "Warangal Grain Market", "Hanamkonda Market"],
  "Nizamabad": ["Nizamabad APMC", "Armoor Market", "Bodhan Market"],
  "Karimnagar": ["Karimnagar Market", "Jagtial Market"],
  "Khammam": ["Khammam Market", "Kothagudem Market"],
  "Mahbubnagar": ["Mahbubnagar Market", "Jadcherla Market"],
  "Nalgonda": ["Nalgonda Market", "Miryalaguda Market"],
  "Adilabad": ["Adilabad Market", "Mancherial Market"],
  "Sangareddy": ["Sangareddy Market", "Patancheru Market"],
  "Medak": ["Medak Market", "Siddipet Market"],
  "Vijayawada": ["Gollapudi Market", "Krishna Lanka Market", "Vijayawada APMC"],
  "Visakhapatnam": ["Gajuwaka Market", "Poorna Market", "MVP Market"],
  "Guntur": ["Guntur APMC", "Nallapadu Market", "NTR Market"],
  "Nellore": ["Nellore Market", "Kavuru Market"],
  "Kurnool": ["Kurnool Market", "Adoni Market"],
  "Kadapa": ["Kadapa Market", "Proddatur Market"],
  "Anantapur": ["Anantapur Market", "Gooty Market"],
  "Tirupati": ["Tirupati Market", "Renigunta Market"],
  "Eluru": ["Eluru Market", "Powerpet Market"],
  "Rajahmundry": ["Rajahmundry Market", "Dowlaiswaram Market"],
  "Jaipur": ["Muhana Mandi", "Chandpole Market", "Vegetable & Grain Market"],
  "Jodhpur": ["Krishi Upaj Mandi", "Bhagat Ki Kothi Market"],
  "Udaipur": ["Hiran Magri Market", "Chetak Circle Market"],
  "Kota": ["Kota Grain Market", "Vigyan Nagar Market"],
  "Ajmer": ["Ajmer Krishi Mandi", "Kishangarh Market"],
  "Bikaner": ["Bikaner Market", "Nokha Mandi"],
  "Alwar": ["Alwar Mandi", "Bhiwadi Market"],
  "Sikar": ["Sikar Mandi", "Ringus Market"],
  "Bhilwara": ["Bhilwara Mandi", "Shastri Nagar Market"],
  "Pali": ["Pali Krishi Mandi", "Sojat Market"],
  "Patna": ["Bihar APMC Patna", "Kankarbagh Market", "Patna City Market"],
  "Gaya": ["Gaya Mandi", "Tekari Market"],
  "Bhagalpur": ["Bhagalpur Market", "Barari Market"],
  "Muzaffarpur": ["Muzaffarpur Market", "Motipur Market"],
  "Purnea": ["Purnea Market", "Banmankhi Market"],
  "Darbhanga": ["Darbhanga Market", "Laheriasarai Market"],
  "Arrah": ["Arrah Market", "Jagdishpur Market"],
  "Begusarai": ["Begusarai Market", "Barauni Market"],
  "Katihar": ["Katihar Market", "Mansahi Market"],
  "Munger": ["Munger Market", "Jamalpur Market"],
  "Bhopal": ["Karond Mandi", "Berasia Road Market"],
  "Indore": ["Chimanbagh APMC", "Chhawni Market"],
  "Gwalior": ["Maharaj Bada Market", "Mandi Bamora"],
  "Jabalpur": ["Jabalpur APMC", "Civic Centre Market"],
  "Ujjain": ["Ujjain APMC", "Freeganj Market"],
  "Sagar": ["Sagar Mandi", "Makonagar Market"],
  "Ratlam": ["Ratlam Mandi", "Sailana Market"],
  "Dewas": ["Dewas Mandi", "Shivaji Nagar Market"],
  "Satna": ["Satna Mandi", "Amoudha Market"],
  "Rewa": ["Rewa Mandi", "Chowk Bazar"],
  "Itanagar": ["Naharlagun Market", "Ganga Market", "Daily Bazaar"],
  "Tawang": ["Old Market", "New Market"],
  "West Kameng": ["Bomdila Market", "Rupa Market"],
  "East Kameng": ["Seppa Market"],
  "Papum Pare": ["Doimukh Market", "Bandardewa Market"],
  "Kurung Kumey": ["Koloriang Market"],
  "Kra Daadi": ["Palin Market"],
  "Lower Subansiri": ["Ziro Market", "Hapoli Market"],
  "Upper Subansiri": ["Daporijo Market"],
  "West Siang": ["Aalo Market"],
  "East Siang": ["Pasighat Market"],
  "Upper Siang": ["Yingkiong Market"],
  "Siang": ["Pangin Market"],
  "Lower Siang": ["Likabali Market"],
  "Lower Dibang Valley": ["Roing Market"],
  "Dibang Valley": ["Anini Market"],
  "Lohit": ["Tezu Market"],
  "Anjaw": ["Hawai Market"],
  "Namsai": ["Namsai Market"],
  "Changlang": ["Changlang Market"],
  "Tirap": ["Khonsa Market"],
  "Longding": ["Longding Market"],
  "Kamle": ["Raga Market"],
  "Leparada": ["Basar Market"],
  "Shi Yomi": ["Tato Market"]
};

export const LocationSelector = ({
  selectedState,
  setSelectedState,
  selectedDistrict,
  setSelectedDistrict,
  selectedMarket,
  setSelectedMarket,
  language
}: LocationSelectorProps) => {
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedMarket("");
  };

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setSelectedMarket("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          {getTranslation('selectLocation', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{getTranslation('state', language)}</label>
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder={getTranslation('selectState', language)} />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{getTranslation('district', language)}</label>
            <Select 
              value={selectedDistrict} 
              onValueChange={handleDistrictChange}
              disabled={!selectedState}
            >
              <SelectTrigger>
                <SelectValue placeholder={getTranslation('selectDistrict', language)} />
              </SelectTrigger>
              <SelectContent>
                {selectedState && districts[selectedState as keyof typeof districts]?.length ? (
                  districts[selectedState as keyof typeof districts]!.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {getTranslation('active', language)}
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{getTranslation('market', language)}</label>
            <Select 
              value={selectedMarket} 
              onValueChange={setSelectedMarket}
              disabled={!selectedDistrict}
            >
              <SelectTrigger>
                <SelectValue placeholder={getTranslation('selectMarket', language)} />
              </SelectTrigger>
              <SelectContent>
                {selectedDistrict && markets[selectedDistrict as keyof typeof markets]?.length ? (
                  markets[selectedDistrict as keyof typeof markets]!.map((market) => (
                    <SelectItem key={market} value={market}>
                      {market}
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {getTranslation('active', language)}
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};