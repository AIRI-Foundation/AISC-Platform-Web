import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import type {
  UserProfile,
  UserCompany,
  DashboardUser,
} from "../types/dashboard";

const FALLBACK_COMPANY_NAME = "Your Company";
const EMPTY = "—";

const levelLabels = [
  "L1 - FOUNDATION",
  "L2 - STRUCTURE",
  "L3 - GROWTH",
  "L4 - TRACTION",
  "L5 - EXIT-READY",
];

const emptyUser: DashboardUser = {
  firstName: "",
  fullName: "",
  email: "",
  initials: "",
  companyName: FALLBACK_COMPANY_NAME,
  spectrumLevel: 0,
  notificationCount: 0,
};

interface ProfilePageData {
  profile: UserProfile;
  company: UserCompany | null;
}

interface InfoCardProps {
  title: string;
  fields: { label: string; value: string; highlight?: boolean }[];
}

const InfoCard = ({ title, fields }: InfoCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition">
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        Edit
      </button>
    </div>
    <div className="space-y-3">
      {fields.map((field) => (
        <div
          key={field.label}
          className="flex items-start justify-between gap-4"
        >
          <span className="text-sm text-slate-400 shrink-0">{field.label}</span>
          <span
            className={`text-sm text-right ${field.highlight ? "text-[#10b981] font-semibold" : "text-slate-700"}`}
          >
            {field.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const DashboardProfile = () => {
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isInvestorView, setIsInvestorView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    const loadProfile = async () => {
      try {
        const [profile, company] = await Promise.all([
          getProfile(),
          getUserCompany().catch(() => null),
        ]);
        setData({ profile, company });
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  const user: DashboardUser = data
    ? {
        firstName: data.profile.firstName,
        fullName: data.profile.firstName + " " + data.profile.lastName,
        email: data.profile.email,
        initials: getInitials(data.profile.firstName, data.profile.lastName),
        companyName: data.company?.name || FALLBACK_COMPANY_NAME,
        spectrumLevel: data.profile.spectrumLevel,
        notificationCount: 0,
      }
    : emptyUser;

  const profile = data?.profile;
  const company = data?.company ?? null;
  const allComplete =
    !!profile && profile.stagesCompleted >= profile.totalStages;

  const companyOverview = [
    { label: "Company Name", value: company?.name || EMPTY },
    { label: "Website", value: company?.website || EMPTY },
    {
      label: "Location",
      value:
        company && (company.city || company.province)
          ? [company.city, company.province].filter(Boolean).join(", ")
          : EMPTY,
    },
    {
      label: "Founded",
      value: company?.fundingYear ? String(company.fundingYear) : EMPTY,
    },
    {
      label: "AISC LEVEL",
      value: profile ? "Level " + profile.milestoneLevel : EMPTY,
      highlight: true,
    },
  ];

  const productTeam = [
    { label: "Industry", value: company?.industry || EMPTY },
    { label: "AI Category", value: company?.aiCategory || EMPTY },
    { label: "Product Stage", value: company?.productStage || EMPTY },
    {
      label: "Team Size",
      value:
        company?.teamSize != null ? company.teamSize + " people" : EMPTY,
    },
  ];

  const revenueBand = [
    { label: "Annual Revenue", value: EMPTY },
    { label: "Revenue Model", value: EMPTY },
    { label: "Paying Customers", value: EMPTY },
  ];

  const tractionValidation = [
    { label: "Active Users", value: EMPTY },
    { label: "MoM Growth", value: EMPTY },
    { label: "NPS", value: EMPTY },
    { label: "LOIs / Pilots", value: EMPTY },
  ];

  const intellectualProperty = [
    { label: "IP Status", value: EMPTY },
    { label: "Open-Source", value: EMPTY },
    { label: "Moat", value: EMPTY },
  ];

  const financialFoundations = [
    { label: "Bank Account", value: EMPTY },
    { label: "Burn Rate", value: EMPTY },
    { label: "Runway", value: EMPTY },
    { label: "Funding History", value: EMPTY },
  ];

  return (
    <DashboardLayout user={user}>
      <div className="max-w-5xl">
        <div className="text-xs text-slate-400 mb-4">
          Dashboard / <span className="text-slate-500">Profile</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-1">Profile</h1>
        <p className="text-sm text-slate-500 mb-6">
          Track your level progress and preview exactly what investors see at
          your current level
        </p>

        {loading && (
          <p className="py-20 text-center text-sm text-slate-500">
            Loading your profile...
          </p>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && profile && (
          <>
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6 flex flex-col items-center">
              <div className="w-full max-w-3xl mb-6">
                <div className="flex items-center mb-2">
                  {levelLabels.map((label, index) => {
                    const complete = index + 1 <= profile.milestoneLevel;
                    return (
                      <div
                        key={label}
                        className="flex items-center flex-1 last:flex-none"
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm shrink-0 ${
                            complete ? "bg-[#10b981]" : "bg-slate-200"
                          }`}
                        >
                          {complete ? (
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          ) : (
                            <span className="text-xs font-bold text-slate-400">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        {index < levelLabels.length - 1 && (
                          <div
                            className={`flex-1 h-px mx-2 ${
                              complete ? "bg-[#10b981]" : "bg-slate-200"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-start">
                  {levelLabels.map((label, index) => {
                    const complete = index + 1 <= profile.milestoneLevel;
                    return (
                      <div
                        key={label}
                        className={`flex-1 ${index === levelLabels.length - 1 ? "flex-none" : ""}`}
                      >
                        <span
                          className={`text-[10px] font-bold tracking-wide whitespace-nowrap ${
                            complete ? "text-[#10b981]" : "text-slate-400"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`w-full max-w-3xl border rounded-xl p-5 ${
                  allComplete
                    ? "border-[#10b981] bg-[#f0fdf4]"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {allComplete ? (
                    <svg
                      className="w-4 h-4 text-[#10b981]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : null}
                  <span
                    className={`text-sm font-bold uppercase tracking-wide ${
                      allComplete ? "text-[#10b981]" : "text-slate-600"
                    }`}
                  >
                    {allComplete
                      ? "All Requirements Met"
                      : profile.stagesCompleted +
                        " of " +
                        profile.totalStages +
                        " stages completed"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-4">
                  {profile.stageOverview.map((stage) => {
                    const isCompleted = stage.status === "Completed";
                    const isActive = stage.status === "Active";
                    return (
                      <div
                        key={stage.stageNumber}
                        className="flex items-center gap-2"
                      >
                        {isCompleted ? (
                          <svg
                            className="w-3.5 h-3.5 text-[#10b981] shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        ) : (
                          <span
                            className={`w-3.5 h-3.5 rounded-full shrink-0 ${
                              isActive ? "bg-blue-400" : "bg-slate-300"
                            }`}
                          />
                        )}
                        <span
                          className={`text-xs ${
                            isCompleted || isActive
                              ? "text-slate-700"
                              : "text-slate-400"
                          }`}
                        >
                          Stage {stage.stageNumber}: {stage.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {allComplete
                    ? "Congratulations! You've achieved the maximum Spectrum Level. Your fully verified profile is now visible to all investors on the AISC network, and you have complete access to the Advisory Program, investor introductions, and all platform features."
                    : profile.profileVisible
                      ? "Your profile is visible to investors on the AISC network. Keep completing stages to unlock the remaining platform features."
                      : "Complete more stages to make your profile visible to investors on the AISC network and unlock additional platform features."}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    Preview Your Public Profile
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    See exactly what an investor discovers when they find your
                    profile on the AISC network.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-sm font-semibold ${!isInvestorView ? "text-slate-900" : "text-slate-400"}`}
                  >
                    Founder View
                  </span>
                  <button
                    onClick={() => setIsInvestorView(!isInvestorView)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      isInvestorView ? "bg-[#102a54]" : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                        isInvestorView ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm font-semibold ${isInvestorView ? "text-slate-900" : "text-slate-400"}`}
                  >
                    Investor View
                  </span>
                </div>
              </div>

              {!isInvestorView ? (
                <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 border-l-4 border-l-slate-400 rounded-lg px-4 py-3">
                  <svg
                    className="w-4 h-4 text-slate-400 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                  <p className="text-xs text-slate-500">
                    You are viewing your full founder profile. All fields are
                    visible and editable. Switch to Investor View to preview your
                    public-facing profile.
                  </p>
                </div>
              ) : (
                <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 border-l-4 border-l-blue-400 rounded-lg px-4 py-3">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <p className="text-xs text-blue-600">
                    You are viewing your profile as an investor sees it. Some
                    fields may be hidden based on your privacy settings.
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <InfoCard title="Company Overview" fields={companyOverview} />
              <InfoCard title="Product & Team" fields={productTeam} />
              <InfoCard title="Revenue Band" fields={revenueBand} />
              <InfoCard
                title="Traction & Validation"
                fields={tractionValidation}
              />
              <InfoCard
                title="Intellectual Property"
                fields={intellectualProperty}
              />
              <InfoCard
                title="Financial Foundations"
                fields={financialFoundations}
              />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardProfile;
