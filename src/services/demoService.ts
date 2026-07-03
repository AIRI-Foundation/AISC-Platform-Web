import { api } from "../lib/api";
import type { BookDemoRequest } from "../types/api";

export async function bookDemo(body: BookDemoRequest) {
  const res = await api.post("/api/Demo", body);
  return res.data;
}
