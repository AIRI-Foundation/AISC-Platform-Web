import { api } from "../lib/api";

export async function uploadDocument(file: File): Promise<string> {
  const body = new FormData();
  body.append("File", file);
  const res = await api.post("/api/Documents/upload", body);
  return res.data.data;
}

export async function submitMilestone(
  stageNumber: number,
  milestoneNumber: number,
  documentUrl: string,
): Promise<void> {
  await api.post(
    `/api/MilestoneTracker/stage/${stageNumber}/milestone/${milestoneNumber}/submit`,
    { documentUrl },
  );
}
