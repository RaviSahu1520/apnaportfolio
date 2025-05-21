import { QueryClient } from "@tanstack/react-query";

// Function to handle API response errors
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errData;
    try {
      errData = await res.json();
    } catch (e) {
      throw new Error(res.statusText);
    }
    throw new Error(errData.message || res.statusText);
  }
}

// Base function for making API requests
export async function apiRequest(
  method: string,
  endpoint: string,
  data?: any
): Promise<any> {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const url = `${baseUrl}${endpoint}`;
  
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (data && method !== "GET") {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);
  await throwIfResNotOk(res);
  return res.json();
}

// Define behavior for unauthorized responses
type UnauthorizedBehavior = "returnNull" | "throw";

// Query function generator with error handling
export const getQueryFn = <T>(options: {
  on401: UnauthorizedBehavior;
}) => {
  return async ({ queryKey }: any): Promise<T | null> => {
    const [url] = queryKey;
    try {
      const res = await fetch(url, {
        credentials: "include",
      });

      if (res.status === 401) {
        if (options.on401 === "returnNull") {
          return null;
        } else {
          throw new Error("Unauthorized");
        }
      }

      await throwIfResNotOk(res);
      return await res.json();
    } catch (error) {
      console.error("Query error:", error);
      throw error;
    }
  };
};

// Initialize QueryClient with default options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn<any>({ on401: "throw" }),
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});