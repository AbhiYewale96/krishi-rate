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
  "Uttar Pradesh": ["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Badaun","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Sant Ravidas Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
  "Haryana": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Panchkula", "Bhiwani", "Bahadurgarh", "Jind", "Sirsa", "Thanesar", "Kaithal", "Palwal", "Rewari", "Hansi", "Narnaul", "Fatehabad"],
  "Karnataka": ["Bangalore", "Hubli-Dharwad", "Mysore", "Gulbarga", "Mangalore", "Belgaum", "Davanagere", "Bellary", "Bijapur", "Shimoga", "Tumkur", "Raichur", "Bidar", "Hospet", "Hassan", "Gadag-Betigeri", "Udupi", "Robertson Pet", "Bhadravati", "Chitradurga"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Ranipet", "Nagercoil", "Thanjavur", "Vellore", "Kancheepuram", "Erode", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Sivakasi", "Pudukkottai", "Neyveli", "Nagapattinam"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Sagar", "Barasat", "Bardhaman", "Jalpaiguri", "Krishnanagar", "Nabadwip", "Medinipur", "Purulia", "Raiganj", "Cooch Behar", "Bankura", "Darjeeling", "Alipurduar", "Balurghat"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Sangareddy", "Medak"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Kurnool", "Kadapa", "Anantapur", "Tirupati", "Eluru", "Rajahmundry"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar", "Bhilwara", "Pali"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnea", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Dewas", "Satna", "Rewa"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Upper Siang", "Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Lohit", "Anjaw", "Namsai", "Changlang", "Tirap", "Longding", "Kamle", "Leparada", "Shi Yomi"],
  "Assam": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
  "Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kanker","Kawardha","Khairagarh-Chhuikhadan-Gandai","Kondagaon","Korba","Korea","Mahasamund","Manendragarh-Chirmiri-Bharatpur","Mohla-Manpur-Ambagarh Chowki","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sarangarh-Bilaigarh","Shakti","Sukma","Surajpur","Surguja"],
  "Goa": ["North Goa", "South Goa"],
  "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
  "Jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],
  "Kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
  "Manipur": ["Bishnupur","Chandel","Churachandpur","Kangpokpi","Kamjong","Kakching","Imphal East","Imphal West","Jiribam","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
  "Meghalaya": ["East Garo Hills","East Jaintia Hills","East Khasi Hills","Eastern West Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
  "Mizoram": ["Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saitual","Serchhip","Saiha"],
  "Nagaland": ["Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Phek","Shamator","Tuensang","Tseminyü","Wokha","Zünheboto"],
  "Odisha": ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur (Sonepur)","Sundergarh"],
  "Sikkim": ["Gangtok","Gyalshing","Mangan","Namchi","Pakyong","Soreng"],
  "Tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
  "Uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]
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
  "Shi Yomi": ["Tato Market"],
  "Kamrup Metropolitan": ["Guwahati APMC", "Bharalu Market"],
  "Dibrugarh": ["Dibrugarh Chowkidinghee Market", "Mancotta Market"],
  "Jorhat": ["Jorhat GKB Market", "Jorhat APMC"],
  "Cachar": ["Silchar Fatak Bazar", "Silchar APMC"],
  "Nagaon": ["Nagaon Haibargaon Market", "Nagaon APMC"],
  "Raipur": ["Raipur Devendra Nagar Mandi", "Chhattisgarh APMC Raipur"],
  "Durg": ["Durg APMC", "Bhilai Market"],
  "Bilaspur": ["Bilaspur Gol Bazar", "Bilaspur APMC"],
  "Rajnandgaon": ["Rajnandgaon Mandi", "Dongargarh Market"],
  "Korba": ["Korba Transport Nagar Market", "Korba APMC"],
  "North Goa": ["Panjim Market", "Mapusa Market"],
  "South Goa": ["Margao Market", "Vasco Municipal Market"],
  "Shimla": ["Shimla Sabzi Mandi", "Dhalli Vegetable Market"],
  "Kangra": ["Kangra APMC", "Dharamshala Market"],
  "Mandi": ["Mandi Sabzi Mandi", "Ner Chowk Market"],
  "Solan": ["Solan Sabzi Mandi", "Parwanoo Market"],
  "Kullu": ["Kullu Dhalpur Market", "Bhuntar Market"],
  "Ranchi": ["Pandra APMC", "Ranchi Daily Market"],
  "East Singhbhum": ["Jamshedpur Sakchi Market", "Agrico Market"],
  "Dhanbad": ["Dhanbad Sabzi Mandi", "Bank More Market"],
  "Hazaribagh": ["Hazaribagh Mandi", "Korwa Market"],
  "Bokaro": ["Bokaro Sector 4 Market", "Chas Mandi"],
  "Thiruvananthapuram": ["Chala Market", "Kazhakoottam Market"],
  "Ernakulam": ["Ernakulam Broadway Market", "Kalamassery Market"],
  "Kozhikode": ["SM Street Market", "Mavoor Road Market"],
  "Thrissur": ["Thrissur Muncipal Market", "Chalakudy Market"],
  "Palakkad": ["Palakkad Market", "Shornur Market"],
  "Imphal West": ["Ima Keithel", "Nagamapal Vegetable Market"],
  "Imphal East": ["Porompat Market", "Andro Parking Market"],
  "Thoubal": ["Thoubal Market", "Wangjing Market"],
  "Bishnupur": ["Bishnupur Bazaar", "Nambol Market"],
  "Churachandpur": ["New Bazaar", "Tuibong Market"],
  "East Khasi Hills": ["Iewduh (Bara Bazar)", "Laitumkhrah Market"],
  "West Garo Hills": ["Tura Super Market", "Rongram Market"],
  "Ri-Bhoi": ["Nongpoh Market", "Bhoirymbong Market"],
  "West Jaintia Hills": ["Jowai Iawmusiang Market", "Ladthadlaboh Market"],
  "Aizawl": ["Aizawl New Market", "Bawngkawn Market"],
  "Lunglei": ["Lunglei Bazar", "Ramthar Market"],
  "Champhai": ["Champhai Bazar", "Vengthar Market"],
  "Kolasib": ["Kolasib Bazar", "Vengthlang Market"],
  "Dimapur": ["New Market Dimapur", "APMC Dimapur"],
  "Kohima": ["Kohima Kezieke Market", "BOC Market"],
  "Mokokchung": ["Mokokchung Main Market", "Imkongmeren Market"],
  "Mon": ["Mon Town Market"],
  "Khurda": ["Bhubaneswar Unit-1 Market", "Aiginia Mandi"],
  "Cuttack": ["Chandni Chowk Market", "Choudhury Bazar"],
  "Sambalpur": ["Golebazar Market", "Khetrajpur Mandi"],
  "Balasore": ["Saharagadia Market", "FM College Market"],
  "Ganjam": ["Berhampur Giri Market", "Ankuli Mandi"],
  "East Sikkim": ["Gangtok Lal Bazaar", "Singtam Market"],
  "West Sikkim": ["Gyalshing Market", "Soreng Market"],
  "South Sikkim": ["Namchi Central Park Market", "Ravangla Market"],
  "North Sikkim": ["Mangan Market", "Chungthang Market"],
  "West Tripura": ["Agartala Battala Market", "Lake Chowmuhani Market"],
  "North Tripura": ["Dharmanagar Market", "Kailashahar Market"],
  "Gomati": ["Udaipur Tepania Bazar", "Amarpur Market"],
  "South Tripura": ["Belonia Bazar", "Sabroom Market"],
  "Dehradun": ["Dehradun Niranjanpur Mandi", "Paltan Bazaar"],
  "Haridwar": ["Ram Nagar Mandi", "Jwalapur Market"],
  "Udham Singh Nagar": ["Rudrapur Mandi", "Kashipur Market"],
  "Nainital": ["Haldwani Mandi", "Bhotia Parao Market"],
  "Pauri Garhwal": ["Srinagar Market", "Kotdwar Market"]
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
  const getMarketsForDistrict = (district: string): string[] => {
    const explicit = markets[district as keyof typeof markets];
    if (explicit && explicit.length) return explicit as string[];
    if (!district) return [];
    return [
      `${district} APMC`,
      `${district} Mandi`
    ];
  };

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
                {selectedDistrict && getMarketsForDistrict(selectedDistrict).map((market) => (
                  <SelectItem key={market} value={market}>
                    {market}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};