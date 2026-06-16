import { useParams } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardMilestoneSpectrumSidebar from "../components/dashboard/DashboardMilestoneSpectrumSidebar";

type MilestoneStatus = "verified" | "in-review" | "action-required";

interface Milestone {
  number: number;
  title: string;
  description: string;
  status: MilestoneStatus;
  timestamp: string;
}

interface StageData {
  title: string;
  description: string;
  complete: boolean;
  milestones: Milestone[];
}

const statusConfig: Record<
  MilestoneStatus,
  {
    label: string;
    badgeClass: string;
    eyebrowClass: string;
    borderClass: string;
    doneLabel: string;
  }
> = {
  verified: {
    label: "VERIFIED",
    badgeClass: "border-2 border-[#10b981] text-[#10b981] bg-white",
    eyebrowClass: "text-[#10b981]",
    borderClass: "border-l-[#10b981]",
    doneLabel: "Done",
  },
  "in-review": {
    label: "IN REVIEW",
    badgeClass: "border-2 border-orange-400 text-orange-500 bg-white",
    eyebrowClass: "text-orange-500",
    borderClass: "border-l-orange-400",
    doneLabel: "In Review",
  },
  "action-required": {
    label: "ACTION REQUIRED",
    badgeClass: "border-2 border-red-500 text-red-500 bg-white",
    eyebrowClass: "text-red-500",
    borderClass: "border-l-red-500",
    doneLabel: "Action Required",
  },
};

const mockUser = {
  fullName: "Krianna Asante",
  firstName: "Krianna",
  email: "krianna@company.com",
  initials: "KA",
  companyName: "Company",
  spectrumLevel: 5,
  notificationCount: 3,
};

const stageData: Record<number, StageData> = {
  1: {
    title: "Company Foundation",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Legal Entity Registration",
        description:
          "Confirm federal or provincial incorporation and verify the company is registered and in good standing.",
        status: "verified",
        timestamp: "May 20, 2026 · 3:28PM",
      },
      {
        number: 2,
        title: "Founding Team Profiles",
        description:
          "Document full names, roles, and verified LinkedIn profiles for all core founding members.",
        status: "verified",
        timestamp: "May 20, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Equity Split Agreement (Optional)",
        description:
          "Upload the signed and documented equity split agreement among all founders.",
        status: "verified",
        timestamp: "May 20, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Legal Standing Confirmation",
        description:
          "Confirm there are no active legal disputes or regulatory violations on record for the company.",
        status: "verified",
        timestamp: "May 20, 2026 · 3:28PM",
      },
      {
        number: 5,
        title: "Corporate Email Domain",
        description:
          "Verify a working, dedicated business email domain (generic providers like Gmail/Hotmail are not accepted).",
        status: "verified",
        timestamp: "May 20, 2026 · 3:30PM",
      },
    ],
  },
  2: {
    title: "Problem & Market Validity",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Problem Statement",
        description:
          "Submit a clearly defined, specific problem statement (avoid generic market observations).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Ideal Customer Profile (ICP)",
        description:
          "Identify the named customer segment and exact geography of your target market.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Problem Validation Data",
        description:
          "Document evidence of the problem using interviews, data, or published research (minimum of 3 sources required).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Total Addressable Market (TAM) Estimate",
        description:
          "Estimate your total addressable market size utilizing a structured methodology.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
      {
        number: 5,
        title: "Competitor Analysis",
        description:
          "Identify and analyze at least one direct and one indirect competitor in your space.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:30PM",
      },
    ],
  },
  3: {
    title: "AI Solution Definition",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Solution Description",
        description:
          "Describe the AI solution in plain language, detailing what it does, how it works, and what data it utilizes.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Domain Classification",
        description:
          "Classify your specific AI sub-vertical (e.g., NLP, Computer Vision, Generative AI, Predictive Analytics).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Core Model Architecture",
        description:
          "Identify your foundational model architecture type (Proprietary, Fine-Tuned, Wrapper, or Hybrid).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Technical Moat",
        description:
          "Articulate your technical moat and define what makes your solution defensible and difficult to copy.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
      {
        number: 5,
        title: "Training Data Sources & Licensing",
        description:
          "Name all data sources used to train or run the model and confirm their active licensing status.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:30PM",
      },
    ],
  },
  4: {
    title: "MVP & Build Status",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Current Build Status",
        description:
          "Declare your current product lifecycle status: Idea, Prototype, Beta, or Live Product.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Product Demo",
        description:
          "Submit a working demo link or recorded product walkthrough for AISC review.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Infrastructure & APIs (Optional)",
        description:
          "List all core technical dependencies, infrastructure components, and third-party APIs.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Product Roadmap",
        description:
          "Provide a current product roadmap featuring at least 3 defined milestones and their target delivery dates.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
      {
        number: 5,
        title: "Technical Risk Documentation (Optional)",
        description:
          "Document all known technical risks and architectural vulnerabilities transparently.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:30PM",
      },
    ],
  },
  5: {
    title: "Intellectual Property",
    description:
      "This stage is complete. All 4 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Corporate IP Assignment",
        description:
          "Verify that all intellectual property ownership is legally assigned to the company (not to individual founders or academic institutions).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Prior IP Clearance (Optional)",
        description:
          "Disclose and clear any IP developed during prior employment or academic research.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Open-Source Component Review (Optional)",
        description:
          "Identify all open-source components used in the product and confirm their license compliance.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "IP Freedom to Operate (FTO)",
        description:
          "Confirm there are no active IP disputes, patent challenges, or pending claims against the product.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
    ],
  },
  6: {
    title: "Traction & Validation",
    description:
      "This stage is complete. All 4 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Early Commercial Proof Points",
        description:
          "Submit proof of at least one active commercial indicator: a paying customer, signed LOI, pilot agreement, or grant award.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Documented User Feedback",
        description:
          "Provide structured customer or user feedback data points (minimum of 5 non-anecdotal data points required).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Core Engagement Metrics",
        description:
          "Share user retention or product engagement metrics (applicable only if the product is live).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Monetization Strategy",
        description:
          "Define the company's monetization strategy, detailing exactly how the business generates revenue and from whom.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
    ],
  },
  7: {
    title: "Team Capability",
    description:
      "This stage is complete. All 4 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Technical Leadership Verification",
        description:
          "Verify the credentials of at least one technical founder or a named, dedicated technical lead.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Leadership Matrix",
        description:
          "Demonstrate that the collective founding team covers technical building, business development, and industry domain expertise.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Advisor & Board Confirmations",
        description:
          "List all named company advisors, including their professional credentials and confirmed relationship status to the company.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Conflict of Interest Disclosure",
        description:
          "Confirm there are no undisclosed conflicts of interest among the founding team members.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
    ],
  },
  8: {
    title: "Financial Foundations",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Bank Account Verification",
        description:
          "Provide confirmation of an active business bank account in the company's name (No financial statements or balances required).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "12-Month Financial Projection",
        description:
          "Upload a 12-month financial projection model complete with stated operational assumptions (Hidden from investors by default).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Burn Rate & Runway",
        description:
          "Disclose current monthly burn rate and runway to AISC (Optional for early pre-revenue founders; highly encouraged).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Prior Funding History",
        description:
          "Declare all prior investment history, grants, and loans (Kept strictly confidential unless manually opted-in to surface).",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
      {
        number: 5,
        title: "Allocation & Use of Funds",
        description:
          "Define the target allocation breakdown by category for your next prospective capital raise.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
    ],
  },
  9: {
    title: "Investment Readiness",
    description:
      "This stage is complete. All 5 milestones have been verified by AISC.",
    complete: true,
    milestones: [
      {
        number: 1,
        title: "Pitch Deck Verification",
        description:
          "Submit a comprehensive pitch deck covering problem, solution, market, team, traction, financials, and the ask for AISC review.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:26PM",
      },
      {
        number: 2,
        title: "Funding Specifics",
        description:
          "Explicitly define the target funding amount, investment instrument (SAFE, equity, convertible note), and the valuation basis.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:27PM",
      },
      {
        number: 3,
        title: "Market Opportunity",
        description:
          "Provide a clear strategic rationale articulating why the current market window is the ideal time to scale capital.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:28PM",
      },
      {
        number: 4,
        title: "Disclosure Schedule",
        description:
          "Certify that no side agreements, side letters, or undisclosed investor commitments exist.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
      {
        number: 5,
        title: "Cap Table & Dilution Modeling",
        description:
          "Complete confirmation demonstrating a clear understanding of dilution impact, pro-rata rights, and future board implications.",
        status: "verified",
        timestamp: "May 29, 2026 · 3:29PM",
      },
    ],
  },
};

const DashboardMilestones = () => {
  const { stage } = useParams<{ stage?: string }>();
  const activeStage = stage ? parseInt(stage) : 1;

  const current = stageData[activeStage] || stageData[1];

  const verifiedCount = current.milestones.filter(
    (m) => m.status === "verified",
  ).length;
  const inReviewCount = current.milestones.filter(
    (m) => m.status === "in-review",
  ).length;
  const actionCount = current.milestones.filter(
    (m) => m.status === "action-required",
  ).length;

  const segmentColor = (index: number) => {
    const verifiedEnd = verifiedCount;
    const inReviewEnd = verifiedCount + inReviewCount;
    if (index < verifiedEnd) return "bg-[#10b981]";
    if (index < inReviewEnd) return "bg-orange-400";
    if (index < inReviewEnd + actionCount) return "bg-red-500";
    return "bg-slate-200";
  };

  return (
    <DashboardLayout user={mockUser}>
      <div className="flex min-h-0 flex-1 -mx-4 -my-6 sm:-mx-8">
        <DashboardMilestoneSpectrumSidebar activeStage={activeStage} />

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-400 mb-5">
              Dashboard /{" "}
              <span className="text-slate-500">Milestone Tracker</span> / Stage{" "}
              {activeStage}
            </div>

            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              Stage {activeStage} — {current.title}
            </h1>
            <p className="text-sm text-slate-500 mb-4">{current.description}</p>

            {/* COMPLETE badge — outline only */}
            {current.complete && (
              <span className="inline-block border-2 border-[#10b981] text-[#10b981] bg-white text-xs font-bold px-4 py-1 rounded-full tracking-wider mb-6">
                COMPLETE
              </span>
            )}

            {/* Progress card */}
            <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
              <div className="flex flex-1 gap-1.5 mb-3">
                {Array.from({ length: current.milestones.length }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-2.5 rounded-full ${segmentColor(i)}`}
                    />
                  ),
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-xs text-slate-500">Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span className="text-xs text-slate-500">In Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-xs text-slate-500">
                      Action Required
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-700 whitespace-nowrap">
                  {verifiedCount}/{current.milestones.length} verified
                </span>
              </div>
            </div>

            {/* Milestone cards */}
            <div className="space-y-6">
              {current.milestones.map((milestone) => {
                const config = statusConfig[milestone.status];
                return (
                  <div key={milestone.number}>
                    {/* Eyebrow label outside card */}
                    <div
                      className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${config.eyebrowClass}`}
                    >
                      Milestone {milestone.number} · {config.doneLabel}
                    </div>

                    {/* Card */}
                    <div
                      className={`rounded-xl border-l-4 shadow-sm overflow-hidden bg-[#f0fdf4] ${config.borderClass}`}
                    >
                      <div className="flex items-center gap-4 px-5 py-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-slate-900 mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-2">
                            {milestone.description}
                          </p>
                          <p className="text-xs text-slate-400">
                            Verified {milestone.timestamp}
                          </p>
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardMilestones;
