export interface ApiSetuClientOptions {
  baseUrl?: string;
  apiKey?: string;
  authorizationHeaderName?: string;
}

const DEFAULT_BASE_URL = import.meta.env.VITE_APISETU_BASE_URL || "";
const DEFAULT_API_KEY = import.meta.env.VITE_APISETU_API_KEY || "";

// Common client for API Setu collections (e.g., agricoop, myscheme)
export async function apiSetuFetch<T>(
  path: string,
  options: RequestInit = {},
  clientOptions: ApiSetuClientOptions = {}
): Promise<T> {
  const baseUrl = (clientOptions.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "");
  const apiKey = clientOptions.apiKey ?? DEFAULT_API_KEY;
  const authHeaderName = clientOptions.authorizationHeaderName ?? "X-APISETU-API-KEY";

  if (!baseUrl) throw new Error("API Setu base URL not configured (VITE_APISETU_BASE_URL)");

  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  if (apiKey) headers.set(authHeaderName, apiKey);

  const res = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API Setu request failed ${res.status}: ${text || res.statusText}`);
  }

  return (await res.json()) as T;
}


