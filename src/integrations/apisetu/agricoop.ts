import { apiSetuFetch } from "./client";

// Placeholder types; adjust once exact API schema is confirmed
export interface SchemeItem {
  id?: string;
  name: string;
  description?: string;
  category?: string;
  department?: string;
  url?: string;
}

export async function fetchFarmingSchemes(): Promise<SchemeItem[]> {
  const path = import.meta.env.VITE_APISETU_AGRICOOP_SCHEMES_PATH || "/agricoop/schemes";
  try {
    const data = await apiSetuFetch<any>(path);
    if (Array.isArray(data)) return data as SchemeItem[];
    if (data?.results && Array.isArray(data.results)) return data.results as SchemeItem[];
    return [];
  } catch (e) {
    console.error("Failed fetching farming schemes:", e);
    return [];
  }
}

export async function fetchWelfareSchemes(): Promise<SchemeItem[]> {
  const basePath = import.meta.env.VITE_APISETU_WELFARE_SCHEMES_PATH || "/myscheme/schemes";
  const query = import.meta.env.VITE_APISETU_WELFARE_QUERY || ""; // e.g., ?ministry=agri or ?category=farmer
  const path = `${basePath}${query}`;
  try {
    const data = await apiSetuFetch<any>(path);
    if (Array.isArray(data)) return data as SchemeItem[];
    if (data?.results && Array.isArray(data.results)) return data.results as SchemeItem[];
    return [];
  } catch (e) {
    console.error("Failed fetching welfare schemes:", e);
    return [];
  }
}


