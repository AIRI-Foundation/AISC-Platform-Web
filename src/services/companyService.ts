import { api } from "../lib/api";
import type { AddCompanyRequest } from "../types/api";

export async function addCompany(body: AddCompanyRequest) {
  const res = await api.post("/api/Company", body);
  return res.data;
}
