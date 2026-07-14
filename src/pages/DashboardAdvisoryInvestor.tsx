import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import DashboardAdvisoryTopbar from "../components/dashboard/DashboardAdvisoryTopbar";
import placeholderImage from "../assets/placeholder.png";
import {CheckIcon, XIcon, TrendingUpIcon, CheckCircleIcon, EyeIcon, CalendarIcon} from "../components/dashboard/icons";
import StatCards from "../components/dashboard/StatCards";

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

type SummaryCardProps = {
  Title: string;
  Sentences: string[];
  Colours: {
    BackgroundColour: string;
    BorderColour: string;
    TextColour: string;  
  }
};

export function SessionRow({
  Title,
  Sentences,
  Colours,
}: SummaryCardProps) {
  return(
    <div className={`flex-1 p-5 ${Colours.BackgroundColour} rounded-2xl outline outline-[1.67px] outline-offset-[-0.67px] ${Colours.BorderColour} inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden`}>
        <div className="justify-start text-black text-base font-bold  uppercase">
          {Title}
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                          
      {Sentences.map((sentence) => (
          <li
              key={sentence}
              className="flex items-start gap-3"
          >
              <div className={`mt-1 h-3 w-3 rounded-full border-2 ${Colours.TextColour}`}/>

              <span className="text-xs text-black font-semibold">
                  {sentence}
              </span>

          </li>
      ))}                        
      </div>
  </div>
  );
}

function getMatchColour(score: number) {

    if (score >= 85)
        return "emerald";

    if (score >= 70)
        return "amber";

    return "red";

}

type MatchCard = {
  id: number
  companyName: string;
  contact: string;
  Thumbnail: string;    
  received: string;
  score: number;

  investorSummary: string[];
  matchReasons: string[];

  focus: string;
  ticketSize: string;
};

const investorMatches: MatchCard[] = [
  {
    id:0,
    companyName: "Company Name",
    contact: "John Smith · Partner · Toronto",
    Thumbnail:placeholderImage,  
    received: "June 1, 2026",
    score: 91,

    investorSummary: [
      "Enterprise AI infrastructure fund.",
      "Previously invested in 40+ SaaS startups.",
      "Strong healthcare portfolio.",
      "Leads most seed rounds.",
    ],

    matchReasons: [
      "Your company is currently raising Seed.",
      "Your AI vertical matches this investor.",
      "Your traction meets their typical range.",
      "Your requested cheque size fits.",
    ],

    focus: "Enterprise SaaS · AI Infrastructure",

    ticketSize: "$250K – $1.5M (Pre-Seed / Seed)",
  },
  {
    id:1,    
    companyName: "Catalyst Capital",
    contact: "David Lee · Managing Partner · Calgary",
    Thumbnail: placeholderImage,
    received: "June 8, 2026",
    score: 52,

    investorSummary: [
      "Pre-seed specialist.",
      "Focus on technical founders.",
      "Large mentor network.",
      "Fast investment decisions.",
    ],

    matchReasons: [
      "Strong founding team.",
      "Technical moat identified.",
      "Market size fits thesis.",
      "Requested cheque size aligns.",
    ],

    focus: "AI · Deep Tech",
    ticketSize: "$250K – $750K",
  },
  {
    id:2,    
    companyName: "Northstar Ventures",
    contact: "Sarah Chen · Principal · Vancouver",
    Thumbnail: placeholderImage,
    received: "June 3, 2026",
    score: 82,

    investorSummary: [
      "B2B SaaS specialist.",
      "Strong AI automation portfolio.",
      "Invests across North America.",
      "Active follow-on investor.",
    ],

    matchReasons: [
      "Your ARR fits their portfolio.",
      "Seed stage aligns perfectly.",
      "Looking for enterprise AI.",
      "Canadian founder preference.",
    ],

    focus: "B2B SaaS · Enterprise AI",
    ticketSize: "$500K – $2M",
  },  
];

type LargeCompanyCardProps = {
  match: MatchCard
};

export function LargeCompanyCard({
  match,
}: LargeCompanyCardProps) {
  return(
  <div className="w-full max-w-5xl rounded-[20px] bg-white">
    <div className="self-stretch p-5 bg-white rounded-tl-[20px] rounded-tr-[20px] border-b-[0.67px] border-zinc-300 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex justify-start items-end gap-3">
            <img
              src={match.Thumbnail}
              alt={`${match.companyName} logo`}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className=" inline-flex flex-col justify-start items-start gap-[5px]">
                <div className="justify-start text-black text-base font-bold  uppercase">
                  {match.companyName}
                </div>
                <div className="justify-start text-black/20 text-xs font-medium ">
                  {match.contact}
                </div>
            </div>
        </div>
        <div className="flex justify-start items-center gap-3">
            <div className="w-20 inline-flex flex-col justify-start items-start gap-[3px]">
                <div className="self-stretch text-right justify-start text-black/20 text-xs font-bold  uppercase">
                  Received
                </div>
                <div className="self-stretch text-right justify-start text-black text-xs font-medium ">
                  {match.received}
                </div>
            </div>
            
            <div className={`size-12 p-[5px] bg-${getMatchColour(match.score)}-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-${getMatchColour(match.score)}-600 inline-flex flex-col justify-center items-center`}>
                <div className={`self-stretch text-center justify-start text-${getMatchColour(match.score)}-600 text-sm font-bold `}>
                  {match.score}
                </div>
                <div className="self-stretch text-center justify-start text-black/20 text-[10px] font-bold  uppercase">
                  match
                </div>
            </div>
        </div>
    </div>
    <div className="self-stretch px-3.5 py-7 bg-white rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-3.5">

          <div className="grid w-full justify-start items-center gap-8 md:grid-cols-2">
                  <SessionRow 
                  Title="Investor Summary"
                  Sentences={match.investorSummary}
                  Colours={{
                    BackgroundColour:"bg-blue-400/20", 
                    BorderColour:"outline-blue-950",
                    TextColour:"text-blue-950"}
                  }
                  />

                  <SessionRow 
                  Title="Why AISC matched you"
                  Sentences={match.matchReasons}
                  Colours={{
                    BackgroundColour:"bg-amber-50"  , 
                    BorderColour:"outline-amber-600" ,
                    TextColour:"text-amber-600" }
                  }                                      
                  />
            </div>

        <div className=" flex flex-col gap-4 lg:flex-row lg:justify-between">
            <div className="self-stretch flex justify-start items-center gap-3">
                <div className="flex-1 min-w-[220px] self-stretch px-2.5 py-2 bg-gray-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-between items-start">
                    <div className="self-stretch justify-start text-black text-[10px] font-bold  uppercase">
                      Focus
                    </div>
                    <div className="self-stretch justify-start text-black text-xs font-medium ">
                      {match.focus}
                    </div>
                </div>
                <div className="flex-1 min-w-[220px] self-stretch px-2.5 py-2 bg-gray-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-between items-start">
                    <div className="self-stretch justify-start text-black text-[10px] font-bold  uppercase">
                      Ticket Size
                    </div>
                    <div className="self-stretch justify-start text-black text-xs font-medium ">
                      {match.ticketSize}
                    </div>
                </div>
            </div>


            <div className=" flex justify-start items-center gap-3.5">
                <a className="flex-1 min-w-[220px] px-5 py-4 bg-green/10 rounded-[10px] outline outline-[0.67px] outline-offset-[-0.67px] text-emerald-600 flex justify-center items-center gap-1"
                  href="/dashboard/advisory-investor"
                >
                  <CheckIcon className="h-6 w-6 text-emerald-600" />
                  <div className="justify-start text-emerald-600 text-base font-bold  uppercase">
                    Accept
                  </div>
                </a>           
                <a className="flex-1 min-w-[220px] px-5 py-4 bg-red/10 rounded-[10px] outline outline-[0.67px] outline-offset-[-0.67px] outline-red-700 flex justify-center items-center gap-1"
                  href="/dashboard/advisory-investor"
                >
                  <XIcon className="h-6 w-6 text-red-700 mb-1" />
                  <div className="justify-start text-red-700 text-base font-bold  uppercase">
                    Decline
                  </div>
                </a>
            </div>
        </div>
    </div>
</div>   
  );
}

const sortedMatches = [...investorMatches].sort(
  (a, b) => b.score - a.score
);

const DashboardAdvisoryInvestor = () => {
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        phoneNumber: data.profile.phoneNumber,          
        initials: getInitials(data.profile.firstName, data.profile.lastName),
        companyName: data.company?.name || FALLBACK_COMPANY_NAME,
        spectrumLevel: data.profile.spectrumLevel,
        notificationCount: 0,
      }
    : emptyUser;

const cards = data
  ? [
      {
        icon: TrendingUpIcon,
        label: "Conversion Rate",
        value: `74%`,
        caption: "AISC Network Average",
        accent: "border-l-[#102a54]",
        iconBg: "bg-slate-100",
        iconColor: "text-[#102a54]",
        captionColor: "text-slate-500",
      },
      {
        icon: CheckCircleIcon,
        label: "Introductions Accepted",
        value: "1",
        caption: "Total All Time",
        accent: "border-l-[#16a34a]",
        iconBg: "bg-green-50",
        iconColor: "text-[#16a34a]",
        captionColor: "text-[#16a34a]",
      },
      {
        icon: EyeIcon,
        label: "Profile Visibility",
        value: "5",
        caption: "Profile Views This Week",
        accent: "border-l-gold",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
        captionColor: "text-amber-600",
      },
      {
        icon: CalendarIcon,
        label: "Introduction Requests",
        value: `3`,
        caption: "Awaiting Your Decision",
        accent: "border-l-red",
        iconBg: "bg-red-50",
        iconColor: "text-red",
        captionColor: "text-red",
      },
    ]
  : [];    

  return (
    <DashboardLayout user={user}>
      {loading && (
        <p className="py-20 text-center text-sm text-slate-500">
          Loading your advisory...
        </p>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-6 py-5 text-sm text-red-700">
          {error}
        </div>
      )}    
      {!loading && !error && data && (
        <>       
        <div className="!pt-8">
            <div className="flex-1 text-sm text-slate-400">
              Dashboard  <span className="font-semibold text-base">/ </span> 
                <span className="text-black font-semibold">Advisory Program</span>
                
              <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Advisory Program</h1>
              <p className="text-sm font-semibold text-slate-900 mb-14">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <DashboardAdvisoryTopbar />   
            </div>
        </div>

        <div className="mb-6 px-0">
          <StatCards cards={cards} />
        </div>

        <div className="flex-1 text-sm text-slate-400">
          <div className="mx-auto flex w-full max-w-6xl justify-center">

          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
            {sortedMatches.map((match) => (
              <LargeCompanyCard
                key={match.companyName}
                match={match}
              />
            ))}
          </div>

          </div> 
        </div>          
        </>
      )}
    </DashboardLayout>
  );
};

export default DashboardAdvisoryInvestor;
