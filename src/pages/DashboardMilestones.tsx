import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardMilestoneSpectrumSidebar from "../components/dashboard/DashboardMilestoneSpectrumSidebar";
import {
  getMilestoneTracker,
  getStageDetail,
} from "../services/milestoneService";
import type {
  MilestoneTrackerSummary,
  StageDetail,
} from "../services/milestoneService";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { getInitials } from "../lib/format";
import { isLoggedIn } from "../lib/auth";
import type { DashboardUser } from "../types/dashboard";

type MilestoneStatus =
  | "verified"
  | "in-review"
  | "action-required"
  | "not-started"
  | "locked";

const statusConfig: Record<
  MilestoneStatus,
  {
    label: string;
    badgeClass: string;
    eyebrowClass: string;
    borderClass: string;
    cardBg: string;
    doneLabel: string;
  }
> = {
  verified: {
    label: "VERIFIED",
    badgeClass: "border-2 border-[#10b981] text-[#10b981] bg-white",
    eyebrowClass: "text-[#10b981]",
    borderClass: "border-l-[#10b981]",
    cardBg: "bg-[#f0fdf4]",
    doneLabel: "Done",
  },
  "in-review": {
    label: "IN REVIEW",
    badgeClass: "border-2 border-orange-400 text-orange-500 bg-white",
    eyebrowClass: "text-orange-500",
    borderClass: "border-l-orange-400",
    cardBg: "bg-orange-50",
    doneLabel: "In Review",
  },
  "action-required": {
    label: "ACTION REQUIRED",
    badgeClass: "border-2 border-red-500 text-red-500 bg-white",
    eyebrowClass: "text-red-500",
    borderClass: "border-l-red-500",
    cardBg: "bg-red-50",
    doneLabel: "Action Required",
  },
  "not-started": {
    label: "NOT STARTED",
    badgeClass: "border-2 border-slate-300 text-slate-400 bg-white",
    eyebrowClass: "text-slate-400",
    borderClass: "border-l-slate-300",
    cardBg: "bg-white",
    doneLabel: "Not Started",
  },
  locked: {
    label: "LOCKED",
    badgeClass: "border-2 border-slate-200 text-slate-300 bg-white",
    eyebrowClass: "text-slate-300",
    borderClass: "border-l-slate-200",
    cardBg: "bg-white",
    doneLabel: "Locked",
  },
};

// Maps the API's status strings to our internal type
function normalizeStatus(status: string): MilestoneStatus {
  switch (status.toLowerCase()) {
    case "verified":
    case "complete":
    case "completed":
      return "verified";
    case "inreview":
    case "in_review":
    case "in-review":
      return "in-review";
    case "actionrequired":
    case "action_required":
    case "action-required":
      return "action-required";
    case "locked":
      return "locked";
    default:
      return "not-started";
  }
}

function normalizeStageStatus(status: string): string {
  switch (status.toLowerCase()) {
    case "complete":
    case "completed":
    case "verified":
      return "COMPLETE";
    case "inprogress":
    case "in_progress":
    case "in-progress":
    case "active":
      return "IN PROGRESS";
    default:
      return "LOCKED";
  }
}

// Level boundaries — which stage number ends each level
const levelBoundaries: Record<number, number> = {
  2: 1,
  4: 2,
  6: 3,
  8: 4,
  9: 5,
};

const emptyUser: DashboardUser = {
  firstName: "",
  fullName: "",
  email: "",
  initials: "",
  companyName: "Your Company",
  spectrumLevel: 0,
  notificationCount: 0,
};

const DashboardMilestones = () => {
  const { stage } = useParams<{ stage?: string }>();
  const activeStage = stage ? parseInt(stage) : 1;
  const navigate = useNavigate();

  const [user, setUser] = useState<DashboardUser>(emptyUser);
  const [summary, setSummary] = useState<MilestoneTrackerSummary | null>(null);
  const [stageDetail, setStageDetail] = useState<StageDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const [profile, company, trackerSummary, detail] = await Promise.all([
          getProfile(),
          getUserCompany().catch(() => null),
          getMilestoneTracker(),
          getStageDetail(activeStage),
        ]);

        setUser({
          firstName: profile.firstName,
          fullName: profile.firstName + " " + profile.lastName,
          email: profile.email,
          initials: getInitials(profile.firstName, profile.lastName),
          companyName: company?.name || "Your Company",
          spectrumLevel: trackerSummary.stagesCompleted,
          notificationCount: 0,
        });

        setSummary(trackerSummary);
        setStageDetail(detail);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [activeStage, navigate]);

  const sidebarStages =
    summary?.stages.map((s) => ({
      number: s.stageNumber,
      title: s.title,
      completed: s.milestonesVerified,
      total: s.totalMilestones,
      status: normalizeStageStatus(s.status),
      levelBoundaryAfter: levelBoundaries[s.stageNumber] ?? null,
    })) ?? [];

  const milestones = stageDetail?.milestones ?? [];
  const verifiedCount = milestones.filter(
    (m) => normalizeStatus(m.status) === "verified",
  ).length;
  const inReviewCount = milestones.filter(
    (m) => normalizeStatus(m.status) === "in-review",
  ).length;
  const actionCount = milestones.filter(
    (m) => normalizeStatus(m.status) === "action-required",
  ).length;
  const isComplete = stageDetail
    ? normalizeStageStatus(stageDetail.status) === "COMPLETE"
    : false;

  const segmentColor = (index: number) => {
    const inReviewEnd = verifiedCount + inReviewCount;
    if (index < verifiedCount) return "bg-[#10b981]";
    if (index < inReviewEnd) return "bg-orange-400";
    if (index < inReviewEnd + actionCount) return "bg-red-500";
    return "bg-slate-200";
  };

  const formatTimestamp = (value: string | null) => {
    if (!value) return "";
    const date = new Date(value);
    return (
      date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) +
      " · " +
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    );
  };

  return (
    <DashboardLayout user={user}>
      <div className="flex min-h-0 flex-1 -mx-4 -my-6 sm:-mx-8">
        <DashboardMilestoneSpectrumSidebar
          activeStage={activeStage}
          stages={sidebarStages}
          totalComplete={summary?.stagesCompleted ?? 0}
          spectrumLevel={summary?.stagesCompleted ?? 0}
        />

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-3xl">
            <div className="text-xs text-slate-400 mb-5">
              Dashboard /{" "}
              <span className="text-slate-500">Milestone Tracker</span> / Stage{" "}
              {activeStage}
            </div>

            {loading && (
              <p className="py-20 text-center text-sm text-slate-500">
                Loading...
              </p>
            )}

            {!loading && error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-700">
                {error}
              </div>
            )}

            {!loading && !error && stageDetail && (
              <>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">
                  Stage {activeStage} — {stageDetail.title}
                </h1>
                <p className="text-sm text-slate-500 mb-4">
                  {isComplete
                    ? `This stage is complete. All ${stageDetail.totalMilestones} milestones have been verified by AISC.`
                    : `Complete all ${stageDetail.totalMilestones} milestones to finish this stage.`}
                </p>

                {isComplete && (
                  <span className="inline-block border-2 border-[#10b981] text-[#10b981] bg-white text-xs font-bold px-4 py-1 rounded-full tracking-wider mb-6">
                    COMPLETE
                  </span>
                )}

                {/* Progress card */}
                <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
                  <div className="flex flex-1 gap-1.5 mb-3">
                    {Array.from({ length: milestones.length }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2.5 rounded-full ${segmentColor(i)}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                        <span className="text-xs text-slate-500">Verified</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-orange-400" />
                        <span className="text-xs text-slate-500">
                          In Review
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-xs text-slate-500">
                          Action Required
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                      {verifiedCount}/{milestones.length} verified
                    </span>
                  </div>
                </div>

                {/* Milestone cards */}
                <div className="space-y-6">
                  {milestones.map((milestone) => {
                    const status = normalizeStatus(milestone.status);
                    const config = statusConfig[status];
                    return (
                      <div key={milestone.milestoneNumber}>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${config.eyebrowClass}`}
                        >
                          Milestone {milestone.milestoneNumber} ·{" "}
                          {config.doneLabel}
                        </div>
                        <div
                          className={`rounded-xl border-l-4 shadow-sm overflow-hidden ${config.cardBg} ${config.borderClass}`}
                        >
                          <div className="flex items-center gap-4 px-5 py-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-semibold text-slate-900 mb-1">
                                {milestone.title}
                              </h3>
                              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                                {milestone.description}
                              </p>
                              {milestone.verifiedAt && (
                                <p className="text-xs text-slate-400">
                                  Verified{" "}
                                  {formatTimestamp(milestone.verifiedAt)}
                                </p>
                              )}
                              {milestone.reviewNotes && (
                                <p className="text-xs text-orange-500 mt-1">
                                  Note: {milestone.reviewNotes}
                                </p>
                              )}
                            </div>
                            <div className="flex-shrink-0">
                              <span
                                className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide ${config.badgeClass}`}
                              >
                                {config.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardMilestones;
