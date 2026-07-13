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
import {CheckIcon, XIcon, TrendingUpIcon, CheckCircleIcon, EyeIcon, CalendarIcon} from "../components/dashboard/icons";
import StatCards from "../components/dashboard/StatCards";
import { formatMemberSince } from "../lib/format";

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
  BackgroundColour: string;
  BorderColour: string;
};

export function SessionRow({
  Title,
  Sentences,
  BackgroundColour,
  BorderColour,
}: SummaryCardProps) {
  return(
    <div className={`w-full ml-5 p-5 bg-${BackgroundColour} rounded-2xl outline outline-[1.67px] outline-offset-[-0.67px] outline-${BorderColour} inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden`}>
        <div className="justify-start text-black text-base font-bold  uppercase">
          {Title}
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                          
      {Sentences.map((sentence) => (
          <li
              key={sentence}
              className="flex items-start gap-3"
          >
              <div className={`mt-1 h-3 w-3 rounded-full border-2 text-${BorderColour}`}/>

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

const investorMatch: MatchCard = {
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
};

type LargeCompanyCardProps = {
  match: MatchCard
};

export function LargeCompanyCard({
  match,
}: LargeCompanyCardProps) {
  return(
       <div className="max-w-5xl inline-flex flex-col justify-start items-start">
    <div className="self-stretch p-5 bg-white rounded-tl-[20px] rounded-tr-[20px] border-b-[0.67px] border-zinc-300 inline-flex justify-between items-center">
        <div className=" flex justify-start items-end gap-3">
            <img
              src={match.Thumbnail}
              alt={`${match.companyName} logo`}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="w-40 inline-flex flex-col justify-start items-start gap-[5px]">
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
        <div className="inline-flex justify-start items-center gap-3">
            <div className="w-[1033px] flex justify-between items-center">
                  <SessionRow 
                  Title="Investor Summary"
                  Sentences={investorMatch.investorSummary}
                  BackgroundColour="blue-400/20"   
                  BorderColour="blue-950"
                  />

                  <SessionRow 
                  Title="Why AISC matched you"
                  Sentences={investorMatch.matchReasons}
                  BackgroundColour="amber-50"        
                  BorderColour="amber-600"                      
                  />
            </div>
        </div>
        <div className=" inline-flex justify-start items-center gap-4">
            <div className="self-stretch flex justify-start items-center gap-3">
                <div className="w-60 self-stretch px-2.5 py-2 bg-gray-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-between items-start">
                    <div className="self-stretch justify-start text-black text-[10px] font-bold  uppercase">
                      Focus
                    </div>
                    <div className="self-stretch justify-start text-black text-xs font-medium ">
                      {match.focus}
                    </div>
                </div>
                <div className="w-60 self-stretch px-2.5 py-2 bg-gray-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-between items-start">
                    <div className="self-stretch justify-start text-black text-[10px] font-bold  uppercase">
                      Ticket Size
                    </div>
                    <div className="self-stretch justify-start text-black text-xs font-medium ">
                      {match.ticketSize}
                    </div>
                </div>
            </div>


            <div className=" flex justify-start items-center gap-3.5">
                <div className="w-60 px-5 py-4 bg-green/10 rounded-[10px] outline outline-[0.67px] outline-offset-[-0.67px] text-emerald-600 flex justify-center items-center gap-1">
                  <CheckIcon className="h-6 w-6 text-emerald-600" />
                  <div className="justify-start text-emerald-600 text-base font-bold  uppercase">
                    Accept
                  </div>
                </div>           
                <div className="w-60 px-5 py-4 bg-red/10 rounded-[10px] outline outline-[0.67px] outline-offset-[-0.67px] outline-red-700 flex justify-center items-center gap-1">
                  <XIcon className="h-6 w-6 text-red-700 mb-1" />
                  <div className="justify-start text-red-700 text-base font-bold  uppercase">
                    Decline
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>   
  );
}



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
        value: `3 days`,
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
    <div className=" !px-8 !mt-8">
        <div className="flex-1 text-sm text-slate-400">
          Dashboard  <span className="font-semibold text-base">/ </span> 
            <span className="text-black font-semibold">Advisory Program</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Advisory Program</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <DashboardAdvisoryTopbar />   
          </div>
</div>
            <div className="mb-6 px-0">
              <StatCards cards={cards} />
            </div>
    <div className=" min-h-screen !px-8 !py-8">
        <div className="flex-1 text-sm text-slate-400">
        <div className="inline-flex justify-center items-start w-full h-full gap-5">

{/* Current Plan */}
    <LargeCompanyCard
      match={investorMatch}
      />
 {/* End the Current Plan */}
</div> 


{/* WIP ENDS */}
        </div>          
    </div>
    </DashboardLayout>
  );
};

export default DashboardAdvisoryInvestor;
