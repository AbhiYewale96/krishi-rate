import CropCare from "@/pages/CropCare";
import { ALL } from "dns";

export const translations = {
  en: {
    // Header
    appTitle: "Live Market Rates for Farmers",
    weather: "Weather",
    CropCare: "Crop Care",
    searchPlaceholder: "Search commodities, fertilizers, or pesticides...",
    
    // Location Selector
    selectLocation: "Select Location",
    state: "State",
    district: "District", 
    market: "Market",
    selectState: "Select State",
    selectDistrict: "Select District",
    selectMarket: "Select Market",
    
    // Status
    liveDataStatus: "Live Data Status",
    active: "Active",
    lastUpdated: "Last updated",
    nextRefresh: "Next refresh in",
    minutes: "minutes",
    
    // Mandi Rates
    mandiRates: "Mandi Rates",
    live: "Live",
    min: "Min",
    max: "Max",
    noChange: "No change",
    
    // Fertilizer Rates
    fertilizerRates: "Fertilizer Rates",
    all: "All",
    organic: "Organic",
    inorganic: "Inorganic",
    unit: "Unit",
    company: "Company",
    subsidy: "Subsidy",
    use: "Use",
    benefits: "Benefits",
    farmingEquipment: "Farming Equipment",
    popularBrands: "Popular brands",
    
    // Pesticide Rates
    pesticideRates: "Pesticide Rates",
    activeIngredient: "Active Ingredient",
    
    // Government Schemes
    governmentSchemes: "Government Schemes",
    eligibility: "Eligibility",
    benefit: "Benefits",
    viewDetails: "View Details",
    
    // Help Desk
    helpDesk: "Help Desk",
    submitQuery: "Submit Query",
    name: "Name",
    email: "Email",
    query: "Query",
    enterName: "Enter your name",
    enterEmail: "Enter your email",
    describeQuery: "Describe your query or issue",
    submit: "Submit",
    
    // Price Charts
    priceCharts: "Price Charts",
    fertilizerPrices: "Fertilizer Prices (₹/50kg)",
    pesticidePrices: "Pesticide Prices (₹/L or ₹/kg)",
    
    // Pesticide Types
    insecticide: "Insecticide",
    fungicide: "Fungicide", 
    herbicide: "Herbicide",
    
    // Data Navigation
    selectDataSection: "Select Data Section",
    browseData: "Browse Data",
    selectDataToView: "Select data to view",
    selectDataToViewDesc: "Choose from Mandi Rates, Fertilizers, Pesticides, or Equipment to see detailed information",
    mandiRatesDesc: "Live market prices for agricultural commodities",
    fertilizerRatesDesc: "Current fertilizer prices and subsidy information",
    pesticideRatesDesc: "Pesticide rates and active ingredients",
    farmingEquipmentDesc: "Agricultural equipment and machinery prices",
    
    // Crop Care
    cropCareTitle: "Crop Care Guide",
    cropCareSubtitle: "Expert recommendations for fertilizers, pesticides, and disease prevention",
    overview: "Overview",
    season: "Season",
    temperature: "Temperature",
    rainfall: "Rainfall",
    fertilizers: "Fertilizers",
    pesticides: "Pesticides",
    diseases: "Diseases",
    growthStages: "Growth Stages",
    generalTips: "General Tips",
    selectCropToStart: "Select a crop to get started",
    selectCropDescription: "Choose a crop from the dropdown above to view detailed care recommendations, fertilizer suggestions, pesticide information, and disease prevention tips.",

    // Crop Care Labels
    selectCrop: "Select a Crop",
    cropInfo: "Crop Information",
    soilType: "Soil Type",
    phRange: "pH Range",
    scientificName: "Scientific Name",
    fertilizerRecommendations: "Fertilizer Recommendations",
    pesticideRecommendations: "Pesticide Recommendations",
    diseasePrevention: "Disease Prevention & Management",
    dosage: "Dosage",
    applicationMethod: "Application Method",
    timing: "Timing",
    npkRatio: "NPK Ratio",
    type: "Type",
    activeingredient: "Active Ingredient",
    targetPests: "Target Pests",
    waitingPeriod: "Waiting Period",
    biopesticide: "Biopesticide",
    bioFertilizer: "Bio-fertilizer",
    fungal: "Fungal",
    bacterial: "Bacterial",
    viral: "Viral",
    nematode: "Nematode",
    severity: "Severity"
  },
  
  mr: {
    // Header
    appTitle: "शेतकऱ्यांसाठी थेट बाजार दर",
    weather: "हवामान",
    CropCare: "पिकांची काळजी",
    searchPlaceholder: "वस्तू, खते किंवा कीटकनाशके शोधा...",
    
    // Location Selector
    selectLocation: "स्थान निवडा",
    state: "राज्य",
    district: "जिल्हा",
    market: "बाजार",
    selectState: "राज्य निवडा",
    selectDistrict: "जिल्हा निवडा", 
    selectMarket: "बाजार निवडा",
    
    // Status
    liveDataStatus: "थेट डेटा स्थिती",
    active: "सक्रिय",
    lastUpdated: "शेवटचे अपडेट",
    nextRefresh: "पुढील रिफ्रेश",
    minutes: "मिनिटे",
    
    // Mandi Rates
    mandiRates: "मंडी दर",
    live: "थेट",
    min: "किमान",
    max: "कमाल",
    noChange: "बदल नाही",
    
    // Fertilizer Rates
    fertilizerRates: "खत दर",
    all: "सर्व",
    organic: "सेंद्रिय",
    inorganic: "अजैविक",
    unit: "एकक",
    company: "कंपनी",
    subsidy: "अनुदान",
    use: "वापर",
    benefits: "फायदे",
    farmingEquipment: "शेती उपकरणे",
    popularBrands: "लोकप्रिय ब्रँड",
    
    // Pesticide Rates
    pesticideRates: "कीटकनाशक दर",
    activeIngredient: "सक्रिय घटक",
    
    // Government Schemes
    governmentSchemes: "सरकारी योजना",
    eligibility: "पात्रता",
    benefit: "फायदे",
    viewDetails: "तपशील पहा",
    
    // Help Desk
    helpDesk: "मदत केंद्र",
    submitQuery: "प्रश्न सबमिट करा",
    name: "नाव",
    email: "ईमेल",
    query: "प्रश्न",
    enterName: "तुमचे नाव टाका",
    enterEmail: "तुमचा ईमेल टाका",
    describeQuery: "तुमचा प्रश्न किंवा समस्या वर्णन करा",
    submit: "सबमिट करा",
    
    // Price Charts
    priceCharts: "किंमत चार्ट",
    fertilizerPrices: "खत किंमती (₹/५०कि.ग्रॅ.)",
    pesticidePrices: "कीटकनाशक किंमती (₹/लि. किंवा ₹/कि.ग्रॅ.)",
    
    // Pesticide Types
    insecticide: "कीटकनाशक",
    fungicide: "बुरशीनाशक",
    herbicide: "तणनाशक",
    
    // Data Navigation
    selectDataSection: "डेटा विभाग निवडा",
    browseData: "डेटा ब्राउझ करा",
    selectDataToView: "पाहण्यासाठी डेटा निवडा",
    selectDataToViewDesc: "तपशीलवार माहिती पाहण्यासाठी मंडी दर, खते, कीटकनाशके किंवा उपकरणे निवडा",
    mandiRatesDesc: "कृषी वस्तूंचे थेट बाजार भाव",
    fertilizerRatesDesc: "सध्याचे खत दर आणि अनुदान माहिती",
    pesticideRatesDesc: "कीटकनाशक दर आणि सक्रिय घटक",
    farmingEquipmentDesc: "कृषी उपकरणे आणि यंत्रसामग्रीचे दर",
    
    // Crop Care
    cropCareTitle: "पिकांच्या काळजीचे मार्गदर्शक",
    cropCareSubtitle: "खते, कीटकनाशके आणि रोग निवारणासाठी तज्ञांच्या शिफारसी",
    overview: "ओव्हरव्ह्यू",
    season: "हंगाम",
    temperature: "तापमान",
    rainfall: "पाऊस",
    fertilizers: "खते",
    pesticides: "कीटकनाशके",
    diseases: "रोग",
    growthStages: "वाढीचे टप्पे",
    generalTips: "सामान्य सुझाव",
    selectCropToStart: "सुरुवात करण्यासाठी पीक निवडा",
    selectCropDescription: "तपशीलवार काळजीच्या शिफारसी, खताच्या सुझावांसाठी, कीटकनाशक माहिती आणि रोग निवारण टिप्स पाहण्यासाठी वरील ड्रॉपडाउनमधून पीक निवडा.",

    // Crop Care Labels
    selectCrop: "पीक निवडा",
    cropInfo: "पीक माहिती",
    soilType: "मातीचा प्रकार",
    phRange: "pH श्रेणी",
    scientificName: "शास्त्रीय नाव",
    fertilizerRecommendations: "खताची शिफारस",
    pesticideRecommendations: "कीटकनाशकांची शिफारस",
    diseasePrevention: "रोग प्रतिबंध आणि व्यवस्थापन",
    dosage: "मात्रा",
    applicationMethod: "प्रयोग पद्धत",
    timing: "वेळ",
    npkRatio: "NPK प्रमाण",
    type: "प्रकार",
    activeingredient: "सक्रिय घटक",
    targetPests: "लक्षित कीड",
    waitingPeriod: "प्रतीक्षा कालावधी",
    biopesticide: "जैव कीटकनाशक",
    bioFertilizer: "जैव-खत",
    fungal: "बुरशीजन्य",
    bacterial: "जीवाणूजन्य",
    viral: "व्हायरल",
    nematode: "निमॅटोड",
    severity: "गंभीरता"
  },

  hi: {
    // Header
    appTitle: "किसानों के लिए लाइव मार्केट रेट्स",
    searchPlaceholder: "कमोडिटी, उर्वरक, या कीटनाशक खोजें...",
    
    // Location Selector
    selectLocation: "स्थान चुनें",
    state: "राज्य",
    district: "जिला",
    market: "मंडी",
    selectState: "राज्य चुनें",
    selectDistrict: "जिला चुनें", 
    selectMarket: "मंडी चुनें",
    
    // Status
    liveDataStatus: "लाइव डेटा स्थिति",
    active: "सक्रिय",
    lastUpdated: "अंतिम अपडेट",
    nextRefresh: "अगला रिफ्रेश",
    minutes: "मिनट",
    
    // Mandi Rates
    mandiRates: "मंडी दरें",
    live: "लाइव",
    min: "न्यूनतम",
    max: "अधिकतम",
    noChange: "कोई परिवर्तन नहीं",
    
    // Fertilizer Rates
    fertilizerRates: "उर्वरक दरें",
    all: "सभी",
    organic: "जैविक",
    inorganic: "अजैविक",
    unit: "इकाई",
    company: "कंपनी",
    subsidy: "सब्सिडी",
    use: "उपयोग",
    benefits: "लाभ",
    farmingEquipment: "कृषि उपकरण",
    popularBrands: "लोकप्रिय ब्रांड",
    "Always follow the recommended dosage and safety precautions Use protective equipment while applying pesticides. Rotate different pesticides to prevent resistance. Consider using biopesticides for sustainable pest management":
  "नेहमी शिफारस केलेली मात्रा आणि सुरक्षा उपायांचे पालन करा. कीटकनाशके वापरताना संरक्षक उपकरणे वापरा. प्रतिकार टाळण्यासाठी वेगवेगळ्या कीटकनाशकांचा वापर करा. शाश्वत कीड व्यवस्थापनासाठी जैव कीटकनाशकांचा विचार करा",
    
    // Pesticide Rates
    pesticideRates: "कीटनाशक दरें",
    activeIngredient: "सक्रिय घटक",
    
    // Government Schemes
    governmentSchemes: "सरकारी योजनाएं",
    eligibility: "पात्रता",
    benefit: "लाभ",
    viewDetails: "विवरण देखें",
    
    // Help Desk
    helpDesk: "हेल्प डेस्क",
    submitQuery: "प्रश्न जमा करें",
    name: "नाम",
    email: "ईमेल",
    query: "प्रश्न",
    enterName: "अपना नाम दर्ज करें",
    enterEmail: "अपना ईमेल दर्ज करें",
    describeQuery: "अपने प्रश्न या समस्या का वर्णन करें",
    submit: "जमा करें",
    
    // Price Charts
    priceCharts: "मूल्य चार्ट",
    fertilizerPrices: "उर्वरक मूल्य (₹/50कि.ग्रा.)",
    pesticidePrices: "कीटनाशक मूल्य (₹/लि. या ₹/कि.ग्रा.)",
    
    // Pesticide Types
    insecticide: "कीटनाशक",
    fungicide: "फफूंदनाशक",
    herbicide: "खरपतवारनाशी",
    
    // Data Navigation
    selectDataSection: "डेटा सेक्शन चुनें",
    browseData: "डेटा ब्राउज़ करें",
    selectDataToView: "देखने के लिए डेटा चुनें",
    selectDataToViewDesc: "विस्तृत जानकारी देखने के लिए मंडी दर, उर्वरक, कीटनाशक या उपकरण चुनें",
    mandiRatesDesc: "कृषि वस्तुओं के लाइव बाजार भाव",
    fertilizerRatesDesc: "वर्तमान उर्वरक दर और सब्सिडी जानकारी",
    pesticideRatesDesc: "कीटनाशक दर और सक्रिय घटक",
    farmingEquipmentDesc: "कृषि उपकरण और मशीनरी की कीमतें",
    
    // Crop Care
    cropCareTitle: "फसल देखभाल गाइड",
    cropCareSubtitle: "उर्वरक, कीटनाशक और रोग निवारण के लिए विशेषज्ञ सुझाव",
    overview: "अवलोकन",
    season: "मौसम",
    temperature: "तापमान",
    rainfall: "वर्षा",
    fertilizers: "उर्वरक",
    pesticides: "कीटनाशक",
    diseases: "रोग",
    growthStages: "वृद्धि चरण",
    generalTips: "सामान्य सुझाव",
    selectCropToStart: "शुरू करने के लिए फसल चुनें",
    selectCropDescription: "विस्तृत देखभाल सुझाव, उर्वरक सुझाव, कीटनाशक जानकारी और रोग निवारण टिप्स देखने के लिए ऊपर दिए गए ड्रॉपडाउन से फसल चुनें।",

    // Crop Care Labels
    selectCrop: "फसल चुनें",
    cropInfo: "फसल जानकारी",
    soilType: "मिट्टी का प्रकार",
    phRange: "pH सीमा",
    scientificName: "वैज्ञानिक नाम",
    fertilizerRecommendations: "उर्वरक सुझाव",
    pesticideRecommendations: "कीटनाशक सुझाव",
    diseasePrevention: "रोग रोकथाम एवं प्रबंधन",
    dosage: "मात्रा",
    applicationMethod: "प्रयोग विधि",
    timing: "समय",
    npkRatio: "NPK अनुपात",
    type: "प्रकार",
    activeingredient: "सक्रिय घटक",
    targetPests: "लक्षित कीट",
    waitingPeriod: "प्रतीक्षा अवधि",
    biopesticide: "जैव कीटनाशक",
    bioFertilizer: "जैव-उर्वरक",
    fungal: "फफूंदजनित",
    bacterial: "जीवाणुजनित",
    viral: "वायरल",
    nematode: "निमेटोड",
    severity: "गंभीरता"
  },

  // Mixture specific labels/phrases
  // We will translate common mixture helpers via translatePhrase

  gu: {
    // Header
    appTitle: "ખેડૂતો માટે લાઇવ માર્કેટ રેટ્સ",
    searchPlaceholder: "કમોડિટી, ખાતર, અથવા કીડનાશક શોધો...",
    
    // Location Selector
    selectLocation: "સ્થાન પસંદ કરો",
    state: "રાજ્ય",
    district: "જિલ્લો",
    market: "માર્કેટ",
    selectState: "રાજ્ય પસંદ કરો",
    selectDistrict: "જિલ્લો પસંદ કરો",
    selectMarket: "માર્કેટ પસંદ કરો",
    
    // Status
    liveDataStatus: "લાઇવ ડેટા સ્થિતિ",
    active: "સક્રિય",
    lastUpdated: "છેલ્લું અપડેટ",
    nextRefresh: "આગલું રિફ્રેશ",
    minutes: "મિનિટ",
    
    // Mandi Rates
    mandiRates: "મંડી રેટ્સ",
    live: "લાઇવ",
    min: "ન્યૂનતમ",
    max: "મહત્તમ",
    noChange: "કોઈ ફેરફાર નથી",
    
    // Fertilizer Rates
    fertilizerRates: "ખાતર રેટ્સ",
    all: "બધું",
    organic: "કાર્બનિક",
    inorganic: "અકાર્બનિક",
    unit: "એકમ",
    company: "કંપની",
    subsidy: "સબસિડી",
    use: "ઉપયોગ",
    benefits: "ફાયદા",
    farmingEquipment: "કૃષિ સાધનો",
    popularBrands: "લોકપ્રિય બ્રાન્ડ્સ",
    
    // Pesticide Rates
    pesticideRates: "કીડનાશક રેટ્સ",
    activeIngredient: "સક્રિય ઘટક",
    
    // Government Schemes
    governmentSchemes: "સરકારી યોજનાઓ",
    eligibility: "લાયકાત",
    benefit: "ફાયદા",
    viewDetails: "વિગતો જુઓ",
    
    // Help Desk
    helpDesk: "હેલ્પ ડેસ્ક",
    submitQuery: "પ્રશ્ન સબમિટ કરો",
    name: "નામ",
    email: "ઈમેઇલ",
    query: "પ્રશ્ન",
    enterName: "તમારું નામ દાખલ કરો",
    enterEmail: "તમારો ઈમેઇલ દાખલ કરો",
    describeQuery: "તમારા પ્રશ્ન અથવા સમસ્યાનું વર્ણન કરો",
    submit: "સબમિટ કરો",
    
    // Price Charts
    priceCharts: "કિંમત ચાર્ટ્સ",
    fertilizerPrices: "ખાતર કિંમતો (₹/50કિ.ગ્રા.)",
    pesticidePrices: "કીડનાશક કિંમતો (₹/લી. અથવા ₹/કિ.ગ્રા.)",
    
    // Pesticide Types
    insecticide: "કીડનાશક",
    fungicide: "ફૂગનાશક",
    herbicide: "નીંદણનાશક",
    
    // Data Navigation
    selectDataSection: "ડેટા સેક્શન પસંદ કરો",
    browseData: "ડેટા બ્રાઉઝ કરો",
    selectDataToView: "જોવા માટે ડેટા પસંદ કરો",
    selectDataToViewDesc: "વિગતવાર માહિતી જોવા માટે મંડી દર, ખાતર, કીડનાશક અથવા સાધનો પસંદ કરો",
    mandiRatesDesc: "કૃષિ વસ્તુઓના લાઇવ બજાર ભાવ",
    fertilizerRatesDesc: "વર્તમાન ખાતર દર અને સબસિડી માહિતી",
    pesticideRatesDesc: "કીડનાશક દર અને સક્રિય ઘટક",
    farmingEquipmentDesc: "કૃષિ સાધનો અને મશીનરીના ભાવ"
  },

  te: {
    // Header
    appTitle: "రైతుల కోసం లైవ్ మార్కెట్ రేట్లు",
    searchPlaceholder: "వస్తువులు, ఎరువులు, లేదా పురుగుమందులను వెతకండి...",
    
    // Location Selector
    selectLocation: "స్థానం ఎంచుకోండి",
    state: "రాష్ట్రం",
    district: "జిల్లా",
    market: "మార్కెట్",
    selectState: "రాష్ట్రం ఎంచుకోండి",
    selectDistrict: "జిల్లా ఎంచుకోండి",
    selectMarket: "మార్కెట్ ఎంచుకోండి",
    
    // Status
    liveDataStatus: "లైవ్ డేటా స్థితి",
    active: "చురుకుగా",
    lastUpdated: "చివరిసారి అప్‌డేట్",
    nextRefresh: "తదుపరి రిఫ్రెష్",
    minutes: "నిమిషాలు",
    
    // Mandi Rates
    mandiRates: "మండి రేట్లు",
    live: "లైవ్",
    min: "కనిష్టం",
    max: "గరిష్టం",
    noChange: "మార్పు లేదు",
    
    // Fertilizer Rates
    fertilizerRates: "ఎరువుల రేట్లు",
    all: "అన్నీ",
    organic: "సేంద్రీయ",
    inorganic: "అసేంద్రీయ",
    unit: "యూనిట్",
    company: "కంపెనీ",
    subsidy: "సబ్సిడీ",
    use: "వినియోగం",
    benefits: "ప్రయోజనాలు",
    farmingEquipment: "వ్యవసాయ పరికరాలు",
    popularBrands: "ప్రసిద్ధ బ్రాండ్లు",
    
    // Pesticide Rates
    pesticideRates: "పురుగుమందుల రేట్లు",
    activeIngredient: "చురుకైన పదార్థం",
    
    // Government Schemes
    governmentSchemes: "ప్రభుత్వ పథకాలు",
    eligibility: "అర్హత",
    benefit: "ప్రయోజనాలు",
    viewDetails: "వివరాలు చూడండి",
    
    // Help Desk
    helpDesk: "సహాయ కేంద్రం",
    submitQuery: "ప్రశ్న సమర్పించండి",
    name: "పేరు",
    email: "ఇమెయిల్",
    query: "ప్రశ్న",
    enterName: "మీ పేరు నమోదు చేయండి",
    enterEmail: "మీ ఇమెయిల్ నమోదు చేయండి",
    describeQuery: "మీ ప్రశ్న లేదా సమస్య వివరించండి",
    submit: "సమర్పించండి",
    
    // Price Charts
    priceCharts: "ధర చార్ట్లు",
    fertilizerPrices: "ఎరువుల ధరలు (₹/50కి.గ్రా.)",
    pesticidePrices: "పురుగుమందుల ధరలు (₹/లి. లేదా ₹/కి.గ్రా.)",
    
    // Pesticide Types
    insecticide: "కీటనాశిని",
    fungicide: "శిలీంధ్రనాశిని",
    herbicide: "కలుపు మందు",
    
    // Data Navigation
    selectDataSection: "డేటా సెక్షన్ ఎంచుకోండి",
    browseData: "డేటాను బ్రౌజ్ చేయండి",
    selectDataToView: "చూడటానికి డేటాను ఎంచుకోండి",
    selectDataToViewDesc: "వివరణాత్మక సమాచారం చూడటానికి మండి రేట్లు, ఎరువులు, పురుగుమందులు లేదా పరికరాలను ఎంచుకోండి",
    mandiRatesDesc: "వ్యవసాయ వస్తువుల లైవ్ మార్కెట్ ధరలు",
    fertilizerRatesDesc: "ప్రస్తుత ఎరువు రేట్లు మరియు సబ్సిడీ సమాచారం",
    pesticideRatesDesc: "పురుగుమందుల రేట్లు మరియు క్రియాశీల ఘటకాలు",
    farmingEquipmentDesc: "వ్యవసాయ పరికరాలు మరియు యంత్రాల ధరలు"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const getTranslation = (key: TranslationKey, language: Language = 'en'): string => {
  return translations[language][key] || translations.en[key];
};

// Name localization maps for commodities, fertilizers, and pesticides
const enumTranslations: Record<Language, Record<string, string>> = {
  en: {
    // Seasons
    Kharif: 'Kharif',
    Rabi: 'Rabi',
    Summer: 'Summer',
    // Soil types
    Clay: 'Clay',
    Loamy: 'Loamy',
    Alluvial: 'Alluvial',
    'Sandy loam': 'Sandy loam',
    'Clay loam': 'Clay loam',
    'Black cotton': 'Black cotton',
    // Types
    Organic: 'Organic',
    Inorganic: 'Inorganic',
    'Bio-fertilizer': 'Bio-fertilizer',
    Insecticide: 'Insecticide',
    Fungicide: 'Fungicide',
    Herbicide: 'Herbicide',
    Biopesticide: 'Biopesticide',
    // Disease types & severity
    Fungal: 'Fungal',
    Bacterial: 'Bacterial',
    Viral: 'Viral',
    Nematode: 'Nematode',
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
  },
  hi: {
    Kharif: 'खरीफ',
    Rabi: 'रबी',
    Summer: 'गर्मी',
    Clay: 'चिकनी',
    Loamy: 'दोमट',
    Alluvial: 'जलोढ़',
    'Sandy loam': 'बलुई दोमट',
    'Clay loam': 'चिकनी दोमट',
    'Black cotton': 'काली कपास मिट्टी',
    Organic: 'जैविक',
    Inorganic: 'अजैविक',
    'Bio-fertilizer': 'जैव-उर्वरक',
    Insecticide: 'कीटनाशक',
    Fungicide: 'फफूंदनाशक',
    Herbicide: 'खरपतवारनाशी',
    Biopesticide: 'जैव कीटनाशक',
    Fungal: 'फफूंदजनित',
    Bacterial: 'जीवाणुजनित',
    Viral: 'वायरल',
    Nematode: 'निमेटोड',
    Low: 'कम',
    Medium: 'मध्यम',
    High: 'उच्च',
  },
  mr: {
    Kharif: 'खरीप',
    Rabi: 'रब्बी',
    Summer: 'उन्हाळा',
    Clay: 'चिकण',
    Loamy: 'दुमट',
    Alluvial: 'अलuvial',
    'Sandy loam': 'वालुकामय दुमट',
    'Clay loam': 'चिकण दुमट',
    'Black cotton': 'काळी कापूस माती',
    Organic: 'सेंद्रिय',
    Inorganic: 'अजैविक',
    'Bio-fertilizer': 'जैव-खत',
    Insecticide: 'कीटकनाशक',
    Fungicide: 'बुरशीनाशक',
    Herbicide: 'तणनाशक',
    Biopesticide: 'जैव कीटकनाशक',
    Fungal: 'बुरशीजन्य',
    Bacterial: 'जीवाणूजन्य',
    Viral: 'व्हायरल',
    Nematode: 'नेमाटोड',
    Low: 'कमी',
    Medium: 'मध्यम',
    High: 'उच्च',
  },
  gu: {},
  te: {},
};

export const translateEnum = (value: string, language: Language): string => {
  return enumTranslations[language]?.[value] || value;
};
const commodityNameMap: Record<string, Partial<Record<Language, string>>> = {
  "Rice": { hi: "चावल", mr: "तांदूळ", gu: "ચોખા", te: "బియ్యం" },
  "Tomato": { hi: "टमाटर", mr: "टमाटे", gu: "ટમેટું", te: "టమాటా" },
  "Potato": { hi: "आलू", mr: "बटाटा", gu: "બટાકા", te: "బంగాళదుంప" },
  "Maize": { hi: "मक्का", mr: "मका", gu: "મકાઈ", te: "మొక్కజొన్న" },
  "Cotton": { hi: "कपास", mr: "कापूस", gu: "કપાસ", te: "పత్తి" },
  "Wheat": { hi: "गेहूं", mr: "गहू", gu: "ઘઉં", te: "గోధుమ" },
  "Rice (Common)": { hi: "चावल (सामान्य)", mr: "तांदूळ (साधा)", gu: "ચોખા (સામાન્ય)", te: "బియ్యం (సాధారణ)" },
  "Rice (Basmati)": { hi: "चावल (बासमती)", mr: "तांदूळ (बासमती)", gu: "ચોખા (બાસમતી)", te: "బియ్యం (బాస్మతి)" },
  "Paddy (Common)": { hi: "धान (सामान्य)", mr: "भात (साधा)", gu: "ધાન (સામાન્ય)", te: "వరి (సాధారణ)" },
  "Paddy (Fine)": { hi: "धान (उत्तम)", mr: "भात (उत्तम)", gu: "ધાન (ઉત્તમ)", te: "వరి (ఉత్తమ)" },
  "maize": { hi: "मकई", mr: "मका", gu: "મકાઈ", te: "మొక్కజొన్న" },
  "cotton": { hi: "कपास", mr: "कापूस", gu: "કપાસ", te: "పత్తి" },
  "Sugarcane": { hi: "गन्ना", mr: "ऊस", gu: "ઈખ", te: "చెరకు" },
  "Soybean": { hi: "सोयाबीन", mr: "सोयाबीन", gu: "સોયાબીન", te: "సోయాబీన్" },
  "Groundnut": { hi: "मूंगफली", mr: "भुईमूग", gu: "શિંગ", te: "పల్లీలు" },
  "Mustard Seed": { hi: "सरसों", mr: "मोहरी", gu: "રાઈ", te: "ఆవాలు" },
  "Sunflower": { hi: "सूरजमुखी", mr: "सूर्यमुखी", gu: "સૂરજમુખી", te: "సూర్యకాంతి" },
  "Sesame": { hi: "तिल", mr: "तीळ", gu: "તલ", te: "నువ్వులు" },
  "Turmeric": { hi: "हल्दी", mr: "हळद", gu: "હળદર", te: "పసుపు" },
  "Coriander": { hi: "धनिया", mr: "कोथिंबीर", gu: "ધાણા", te: "ధనియాలు" },
  "Red Chilli": { hi: "लाल मिर्च", mr: "तिखट मिरची", gu: "લાલ મરચાં", te: "ఎర్ర మిరపకాయ" },
  "Black Pepper": { hi: "काली मिर्च", mr: "काळी मिरी", gu: "કાળી મરી", te: "మిరియాలు" },
  "Cardamom": { hi: "इलायची", mr: "वेलची", gu: "એલચી", te: "ఎలక" },
  "Jaggery (Gud)": { hi: "गुड़", mr: "गूळ", gu: "ગોળ", te: "బెల్లం" },
  "Bajra": { hi: "बाजरा", mr: "बाजरी", gu: "બાજરી", te: "సజ్జలు" },
  "Jowar": { hi: "ज्वार", mr: "ज्वारी", gu: "જ્વાર", te: "జొన్న" },
  "Arhar (Tur Dal)": { hi: "अरहर (तूर दाल)", mr: "तूर डाळ", gu: "તુવેર દાળ", te: "కందిపప్పు" },
  "Masoor (Lentil)": { hi: "मसूर (दाल)", mr: "मसूर डाळ", gu: "મસૂર દાળ", te: "మసూర్దాల్" },
  "Moong": { hi: "मूंग", mr: "मुग", gu: "મગ", te: "పెసలు" },
};

const fertilizerNameMap: Record<string, Partial<Record<Language, string>>> = {
  "Urea": { hi: "यूरिया", mr: "युरिया", gu: "યુરિયા", te: "యూరియా" },
  "DAP (Di-ammonium Phosphate)": { hi: "डीएपी (डाय-अमोनियम फॉस्फेट)", mr: "डीएपी (डाय-अमोनियम फॉस्फेट)", gu: "ડીએપી (ડાય-એમોનિયમ ફોસ્ફેટ)", te: "డిఏపీ (డై-అమ్మోనియం ఫాస్ఫేట్)" },
  "NPK (12:32:16)": { hi: "एनपीके (12:32:16)", mr: "एनपीके (12:32:16)", gu: "એનપિકે (12:32:16)", te: "ఎన్‌పికె (12:32:16)" },
  "NPK (10:26:26)": { hi: "एनपीके (10:26:26)", mr: "एनपीके (10:26:26)", gu: "એનપિકે (10:26:26)", te: "ఎన్‌పికె (10:26:26)" },
  "NPK (20:20:0:13)": { hi: "एनपीके (20:20:0:13)", mr: "एनपीके (20:20:0:13)", gu: "એનપિકે (20:20:0:13)", te: "ఎన్‌పికె (20:20:0:13)" },
  "Single Super Phosphate (SSP)": { hi: "एसएसपी (सिंगल सुपर फॉस्फेट)", mr: "एसएसपी (सिंगल सुपर फॉस्फेट)", gu: "એસએસપી (સિંગલ સુપર ફોસ્ફેટ)", te: "ఎస్‌ఎస్‌పి (సింగిల్ సూపర్ ఫాస్ఫేట్)" },
  "Muriate of Potash (MOP)": { hi: "एमओपी (म्यूरेट ऑफ पोटाश)", mr: "एमओपी (म्युरेट ऑफ पोटॅश)", gu: "એમઓપી (મ્યુરેટ ઓફ પોટાશ)", te: "ఎమ్‌ఓపీ (మ్యూరేట్ ఆఫ్ పొటాష్)" },
  "Sulphate of Potash (SOP)": { hi: "एसओपी (सल्फेट ऑफ पोटाश)", mr: "एसओपी (सल्फेट ऑफ पोटॅश)", gu: "એસઓપી (સલ્ફેટ ઓફ પોટાશ)", te: "ఎస్‌ఓపీ (సల్ఫేట్ ఆఫ్ పొటాష్)" },
  "Calcium Ammonium Nitrate (CAN)": { hi: "सीएएन (कैल्शियम अमोनियम नाइट्रेट)", mr: "सीएएन (कॅल्शियम अमोनियम नायट्रेट)", gu: "સીએએન (કેલ્શિયમ અમોનિયમ નાઈટ્રેટ)", te: "సిఏఎన్ (కాల్షియం అమ్మోనియం నైట్రేట్)" },
  "Ammonium Sulphate": { hi: "अमोनियम सल्फेट", mr: "अमोनियम सल्फेट", gu: "એમોનિયમ સલ્ફેટ", te: "అమోనియం సల్ఫేట్" },
  "Organic Compost": { hi: "जैविक खाद", mr: "सेंद्रिय कंपोस्ट", gu: "સજીવ ખાતર", te: "సేంద్రీయ కంపోస్ట్" },
  "Vermi Compost": { hi: "वर्मी कम्पोस्ट", mr: "वर्मी कंपोस्ट", gu: "વર્મી કમ્પોસ્ટ", te: "వెర్మి కంపోస్ట్" },
  "Bio-Fertilizer (Rhizobium)": { hi: "बायो-उर्वरक (राइजोबियम)", mr: "बायो-खत (रायझोबियम)", gu: "બાયો-ફર્ટિલાઇઝર (રાઇજોબિયમ)", te: "జీవ ఎరువు (రైజోబియం)" },
  "Bio-Fertilizer (Azotobacter)": { hi: "बायो-उर्वरक (एज़ोटोबैक्टर)", mr: "बायो-खत (अझोटोबॅक्टर)", gu: "બાયો-ફર્ટિલાઇઝર (અઝોટોબેક્ટર)", te: "జీవ ఎరువు (అజోటోబాక్టర్)" },
  "Bio-Fertilizer (PSB)": { hi: "बायो-उर्वरक (पीएसबी)", mr: "बायो-खत (पीएसबी)", gu: "બાયો-ફર્ટિલાઇઝર (પીએસબી)", te: "జీవ ఎరువు (పిఎస్‌బి)" },
  "Neem Cake": { hi: "नीम खल", mr: "नीम खळ", gu: "લીંબડી ખાતર", te: "వేప పిండి" },
  "Bone Meal": { hi: "हड्डी चूर्ण", mr: "हाडांचे पीठ", gu: "હાડકાનું લોટ", te: "ఎముకల పొడి" },
  "Seaweed Extract": { hi: "सीवीड एक्सट्रैक्ट", mr: "सीवीड अर्क", gu: "સીવીડ એક્સટ્રેક્ટ", te: "సీవీడ్ ఎక్స్‌ట్రాక్ట్" },
  "Humic Acid": { hi: "ह्यूमिक अम्ल", mr: "ह्युमिक आम्ल", gu: "હ્યુમિક એસિડ", te: "హ్యూమిక్ ఆమ్లం" },
  "Liquid NPK (19:19:19)": { hi: "लिक्विड एनपीके (19:19:19)", mr: "लिक्विड एनपीके (19:19:19)", gu: "લિક્વિડ એનપિકે (19:19:19)", te: "ద్రవ ఎన్‌పికె (19:19:19)" },
};

const pesticideNameMap: Record<string, Partial<Record<Language, string>>> = {
  "Chlorpyrifos 20% EC": { hi: "क्लोरपायरीफॉस 20% EC", mr: "क्लोरपायरीफॉस 20% EC", gu: "ક્લોરપાયરીફોસ 20% EC", te: "క్లోర్పైరిఫాస్ 20% EC" },
  "Profenofos 50% EC": { hi: "प्रोफेनोफॉस 50% EC", mr: "प्रोफेनोफॉस 50% EC", gu: "પ્રોફેનોફોસ 50% EC", te: "ప్రోఫెనోఫాస్ 50% EC" },
  "Cypermethrin 25% EC": { hi: "सायपरमेथ्रिन 25% EC", mr: "सायपरमेथ्रिन 25% EC", gu: "સાયપરમેથ્રિન 25% EC", te: "సైపర్మేత్రిన్ 25% EC" },
  "Thiamethoxam 25% WG": { hi: "थायमेथोक्साम 25% WG", mr: "थायमेथोक्साम 25% WG", gu: "થાયમેથોક્સામ 25% WG", te: "థియామెథోక్సమ్ 25% WG" },
  "Fipronil 5% SC": { hi: "फिप्रोनील 5% SC", mr: "फिप्रोनील 5% SC", gu: "ફિપ્રોનિલ 5% SC", te: "ఫిప్రోనిల్ 5% SC" },
  "Acetamiprid 20% SP": { hi: "एसिटामिप्रिड 20% SP", mr: "अॅसेटॅमिप्रिड 20% SP", gu: "એસિટામિપ્રિડ 20% SP", te: "అసిటమిప్రిడ్ 20% SP" },
  "Mancozeb 75% WP": { hi: "मेंकोजेब 75% WP", mr: "मेंकोझेब 75% WP", gu: "મેન્કોઝેબ 75% WP", te: "మాంకోజెబ్ 75% WP" },
  "Propiconazole 25% EC": { hi: "प्रोपिकोनाजोल 25% EC", mr: "प्रोपिकोनाझोल 25% EC", gu: "પ્રોપિકોનાઝોલ 25% EC", te: "ప్రోపికోనాజోల్ 25% EC" },
  "Carbendazim 50% WP": { hi: "कार्बेन्डाजिम 50% WP", mr: "कार्बेन्डाझिम 50% WP", gu: "કાર્બેન્ડાઝિમ 50% WP", te: "కార్బెండాజిమ్ 50% WP" },
  "Azoxystrobin 23% SC": { hi: "एज़ॉक्सीस्ट्रोबिन 23% SC", mr: "एझॉक्सीस्ट्रोबिन 23% SC", gu: "એઝોક્સિસ્ટ્રોબિન 23% SC", te: "అజాక్సీస్ట్రోబిన్ 23% SC" },
  "Tebuconazole 25.9% EC": { hi: "टेबुकोनाजोल 25.9% EC", mr: "टेबुकोनाझोल 25.9% EC", gu: "ટેબુકોનાઝોલ 25.9% EC", te: "టెబ్యూకోనాజోల్ 25.9% EC" },
  "Copper Oxychloride 50% WP": { hi: "कॉपर ऑक्सीक्लोराइड 50% WP", mr: "कॉपर ऑक्सीक्लोराइड 50% WP", gu: "કૉપર ઑક્સીક્લોરાઇડ 50% WP", te: "కాపర్ ఆక్సీక్లోరైడ్ 50% WP" },
  "2,4-D Sodium Salt 80% WP": { hi: "2,4-D सोडियम सॉल्ट 80% WP", mr: "2,4-D सोडियम सॉल्ट 80% WP", gu: "2,4-D સોડિયમ સોલ્ટ 80% WP", te: "2,4-D సోడియం సాల్ట్ 80% WP" },
  "Glyphosate 41% SL": { hi: "ग्लाइफोसेट 41% SL", mr: "ग्लायफोसेट 41% SL", gu: "ગ્લાયફોસેટ 41% SL", te: "గ్లైఫోసేట్ 41% SL" },
  "Atrazine 50% WP": { hi: "एट्राजीन 50% WP", mr: "अॅट्राझीन 50% WP", gu: "એટ્રાઝીન 50% WP", te: "అట్రజైన్ 50% WP" },
  "Pendimethalin 30% EC": { hi: "पेंडिमेथालिन 30% EC", mr: "पेंडिमेथालिन 30% EC", gu: "પેન્ડિમેથાલિન 30% EC", te: "పెండిమెథాలిన్ 30% EC" },
  "Oxyfluorfen 23.5% EC": { hi: "ऑक्सीफ्लोर्फेन 23.5% EC", mr: "ऑक्सीफ्लोर्फेन 23.5% EC", gu: "ઓક્સીફ્લોર્ફેન 23.5% EC", te: "ఆక్సీఫ్లోర్ఫెన్ 23.5% EC" },
  "Imazethapyr 10% SL": { hi: "इमाज़ेथपायर 10% SL", mr: "इमाझेथपायर 10% SL", gu: "ઇમાઝેથાપાયર 10% SL", te: "ఇమాజెతాపైర్ 10% SL" },
  "Imidacloprid 17.8% SL": { hi: "इमिडाक्लोप्रिड 17.8% SL", mr: "इमिडाक्लोप्रिड 17.8% SL", gu: "ઈમિડાક્લોપ્રિડ 17.8% SL", te: "ఇమిడాక్లోప్రిడ్ 17.8% SL" },
  "Lambda Cyhalothrin 5% EC": { hi: "लैम्ब्डा सायहॅलोथ्रिन 5% EC", mr: "लॅम्ब्डा सायहॅलोथ्रिन 5% EC", gu: "લેમ્બ્ડા સાયહેલોથ્રિન 5% EC", te: "లాంబ్డా సైహాలోత్రిన్ 5% EC" },
  "Emamectin Benzoate 5% SG": { hi: "एमामेक्टिन बेंजोएट 5% SG", mr: "एमामेक्टिन बेंजोएट 5% SG", gu: "એમામેક્ટિન બેનોઝેટ 5% SG", te: "ఎమామెక్టిన్ బెంజోయేట్ 5% SG" },
  "Spinosad 45% SC": { hi: "स्पिनोसाड 45% SC", mr: "स्पिनोसाड 45% SC", gu: "સ્પિનોસેડ 45% SC", te: "స్పినోసాడ్ 45% SC" },
};

// Equipment names localization (optional; fallback to name if missing)
const equipmentNameMap: Record<string, Partial<Record<Language, string>>> = {};

export const translateItemName = (
  name: string,
  language: Language,
  domain: 'commodity' | 'fertilizer' | 'pesticide' | 'equipment' = 'commodity'
): string => {
  const map = domain === 'fertilizer'
    ? fertilizerNameMap
    : domain === 'pesticide'
      ? pesticideNameMap
      : domain === 'equipment'
        ? equipmentNameMap
        : commodityNameMap;
  return map[name]?.[language] || name;
};

// Phrase-level translations for dynamic content
const phraseMap: Record<Language, Record<string, string>> = {
  en: {},
  hi: {
    "All": "सभी",
    "Organic": "जैविक",
    "Inorganic": "अजैविक",
    "Bio-fertilizer": "जैव-उर्वरक",
    "At sowing": "बुवाई के समय",
    "Basal application": "आधार अनुप्रयोग",
    "Balanced nutrition": "संतुलित पोषण",
    "Better boll setting": "बेहतर बोली सेटिंग",
    "Avoid over-application": "अधिक मात्रा से बचें",
    "Apply in moist soil": "गीली मिट्टी में डालें",
    "Always conduct soil testing before applying fertilizers. Follow recommended dosages and timing for optimal results. Consider using organic fertilizers for sustainable farming": "उर्वरक डालने से पहले हमेशा मिट्टी की जांच करें। सर्वोत्तम परिणामों के लिए अनुशंसित मात्रा और समय का पालन करें। टिकाऊ कृषि के लिए जैविक उर्वरकों का उपयोग करने पर विचार करें",
    "Maintain clean fields": "खेतों को स्वच्छ रखें",
    "Use pheromone traps": "फेरोमोन ट्रैप का उपयोग करें",
    "Balanced fertilization": "संतुलित उर्वरीकरण",
    "Rice": "चावल",
    "Potato": "आलू",
    "Tomato": "टमाटर",
    "Always do a jar test before tank-mixing products. Avoid mixing incompatible chemistries and follow label instructions.": "उत्पादों को टैंक में मिलाने से पहले हमेशा जार टेस्ट करें। असंगत रसायनों को मिलाने से बचें और लेबल निर्देशों का पालन करें।",
  },
  mr: {
    "All": "सर्व",
    "Organic": "सेंद्रिय",
    "Inorganic": "अजैविक",
    "Bio-fertilizer": "जैव-खत",
    "At sowing": "पेरणीच्या वेळी",
    "Basal application": "तळावरील施 अनुप्रयोग",
    "Balanced nutrition": "समतोल पोषण",
    "Better boll setting": "उत्तम बोंड बसणे",
    "Avoid over-application": "अति प्रमाण टाळा",
    "Apply in moist soil": "ओलसर मातीमध्ये वापरा",
    "Always conduct soil testing before applying fertilizers. Follow recommended dosages and timing for optimal results. Consider using organic fertilizers for sustainable farming": "खते देण्यापूर्वी मातीची तपासणी करा. सर्वोत्तम परिणामांसाठी शिफारस केलेली मात्रा व वेळ पाळा. शाश्वत शेतीसाठी सेंद्रिय खतांचा विचार करा",
    "Maintain clean fields": "शेत स्वच्छ ठेवा",
    "Use pheromone traps": "फेरोमोन ट्रॅप वापरा",
    "Balanced fertilization": "समतोल खत व्यवस्थापन",
    "Rice": "तांदूळ",
    "Potato": "बटाटा",
    "Tomato": "टमाटे",
    "Always do a jar test before tank-mixing products. Avoid mixing incompatible chemistries and follow label instructions.": "उत्पाद टँकमध्ये मिसळण्यापूर्वी नेहमी जार चाचणी करा. विसंगत रसायने मिसळणे टाळा आणि लेबल सूचनांचे पालन करा.",
  },
  gu: {},
  te: {},
};

export const translatePhrase = (text: string, language: Language): string => {
  return phraseMap[language]?.[text] || text;
};