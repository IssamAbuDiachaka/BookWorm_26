import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

interface HealthResponse {
  status: string;
  service: string;
  timestamp: string;
}

export function useHealth() {
  return useQuery({
    queryKey: ["health"],
    queryFn: async (): Promise<HealthResponse> => {
      const { data } = await api.get<HealthResponse>("/health");
      return data;
    },
  });
}
