import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import DashboardAdvisoryTopbar from "../components/dashboard/DashboardAdvisoryTopbar";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import placeholderImage from "../assets/placeholder.png";
import {ChatBubbleIcon} from "../components/dashboard/icons";
import type {
  UserProfile,
  UserCompany,
  DashboardUser,
} from "../types/dashboard";

const FALLBACK_COMPANY_NAME = "Your Company";

const emptyUser: DashboardUser = {
  firstName: "",
  fullName: "",
  email: "",
  phoneNumber: "",  
  initials: "",
  companyName: FALLBACK_COMPANY_NAME,
  spectrumLevel: 0,
  notificationCount: 0,
};

interface ProfilePageData {
  profile: UserProfile;
  company: UserCompany | null;
}

const programImpact = [
  {
    title: "Milestone Completion",
    without: 34,
    with: 81,
    unit: "%",
    unitClass: "text-4xl font-bold",
  },
  {
    title: "Time to Milestone",
    without: 142,
    with: 58,
    unit: "days",
    unitClass: "text-xl font-normal",
  },
];

type ImpactCardProps = {
  label: string;
  value: number;
  unit: string;
  unitClass: string;
  title: string;
  highlighted?: boolean;
};

const ImpactCard = ({
  label,
  value,
  unit,
  unitClass,
  title,
  highlighted = false,
}: ImpactCardProps) => (
  <div
    className={`
      flex-1 rounded-2xl border p-3
      ${
        highlighted
          ? "border-emerald-600 bg-green-50"
          : "border-zinc-300 bg-gray-100"
      }
    `}
  >
<div className="text-[10px] font-bold uppercase text-black/20"> {label} </div>    
  <div
    className={`mt-1 ${
      highlighted ? "text-emerald-600" : "text-black/20"
    }`}
  >
    <div className={highlighted ? "text-emerald-600" : "text-black/20"}>
      <span className="text-4xl font-bold">{value}</span>
      <span className={unitClass}>{unit}</span>
    </div>
  </div>

    <div className="mt-1 text-[10px] text-black/20">
      {title}
    </div>
  </div>
);

const advisoryStats = {
  percentage: 74,
  title: "of completers",
  description:
    "received an investor introduction within 90 days of completing the Advisory Program.",
  subtitle:
    "Based on 214 AISC-verified founders · 2026 cohort",
};

type AdvisoryStatsProps = {
    percentage: number;
    title: string;
    description: string;
    subtitle: string;
};

const AdvisoryStatsCard = ({ 
    percentage,
    title,
    description,
    subtitle,
}: AdvisoryStatsProps) => (
        <div className="rounded-[20px] bg-blue-950 p-6 text-white">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                <div className="shrink-0">

                    <div className="text-6xl font-bold">
                        {percentage}%
                    </div>

                    <div className="text-base font-bold uppercase">
                        {title}
                    </div>

                </div>

                <div className="hidden h-24 w-px bg-white/20 sm:block" />

                <div>

                    <div className="text-base font-bold uppercase leading-relaxed">
                        {description}
                    </div>

                    <div className="mt-2 text-xs text-zinc-300">
                        {subtitle}
                    </div>

                </div>

            </div>

        </div>
    );


const sessions : Session[] = [
  {
    id: 1,
    title: "Foundations & Platform Orientation",
    advisor: "AISC Onboarding Team",
    date: "June 1, 2026",
    duration: "45 min",
    status: "completed",
    notes:
      "Strong understanding of dual-gate process. Founder clear on Stage 1–2 requirements. Recommended prioritising legal entity clean-up and confirming the equity split is signed before Stage 2 submission.",   
  },

  {
    id: 2,
    title: "AI Solution Positioning & Defensibility",
    advisor: "AISC Onboarding Team",
    date: "June 12, 2026",
    duration: "45 min",
    status: "completed",
  },

  {
    id: 3,
    title: "MVP Review & Go-To-Market Readiness",
    advisor: "AISC Onboarding Team",
    date: "June 19, 2026",
    duration: "45 min",
    status: "completed",
  },

  {
    id: 4,
    title: "IP Strategy & Investor Narrative",
    advisor: "TBD",
    date: "July 2, 2026",
    duration: "45 min",
    status: "scheduled",
    actions: [
      {
        label: "Add to Calendar",
        variant: "primary",
      },
      {
        label: "Reschedule",
        variant: "secondary",
      },
    ],      
  },

  {
    id: 5,
    title: "Investor Readiness & Pitch Preparation",
    advisor: "TBD",
    date: "June 1, 2026 ",
    duration: "45 min",
    status: "locked",
  },
];

type Session = {
  id: number;
  title: string;
  advisor: string;
  date: string;
  duration: string;
  status: "completed" | "scheduled" | "locked";
  notes?: string;
  actions?: {
    label: string;
    variant: "primary" | "secondary";
  }[];
};

type SessionProps = {
  session: Session,
  last: boolean,
};

export function SessionRow({
  session,
  last,
}: SessionProps) {

    return (

        <div className="flex gap-6">

            {/* Timeline */}

            <div className="flex flex-col items-center">

                <div
                    className={`
                        flex h-7 w-7 items-center justify-center rounded-full

                        ${
                            session.status === "completed"
                                ? "bg-emerald-600"
                                : session.status === "scheduled"
                                ? "bg-blue-950"
                                : "border border-zinc-300"
                        }
                    `}
                >

                    {/* Check Icon */}

                    {/* Calendar Icon */}

                    {/* Lock Icon */}

                </div>

                {!last && (

                    <div
                        className={`
                            mt-1 w-0.5 flex-1

                            ${
                                status === "completed"
                                    ? "bg-emerald-600"
                                    : "bg-zinc-300"
                            }
                        `}
                    />

                )}

            </div>

            {/* Content */}

            <div className="flex-1">

                <h3
                    className={`font-bold ${
                        status === "locked"
                            ? "text-black/30"
                            : "text-black"
                    }`}
                >
                    Session {session.id}: {session.title}
                </h3>

                <p
                    className={`mt-1 text-xs ${
                        status === "locked"
                            ? "text-black/30"
                            : "text-black/60"
                    }`}
                >
                    {session.advisor} • {session.date} • {session.duration}
                </p>

                {session.notes && (

                    <div className="mt-4">

                        <button className="flex items-center gap-2 text-xs font-bold uppercase text-orange-500">

                            {/* Notes Icon */}

                            Advisor Notes

                            {/* Chevron */}

                        </button>

                        <div className="mt-2 rounded-lg border-l-4 border-orange-400 bg-amber-50 p-3 text-xs">

                            {session.notes}

                        </div>

                    </div>

                )}

                {session.actions && (

                    <div className="mt-4 flex flex-wrap gap-2">

                        {session.actions.map((action) => (

                            <button
                                key={action.label}
                                className={
                                    action.variant === "primary"
                                        ? "rounded-lg bg-red px-4 py-2 text-sm font-bold text-white"
                                        : "rounded-lg border border-red px-4 py-2 text-sm font-bold text-red"
                                }
                            >
                                {action.label}
                            </button>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );
}

const completedSessions = sessions.filter(
    s => s.status === "completed"
).length;

const DashboardAdvisoryProgram = () => {
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [creditInfoChanged, setCreditInfoChanged] = useState(false);
  // const hasChanges =
    // originalCard !== originalTwoFactorEnabled;  

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
        phoneNumber: data.profile.phoneNumber,          
        initials: getInitials(data.profile.firstName, data.profile.lastName),
        companyName: data.company?.name || FALLBACK_COMPANY_NAME,
        spectrumLevel: data.profile.spectrumLevel,
        notificationCount: 0,
      }
    : emptyUser;



  return (
    <DashboardLayout user={user}>
    <div className=" min-h-screen !px-8 !py-8">
        <div className="flex-1 text-sm text-slate-400">
          Dashboard  <span className="font-semibold text-base">/ </span> 
            <span className="text-black font-semibold">Advisory Program</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Advisory Program</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <DashboardAdvisoryTopbar />     
        <div className="inline-flex justify-center items-start w-full h-full gap-5">

{/* Current Plan */}
        <div className="flex-1 min-w-0 space-y-6">
  <AdvisoryStatsCard 
    percentage ={advisoryStats.percentage}
    title ={advisoryStats.title}
    description ={advisoryStats.description}
    subtitle ={advisoryStats.subtitle}
  />

<div className="overflow-hidden rounded-[20px] border border-zinc-300 bg-white">

                <div className="flex flex-col gap-4 border-b border-zinc-300 p-5 md:flex-row md:items-center md:justify-between">
                    <div>

                        <h2 className="text-base font-bold uppercase">
                            Session Tracker
                        </h2>

                        <p className="text-xs text-black/40">
                          {completedSessions} of {sessions.length} sessions complete
                        </p>

                    </div>  
<button className="rounded-lg bg-red px-4 py-2 text-sm font-bold text-white">
                        Schedule Next
                    </button>

                </div>

                <div className="space-y-6 p-5">

                    {sessions.map((session, index) => (

                        <SessionRow
                            key={session.id}
                            session={session}
                            last={index === sessions.length - 1}
                        />

                    ))}

                </div>

            </div>   
</div>                         
 {/* End the Current Plan */}

<div className="max-w-xl space-y-5">

  <div className="overflow-hidden rounded-[20px] border border-zinc-300 bg-white">

    <div className="border-b border-zinc-300 p-5">
      <h3 className="text-base font-bold uppercase text-black">
        Program Impact
      </h3>
    </div>

    <div className="space-y-6 p-5">

      {programImpact.map((metric) => (
        <div
          key={metric.title}
          className="grid grid-cols-2 gap-4"
        >
          <ImpactCard
            label="Without Advisory"
            value={metric.without}
            unit={metric.unit}
            unitClass={metric.unitClass}
            title={metric.title}
          />

          <ImpactCard
            label="With Advisory"
            value={metric.with}
            unit={metric.unit}
            unitClass={metric.unitClass}            
            title={metric.title}
            highlighted
          />
        </div>
      ))}

      <p className="text-center text-[10px] text-black/20">
        Founders with advisory support{" "}
        <span className="font-bold text-blue-950">
          advance 2.4× faster
        </span>{" "}
        through the Spectrum.
      </p>

    </div>

  </div>

  <button
    className="
      flex w-full items-center mb-10
      rounded-2xl border border-zinc-300
      bg-white px-5
      transition hover:bg-gray-50
    "
  >
    {/* icon */}
  <a
    href="/manage-subscriptions"
    className={`inline-flex items-center mt-3 mb-3 text-xs font-bold hover:underline text-black`}
  >
    <ChatBubbleIcon className="h-6 w-6" />       
      Contact AISC Team      
  </a>     

  </button>

</div>







</div> 


{/* WIP ENDS */}
        </div>          
    </div>
    </DashboardLayout>
  );
};

export default DashboardAdvisoryProgram;
