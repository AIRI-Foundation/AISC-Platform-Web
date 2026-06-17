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

export async function submitMilestone(
  stageNumber: number,
  milestoneNumber: number
): Promise<void> {
  await api.post(
    `/api/MilestoneTracker/stage/${stageNumber}/milestone/${milestoneNumber}/submit`
  );
}