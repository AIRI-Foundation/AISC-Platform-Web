export interface ProfileStage {
  stageNumber: number;
  title: string;
  status: string;
  levelBoundaryAfter: number | null;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;  
  role: string;
  emailVerified: boolean;
  spectrumLevel: number;
  milestoneLevel: number;
  stagesCompleted: number;
  totalStages: number;
  profileVisible: boolean;
  daysOnPlatform: number;
  stageOverview: ProfileStage[];
}

export interface DashboardStats {
  spectrumLevel: number;
  spectrumLevelLabel: string;
  spectrumLevelSublabel: string;
  stagesCompleted: number;
  totalStages: number;
  allStagesVerified: boolean;
  profileVisibility: string;
  profileVisibilitySublabel: string;
  daysOnPlatform: number;
  memberSince: string;
}

export interface DashboardStage {
  stageNumber: number;
  title: string;
  status: string;
  milestonesVerified: number;
  totalMilestones: number;
  levelBoundaryAfter: number | null;
}

export interface StageOverviewData {
  stagesCompleted: number;
  totalStages: number;
  stages: DashboardStage[];
}

export interface DashboardAction {
  priority: string;
  stageNumber: number;
  milestoneNumber: number;
  stageLabel: string;
  milestoneTitle: string;
  description: string;
  status: string;
}

export interface NextActionsData {
  actions: DashboardAction[];
  progressMessage: string;
}

export interface DashboardActivity {
  type: string;
  headline: string;
  detail: string;
  occurredAt: string;
}

export interface UserCompany {
  id: string;
  name: string;
  industry: string;
  city: string;
  province: string;
  aiCategory: string;
  productStage: string;
  teamSize: number | null;
  fundingYear: number | null;
  website: string;
}

export interface DashboardUser {
  firstName: string;
  fullName: string;
  email: string;
  phoneNumber: string;  
  initials: string;
  companyName: string;
  spectrumLevel: number;
  notificationCount: number;
}
