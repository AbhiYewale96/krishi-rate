export interface Fertilizer {
  name: string;
  type: 'Organic' | 'Inorganic' | 'Bio-fertilizer';
  npk: string; // N-P-K ratio
  dosage: string;
  applicationMethod: string;
  timing: string;
  benefits: string[];
  precautions: string[];
}

export interface Pesticide {
  name: string;
  type: 'Insecticide' | 'Fungicide' | 'Herbicide' | 'Biopesticide';
  activeIngredient: string;
  dosage: string;
  applicationMethod: string;
  timing: string;
  targetPests: string[];
  benefits: string[];
  precautions: string[];
  waitingPeriod: string; // days before harvest
}

export interface Disease {
  name: string;
  type: 'Fungal' | 'Bacterial' | 'Viral' | 'Nematode';
  symptoms: string[];
  causes: string[];
  prevention: string[];
  treatment: string[];
  affectedParts: string[];
  severity: 'Low' | 'Medium' | 'High';
}

export interface CropCareInfo {
  cropName: string;
  scientificName: string;
  season: string[];
  soilType: string[];
  phRange: string;
  temperature: string;
  rainfall: string;
  fertilizers: Fertilizer[];
  pesticides: Pesticide[];
  diseases: Disease[];
  generalTips: string[];
  growthStages: {
    stage: string;
    duration: string;
    care: string[];
  }[];
  mixtures?: {
    stage: string; // e.g., "Tillering", "Flowering"
    target: 'Nutrient' | 'Pest' | 'Disease' | 'Weed';
    useCase: string; // what problem this mix addresses
    ingredients: {
      name: string; // fertilizer/pesticide name
      dose: string; // dose with units
      type: 'Fertilizer' | 'Insecticide' | 'Fungicide' | 'Herbicide' | 'Biostimulant';
      method: 'Foliar' | 'Soil' | 'Drip' | 'Seed treatment';
    }[];
    frequency: string; // e.g., "Every 10-12 days"
    benefits: string[];
    precautions: string[];
  }[];
}

export const cropCareData: CropCareInfo[] = [
  {
    cropName: "Rice",
    scientificName: "Oryza sativa",
    season: ["Kharif", "Rabi"],
    soilType: ["Clay", "Loamy", "Alluvial"],
    phRange: "6.0 - 7.5",
    temperature: "20-35°C",
    rainfall: "1000-2000mm",
    fertilizers: [
      {
        name: "DAP (Diammonium Phosphate) - Basal",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "50–60 kg/acre",
        applicationMethod: "Mix and incorporate into soil before transplanting",
        timing: "Basal application (before or at transplanting)",
        benefits: ["Provides Nitrogen (N) and Phosphorus (P)", "Root development", "Early growth"],
        precautions: ["Don't mix with seeds", "Apply in furrows", "Avoid contact with leaves"]
      },
      {
        name: "MOP (Muriate of Potash) - Basal",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "15–20 kg/acre",
        applicationMethod: "Mix and incorporate into soil before transplanting",
        timing: "Basal application (before or at transplanting)",
        benefits: ["Provides Potassium (K)", "Improves grain quality"],
        precautions: ["Avoid over-application in saline soils", "Keep away from seed"]
      },
      {
        name: "Urea - Basal (1st split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "15–20 kg/acre",
        applicationMethod: "Mix and incorporate into soil before transplanting",
        timing: "Basal application (before or at transplanting)",
        benefits: ["Part of N applied as basal", "Supports initial establishment"],
        precautions: ["Apply in moist soil", "Avoid contact with seed"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄) - Basal",
        type: "Inorganic",
        npk: "Zn",
        dosage: "10–12 kg/acre",
        applicationMethod: "Mix and incorporate into soil",
        timing: "Basal application (for zinc-deficient soils)",
        benefits: ["Prevents zinc deficiency", "Improves tillering"],
        precautions: ["Apply only if soil is zinc-deficient", "Mix well with soil"]
      },
      {
        name: "Gypsum - Basal",
        type: "Inorganic",
        npk: "Ca + S",
        dosage: "50–100 kg/acre",
        applicationMethod: "Mix and incorporate into soil",
        timing: "Basal application (if sulphur deficient)",
        benefits: ["Provides Calcium and Sulphur", "Improves soil structure"],
        precautions: ["Apply only if sulphur deficient", "Mix well with soil"]
      },
      {
        name: "Urea - Tillering (2nd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "15–20 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Tillering stage (20–25 DAT)",
        benefits: ["Boosts tiller production", "Leaf area expansion"],
        precautions: ["Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "Urea - Panicle Initiation (3rd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "15–20 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Panicle initiation stage (35–40 DAT)",
        benefits: ["Supports panicle development", "Prevents sterility"],
        precautions: ["Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "MOP - Panicle Initiation",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "10–15 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Panicle initiation stage (35–40 DAT)",
        benefits: ["Improves grain quality", "If not applied fully as basal"],
        precautions: ["Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄) - Foliar",
        type: "Inorganic",
        npk: "Zn",
        dosage: "0.5% solution (5 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Flowering to grain filling (55–65 DAT)",
        benefits: ["Corrects zinc deficiency", "Improves grain filling"],
        precautions: ["Spray in cool hours", "Maintain uniform coverage"]
      },
      {
        name: "Boron (Borax/Solubor) - Foliar",
        type: "Inorganic",
        npk: "B",
        dosage: "1–1.5 g/L water",
        applicationMethod: "Foliar spray",
        timing: "Flowering to grain filling (55–65 DAT)",
        benefits: ["Improves grain setting", "Optional micronutrient"],
        precautions: ["Avoid overdose", "Do jar test before tank-mix"]
      },
      {
        name: "Potassium Nitrate (KNO₃) - Foliar",
        type: "Inorganic",
        npk: "13-0-46",
        dosage: "1% solution (10 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Flowering to grain filling (55–65 DAT)",
        benefits: ["Improves grain size, weight, and quality"],
        precautions: ["Spray in cool hours", "Avoid heavy nitrogen at this stage"]
      }
    ],
    pesticides: [
      // Seed and soil-borne diseases
      {
        name: "Carbendazim 50% WP",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "2 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Seedling rot", "Damping off", "Root rot"],
        benefits: ["Systemic protection", "Controls soil/seed fungi"],
        precautions: ["Use PPE", "Do not exceed dose", "Dispose slurry safely"],
        waitingPeriod: "-"
      },
      {
        name: "Trichoderma viride",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "4 g/kg seed or soil mix",
        applicationMethod: "Seed treatment / Soil application",
        timing: "Before sowing / at planting",
        targetPests: ["Soil-borne pathogens (preventive)"],
        benefits: ["Biological suppression", "Improves soil health"],
        precautions: ["Store cool/dry", "Do not mix with fungicides"],
        waitingPeriod: "-"
      },
      {
        name: "Pseudomonas fluorescens",
        type: "Biopesticide",
        activeIngredient: "Pseudomonas fluorescens",
        dosage: "10 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Soil-borne diseases"],
        benefits: ["Biocontrol agent", "Growth promotion"],
        precautions: ["Store cool/dry", "Do not mix with chemicals"],
        waitingPeriod: "-"
      },
      // Weed control
      {
        name: "Butachlor 50% EC",
        type: "Herbicide",
        activeIngredient: "Butachlor",
        dosage: "1–1.5 L/acre",
        applicationMethod: "Pre-emergence spray",
        timing: "Within 2–3 days of transplanting",
        targetPests: ["Grassy weeds", "Broadleaf weeds", "Sedges"],
        benefits: ["Prevents early weed flush"],
        precautions: ["Uniform soil moisture", "Avoid overlaps"],
        waitingPeriod: "-"
      },
      {
        name: "Pretilachlor + Safener",
        type: "Herbicide",
        activeIngredient: "Pretilachlor + Safener",
        dosage: "600–800 mL/acre",
        applicationMethod: "Pre-emergence spray",
        timing: "Within 2–3 days of transplanting",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Safe for rice", "Effective weed control"],
        precautions: ["Uniform soil moisture", "Avoid overlaps"],
        waitingPeriod: "-"
      },
      {
        name: "Bispyribac-sodium 10% SC",
        type: "Herbicide",
        activeIngredient: "Bispyribac-sodium",
        dosage: "100–120 mL/acre",
        applicationMethod: "Post-emergence spray",
        timing: "15–25 DAT",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Post-emergence control"],
        precautions: ["Do not spray on windy days", "Avoid drift to crop"],
        waitingPeriod: "-"
      },
      // Stem borer control
      {
        name: "Cartap Hydrochloride 4G",
        type: "Insecticide",
        activeIngredient: "Cartap Hydrochloride",
        dosage: "10 kg/acre",
        applicationMethod: "Soil application",
        timing: "At sowing or early stage",
        targetPests: ["Yellow & White Stem Borer"],
        benefits: ["Systemic action", "Long residual"],
        precautions: ["Apply in moist soil", "Avoid contact with seed"],
        waitingPeriod: "15 days"
      },
      {
        name: "Chlorantraniliprole 18.5% SC",
        type: "Insecticide",
        activeIngredient: "Chlorantraniliprole",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead hearts",
        targetPests: ["Stem borer"],
        benefits: ["Excellent larval control"],
        precautions: ["Avoid back-to-back sprays"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Fipronil 5% SC",
        type: "Insecticide",
        activeIngredient: "Fipronil",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead hearts",
        targetPests: ["Stem borer"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      // BPH/GLH control
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At hopper burn symptoms",
        targetPests: ["BPH", "GLH"],
        benefits: ["Systemic action", "Prevents establishment"],
        precautions: ["Rotate modes", "Protect pollinators"],
        waitingPeriod: "21 days"
      },
      {
        name: "Dinotefuran 20% SG",
        type: "Insecticide",
        activeIngredient: "Dinotefuran",
        dosage: "0.2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At hopper burn symptoms",
        targetPests: ["BPH", "GLH"],
        benefits: ["Strong systemic control"],
        precautions: ["Respect PHI", "Avoid resistance selection"],
        waitingPeriod: "7–14 days"
      },
      {
        name: "Buprofezin 25% SC",
        type: "Insecticide",
        activeIngredient: "Buprofezin",
        dosage: "1.5–2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At hopper burn symptoms",
        targetPests: ["BPH", "GLH"],
        benefits: ["Insect growth regulator"],
        precautions: ["Cover undersides and crevices"],
        waitingPeriod: "As per label"
      },
      {
        name: "Pymetrozine 50% WG",
        type: "Insecticide",
        activeIngredient: "Pymetrozine",
        dosage: "0.3 g/L",
        applicationMethod: "Foliar spray",
        timing: "At hopper burn symptoms",
        targetPests: ["BPH", "GLH"],
        benefits: ["Selective control", "Safe for beneficials"],
        precautions: ["Do not mix with alkaline solutions"],
        waitingPeriod: "As per label"
      },
      // Gall midge control
      {
        name: "Chlorpyrifos 20% EC",
        type: "Insecticide",
        activeIngredient: "Chlorpyrifos",
        dosage: "2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At silver shoot formation",
        targetPests: ["Gall midge"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      // Leaf folder control
      {
        name: "Flubendiamide 480 SC",
        type: "Insecticide",
        activeIngredient: "Flubendiamide",
        dosage: "0.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At folded leaves symptoms",
        targetPests: ["Leaf folder", "Case worm"],
        benefits: ["Strong on lepidopteran larvae"],
        precautions: ["Rotate MOA"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Emamectin Benzoate 5% SG",
        type: "Insecticide",
        activeIngredient: "Emamectin Benzoate",
        dosage: "0.4 g/L",
        applicationMethod: "Foliar spray",
        timing: "At folded leaves symptoms",
        targetPests: ["Leaf folder", "Case worm"],
        benefits: ["Good larvicidal action"],
        precautions: ["Rotate MOA", "Do not exceed dose"],
        waitingPeriod: "7 days"
      },
      // Rice hispa control
      {
        name: "Triazophos 40% EC",
        type: "Insecticide",
        activeIngredient: "Triazophos",
        dosage: "2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At scraping symptoms",
        targetPests: ["Rice hispa"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      {
        name: "Quinalphos 25% EC",
        type: "Insecticide",
        activeIngredient: "Quinalphos",
        dosage: "2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At scraping symptoms",
        targetPests: ["Rice hispa"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      {
        name: "Lambda-cyhalothrin 5% EC",
        type: "Insecticide",
        activeIngredient: "Lambda-cyhalothrin",
        dosage: "0.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At scraping symptoms",
        targetPests: ["Rice hispa"],
        benefits: ["Quick knockdown"],
        precautions: ["Avoid drift", "Rotate MOA"],
        waitingPeriod: "7 days"
      },
      // Blast disease control
      {
        name: "Tricyclazole 75% WP",
        type: "Fungicide",
        activeIngredient: "Tricyclazole",
        dosage: "0.6–1 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of blast",
        targetPests: ["Blast (Leaf & Neck)"],
        benefits: ["Systemic action", "Long lasting protection"],
        precautions: ["Don't exceed recommended dose", "Apply in cool weather"],
        waitingPeriod: "21 days"
      },
      {
        name: "Isoprothiolane 40% EC",
        type: "Fungicide",
        activeIngredient: "Isoprothiolane",
        dosage: "1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of blast",
        targetPests: ["Blast disease"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      {
        name: "Azoxystrobin + Tebuconazole",
        type: "Fungicide",
        activeIngredient: "Azoxystrobin + Tebuconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of blast",
        targetPests: ["Blast disease"],
        benefits: ["Dual mode of action"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "As per label"
      },
      // Sheath blight control
      {
        name: "Validamycin 3% L",
        type: "Fungicide",
        activeIngredient: "Validamycin",
        dosage: "2–2.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of sheath blight",
        targetPests: ["Sheath blight"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      {
        name: "Hexaconazole 5% EC",
        type: "Fungicide",
        activeIngredient: "Hexaconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of sheath blight",
        targetPests: ["Sheath blight"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      {
        name: "Propiconazole 25% EC",
        type: "Fungicide",
        activeIngredient: "Propiconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of sheath blight",
        targetPests: ["Sheath blight"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "14 days"
      },
      // Brown spot control
      {
        name: "Mancozeb 75% WP",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of brown spot",
        targetPests: ["Brown spot"],
        benefits: ["Broad-spectrum contact"],
        precautions: ["Ensure full coverage", "Respect PHI"],
        waitingPeriod: "7 days"
      },
      {
        name: "Carbendazim 50% WP",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "1 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of brown spot",
        targetPests: ["Brown spot"],
        benefits: ["Systemic control"],
        precautions: ["Don't exceed recommended dose"],
        waitingPeriod: "As per label"
      },
      {
        name: "Copper Oxychloride 50% WP",
        type: "Fungicide",
        activeIngredient: "Copper Oxychloride",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of brown spot",
        targetPests: ["Brown spot"],
        benefits: ["Contact fungicide"],
        precautions: ["Avoid mixing with phosphates", "Prevent leaf scorch"],
        waitingPeriod: "7 days"
      },
      // False smut control
      {
        name: "Carbendazim 50% WP - False Smut",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "1 g/L",
        applicationMethod: "Foliar spray",
        timing: "At booting stage",
        targetPests: ["False smut"],
        benefits: ["Systemic control"],
        precautions: ["Don't exceed recommended dose"],
        waitingPeriod: "As per label"
      },
      {
        name: "Hexaconazole 5% EC - False Smut",
        type: "Fungicide",
        activeIngredient: "Hexaconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At booting stage",
        targetPests: ["False smut"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      // Sheath rot control
      {
        name: "Carbendazim + Mancozeb",
        type: "Fungicide",
        activeIngredient: "Carbendazim + Mancozeb",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "At first signs of sheath rot",
        targetPests: ["Sheath rot"],
        benefits: ["Dual contact + systemic"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "As per label"
      },
      {
        name: "Azoxystrobin 23% SC",
        type: "Fungicide",
        activeIngredient: "Azoxystrobin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of sheath rot",
        targetPests: ["Sheath rot"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      // Bacterial leaf blight control
      {
        name: "Streptomycin + Tetracycline",
        type: "Fungicide",
        activeIngredient: "Streptomycin + Tetracycline",
        dosage: "0.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of BLB",
        targetPests: ["Bacterial leaf blight"],
        benefits: ["Bactericidal action"],
        precautions: ["Do not mix with alkaline solutions"],
        waitingPeriod: "As per label"
      },
      {
        name: "Copper Hydroxide 77% WP",
        type: "Fungicide",
        activeIngredient: "Copper Hydroxide",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of BLB",
        targetPests: ["Bacterial leaf blight"],
        benefits: ["Bactericidal/contact"],
        precautions: ["Avoid mixing with phosphates", "Prevent leaf scorch"],
        waitingPeriod: "7 days"
      },
      {
        name: "Pseudomonas fluorescens - BLB",
        type: "Biopesticide",
        activeIngredient: "Pseudomonas fluorescens",
        dosage: "5 kg/acre",
        applicationMethod: "Soil application",
        timing: "Preventive application",
        targetPests: ["Bacterial leaf blight"],
        benefits: ["Bio-control", "Growth promotion"],
        precautions: ["Store cool/dry", "Do not mix with chemicals"],
        waitingPeriod: "-"
      },
      // Rodent control
      {
        name: "Zinc Phosphide",
        type: "Herbicide",
        activeIngredient: "Zinc Phosphide",
        dosage: "2–5 g in bait stations",
        applicationMethod: "Baiting",
        timing: "At rodent activity",
        targetPests: ["Rats", "Bandicoots"],
        benefits: ["Effective rodent control"],
        precautions: ["Use in bait stations", "Keep away from children"],
        waitingPeriod: "-"
      },
      {
        name: "Bromadiolone",
        type: "Herbicide",
        activeIngredient: "Bromadiolone",
        dosage: "As per label",
        applicationMethod: "Baiting",
        timing: "At rodent activity",
        targetPests: ["Rats", "Bandicoots"],
        benefits: ["Effective rodent control"],
        precautions: ["Use in bait stations", "Keep away from children"],
        waitingPeriod: "-"
      },
      // Micronutrient deficiency correction
      {
        name: "Zinc Sulphate - Deficiency",
        type: "Biopesticide",
        activeIngredient: "Zinc",
        dosage: "5 kg/acre or 0.5% foliar (5 g/L)",
        applicationMethod: "Soil application / Foliar spray",
        timing: "At zinc deficiency symptoms",
        targetPests: ["Zinc deficiency (Khaira disease)"],
        benefits: ["Corrects zinc deficiency"],
        precautions: ["Apply only if deficient", "Spray in cool hours"],
        waitingPeriod: "-"
      },
      {
        name: "Ferrous Sulphate",
        type: "Biopesticide",
        activeIngredient: "Iron",
        dosage: "0.5% foliar spray",
        applicationMethod: "Foliar spray",
        timing: "At iron deficiency symptoms",
        targetPests: ["Iron deficiency"],
        benefits: ["Corrects iron deficiency"],
        precautions: ["Spray in cool hours"],
        waitingPeriod: "-"
      },
      {
        name: "Gypsum - Sulphur",
        type: "Biopesticide",
        activeIngredient: "Sulphur",
        dosage: "50–100 kg/acre",
        applicationMethod: "Soil application",
        timing: "At sulphur deficiency symptoms",
        targetPests: ["Sulphur deficiency"],
        benefits: ["Corrects sulphur deficiency"],
        precautions: ["Apply only if deficient", "Mix well with soil"],
        waitingPeriod: "-"
      }
    ],
    diseases: [
      {
        name: "Rice Blast",
        type: "Fungal",
        symptoms: ["Diamond-shaped lesions on leaves", "Grayish centers with brown margins", "Node infection", "Panicle blast"],
        causes: ["High humidity", "Excessive nitrogen", "Dense planting", "Poor drainage"],
        prevention: ["Use resistant varieties", "Proper spacing", "Balanced fertilization", "Good drainage"],
        treatment: ["Tricyclazole spray", "Carbendazim application", "Remove infected plants"],
        affectedParts: ["Leaves", "Nodes", "Panicles"],
        severity: "High"
      },
      {
        name: "Bacterial Leaf Blight",
        type: "Bacterial",
        symptoms: ["Yellow streaks on leaves", "Water-soaked lesions", "Wilting of leaves", "Yellowing from tip"],
        causes: ["Infected seeds", "Contaminated water", "High humidity", "Warm temperature"],
        prevention: ["Use certified seeds", "Crop rotation", "Avoid overhead irrigation", "Field sanitation"],
        treatment: ["Copper-based fungicides", "Streptomycin spray", "Remove infected debris"],
        affectedParts: ["Leaves", "Sheaths"],
        severity: "Medium"
      }
    ],
    generalTips: [
      "Maintain proper water level (2-5 cm) during vegetative stage",
      "Use certified seeds for better yield",
      "Practice crop rotation to break pest cycles",
      "Monitor field regularly for pest and disease symptoms",
      "Maintain proper spacing (20x15 cm) for better air circulation"
    ],
    growthStages: [
      {
        stage: "Nursery (0-25 days)",
        duration: "25 days",
        care: ["Prepare raised beds", "Sow pre-soaked seeds", "Maintain proper moisture", "Protect from birds"]
      },
      {
        stage: "Transplanting (25-30 days)",
        duration: "5 days",
        care: ["Transplant healthy seedlings", "Maintain proper spacing", "Apply basal fertilizers", "Ensure good root contact"]
      },
      {
        stage: "Tillering (30-60 days)",
        duration: "30 days",
        care: ["Apply nitrogen fertilizer", "Maintain water level", "Control weeds", "Monitor for pests"]
      },
      {
        stage: "Panicle Initiation (60-90 days)",
        duration: "30 days",
        care: ["Apply final nitrogen dose", "Maintain proper water level", "Control diseases", "Monitor nutrient status"]
      },
      {
        stage: "Grain Filling (90-120 days)",
        duration: "30 days",
        care: ["Gradual water reduction", "Monitor for diseases", "Protect from lodging", "Harvest at proper maturity"]
      }
    ],
    mixtures: [
      {
        stage: "Tillering",
        target: 'Nutrient',
        useCase: "Boost vegetative growth and tiller formation",
        ingredients: [
          { name: "Urea", dose: "10 kg/acre", type: "Fertilizer", method: "Soil" },
          { name: "Seaweed Extract", dose: "1 L/acre", type: "Biostimulant", method: "Foliar" }
        ],
        frequency: "Once at early tillering",
        benefits: ["Enhanced tillering", "Improved chlorophyll content"],
        precautions: ["Apply urea in moist soil", "Spray seaweed in evening"]
      },
      {
        stage: "Panicle initiation",
        target: 'Disease',
        useCase: "Prevent blast and strengthen panicle",
        ingredients: [
          { name: "Tricyclazole 75% WP", dose: "0.6 g/L", type: "Fungicide", method: "Foliar" },
          { name: "NPK 19:19:19", dose: "1 kg/acre", type: "Fertilizer", method: "Foliar" }
        ],
        frequency: "Repeat after 10 days if needed",
        benefits: ["Blast protection", "Better panicle development"],
        precautions: ["Do not exceed dose", "Maintain spray interval"]
      }
    ]
  },
  {
    cropName: "Maize",
    scientificName: "Zea mays",
    season: ["Kharif", "Rabi", "Summer"],
    soilType: ["Loamy", "Sandy loam", "Clay loam"],
    phRange: "5.5 - 7.5",
    temperature: "18-27°C",
    rainfall: "500-800mm",
    fertilizers: [
      {
        name: "DAP (Diammonium Phosphate) - Basal",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "50–60 kg/acre",
        applicationMethod: "Apply in furrows before sowing",
        timing: "Basal dose (at sowing)",
        benefits: ["Provides Nitrogen (N) + Phosphorus (P)", "Establishes healthy roots", "Early growth"],
        precautions: ["Don't mix with seeds", "Apply in furrows", "Avoid contact with leaves"]
      },
      {
        name: "MOP (Muriate of Potash) - Basal",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "20–25 kg/acre",
        applicationMethod: "Apply in furrows before sowing",
        timing: "Basal dose (at sowing)",
        benefits: ["Provides Potassium (K)", "Improves plant strength"],
        precautions: ["Apply in furrows", "Avoid contact with seed"]
      },
      {
        name: "Urea - Basal (1st split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Place away from seed to avoid burning",
        timing: "Basal dose (at sowing)",
        benefits: ["First nitrogen split", "Supports initial establishment"],
        precautions: ["Place away from seed", "Apply in moist soil"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄) - Basal",
        type: "Inorganic",
        npk: "Zn",
        dosage: "10 kg/acre",
        applicationMethod: "Apply in furrows before sowing",
        timing: "Basal dose (if zinc-deficient soils)",
        benefits: ["Prevents zinc deficiency", "Improves plant vigor"],
        precautions: ["Apply only if zinc-deficient", "Mix well with soil"]
      },
      {
        name: "Urea - Early Vegetative (2nd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "25–30 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Early vegetative stage (20–25 DAS)",
        benefits: ["Supports rapid leaf and stem growth", "Second nitrogen split"],
        precautions: ["Apply in moist soil", "Combine with weeding"]
      },
      {
        name: "Magnesium Sulphate - Early Vegetative",
        type: "Inorganic",
        npk: "Mg",
        dosage: "5 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Early vegetative stage (20–25 DAS)",
        benefits: ["Corrects magnesium deficiency", "If deficiency symptoms appear"],
        precautions: ["Apply only if deficient", "Mix well with soil"]
      },
      {
        name: "Urea - Knee-High (3rd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Knee-high stage (35–40 DAS)",
        benefits: ["Promotes ear formation", "Plant strength", "Third nitrogen split"],
        precautions: ["Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "MOP - Knee-High",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "10–15 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Knee-high stage (35–40 DAS)",
        benefits: ["If not fully applied at sowing", "Improves plant strength"],
        precautions: ["Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "Boron (Borax) - Knee-High",
        type: "Inorganic",
        npk: "B",
        dosage: "1–2 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Knee-high stage (35–40 DAS)",
        benefits: ["Prevents cob malformation", "Improves ear formation"],
        precautions: ["Apply only if needed", "Avoid overdose"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄) - Foliar",
        type: "Inorganic",
        npk: "Zn",
        dosage: "0.5% (5 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Tasseling to silking stage (50–60 DAS)",
        benefits: ["Corrects zinc deficiency", "Enhances enzyme activity"],
        precautions: ["Spray in cool hours", "Maintain uniform coverage"]
      },
      {
        name: "Boron (Borax/Solubor) - Foliar",
        type: "Inorganic",
        npk: "B",
        dosage: "1 g/L water",
        applicationMethod: "Foliar spray",
        timing: "Tasseling to silking stage (50–60 DAS)",
        benefits: ["Prevents cob malformation", "Improves pollination"],
        precautions: ["Avoid overdose", "Do jar test before tank-mix"]
      },
      {
        name: "Potassium Nitrate (KNO₃) - Foliar",
        type: "Inorganic",
        npk: "13-0-46",
        dosage: "1% (10 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Tasseling to silking stage (50–60 DAS)",
        benefits: ["Grain filling", "Stress resistance", "Improves grain quality"],
        precautions: ["Spray in cool hours", "Avoid high temperatures"]
      }
    ],
    pesticides: [
      // Seed and soil-borne diseases
      {
        name: "Carbendazim 50% WP",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "2 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Seed rot", "Damping-off", "Seedling blight"],
        benefits: ["Systemic protection", "Controls soil/seed fungi"],
        precautions: ["Use PPE", "Do not exceed dose", "Dispose slurry safely"],
        waitingPeriod: "-"
      },
      {
        name: "Thiram 75% WP",
        type: "Fungicide",
        activeIngredient: "Thiram",
        dosage: "2–3 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Seed rot", "Damping-off", "Seedling blight"],
        benefits: ["Broad-spectrum protection"],
        precautions: ["Wear gloves", "Avoid inhalation"],
        waitingPeriod: "-"
      },
      {
        name: "Trichoderma viride",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "4 g/kg seed or 2.5 kg mixed with FYM",
        applicationMethod: "Seed treatment / Soil application",
        timing: "Before sowing / at planting",
        targetPests: ["Soil-borne pathogens (preventive)"],
        benefits: ["Biological suppression", "Improves soil health"],
        precautions: ["Store cool/dry", "Do not mix with fungicides"],
        waitingPeriod: "-"
      },
      {
        name: "Metalaxyl + Mancozeb",
        type: "Fungicide",
        activeIngredient: "Metalaxyl + Mancozeb",
        dosage: "2 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Downy mildew prevention"],
        benefits: ["Prevents downy mildew"],
        precautions: ["Use PPE", "Do not exceed dose"],
        waitingPeriod: "-"
      },
      // Weed control
      {
        name: "Pendimethalin 30% EC",
        type: "Herbicide",
        activeIngredient: "Pendimethalin",
        dosage: "1–1.5 L/acre",
        applicationMethod: "Pre-emergence spray",
        timing: "0–3 days after sowing",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Prevents early weed flush"],
        precautions: ["Uniform soil moisture", "Avoid overlaps"],
        waitingPeriod: "-"
      },
      {
        name: "Atrazine 50% WP",
        type: "Herbicide",
        activeIngredient: "Atrazine",
        dosage: "500–800 g/acre",
        applicationMethod: "Pre-emergence spray",
        timing: "0–3 days after sowing",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Very effective in maize", "Long residual"],
        precautions: ["Uniform soil moisture", "Avoid overlaps"],
        waitingPeriod: "-"
      },
      {
        name: "Topramezone 33.6% SC",
        type: "Herbicide",
        activeIngredient: "Topramezone",
        dosage: "80–100 mL/acre",
        applicationMethod: "Post-emergence spray",
        timing: "20–25 DAS",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Post-emergence control"],
        precautions: ["Use surfactant", "Avoid drift to crop"],
        waitingPeriod: "-"
      },
      {
        name: "Tembotrione 34.4% SC",
        type: "Herbicide",
        activeIngredient: "Tembotrione",
        dosage: "100 mL/acre",
        applicationMethod: "Post-emergence spray",
        timing: "20–25 DAS",
        targetPests: ["Grassy weeds", "Broadleaf weeds"],
        benefits: ["Post-emergence control"],
        precautions: ["Use surfactant", "Avoid drift to crop"],
        waitingPeriod: "-"
      },
      // Stem borer control
      {
        name: "Chlorantraniliprole 18.5% SC",
        type: "Insecticide",
        activeIngredient: "Chlorantraniliprole",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead heart",
        targetPests: ["Stem borer (Chilo partellus)"],
        benefits: ["Excellent larval control"],
        precautions: ["Avoid back-to-back sprays"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Spinosad 45% SC",
        type: "Insecticide",
        activeIngredient: "Spinosad",
        dosage: "1–1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead heart",
        targetPests: ["Stem borer (Chilo partellus)"],
        benefits: ["Natural origin", "Effective against lepidopteran pests"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "3 days"
      },
      {
        name: "Cartap Hydrochloride 4G",
        type: "Insecticide",
        activeIngredient: "Cartap Hydrochloride",
        dosage: "10 kg/acre",
        applicationMethod: "Soil application",
        timing: "At sowing",
        targetPests: ["Stem borer (Chilo partellus)"],
        benefits: ["Systemic action", "Long residual"],
        precautions: ["Apply in moist soil", "Avoid contact with seed"],
        waitingPeriod: "15 days"
      },
      // Fall armyworm control
      {
        name: "Spinetoram 11.7% SC",
        type: "Insecticide",
        activeIngredient: "Spinetoram",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf shredding",
        targetPests: ["Fall armyworm (Spodoptera frugiperda)"],
        benefits: ["Fast-acting", "Effective against larvae"],
        precautions: ["Start control early", "Use pheromone traps for monitoring"],
        waitingPeriod: "3 days"
      },
      {
        name: "Emamectin Benzoate 5% SG",
        type: "Insecticide",
        activeIngredient: "Emamectin Benzoate",
        dosage: "0.4 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf shredding",
        targetPests: ["Fall armyworm (Spodoptera frugiperda)"],
        benefits: ["Good larvicidal action"],
        precautions: ["Start control early", "Use pheromone traps for monitoring"],
        waitingPeriod: "7 days"
      },
      {
        name: "Thiodicarb 75% WP",
        type: "Insecticide",
        activeIngredient: "Thiodicarb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf shredding",
        targetPests: ["Fall armyworm (Spodoptera frugiperda)"],
        benefits: ["Effective against larvae"],
        precautions: ["Start control early", "Use pheromone traps for monitoring"],
        waitingPeriod: "7 days"
      },
      {
        name: "Neem Oil (Azadirachtin 1%)",
        type: "Biopesticide",
        activeIngredient: "Azadirachtin",
        dosage: "5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf shredding (eco-friendly option)",
        targetPests: ["Fall armyworm (Spodoptera frugiperda)"],
        benefits: ["Eco-friendly", "Antifeedant and repellent action"],
        precautions: ["Spray in evening", "Ensure good coverage"],
        waitingPeriod: "0 days"
      },
      // Shoot fly control
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead heart",
        targetPests: ["Shoot fly"],
        benefits: ["Systemic action"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "21 days"
      },
      {
        name: "Fipronil 5% SC",
        type: "Insecticide",
        activeIngredient: "Fipronil",
        dosage: "1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of dead heart",
        targetPests: ["Shoot fly"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      {
        name: "Imidacloprid 70% WS",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "5 mL/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Shoot fly"],
        benefits: ["Preventive control"],
        precautions: ["Use PPE", "Do not exceed dose"],
        waitingPeriod: "-"
      },
      // Aphids and jassids control
      {
        name: "Thiamethoxam 25% WG",
        type: "Insecticide",
        activeIngredient: "Thiamethoxam",
        dosage: "0.2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of yellowing/curling",
        targetPests: ["Aphids", "Jassids (Leafhoppers)"],
        benefits: ["Systemic action", "Long residual effect"],
        precautions: ["Rotate with other insecticides", "Follow safety guidelines"],
        waitingPeriod: "21 days"
      },
      {
        name: "Acetamiprid 20% SP",
        type: "Insecticide",
        activeIngredient: "Acetamiprid",
        dosage: "0.3 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of yellowing/curling",
        targetPests: ["Aphids", "Jassids (Leafhoppers)"],
        benefits: ["Translaminar activity", "Effective against resistant strains"],
        precautions: ["Avoid repeated use", "Spray in cool hours"],
        waitingPeriod: "14 days"
      },
      // Turcicum leaf blight control
      {
        name: "Mancozeb 75% WP",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf blight",
        targetPests: ["Turcicum leaf blight (Exserohilum turcicum)"],
        benefits: ["Broad-spectrum contact fungicide"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },
      {
        name: "Propiconazole 25% EC",
        type: "Fungicide",
        activeIngredient: "Propiconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf blight",
        targetPests: ["Turcicum leaf blight (Exserohilum turcicum)"],
        benefits: ["Systemic fungicide", "Curative and protective action"],
        precautions: ["Rotate with other fungicides", "Do not exceed recommended dose"],
        waitingPeriod: "14 days"
      },
      {
        name: "Azoxystrobin 23% SC",
        type: "Fungicide",
        activeIngredient: "Azoxystrobin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf blight",
        targetPests: ["Turcicum leaf blight (Exserohilum turcicum)"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      // Maydis leaf blight control
      {
        name: "Tebuconazole + Trifloxystrobin",
        type: "Fungicide",
        activeIngredient: "Tebuconazole + Trifloxystrobin",
        dosage: "0.75–1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf blight",
        targetPests: ["Maydis leaf blight (Helminthosporium maydis)"],
        benefits: ["Dual mode of action"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "As per label"
      },
      {
        name: "Mancozeb + Carbendazim",
        type: "Fungicide",
        activeIngredient: "Mancozeb + Carbendazim",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf blight",
        targetPests: ["Maydis leaf blight (Helminthosporium maydis)"],
        benefits: ["Dual contact + systemic"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "As per label"
      },
      // Downy mildew control
      {
        name: "Metalaxyl + Mancozeb - Downy Mildew",
        type: "Fungicide",
        activeIngredient: "Metalaxyl + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of downy mildew",
        targetPests: ["Downy mildew"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      {
        name: "Ridomil Gold",
        type: "Fungicide",
        activeIngredient: "Metalaxyl + Mancozeb",
        dosage: "1.5–2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of downy mildew",
        targetPests: ["Downy mildew"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "As per label"
      },
      // Rust control
      {
        name: "Propiconazole 25% EC - Rust",
        type: "Fungicide",
        activeIngredient: "Propiconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of rust",
        targetPests: ["Rust (Common Rust or Polysora Rust)"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "14 days"
      },
      {
        name: "Mancozeb - Rust",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of rust",
        targetPests: ["Rust (Common Rust or Polysora Rust)"],
        benefits: ["Early protection"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },
      // Micronutrient deficiency correction
      {
        name: "Zinc Sulphate (ZnSO₄) - Deficiency",
        type: "Biopesticide",
        activeIngredient: "Zinc",
        dosage: "10 kg/acre or 0.5% foliar (5 g/L)",
        applicationMethod: "Soil application / Foliar spray",
        timing: "At zinc deficiency symptoms",
        targetPests: ["Zinc deficiency"],
        benefits: ["Corrects zinc deficiency"],
        precautions: ["Apply only if deficient", "Spray in cool hours"],
        waitingPeriod: "-"
      },
      {
        name: "Borax - Deficiency",
        type: "Biopesticide",
        activeIngredient: "Boron",
        dosage: "1–2 kg/acre or 0.2% foliar (2 g/L)",
        applicationMethod: "Soil application / Foliar spray",
        timing: "At boron deficiency symptoms",
        targetPests: ["Boron deficiency"],
        benefits: ["Corrects boron deficiency"],
        precautions: ["Apply only if deficient", "Spray in cool hours"],
        waitingPeriod: "-"
      },
      {
        name: "Gypsum - Sulphur",
        type: "Biopesticide",
        activeIngredient: "Sulphur",
        dosage: "50–100 kg/acre",
        applicationMethod: "Soil application",
        timing: "At sulphur deficiency symptoms",
        targetPests: ["Sulphur deficiency"],
        benefits: ["Corrects sulphur deficiency"],
        precautions: ["Apply only if deficient", "Mix well with soil"],
        waitingPeriod: "-"
      },
      {
        name: "Ferrous Sulphate",
        type: "Biopesticide",
        activeIngredient: "Iron",
        dosage: "0.5% foliar spray (5 g/L)",
        applicationMethod: "Foliar spray",
        timing: "At iron deficiency symptoms",
        targetPests: ["Iron deficiency"],
        benefits: ["Corrects iron deficiency"],
        precautions: ["Spray in cool hours"],
        waitingPeriod: "-"
      }
    ],
    diseases: [
      {
        name: "Turcicum Leaf Blight",
        type: "Fungal",
        symptoms: ["Elongated lesions on leaves", "Grey centers with brown margins"],
        causes: ["High humidity", "Moderate temperature"],
        prevention: ["Use resistant hybrids", "Crop rotation"],
        treatment: ["Mancozeb spray", "Azoxystrobin application"],
        affectedParts: ["Leaves"],
        severity: "Medium"
      }
    ],
    generalTips: [
      "Maintain optimum plant population",
      "Timely weeding and earthing up",
      "Monitor for fall armyworm regularly"
    ],
    growthStages: [
      { stage: "Germination (0-10 days)", duration: "10 days", care: ["Adequate soil moisture", "Protect from birds"] },
      { stage: "Vegetative (10-40 days)", duration: "30 days", care: ["Nitrogen application", "Weed control"] },
      { stage: "Reproductive (40-80 days)", duration: "40 days", care: ["Irrigation at tasseling", "Pest monitoring"] }
    ]
  },
  {
    cropName: "Cotton",
    scientificName: "Gossypium hirsutum",
    season: ["Kharif"],
    soilType: ["Black cotton", "Loamy"],
    phRange: "6.0 - 8.0",
    temperature: "21-30°C",
    rainfall: "600-800mm",
    fertilizers: [
      {
        name: "DAP (Diammonium Phosphate)",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "50–60 kg/acre",
        applicationMethod: "Basal placement in furrow, 5-7 cm away from seed",
        timing: "Basal dose (0 DAS / at sowing)",
        benefits: ["Provides Nitrogen (N) and Phosphorus (P)", "Promotes early root growth"],
        precautions: ["Do not place in direct contact with seed", "Irrigate lightly after application"]
      },
      {
        name: "MOP (Muriate of Potash)",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "20–25 kg/acre",
        applicationMethod: "Basal placement in furrow",
        timing: "Basal dose (0 DAS)",
        benefits: ["Provides Potassium (K)", "Improves boll quality and stress tolerance"],
        precautions: ["Avoid over-application in saline soils", "Keep away from seed"]
      },
      {
        name: "Urea (1st split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "25–30 kg/acre",
        applicationMethod: "Band placement and cover with soil",
        timing: "Basal dose (0 DAS)",
        benefits: ["High nitrogen source", "Supports initial establishment"],
        precautions: ["Apply in moist soil", "Avoid contact with seed"]
      },
      {
        name: "Urea (2nd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "15–20 kg/acre",
        applicationMethod: "Side-dress near root zone and cover",
        timing: "Early vegetative stage (20–30 DAS)",
        benefits: ["Supports vegetative growth and leaf development"],
        precautions: ["Avoid waterlogging", "Do not apply before heavy rain"]
      },
      {
        name: "Urea (3rd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Side-dress and incorporate",
        timing: "Flowering stage (45–55 DAS)",
        benefits: ["Supports flowering and boll initiation"],
        precautions: ["Split doses to reduce losses", "Irrigate after application"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄) foliar",
        type: "Inorganic",
        npk: "Zn",
        dosage: "0.5% solution (5 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Boll development (60–75 DAS); 1–2 sprays at 10–12 day interval",
        benefits: ["Corrects zinc deficiency", "Improves boll development"],
        precautions: ["Spray during cool hours", "Maintain uniform coverage"]
      },
      {
        name: "Boron (Borax/Solubor) foliar",
        type: "Inorganic",
        npk: "B",
        dosage: "1–1.5 g/L water",
        applicationMethod: "Foliar spray",
        timing: "Boll development (60–75 DAS); can be tank-mixed with Zn if compatible",
        benefits: ["Improves pollination and boll retention"],
        precautions: ["Avoid overdose to prevent toxicity", "Do a jar test before tank-mix"]
      },
      {
        name: "Gypsum (for Sulphur correction)",
        type: "Inorganic",
        npk: "S + Ca",
        dosage: "As per soil test; typical 50–100 kg/acre",
        applicationMethod: "Soil application and incorporation",
        timing: "As needed upon deficiency symptoms (yellowing/leaf curling)",
        benefits: ["Provides Sulphur and Calcium", "Improves soil structure"],
        precautions: ["Prefer soil-test based dose", "Avoid application in standing water"]
      },
      {
        name: "Calcium Nitrate (deficiency correction)",
        type: "Inorganic",
        npk: "15-0-0 + Ca",
        dosage: "Foliar 1–2 g/L or soil 10–15 kg/acre",
        applicationMethod: "Foliar spray or fertigation/soil application",
        timing: "On signs of poor boll setting or Ca deficiency",
        benefits: ["Improves boll setting and fiber strength"],
        precautions: ["Do not tank-mix with phosphates", "Apply during cool hours"]
      },
      {
        name: "Magnesium Sulphate (MgSO₄) foliar",
        type: "Inorganic",
        npk: "Mg + S",
        dosage: "2–3 sprays @ 5 g/L water",
        applicationMethod: "Foliar spray",
        timing: "On Mg deficiency symptoms; 7–10 day interval",
        benefits: ["Corrects interveinal chlorosis", "Supports photosynthesis"],
        precautions: ["Ensure complete dissolution", "Avoid spraying in hot sun"]
      }
    ],
    pesticides: [
      // 1) Seed and soil-borne diseases – seed treatment/soil application
      {
        name: "Carbendazim 50% WP",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "2 g/kg seed (seed treatment) or 1 g/L (drench)",
        applicationMethod: "Seed treatment / Soil drench",
        timing: "Before sowing; drench at early symptoms",
        targetPests: ["Root rot", "Seedling blight", "Damping off"],
        benefits: ["Systemic protection", "Controls soil/seed fungi"],
        precautions: ["Use PPE", "Do not exceed dose", "Dispose slurry safely"],
        waitingPeriod: "-"
      },
      {
        name: "Trichoderma viride",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "4 g/kg seed or 10 kg/acre with FYM",
        applicationMethod: "Seed treatment / Soil application",
        timing: "Before sowing / at planting",
        targetPests: ["Root/stem pathogens (preventive)"],
        benefits: ["Biological suppression", "Improves soil health"],
        precautions: ["Store cool/dry", "Do not mix with fungicides"],
        waitingPeriod: "-"
      },
      {
        name: "Thiram 75% WP",
        type: "Fungicide",
        activeIngredient: "Thiram",
        dosage: "2 g/kg seed",
        applicationMethod: "Seed treatment",
        timing: "Before sowing",
        targetPests: ["Seed rot", "Damping off"],
        benefits: ["Protective action on seed"],
        precautions: ["Use gloves/mask", "Ensure uniform coating"],
        waitingPeriod: "-"
      },

      // 2) Weeds – pre-emergence and post-emergence
      {
        name: "Pendimethalin 30% EC",
        type: "Herbicide",
        activeIngredient: "Pendimethalin",
        dosage: "1–1.5 L/acre in 200–250 L water",
        applicationMethod: "Pre-emergence spray",
        timing: "Within 2–3 days of sowing",
        targetPests: ["Grasses", "Broadleaf weeds"],
        benefits: ["Prevents early weed flush"],
        precautions: ["Uniform soil moisture", "Avoid overlaps"],
        waitingPeriod: "-"
      },
      {
        name: "Quizalofop-ethyl 5% EC",
        type: "Herbicide",
        activeIngredient: "Quizalofop-ethyl",
        dosage: "As per label (post-emergence)",
        applicationMethod: "Post-emergence spray",
        timing: "At 2–4 leaf stage of grass weeds",
        targetPests: ["Grass weeds"],
        benefits: ["Selective grass control"],
        precautions: ["Do not spray on windy days", "Avoid drift to crop"],
        waitingPeriod: "-"
      },

      // 3) Sucking pests – early crop stage (systemic)
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar (systemic)",
        timing: "Early stage; at pest appearance",
        targetPests: ["Aphids", "Jassids", "Thrips", "Whiteflies"],
        benefits: ["Systemic action", "Prevents establishment"],
        precautions: ["Rotate modes", "Protect pollinators"],
        waitingPeriod: "21 days"
      },
      {
        name: "Thiamethoxam 25% WG",
        type: "Insecticide",
        activeIngredient: "Thiamethoxam",
        dosage: "0.2 g/L",
        applicationMethod: "Foliar (systemic)",
        timing: "Early stage; at pest appearance",
        targetPests: ["Aphids", "Jassids", "Thrips", "Whiteflies"],
        benefits: ["Systemic", "Quick knockdown"],
        precautions: ["Avoid repeated solo use", "Rotate groups"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Acetamiprid 20% SP",
        type: "Insecticide",
        activeIngredient: "Acetamiprid",
        dosage: "0.3 g/L",
        applicationMethod: "Foliar (systemic)",
        timing: "Early stage; at pest appearance",
        targetPests: ["Sucking pests"],
        benefits: ["Systemic", "Good residual"],
        precautions: ["Rotate IRAC groups"],
        waitingPeriod: "14–21 days"
      },
      {
        name: "Dinotefuran 20% SG",
        type: "Insecticide",
        activeIngredient: "Dinotefuran",
        dosage: "0.3–0.5 mL/L (as per label)",
        applicationMethod: "Foliar (systemic)",
        timing: "Early stage; on whitefly incidence",
        targetPests: ["Whiteflies", "Other sucking pests"],
        benefits: ["Strong systemic control on whiteflies"],
        precautions: ["Respect PHI", "Avoid resistance selection"],
        waitingPeriod: "7–14 days"
      },

      // 4) Bollworms – mid to late crop stage
      {
        name: "Spinosad 45% SC",
        type: "Biopesticide",
        activeIngredient: "Spinosad",
        dosage: "1–1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of bollworms; repeat as needed",
        targetPests: ["Spotted", "American", "Pink bollworm"],
        benefits: ["Effective at low dose", "Favourable eco-profile"],
        precautions: ["Rotate with other MOAs", "Avoid peak pollinator activity"],
        waitingPeriod: "3–7 days"
      },
      {
        name: "Emamectin Benzoate 5% SG",
        type: "Insecticide",
        activeIngredient: "Emamectin Benzoate",
        dosage: "0.3–0.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At larvae detection",
        targetPests: ["Bollworms"],
        benefits: ["Good larvicidal action"],
        precautions: ["Rotate MOA", "Do not exceed dose"],
        waitingPeriod: "7 days"
      },
      {
        name: "Flubendiamide 480 SC",
        type: "Insecticide",
        activeIngredient: "Flubendiamide",
        dosage: "0.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At bollworm incidence",
        targetPests: ["Bollworms"],
        benefits: ["Strong on lepidopteran larvae"],
        precautions: ["Rotate MOA"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Indoxacarb 14.5% SC",
        type: "Insecticide",
        activeIngredient: "Indoxacarb",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At bollworm incidence",
        targetPests: ["Bollworms"],
        benefits: ["Ovicidal/larvicidal"],
        precautions: ["Follow resistance management"],
        waitingPeriod: "7–10 days"
      },
      {
        name: "Chlorantraniliprole 18.5% SC",
        type: "Insecticide",
        activeIngredient: "Chlorantraniliprole",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At bollworm incidence",
        targetPests: ["Bollworms"],
        benefits: ["Excellent larval control"],
        precautions: ["Avoid back-to-back sprays"],
        waitingPeriod: "7–10 days"
      },

      // 5) Fungal leaf spots & bacterial blight
      {
        name: "Mancozeb 75% WP",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On leaf spot/blight symptoms; repeat 7–10 days",
        targetPests: ["Alternaria", "Cercospora", "Myrothecium", "Bacterial blight (with copper)"] ,
        benefits: ["Broad-spectrum contact"],
        precautions: ["Ensure full coverage", "Respect PHI"],
        waitingPeriod: "7 days"
      },
      {
        name: "Propiconazole 25% EC",
        type: "Fungicide",
        activeIngredient: "Propiconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "Systemic follow-up after contact fungicide",
        targetPests: ["Alternaria leaf spot", "Rusts"],
        benefits: ["Systemic control"],
        precautions: ["Rotate FRAC groups"],
        waitingPeriod: "14 days"
      },
      {
        name: "Copper Oxychloride 50% WP",
        type: "Fungicide",
        activeIngredient: "Copper Oxychloride",
        dosage: "2–3 g/L",
        applicationMethod: "Foliar spray",
        timing: "At bacterial blight symptoms",
        targetPests: ["Bacterial blight"],
        benefits: ["Bactericidal/contact"],
        precautions: ["Avoid mixing with phosphates", "Prevent leaf scorch"],
        waitingPeriod: "7 days"
      },
      {
        name: "Zineb + Carbendazim",
        type: "Fungicide",
        activeIngredient: "Zineb + Carbendazim",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "For mixed infections",
        targetPests: ["Leaf spots", "Blights"],
        benefits: ["Dual contact + systemic"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "As per label"
      },

      // 6) Root/Stem rot – soil-borne
      {
        name: "Hexaconazole 5% EC (or Thiophanate-methyl)",
        type: "Fungicide",
        activeIngredient: "Hexaconazole / Thiophanate-methyl",
        dosage: "As per label",
        applicationMethod: "Soil drench / root zone spray",
        timing: "At early wilt/rot symptoms",
        targetPests: ["Rhizoctonia", "Fusarium", "Sclerotium"],
        benefits: ["Systemic disease control"],
        precautions: ["Do not overwater", "Ensure drainage"],
        waitingPeriod: "As per label"
      },
      {
        name: "Trichoderma viride (preventive)",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "2.5 kg/acre with FYM",
        applicationMethod: "Soil application",
        timing: "Preventive during land prep/early crop",
        targetPests: ["Soil-borne pathogens"],
        benefits: ["Suppression + soil health"],
        precautions: ["Avoid mixing with chemical fungicides"],
        waitingPeriod: "-"
      },

      // 7) Micronutrient sprays – reddening/deficiencies (handled in fertilizers as well)
      {
        name: "Zinc Sulphate foliar",
        type: "Biopesticide",
        activeIngredient: "Zinc",
        dosage: "5 g/L",
        applicationMethod: "Foliar spray",
        timing: "Flowering & boll development",
        targetPests: ["Micronutrient deficiency"],
        benefits: ["Corrects Zn deficiency"],
        precautions: ["Spray in cool hours"],
        waitingPeriod: "-"
      },
      {
        name: "Boron foliar",
        type: "Biopesticide",
        activeIngredient: "Boron",
        dosage: "1–1.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "Flowering & boll development",
        targetPests: ["Micronutrient deficiency"],
        benefits: ["Improves flowering/boll set"],
        precautions: ["Avoid overdose"],
        waitingPeriod: "-"
      },
      {
        name: "Magnesium Sulphate foliar",
        type: "Biopesticide",
        activeIngredient: "Magnesium",
        dosage: "5 g/L",
        applicationMethod: "Foliar spray",
        timing: "As needed; 2–3 sprays",
        targetPests: ["Magnesium deficiency"],
        benefits: ["Relieves reddening, improves chlorophyll"],
        precautions: ["Ensure full dissolution"],
        waitingPeriod: "-"
      },

      // 8) Mealybugs
      {
        name: "Buprofezin 25% SC",
        type: "Insecticide",
        activeIngredient: "Buprofezin",
        dosage: "1–1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On mealybug incidence",
        targetPests: ["Mealybugs"],
        benefits: ["Insect growth regulator"],
        precautions: ["Cover undersides and crevices"],
        waitingPeriod: "As per label"
      },
      {
        name: "Profenophos + Cypermethrin",
        type: "Insecticide",
        activeIngredient: "Profenophos + Cypermethrin",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "High infestation",
        targetPests: ["Mealybugs", "Mixed pests"],
        benefits: ["Knockdown + residual"],
        precautions: ["Follow safety PPE", "Rotate MOA"],
        waitingPeriod: "As per label"
      },
      {
        name: "Neem oil (Azadirachtin 1%)",
        type: "Biopesticide",
        activeIngredient: "Azadirachtin",
        dosage: "3–5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "Early/light infestations",
        targetPests: ["Mealybugs"],
        benefits: ["Eco-friendly", "Repellent/antifeedant"],
        precautions: ["Ensure emulsification", "Spray in evening"],
        waitingPeriod: "-"
      },

      // 9) Mites
      {
        name: "Fenpyroximate 5% EC",
        type: "Insecticide",
        activeIngredient: "Fenpyroximate",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "On red spider mite detection",
        targetPests: ["Mites"],
        benefits: ["Acaricidal action"],
        precautions: ["Avoid drift; cover undersides"],
        waitingPeriod: "As per label"
      },
      {
        name: "Spiromesifen 22.9% SC",
        type: "Insecticide",
        activeIngredient: "Spiromesifen",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "On mite incidence",
        targetPests: ["Mites"],
        benefits: ["Ovicidal/larvicidal on mites"],
        precautions: ["Alternate acaricides to avoid resistance"],
        waitingPeriod: "As per label"
      },
      {
        name: "Abamectin 1.9% EC",
        type: "Insecticide",
        activeIngredient: "Abamectin",
        dosage: "As per label (mild)",
        applicationMethod: "Foliar spray",
        timing: "Early mite infestations",
        targetPests: ["Mites"],
        benefits: ["Miticidal with translaminar action"],
        precautions: ["Avoid hot hours"],
        waitingPeriod: "As per label"
      }
    ],
    diseases: [
      {
        name: "Alternaria Leaf Spot",
        type: "Fungal",
        symptoms: ["Brown concentric spots on leaves"],
        causes: ["High humidity"],
        prevention: ["Use clean seed", "Proper spacing"],
        treatment: ["Mancozeb spray"],
        affectedParts: ["Leaves"],
        severity: "Medium"
      }
    ],
    generalTips: [
      "Maintain clean fields",
      "Use pheromone traps",
      "Balanced fertilization"
    ],
    growthStages: [
      { stage: "Vegetative (0-45 days)", duration: "45 days", care: ["Nitrogen top dressing", "Weed control"] },
      { stage: "Square & Flowering (45-90 days)", duration: "45 days", care: ["Irrigation", "Pest monitoring"] },
      { stage: "Boll formation (90-150 days)", duration: "60 days", care: ["Potassium application", "Bollworm control"] }
    ]
  },
  {
    cropName: "Potato",
    scientificName: "Solanum tuberosum",
    season: ["Rabi", "Summer"],
    soilType: ["Sandy loam", "Loamy"],
    phRange: "5.5 - 7.0",
    temperature: "15-20°C",
    rainfall: "300-500mm",
    fertilizers: [
      {
        name: "Urea (46% N) - Basal",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "25–30 kg/acre",
        applicationMethod: "Apply in furrows and mix lightly with soil",
        timing: "Before planting / at planting (basal dose)",
        benefits: ["Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Mix lightly with soil"]
      },
      {
        name: "DAP (18-46-0) - Basal",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "50–60 kg/acre",
        applicationMethod: "Apply in furrows and mix lightly with soil",
        timing: "Before planting / at planting (basal dose)",
        benefits: ["Provides N + P", "Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Mix lightly with soil"]
      },
      {
        name: "MOP (Muriate of Potash, 60% K₂O) - Basal",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "60–80 kg/acre",
        applicationMethod: "Apply in furrows and mix lightly with soil",
        timing: "Before planting / at planting (basal dose)",
        benefits: ["Provides Potassium (K)", "Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Mix lightly with soil"]
      },
      {
        name: "Gypsum (Calcium + Sulphur) - Basal",
        type: "Inorganic",
        npk: "Ca + S",
        dosage: "50–100 kg/acre",
        applicationMethod: "Apply in furrows and mix lightly with soil",
        timing: "Before planting / at planting (basal dose)",
        benefits: ["Provides Calcium and Sulphur", "Especially for low-S soils"],
        precautions: ["Apply in furrows", "Mix lightly with soil"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄·7H₂O) - Basal",
        type: "Inorganic",
        npk: "Zn",
        dosage: "8–10 kg/acre",
        applicationMethod: "Apply in furrows and mix lightly with soil",
        timing: "Before planting / at planting (basal dose)",
        benefits: ["Prevents zinc deficiency", "If Zn-deficient soils"],
        precautions: ["Apply only if zinc-deficient", "Mix lightly with soil"]
      },
      {
        name: "Urea (46% N) - Earthing Up",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "25–30 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Earthing up stage (25–30 DAP)",
        benefits: ["Promotes tuber bulking", "Vegetative growth", "Second nitrogen split"],
        precautions: ["Combine with weeding and earthing up", "Apply in moist soil"]
      },
      {
        name: "MOP (Muriate of Potash) - Earthing Up",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "20–30 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Earthing up stage (25–30 DAP)",
        benefits: ["If not fully applied at basal", "Promotes tuber bulking"],
        precautions: ["Combine with weeding and earthing up", "Apply in moist soil"]
      },
      {
        name: "Potassium Nitrate (KNO₃) - Foliar",
        type: "Inorganic",
        npk: "13-0-46",
        dosage: "1% solution (10 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Tuber bulking stage (45–55 DAP)",
        benefits: ["Maximizes starch accumulation", "Improves tuber size"],
        precautions: ["Spray in cool hours", "Maintain uniform coverage"]
      },
      {
        name: "Micronutrient mixture - Foliar",
        type: "Inorganic",
        npk: "Micronutrients",
        dosage: "As per deficiency symptoms",
        applicationMethod: "Foliar spray",
        timing: "Tuber bulking stage (45–55 DAP)",
        benefits: ["Corrects micronutrient deficiencies", "Based on visual deficiency"],
        precautions: ["Apply only if deficient", "Spray in cool hours"]
      },
      {
        name: "Humic acid or seaweed extract - Foliar",
        type: "Inorganic",
        npk: "Organic",
        dosage: "As per label",
        applicationMethod: "Foliar spray",
        timing: "Tuber bulking stage (45–55 DAP)",
        benefits: ["Improves nutrient uptake", "Optional but beneficial"],
        precautions: ["Follow label instructions", "Spray in cool hours"]
      }
    ],
    pesticides: [
      // Seed and soil-borne diseases
      {
        name: "Carbendazim 50% WP",
        type: "Fungicide",
        activeIngredient: "Carbendazim",
        dosage: "2 g/kg tuber",
        applicationMethod: "Seed tuber treatment",
        timing: "Before planting",
        targetPests: ["Seed rot", "Black scurf (Rhizoctonia)", "Dry rot", "Common scab"],
        benefits: ["Systemic protection", "Controls soil/seed fungi"],
        precautions: ["Use PPE", "Do not exceed dose", "Dispose slurry safely"],
        waitingPeriod: "-"
      },
      {
        name: "Mancozeb 75% WP - Seed Treatment",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "3 g/kg tuber",
        applicationMethod: "Seed tuber treatment",
        timing: "Before planting",
        targetPests: ["Seed rot", "Black scurf (Rhizoctonia)", "Dry rot", "Common scab"],
        benefits: ["Broad-spectrum protection"],
        precautions: ["Use PPE", "Do not exceed dose"],
        waitingPeriod: "-"
      },
      {
        name: "Trichoderma viride",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "4 g/kg tuber or 5 kg/acre",
        applicationMethod: "Seed tuber treatment / Soil application",
        timing: "Before planting / at planting",
        targetPests: ["Soil-borne pathogens (preventive)"],
        benefits: ["Biological suppression", "Improves soil health"],
        precautions: ["Store cool/dry", "Do not mix with fungicides"],
        waitingPeriod: "-"
      },
      {
        name: "Borax 6% solution",
        type: "Fungicide",
        activeIngredient: "Borax",
        dosage: "6% solution dip",
        applicationMethod: "Seed tuber dip",
        timing: "Before planting",
        targetPests: ["Common scab"],
        benefits: ["Helps prevent scab"],
        precautions: ["Use well-sprouted, disease-free seed tubers"],
        waitingPeriod: "-"
      },
      // Early season insect pests
      {
        name: "Chlorpyrifos 20% EC",
        type: "Insecticide",
        activeIngredient: "Chlorpyrifos",
        dosage: "2.5 mL/L",
        applicationMethod: "Soil drench or seed furrow spray",
        timing: "At planting or early season",
        targetPests: ["Cutworms", "White grubs"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      {
        name: "Fipronil 0.3% GR",
        type: "Insecticide",
        activeIngredient: "Fipronil",
        dosage: "10–15 kg/acre",
        applicationMethod: "Soil application",
        timing: "Before planting",
        targetPests: ["Cutworms", "White grubs"],
        benefits: ["Systemic action", "Long residual"],
        precautions: ["Apply in moist soil", "Avoid contact with seed"],
        waitingPeriod: "15 days"
      },
      {
        name: "Quinalphos 25% EC",
        type: "Insecticide",
        activeIngredient: "Quinalphos",
        dosage: "2 mL/L",
        applicationMethod: "Soil drench",
        timing: "At planting or early season",
        targetPests: ["Cutworms", "White grubs"],
        benefits: ["Broad spectrum control"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      // Aphids control
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of aphids (25–30 DAS)",
        targetPests: ["Aphids"],
        benefits: ["Systemic action", "Prevents virus transmission"],
        precautions: ["Start monitoring from 25–30 DAS", "Spray only when threshold >20/leaf"],
        waitingPeriod: "21 days"
      },
      {
        name: "Thiamethoxam 25% WG",
        type: "Insecticide",
        activeIngredient: "Thiamethoxam",
        dosage: "0.2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of aphids (25–30 DAS)",
        targetPests: ["Aphids"],
        benefits: ["Systemic action", "Long residual effect"],
        precautions: ["Start monitoring from 25–30 DAS", "Spray only when threshold >20/leaf"],
        waitingPeriod: "21 days"
      },
      {
        name: "Dimethoate 30% EC",
        type: "Insecticide",
        activeIngredient: "Dimethoate",
        dosage: "1.5–2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of aphids (25–30 DAS)",
        targetPests: ["Aphids"],
        benefits: ["Broad spectrum control"],
        precautions: ["Start monitoring from 25–30 DAS", "Spray only when threshold >20/leaf"],
        waitingPeriod: "15 days"
      },
      {
        name: "Acetamiprid 20% SP",
        type: "Insecticide",
        activeIngredient: "Acetamiprid",
        dosage: "0.3 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of aphids (25–30 DAS)",
        targetPests: ["Aphids"],
        benefits: ["Translaminar activity", "Effective against resistant strains"],
        precautions: ["Start monitoring from 25–30 DAS", "Spray only when threshold >20/leaf"],
        waitingPeriod: "14 days"
      },
      // Leaf miner control
      {
        name: "Abamectin 1.9% EC",
        type: "Insecticide",
        activeIngredient: "Abamectin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf mining",
        targetPests: ["Leaf miner"],
        benefits: ["Effective against leaf miners"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "7 days"
      },
      {
        name: "Spinosad 45% SC",
        type: "Insecticide",
        activeIngredient: "Spinosad",
        dosage: "1–1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of leaf mining",
        targetPests: ["Leaf miner"],
        benefits: ["Natural origin", "Effective against leaf miners"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "3 days"
      },
      // Tuber moth control
      {
        name: "Carbaryl 50% WP",
        type: "Insecticide",
        activeIngredient: "Carbaryl",
        dosage: "3 g/L",
        applicationMethod: "Field spray",
        timing: "At first signs of tuber moth damage",
        targetPests: ["Tuber moth (Field & Storage Pest)"],
        benefits: ["Effective against tuber moth"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      {
        name: "Malathion 5% dust",
        type: "Insecticide",
        activeIngredient: "Malathion",
        dosage: "As per label",
        applicationMethod: "Storage application",
        timing: "For storage tubers",
        targetPests: ["Tuber moth (Storage Pest)"],
        benefits: ["Storage pest control"],
        precautions: ["Mix in storage area", "Keep away from children"],
        waitingPeriod: "-"
      },
      {
        name: "Chlorpyrifos 20% EC - Tuber Moth",
        type: "Insecticide",
        activeIngredient: "Chlorpyrifos",
        dosage: "2.5 mL/L",
        applicationMethod: "Field spray on exposed tubers",
        timing: "At first signs of tuber moth damage",
        targetPests: ["Tuber moth (Field Pest)"],
        benefits: ["Effective against tuber moth"],
        precautions: ["Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "15 days"
      },
      // Early blight control
      {
        name: "Mancozeb 75% WP - Early Blight",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of early blight (30–35 DAS)",
        targetPests: ["Early blight (Alternaria solani)"],
        benefits: ["Broad-spectrum contact fungicide"],
        precautions: ["Start sprays 30–35 DAS if weather is dry and warm"],
        waitingPeriod: "7 days"
      },
      {
        name: "Zineb 75% WP",
        type: "Fungicide",
        activeIngredient: "Zineb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of early blight (30–35 DAS)",
        targetPests: ["Early blight (Alternaria solani)"],
        benefits: ["Contact fungicide"],
        precautions: ["Start sprays 30–35 DAS if weather is dry and warm"],
        waitingPeriod: "7 days"
      },
      {
        name: "Azoxystrobin 23% SC",
        type: "Fungicide",
        activeIngredient: "Azoxystrobin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of early blight (30–35 DAS)",
        targetPests: ["Early blight (Alternaria solani)"],
        benefits: ["Systemic control"],
        precautions: ["Start sprays 30–35 DAS if weather is dry and warm"],
        waitingPeriod: "As per label"
      },
      {
        name: "Tebuconazole + Trifloxystrobin",
        type: "Fungicide",
        activeIngredient: "Tebuconazole + Trifloxystrobin",
        dosage: "0.75–1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of early blight (30–35 DAS)",
        targetPests: ["Early blight (Alternaria solani)"],
        benefits: ["Dual mode of action"],
        precautions: ["Start sprays 30–35 DAS if weather is dry and warm"],
        waitingPeriod: "As per label"
      },
      // Late blight control
      {
        name: "Mancozeb 75% WP - Late Blight",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "Preventive spray every 7–10 days",
        targetPests: ["Late blight (Phytophthora infestans)"],
        benefits: ["Preventive spray every 7–10 days"],
        precautions: ["Begin preventive spraying at canopy closure or on disease forecast alerts"],
        waitingPeriod: "7 days"
      },
      {
        name: "Metalaxyl + Mancozeb (Ridomil Gold)",
        type: "Fungicide",
        activeIngredient: "Metalaxyl + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of late blight",
        targetPests: ["Late blight (Phytophthora infestans)"],
        benefits: ["Curative action"],
        precautions: ["Begin preventive spraying at canopy closure or on disease forecast alerts"],
        waitingPeriod: "As per label"
      },
      {
        name: "Cymoxanil + Mancozeb",
        type: "Fungicide",
        activeIngredient: "Cymoxanil + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of late blight",
        targetPests: ["Late blight (Phytophthora infestans)"],
        benefits: ["Curative action"],
        precautions: ["Begin preventive spraying at canopy closure or on disease forecast alerts"],
        waitingPeriod: "As per label"
      },
      {
        name: "Propineb",
        type: "Fungicide",
        activeIngredient: "Propineb",
        dosage: "2–2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of late blight",
        targetPests: ["Late blight (Phytophthora infestans)"],
        benefits: ["Curative action"],
        precautions: ["Begin preventive spraying at canopy closure or on disease forecast alerts"],
        waitingPeriod: "As per label"
      },
      {
        name: "Dimethomorph",
        type: "Fungicide",
        activeIngredient: "Dimethomorph",
        dosage: "2–2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "At first signs of late blight",
        targetPests: ["Late blight (Phytophthora infestans)"],
        benefits: ["Curative action"],
        precautions: ["Begin preventive spraying at canopy closure or on disease forecast alerts"],
        waitingPeriod: "As per label"
      },
      // Black scurf / stem canker control
      {
        name: "Validamycin 3% L",
        type: "Fungicide",
        activeIngredient: "Validamycin",
        dosage: "2 mL/L",
        applicationMethod: "Soil drench",
        timing: "At first signs of black scurf",
        targetPests: ["Black scurf / stem canker (Rhizoctonia solani)"],
        benefits: ["Systemic control"],
        precautions: ["Apply to moist soil", "Avoid runoff"],
        waitingPeriod: "As per label"
      },
      {
        name: "Trichoderma viride - Black Scurf",
        type: "Biopesticide",
        activeIngredient: "Trichoderma viride",
        dosage: "5 kg/acre mixed with FYM",
        applicationMethod: "Soil application",
        timing: "At planting",
        targetPests: ["Black scurf / stem canker (Rhizoctonia solani)"],
        benefits: ["Biological control"],
        precautions: ["Mix well with farmyard manure", "Apply before planting"],
        waitingPeriod: "-"
      },
      {
        name: "Carbendazim + Mancozeb - Black Scurf",
        type: "Fungicide",
        activeIngredient: "Carbendazim + Mancozeb",
        dosage: "As per label",
        applicationMethod: "Seed tuber treatment",
        timing: "Before planting",
        targetPests: ["Black scurf / stem canker (Rhizoctonia solani)"],
        benefits: ["Dual contact + systemic"],
        precautions: ["Check compatibility", "Do jar test"],
        waitingPeriod: "-"
      },
      // Bacterial wilt control
      {
        name: "Pseudomonas fluorescens - Bacterial Wilt",
        type: "Biopesticide",
        activeIngredient: "Pseudomonas fluorescens",
        dosage: "10 kg/acre with FYM",
        applicationMethod: "Soil application",
        timing: "At planting",
        targetPests: ["Bacterial wilt (Ralstonia solanacearum)"],
        benefits: ["Bio-control", "Growth promotion"],
        precautions: ["No chemical control once infected", "Crop rotation, disease-free seed, drainage are key"],
        waitingPeriod: "-"
      },
      // Soft rot / blackleg control
      {
        name: "Pseudomonas fluorescens - Soft Rot",
        type: "Biopesticide",
        activeIngredient: "Pseudomonas fluorescens",
        dosage: "10 kg/acre with FYM",
        applicationMethod: "Soil application",
        timing: "At planting",
        targetPests: ["Soft rot / blackleg"],
        benefits: ["Bio-control", "Growth promotion"],
        precautions: ["Avoid over-irrigation, water stagnation", "Use healthy seed, quick drying after harvest"],
        waitingPeriod: "-"
      }
    ],
    diseases: [
      {
        name: "Late Blight",
        type: "Fungal",
        symptoms: ["Water-soaked lesions on leaves", "Brown/black blight"],
        causes: ["Cool, humid weather"],
        prevention: ["Certified seed", "Ridging", "Field sanitation"],
        treatment: ["Mancozeb / Metalaxyl sprays"],
        affectedParts: ["Leaves", "Tubers"],
        severity: "High"
      }
    ],
    generalTips: [
      "Use healthy seed tubers",
      "Plant in cool season",
      "Maintain soil moisture"
    ],
    growthStages: [
      { stage: "Emergence (0-20 days)", duration: "20 days", care: ["Irrigation", "Weed control"] },
      { stage: "Tuber initiation (20-40 days)", duration: "20 days", care: ["Phosphorus and potassium", "Blight prevention"] },
      { stage: "Bulking (40-80 days)", duration: "40 days", care: ["Irrigation management", "Pest monitoring"] }
    ]
  },
  {
    cropName: "Wheat",
    scientificName: "Triticum aestivum",
    season: ["Rabi"],
    soilType: ["Loamy", "Clay loam", "Sandy loam"],
    phRange: "6.0 - 8.0",
    temperature: "15-25°C",
    rainfall: "400-600mm",
    fertilizers: [
      // A. At Sowing (Basal Dose)
      {
        name: "Urea (46% N) - Basal",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "35–40 kg/acre",
        applicationMethod: "Apply by broadcasting or placing in seed drill at 5–7 cm depth beside seed line",
        timing: "At sowing (basal dose)",
        benefits: ["Part of nitrogen applied at sowing", "Establishes strong early growth"],
        precautions: ["Don't mix with seeds", "Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "DAP (18-46-0) - Basal",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "40–50 kg/acre",
        applicationMethod: "Apply by broadcasting or placing in seed drill at 5–7 cm depth beside seed line",
        timing: "At sowing (basal dose)",
        benefits: ["Provides both N and P", "Establishes strong early growth"],
        precautions: ["Don't mix with seeds", "Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "MOP (Muriate of Potash, 60% K₂O) - Basal",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "20–25 kg/acre",
        applicationMethod: "Apply by broadcasting or placing in seed drill at 5–7 cm depth beside seed line",
        timing: "At sowing (basal dose)",
        benefits: ["Provides Potassium (K)", "Establishes strong early growth"],
        precautions: ["Don't mix with seeds", "Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "Gypsum (Calcium + Sulphur) - Basal",
        type: "Inorganic",
        npk: "Ca + S",
        dosage: "40–50 kg/acre",
        applicationMethod: "Apply by broadcasting or placing in seed drill at 5–7 cm depth beside seed line",
        timing: "At sowing (basal dose)",
        benefits: ["Provides Calcium and Sulphur", "Establishes strong early growth"],
        precautions: ["Don't mix with seeds", "Apply in moist soil", "Avoid over-application"]
      },
      {
        name: "Zinc Sulphate (ZnSO₄·7H₂O) - Basal",
        type: "Inorganic",
        npk: "Zn",
        dosage: "5–10 kg/acre",
        applicationMethod: "Apply by broadcasting or placing in seed drill at 5–7 cm depth beside seed line",
        timing: "At sowing (basal dose - if needed)",
        benefits: ["Prevents zinc deficiency", "Establishes strong early growth"],
        precautions: ["Apply only if needed", "Don't mix with seeds", "Apply in moist soil"]
      },

      // B. First Irrigation Stage (Crown Root Initiation – 20–25 Days After Sowing)
      {
        name: "Urea - First Irrigation (2nd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "First irrigation stage (crown root initiation – 20–25 DAS)",
        benefits: ["Most critical stage for nitrogen", "Supports crown root initiation"],
        precautions: ["Most critical stage for nitrogen", "Delayed or skipped application significantly reduces yield"]
      },

      // C. Tillering to Jointing Stage (40–45 Days After Sowing)
      {
        name: "Urea - Tillering/Jointing (3rd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "15–20 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Tillering to jointing stage (40–45 DAS)",
        benefits: ["Supports tillering and jointing", "Only if crop is pale or tillering is poor"],
        precautions: ["Apply only if crop is pale or tillering is poor", "Apply in moist soil"]
      },

      // D. Grain Filling Stage (Optional – 60–70 DAS)
      {
        name: "Urea - Grain Filling (4th split - Optional)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "10 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Grain filling stage (optional – 60–70 DAS)",
        benefits: ["Supports grain filling", "Only if needed"],
        precautions: ["Apply only if needed", "Apply in moist soil"]
      },
      {
        name: "SOP (Sulphate of Potash) - Grain Filling",
        type: "Inorganic",
        npk: "0-0-50",
        dosage: "10–15 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Grain filling stage (optional – 60–70 DAS)",
        benefits: ["Improves grain quality", "Optional but beneficial"],
        precautions: ["Apply only if needed", "Apply in moist soil"]
      }
    ],
    pesticides: [
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.5-0.75 ml/liter",
        applicationMethod: "Seed treatment or foliar spray",
        timing: "Seed treatment or when aphids appear",
        targetPests: ["Aphids", "Termites", "Jassids"],
        benefits: ["Systemic action", "Long residual effect", "Low toxicity to beneficial insects"],
        precautions: ["Don't exceed recommended dose", "Use protective equipment", "Follow safety guidelines"],
        waitingPeriod: "21 days"
      }
    ],
    diseases: [
      {
        name: "Rust",
        type: "Fungal",
        symptoms: ["Orange-yellow pustules on leaves", "Stem and leaf rust", "Reduced grain size", "Premature ripening"],
        causes: ["High humidity", "Warm temperature", "Dense planting", "Susceptible varieties"],
        prevention: ["Use resistant varieties", "Proper spacing", "Crop rotation", "Timely sowing"],
        treatment: ["Propiconazole spray", "Tebuconazole application", "Remove infected debris"],
        affectedParts: ["Leaves", "Stems", "Grains"],
        severity: "High"
      }
    ],
    generalTips: [
      "Sow at proper time (October-November)",
      "Use certified seeds",
      "Maintain proper spacing (20-25 cm row to row)",
      "Control weeds effectively",
      "Monitor for pest and disease symptoms"
    ],
    growthStages: [
      {
        stage: "Germination (0-7 days)",
        duration: "7 days",
        care: ["Ensure proper soil moisture", "Protect from birds", "Check germination percentage"]
      },
      {
        stage: "Tillering (20-45 days)",
        duration: "25 days",
        care: ["Apply nitrogen fertilizer", "Control weeds", "Monitor for pests"]
      },
      {
        stage: "Flowering (60-80 days)",
        duration: "20 days",
        care: ["Apply final nitrogen dose", "Control diseases", "Monitor water requirement"]
      },
      {
        stage: "Grain Development (80-120 days)",
        duration: "40 days",
        care: ["Gradual water reduction", "Monitor for diseases", "Protect from lodging"]
      }
    ]
  },
  {
    cropName: "Tomato",
    scientificName: "Solanum lycopersicum",
    season: ["Kharif", "Rabi", "Summer"],
    soilType: ["Sandy loam", "Loamy", "Clay loam"],
    phRange: "6.0 - 7.0",
    temperature: "20-30°C",
    rainfall: "600-800mm",
    fertilizers: [
      // A. At Transplanting (Basal Dose)
      {
        name: "Urea (46% N) - Basal",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Apply in furrows near root zone or as banding before transplanting",
        timing: "At transplanting (basal dose)",
        benefits: ["Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Avoid contact with stem"]
      },
      {
        name: "DAP (18-46-0) - Basal",
        type: "Inorganic",
        npk: "18-46-0",
        dosage: "40–50 kg/acre",
        applicationMethod: "Apply in furrows near root zone or as banding before transplanting",
        timing: "At transplanting (basal dose)",
        benefits: ["Provides both N and P", "Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Avoid contact with stem"]
      },
      {
        name: "MOP (Muriate of Potash 60% K₂O) - Basal",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "40–50 kg/acre",
        applicationMethod: "Apply in furrows near root zone or as banding before transplanting",
        timing: "At transplanting (basal dose)",
        benefits: ["Provides Potassium (K)", "Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Avoid contact with stem"]
      },
      {
        name: "Gypsum - Basal",
        type: "Inorganic",
        npk: "Ca + S",
        dosage: "50 kg/acre",
        applicationMethod: "Apply in furrows near root zone or as banding before transplanting",
        timing: "At transplanting (basal dose)",
        benefits: ["Provides calcium and sulphur", "Establishes strong early root and shoot development"],
        precautions: ["Apply in furrows", "Avoid contact with stem"]
      },
      {
        name: "Zinc Sulphate - Basal",
        type: "Inorganic",
        npk: "Zn",
        dosage: "5–10 kg/acre",
        applicationMethod: "Apply in furrows near root zone or as banding before transplanting",
        timing: "At transplanting (basal dose - if soil is zinc-deficient)",
        benefits: ["Prevents zinc deficiency", "Establishes strong early root and shoot development"],
        precautions: ["Apply only if soil is zinc-deficient", "Apply in furrows"]
      },

      // B. Vegetative Stage (20–25 Days After Transplanting)
      {
        name: "Urea - Vegetative (2nd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20–25 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Vegetative stage (20–25 DAT)",
        benefits: ["Supports vegetative growth", "Second nitrogen split"],
        precautions: ["Apply in moist soil", "Avoid contact with stem"]
      },
      {
        name: "MOP - Vegetative (2nd split)",
        type: "Inorganic",
        npk: "0-0-60",
        dosage: "20–25 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Vegetative stage (20–25 DAT - if split)",
        benefits: ["Supports vegetative growth", "If split application"],
        precautions: ["Apply in moist soil", "Avoid contact with stem"]
      },
      {
        name: "Magnesium Sulphate - Vegetative",
        type: "Inorganic",
        npk: "Mg",
        dosage: "5 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Vegetative stage (20–25 DAT - if needed)",
        benefits: ["Corrects magnesium deficiency", "If deficiency symptoms appear"],
        precautions: ["Apply only if needed", "Apply in moist soil"]
      },

      // C. Flowering & Fruit Setting Stage (35–45 Days)
      {
        name: "Urea - Flowering (3rd split)",
        type: "Inorganic",
        npk: "46-0-0",
        dosage: "20 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Flowering & fruit setting stage (35–45 DAT)",
        benefits: ["Supports flowering", "Fruit setting"],
        precautions: ["Apply in moist soil", "Avoid contact with stem"]
      },
      {
        name: "SOP (Sulphate of Potash) - Flowering",
        type: "Inorganic",
        npk: "0-0-50",
        dosage: "25–30 kg/acre",
        applicationMethod: "Broadcast and incorporate",
        timing: "Flowering & fruit setting stage (35–45 DAT)",
        benefits: ["Better than MOP during fruiting", "Improves fruit setting"],
        precautions: ["Apply in moist soil", "Avoid contact with stem"]
      },
      {
        name: "Boron (Borax) - Foliar",
        type: "Inorganic",
        npk: "B",
        dosage: "0.2% (2 g/L)",
        applicationMethod: "Foliar spray",
        timing: "Flowering & fruit setting stage (35–45 DAT)",
        benefits: ["Improves fruit setting", "Prevents boron deficiency"],
        precautions: ["Spray in cool hours", "Maintain uniform coverage"]
      },

      // D. Fruit Development Stage (50–70 Days)
      {
        name: "Potassium Nitrate (KNO₃) - Foliar",
        type: "Inorganic",
        npk: "13-0-45",
        dosage: "1% (10 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Fruit development stage (50–70 DAT)",
        benefits: ["Improves fruit size, color, taste", "Boosts fruit development"],
        precautions: ["Spray in cool hours", "Maintain uniform coverage"]
      },
      {
        name: "Calcium Nitrate - Foliar",
        type: "Inorganic",
        npk: "15-0-0",
        dosage: "1% (10 g/L water)",
        applicationMethod: "Foliar spray",
        timing: "Fruit development stage (50–70 DAT)",
        benefits: ["Prevents blossom end rot", "Improves fruit quality"],
        precautions: ["Don't mix with phosphates", "Spray in cool hours"]
      },
      {
        name: "Micronutrient mixture - Foliar",
        type: "Inorganic",
        npk: "Mixed",
        dosage: "1–2 sprays based on deficiency symptoms",
        applicationMethod: "Foliar spray",
        timing: "Fruit development stage (50–70 DAT)",
        benefits: ["Corrects micronutrient deficiencies", "Improves fruit quality"],
        precautions: ["Based on deficiency symptoms", "Spray in cool hours"]
      }
    ],
    pesticides: [
      // 1. FUNGAL DISEASES & FUNGICIDES
      // A. Early Blight (Alternaria solani)
      {
        name: "Mancozeb 75% WP",
        type: "Fungicide",
        activeIngredient: "Mancozeb",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of early blight symptoms",
        targetPests: ["Early Blight (Alternaria solani)"],
        benefits: ["Broad-spectrum contact fungicide", "Protective action"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },
      {
        name: "Chlorothalonil 75% WP",
        type: "Fungicide",
        activeIngredient: "Chlorothalonil",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of early blight symptoms",
        targetPests: ["Early Blight (Alternaria solani)"],
        benefits: ["Broad-spectrum contact fungicide", "Protective action"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },
      {
        name: "Azoxystrobin 23% SC",
        type: "Fungicide",
        activeIngredient: "Azoxystrobin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of early blight symptoms",
        targetPests: ["Early Blight (Alternaria solani)"],
        benefits: ["Systemic fungicide", "Curative and protective action"],
        precautions: ["Rotate with other fungicides", "Do not exceed recommended dose"],
        waitingPeriod: "14 days"
      },
      {
        name: "Tebuconazole + Trifloxystrobin",
        type: "Fungicide",
        activeIngredient: "Tebuconazole + Trifloxystrobin",
        dosage: "0.75–1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of early blight symptoms",
        targetPests: ["Early Blight (Alternaria solani)"],
        benefits: ["Dual action for broad-spectrum control"],
        precautions: ["Follow manufacturer's instructions", "Ensure good coverage"],
        waitingPeriod: "10 days"
      },

      // B. Late Blight (Phytophthora infestans)
      {
        name: "Metalaxyl + Mancozeb (Ridomil Gold)",
        type: "Fungicide",
        activeIngredient: "Metalaxyl + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of late blight symptoms",
        targetPests: ["Late Blight (Phytophthora infestans)"],
        benefits: ["Systemic fungicide", "Curative and protective action"],
        precautions: ["Rotate with other fungicides", "Do not exceed recommended dose"],
        waitingPeriod: "14 days"
      },
      {
        name: "Cymoxanil + Mancozeb",
        type: "Fungicide",
        activeIngredient: "Cymoxanil + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of late blight symptoms",
        targetPests: ["Late Blight (Phytophthora infestans)"],
        benefits: ["Dual action for broad-spectrum control"],
        precautions: ["Follow manufacturer's instructions", "Ensure good coverage"],
        waitingPeriod: "10 days"
      },
      {
        name: "Dimethomorph 50% WP",
        type: "Fungicide",
        activeIngredient: "Dimethomorph",
        dosage: "1.5–2 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of late blight symptoms",
        targetPests: ["Late Blight (Phytophthora infestans)"],
        benefits: ["Systemic fungicide", "Curative and protective action"],
        precautions: ["Rotate with other fungicides", "Do not exceed recommended dose"],
        waitingPeriod: "14 days"
      },
      {
        name: "Zoxamide + Mancozeb",
        type: "Fungicide",
        activeIngredient: "Zoxamide + Mancozeb",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of late blight symptoms",
        targetPests: ["Late Blight (Phytophthora infestans)"],
        benefits: ["Dual action for broad-spectrum control"],
        precautions: ["Follow manufacturer's instructions", "Ensure good coverage"],
        waitingPeriod: "10 days"
      },

      // C. Leaf Spot / Septoria Blight
      {
        name: "Copper Oxychloride 50% WP",
        type: "Fungicide",
        activeIngredient: "Copper Oxychloride",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of leaf spot symptoms",
        targetPests: ["Leaf Spot / Septoria Blight"],
        benefits: ["Broad-spectrum contact fungicide", "Protective action"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },

      // D. Powdery Mildew
      {
        name: "Hexaconazole 5% EC",
        type: "Fungicide",
        activeIngredient: "Hexaconazole",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of powdery mildew symptoms",
        targetPests: ["Powdery Mildew"],
        benefits: ["Systemic fungicide", "Curative and protective action"],
        precautions: ["Rotate with other fungicides", "Do not exceed recommended dose"],
        waitingPeriod: "14 days"
      },
      {
        name: "Sulphur 80% WP",
        type: "Fungicide",
        activeIngredient: "Sulphur",
        dosage: "2 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of powdery mildew symptoms",
        targetPests: ["Powdery Mildew"],
        benefits: ["Contact fungicide", "Best for early-stage infection"],
        precautions: ["Ensure thorough coverage", "Reapply after rain"],
        waitingPeriod: "7 days"
      },
      {
        name: "Trifloxystrobin + Tebuconazole",
        type: "Fungicide",
        activeIngredient: "Trifloxystrobin + Tebuconazole",
        dosage: "0.75–1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of powdery mildew symptoms",
        targetPests: ["Powdery Mildew"],
        benefits: ["Dual action for broad-spectrum control"],
        precautions: ["Follow manufacturer's instructions", "Ensure good coverage"],
        waitingPeriod: "10 days"
      },

      // 2. BACTERIAL DISEASES & BACTERICIDES
      // A. Bacterial Spot / Canker / Speck
      {
        name: "Copper Hydroxide 77% WP",
        type: "Fungicide", // Also acts as bactericide
        activeIngredient: "Copper Hydroxide",
        dosage: "2.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of bacterial spot symptoms",
        targetPests: ["Bacterial Spot / Canker / Speck"],
        benefits: ["Controls bacterial and some fungal diseases"],
        precautions: ["Avoid spraying in hot weather", "Can cause phytotoxicity if overused"],
        waitingPeriod: "14 days"
      },
      {
        name: "Streptomycin + Tetracycline (Plantomycin)",
        type: "Fungicide", // Also acts as bactericide
        activeIngredient: "Streptomycin + Tetracycline",
        dosage: "0.5 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of bacterial spot symptoms",
        targetPests: ["Bacterial Spot / Canker / Speck"],
        benefits: ["Controls bacterial diseases"],
        precautions: ["Follow label instructions", "Ensure good coverage"],
        waitingPeriod: "7 days"
      },
      {
        name: "Kasugamycin 5%",
        type: "Fungicide", // Also acts as bactericide
        activeIngredient: "Kasugamycin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of bacterial spot symptoms",
        targetPests: ["Bacterial Spot / Canker / Speck"],
        benefits: ["Controls bacterial diseases"],
        precautions: ["Follow label instructions", "Ensure good coverage"],
        waitingPeriod: "7 days"
      },

      // 3. VIRAL DISEASES & VECTOR CONTROL
      // A. Tomato Leaf Curl Virus (ToLCV) - Vector: Whiteflies
      {
        name: "Imidacloprid 17.8% SL",
        type: "Insecticide",
        activeIngredient: "Imidacloprid",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies (ToLCV vector)",
        targetPests: ["Whiteflies (ToLCV vector)"],
        benefits: ["Systemic action", "Effective against sucking pests"],
        precautions: ["Use protective equipment", "Avoid spraying during peak pollinator activity"],
        waitingPeriod: "21 days"
      },
      {
        name: "Thiamethoxam 25% WG",
        type: "Insecticide",
        activeIngredient: "Thiamethoxam",
        dosage: "0.25 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies (ToLCV vector)",
        targetPests: ["Whiteflies (ToLCV vector)"],
        benefits: ["Systemic and contact action", "Long residual effect"],
        precautions: ["Rotate with other insecticides", "Follow safety guidelines"],
        waitingPeriod: "21 days"
      },
      {
        name: "Fipronil 5% SC",
        type: "Insecticide",
        activeIngredient: "Fipronil",
        dosage: "1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies (ToLCV vector)",
        targetPests: ["Whiteflies (ToLCV vector)"],
        benefits: ["Contact and systemic action", "Effective against resistant strains"],
        precautions: ["Highly toxic", "Use protective gear", "Follow safety instructions"],
        waitingPeriod: "21 days"
      },
      {
        name: "Neem Oil (Azadirachtin 1%)",
        type: "Biopesticide",
        activeIngredient: "Azadirachtin",
        dosage: "5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies (ToLCV vector - eco-friendly option)",
        targetPests: ["Whiteflies (ToLCV vector)"],
        benefits: ["Eco-friendly", "Antifeedant and repellent action"],
        precautions: ["Spray in evening", "Ensure good coverage"],
        waitingPeriod: "0 days"
      },

      // 4. MAJOR INSECT PESTS & INSECTICIDES
      // A. Fruit Borer / Tomato Caterpillar (Helicoverpa armigera)
      {
        name: "Emamectin Benzoate 5% SG",
        type: "Insecticide",
        activeIngredient: "Emamectin Benzoate",
        dosage: "0.4 g/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of fruit borer symptoms",
        targetPests: ["Fruit Borer / Tomato Caterpillar (Helicoverpa armigera)"],
        benefits: ["Translaminar action", "Good ovicidal and larvicidal activity"],
        precautions: ["Rotate with other modes of action", "Follow safety instructions"],
        waitingPeriod: "7 days"
      },
      {
        name: "Spinosad 45% SC",
        type: "Biopesticide",
        activeIngredient: "Spinosad",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of fruit borer symptoms",
        targetPests: ["Fruit Borer / Tomato Caterpillar (Helicoverpa armigera)"],
        benefits: ["Natural origin", "Effective against lepidopteran pests"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "3 days"
      },
      {
        name: "Chlorantraniliprole 18.5% SC",
        type: "Insecticide",
        activeIngredient: "Chlorantraniliprole",
        dosage: "0.3 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of fruit borer symptoms",
        targetPests: ["Fruit Borer / Tomato Caterpillar (Helicoverpa armigera)"],
        benefits: ["Broad-spectrum control", "Long residual activity"],
        precautions: ["Follow label instructions", "Use protective clothing"],
        waitingPeriod: "5 days"
      },
      {
        name: "Neem Oil (Azadirachtin 1%) - Fruit Borer",
        type: "Biopesticide",
        activeIngredient: "Azadirachtin",
        dosage: "5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of fruit borer symptoms (eco-friendly option)",
        targetPests: ["Fruit Borer / Tomato Caterpillar (Helicoverpa armigera)"],
        benefits: ["Eco-friendly", "Antifeedant and repellent action"],
        precautions: ["Spray in evening", "Ensure good coverage"],
        waitingPeriod: "0 days"
      },

      // B. Whitefly (Bemisia tabaci)
      {
        name: "Pyriproxyfen 10% EC",
        type: "Insecticide",
        activeIngredient: "Pyriproxyfen",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies",
        targetPests: ["Whitefly (Bemisia tabaci)"],
        benefits: ["Insect growth regulator", "Effective against nymphs"],
        precautions: ["Ensure good coverage", "Avoid spraying during flowering if possible"],
        waitingPeriod: "14 days"
      },
      {
        name: "Buprofezin 25% SC",
        type: "Insecticide",
        activeIngredient: "Buprofezin",
        dosage: "1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of whiteflies",
        targetPests: ["Whitefly (Bemisia tabaci)"],
        benefits: ["Insect growth regulator", "Effective against nymphs"],
        precautions: ["Ensure good coverage", "Avoid spraying during flowering if possible"],
        waitingPeriod: "14 days"
      },

      // C. Thrips & Aphids
      {
        name: "Fipronil 5% SC - Thrips",
        type: "Insecticide",
        activeIngredient: "Fipronil",
        dosage: "1.5 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of thrips and aphids",
        targetPests: ["Thrips", "Aphids"],
        benefits: ["Contact and systemic action", "Effective against resistant strains"],
        precautions: ["Highly toxic", "Use protective gear", "Follow safety instructions"],
        waitingPeriod: "21 days"
      },
      {
        name: "Spinosad 45% SC - Thrips",
        type: "Biopesticide",
        activeIngredient: "Spinosad",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of thrips and aphids",
        targetPests: ["Thrips", "Aphids"],
        benefits: ["Natural origin", "Effective against various pests"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "3 days"
      },
      {
        name: "Lambda Cyhalothrin 5% EC",
        type: "Insecticide",
        activeIngredient: "Lambda Cyhalothrin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of thrips and aphids",
        targetPests: ["Thrips", "Aphids"],
        benefits: ["Contact action", "Fast knockdown"],
        precautions: ["Highly toxic", "Use protective gear", "Follow safety instructions"],
        waitingPeriod: "7 days"
      },
      {
        name: "Thiamethoxam + Lambda Cyhalothrin",
        type: "Insecticide",
        activeIngredient: "Thiamethoxam + Lambda Cyhalothrin",
        dosage: "0.75–1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of thrips and aphids",
        targetPests: ["Thrips", "Aphids"],
        benefits: ["Combination product for broad-spectrum control"],
        precautions: ["Highly toxic", "Use protective gear", "Follow safety instructions"],
        waitingPeriod: "21 days"
      },

      // D. Leaf Miner (Liriomyza spp.)
      {
        name: "Abamectin 1.9% EC",
        type: "Insecticide",
        activeIngredient: "Abamectin",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of leaf miner symptoms",
        targetPests: ["Leaf Miner (Liriomyza spp.)"],
        benefits: ["Translaminar activity", "Effective at low doses"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "7 days"
      },
      {
        name: "Spinosad 45% SC - Leaf Miner",
        type: "Biopesticide",
        activeIngredient: "Spinosad",
        dosage: "1 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of leaf miner symptoms",
        targetPests: ["Leaf Miner (Liriomyza spp.)"],
        benefits: ["Natural origin", "Effective against various pests"],
        precautions: ["Spray in evening", "Avoid contact with eyes"],
        waitingPeriod: "3 days"
      },
      {
        name: "Flubendiamide 39.35% SC",
        type: "Insecticide",
        activeIngredient: "Flubendiamide",
        dosage: "0.2 mL/L",
        applicationMethod: "Foliar spray",
        timing: "On appearance of leaf miner symptoms",
        targetPests: ["Leaf Miner (Liriomyza spp.)"],
        benefits: ["Novel mode of action", "Effective against resistant pests"],
        precautions: ["Do not exceed recommended dose", "Ensure good coverage"],
        waitingPeriod: "14 days"
      }
    ],
    diseases: [
      {
        name: "Early Blight",
        type: "Fungal",
        symptoms: ["Dark brown spots on leaves", "Concentric rings", "Yellowing of leaves", "Fruit rot"],
        causes: ["High humidity", "Warm temperature", "Poor air circulation", "Infected debris"],
        prevention: ["Crop rotation", "Proper spacing", "Good drainage", "Field sanitation"],
        treatment: ["Chlorothalonil spray", "Mancozeb application", "Remove infected plants"],
        affectedParts: ["Leaves", "Stems", "Fruits"],
        severity: "Medium"
      }
    ],
    generalTips: [
      "Use disease-resistant varieties",
      "Maintain proper spacing (60x45 cm)",
      "Provide support with stakes or trellis",
      "Practice crop rotation",
      "Monitor regularly for pests and diseases"
    ],
    growthStages: [
      {
        stage: "Nursery (0-25 days)",
        duration: "25 days",
        care: ["Sow in raised beds", "Maintain proper moisture", "Protect from direct sun"]
      },
      {
        stage: "Transplanting (25-30 days)",
        duration: "5 days",
        care: ["Transplant healthy seedlings", "Maintain proper spacing", "Apply basal fertilizers"]
      },
      {
        stage: "Vegetative (30-60 days)",
        duration: "30 days",
        care: ["Apply nitrogen fertilizer", "Control weeds", "Provide support"]
      },
      {
        stage: "Flowering (60-90 days)",
        duration: "30 days",
        care: ["Apply phosphorus fertilizer", "Control pests", "Monitor for diseases"]
      },
      {
        stage: "Fruiting (90-150 days)",
        duration: "60 days",
        care: ["Apply potassium fertilizer", "Control fruit borer", "Harvest at proper stage"]
      }
    ],
    mixtures: [
      {
        stage: "Flowering",
        target: 'Nutrient',
        useCase: "Improve fruit set and reduce blossom end rot",
        ingredients: [
          { name: "Calcium Nitrate", dose: "1 kg/acre", type: "Fertilizer", method: "Foliar" },
          { name: "NPK 19:19:19", dose: "1 kg/acre", type: "Fertilizer", method: "Foliar" }
        ],
        frequency: "Every 10-12 days (2-3 sprays)",
        benefits: ["Better fruit set", "Reduced blossom end rot"],
        precautions: ["Do not mix Ca with phosphates in tank", "Spray in cool hours"]
      },
      {
        stage: "Fruiting",
        target: 'Pest',
        useCase: "Control fruit borer and thrips",
        ingredients: [
          { name: "Spinosad 45% SC", dose: "0.4 ml/L", type: "Insecticide", method: "Foliar" }
        ],
        frequency: "Repeat after 7 days if threshold exceeds",
        benefits: ["Effective control with low residue"],
        precautions: ["Rotate with other modes", "Avoid spraying during pollinator activity"]
      }
    ]
  }
];
