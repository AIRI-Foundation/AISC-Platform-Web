import axios from "axios";
import { api } from "../lib/api";
import type {
  UserProfile,
  DashboardStats,
  StageOverviewData,
  NextActionsData,
  DashboardActivity,
  UserCompany,
} from "../types/dashboard";

export async function getProfile(): Promise<UserProfile> {
  const res = await api.get("/api/Auth/profile");
  return res.data.data;
}

export async function getStats(): Promise<DashboardStats> {
  const res = await api.get("/api/Dashboard/stats");
  return res.data.data;
}

export async function getStageOverview(): Promise<StageOverviewData> {
  const res = await api.get("/api/Dashboard/stage-overview");
  return res.data.data;
}

export async function getNextActions(): Promise<NextActionsData> {
  const res = await api.get("/api/Dashboard/next-actions");
  return res.data.data;
}

export async function getRecentActivity(): Promise<DashboardActivity[]> {
  const res = await api.get("/api/Dashboard/recent-activity");
  return res.data.data.activities;
}

export async function getUserCompany(): Promise<UserCompany | null> {
  try {
    const res = await api.get("/api/Company/get-user-company");
    return res.data.data as UserCompany;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      return null;
    }
    throw err;
  }
}
