import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";

const mockUser = {
  fullName: "Kwame Asante",
  firstName: "Kwame",
  email: "kwameasante@vaultai.com",
  initials: "KW",
  companyName: "Company",
  spectrumLevel: 5,
  notificationCount: 3,
};

const levels = [
  { label: "L1 - FOUNDATION", complete: true },
  { label: "L2 - STRUCTURE", complete: true },
  { label: "L3 - GROWTH", complete: true },
  { label: "L4 - TRACTION", complete: true },
  { label: "L5 - EXIT-READY", complete: true },
];

const stages = [
  [
    "Stage 1: Company Foundation",
    "Stage 4: MVP & Build Status complete",
    "Stage 7: Team Capability",
  ],
  [
    "Stage 2: Problem & Market Validity",
    "Stage 5: Intellectual Property",
    "Stage 8: Financial Foundations",
  ],
  [
    "Stage 3: AI Solution Definition",
    "Stage 6: Traction & Validation",
    "Stage 9: Investment Readiness",
  ],
];

const companyOverview = [
  { label: "Company Name", value: "Vault AI Inc." },
  { label: "Website", value: "www.vaultai.co" },
  { label: "Location", value: "Toronto, ON" },
  { label: "Founded", value: "January 2024" },
  { label: "AISC LEVEL", value: "Level 5", highlight: true },
];

const productTeam = [
  { label: "Industry", value: "B2B SaaS / AI Infrastructure" },
  { label: "AI Category", value: "Predictive Analytics" },
  { label: "Product Stage", value: "Beta" },
  { label: "Team Size", value: "4 people" },
];

const revenueBand = [
  { label: "Annual Revenue", value: "$0 - $50K" },
  { label: "Revenue Model", value: "SaaS Subscription" },
  { label: "Paying Customers", value: "---------" },
];

const tractionValidation = [
  { label: "Active Users", value: "287 (beta)" },
  { label: "MoM Growth", value: "+34% (last 3 months)" },
  { label: "NPS", value: "-------" },
  { label: "LOIs / Pilots", value: "-------" },
];

const intellectualProperty = [
  { label: "IP Status", value: "----------" },
  { label: "Open-Source", value: "----------" },
  { label: "Moat", value: "----------" },
];

const financialFoundations = [
  { label: "Bank Account", value: "RBC Business Account" },
  { label: "Burn Rate", value: "-------" },
  { label: "Runway", value: "-------" },
  { label: "Funding History", value: "$320K pre-seed" },
];

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
  const [isInvestorView, setIsInvestorView] = useState(false);

  return (
    <DashboardLayout user={mockUser}>
      <div className="max-w-5xl">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-400 mb-4">
          Dashboard / <span className="text-slate-500">Profile</span>
        </div>

        {/* Page title */}
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Profile</h1>
        <p className="text-sm text-slate-500 mb-6">
          Track your level progress and preview exactly what investors see at
          your current level
        </p>

        {/* Level progress card */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-6 flex flex-col items-center">
          {/* Level stepper */}
          <div className="w-full max-w-3xl mb-6">
            {/* Circles + lines row */}
            <div className="flex items-center mb-2">
              {levels.map((level, index) => (
                <div
                  key={level.label}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="w-9 h-9 rounded-full bg-[#10b981] flex items-center justify-center shadow-sm shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  {index < levels.length - 1 && (
                    <div className="flex-1 h-px bg-[#10b981] mx-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Labels row */}
            <div className="flex items-start">
              {levels.map((level, index) => (
                <div
                  key={level.label}
                  className={`flex-1 ${index === levels.length - 1 ? "flex-none" : ""}`}
                >
                  <span className="text-[10px] font-bold text-[#10b981] tracking-wide whitespace-nowrap">
                    {level.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* All requirements met box */}
          <div className="w-full max-w-3xl border border-[#10b981] rounded-xl p-5 bg-[#f0fdf4]">
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="w-4 h-4 text-[#10b981]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-sm font-bold text-[#10b981] uppercase tracking-wide">
                All Requirements Met
              </span>
            </div>

            <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-4">
              {stages.map((col, colIndex) => (
                <div key={colIndex} className="space-y-2">
                  {col.map((stage) => (
                    <div key={stage} className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-[#10b981] shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-xs text-slate-700">{stage}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Congratulations! You've achieved the maximum Spectrum Level. Your
              fully verified profile is now visible to all investors on the AISC
              network, and you have complete access to the Advisory Program,
              investor introductions, and all platform features.
            </p>
          </div>
        </div>

        {/* Preview your public profile */}
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

            {/* Toggle */}
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

          {/* Banner */}
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
                You are viewing your profile as an investor sees it. Some fields
                may be hidden based on your privacy settings.
              </p>
            </div>
          )}
        </div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InfoCard title="Company Overview" fields={companyOverview} />
          <InfoCard title="Product & Team" fields={productTeam} />
          <InfoCard title="Revenue Band" fields={revenueBand} />
          <InfoCard title="Traction & Validation" fields={tractionValidation} />
          <InfoCard
            title="Intellectual Property"
            fields={intellectualProperty}
          />
          <InfoCard
            title="Financial Foundations"
            fields={financialFoundations}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardProfile;
