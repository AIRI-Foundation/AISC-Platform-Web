import { api } from "../lib/api";
import type { UserCompany } from "../types/dashboard";

export async function searchCompanies(query: string): Promise<UserCompany[]> {
  const res = await api.get("/api/Company/search", {
    params: { Q: query, Page: 1, PageSize: 8 },
  });
  return res.data.data.items;
}
