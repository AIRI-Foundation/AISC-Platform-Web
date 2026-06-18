import { api } from "../lib/api";

export interface MilestoneTrackerStage {
  stageNumber: number;
  title: string;
  status: string;
  milestonesVerified: number;
  totalMilestones: number;
}

export interface MilestoneTrackerSummary {
  totalStages: number;
  stagesCompleted: number;
  milestonesCompleted: number;
  totalMilestones: number;
  stages: MilestoneTrackerStage[];
}

export interface MilestoneDetail {
  milestoneNumber: number;
  title: string;
  description: string;
  status: string;
  submittedAt: string | null;
  verifiedAt: string | null;
  reviewNotes: string | null;
  documentUrl: string | null;
}

export interface StageDetail {
  stageNumber: number;
  title: string;
  status: string;
  milestonesVerified: number;
  totalMilestones: number;
  milestones: MilestoneDetail[];
}

export async function getMilestoneTracker(): Promise<MilestoneTrackerSummary> {
  const res = await api.get("/api/MilestoneTracker");
  return res.data.data;
}

export async function getStageDetail(stageNumber: number): Promise<StageDetail> {
  const res = await api.get(`/api/MilestoneTracker/stage/${stageNumber}`);
  return res.data.data;
}

// Step 1 — upload the file, get back a URL
export async function uploadDocument(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("File", file);
  const res = await api.post("/api/Documents/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data.url;
}

// Step 2 — submit the milestone with the document URL
export async function submitMilestone(
  stageNumber: number,
  milestoneNumber: number,
  documentUrl: string | null = null,
  notes: string | null = null
): Promise<void> {
  await api.post(
    `/api/MilestoneTracker/stage/${stageNumber}/milestone/${milestoneNumber}/submit`,
    { documentUrl, notes }
  );
}