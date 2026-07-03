import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCards from "../components/dashboard/StatCards";
import NextActions from "../components/dashboard/NextActions";
import StageOverview from "../components/dashboard/StageOverview";
import RecentActivity from "../components/dashboard/RecentActivity";
import {
  getProfile,
  getStats,
  getStageOverview,
  getNextActions,
  getRecentActivity,
  getUserCompany,
} from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getGreeting, getInitials } from "../lib/format";
import type {
  UserProfile,
  DashboardStats,
  StageOverviewData,
  NextActionsData,
  DashboardActivity,
  DashboardUser,
  UserCompany,
} from "../types/dashboard";

interface FounderPortalData {
  profile: UserProfile;
  stats: DashboardStats;
  stageOverview: StageOverviewData;
  nextActions: NextActionsData;
  activities: DashboardActivity[];
  company: UserCompany | null;
}

const FALLBACK_COMPANY_NAME = "Your Company";

const emptyUser: DashboardUser = {
  firstName: "",
  fullName: "",
  email: "",
  initials: "",
  companyName: FALLBACK_COMPANY_NAME,
  spectrumLevel: 0,
  notificationCount: 0,
};

const FounderPortal = () => {
  const [data, setData] = useState<FounderPortalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadDashboard = useCallback(async () => {
    try {
      const [profile, stats, stageOverview, nextActions, activities, company] =
        await Promise.all([
          getProfile(),
          getStats(),
          getStageOverview(),
          getNextActions(),
          getRecentActivity(),
          getUserCompany().catch(() => null),
        ]);
      setData({
        profile,
        stats,
        stageOverview,
        nextActions,
        activities,
        company,
      });
      setError("");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }
    loadDashboard();
  }, [navigate, loadDashboard]);

  const user: DashboardUser = data
    ? {
        firstName: data.profile.firstName,
        fullName: data.profile.firstName + " " + data.profile.lastName,
        email: data.profile.email,
        initials: getInitials(data.profile.firstName, data.profile.lastName),
        companyName: data.company?.name || FALLBACK_COMPANY_NAME,
        spectrumLevel: data.stats.spectrumLevel,
        notificationCount: 0,
      }
    : emptyUser;

  return (
    <DashboardLayout user={user}>
      <div className="mx-auto max-w-6xl">
        {loading && (
          <p className="py-20 text-center text-sm text-slate-500">
            Loading your dashboard...
          </p>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && data && (
          <>
            <nav className="text-sm text-slate-500">
              <span>Dashboard</span>
              <span className="mx-1.5">/</span>
              <span className="font-semibold text-slate-800">Overview</span>
            </nav>

            <h1 className="mt-3 text-3xl font-bold text-slate-900">
              {getGreeting()}, {data.profile.firstName}
            </h1>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              Here's your AISC verification progress for {user.companyName}
            </p>

            <div className="mt-6">
              <StatCards stats={data.stats} />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <section className="lg:col-span-2">
                <NextActions
                  actions={data.nextActions.actions}
                  progressMessage={data.nextActions.progressMessage}
                  onUploaded={loadDashboard}
                />
              </section>

              <div className="flex flex-col gap-6">
                <StageOverview
                  stages={data.stageOverview.stages}
                  stagesCompleted={data.stageOverview.stagesCompleted}
                  totalStages={data.stageOverview.totalStages}
                />
                <RecentActivity activities={data.activities} />
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default FounderPortal;
