import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import DashboardSettingsTopbar from "../components/dashboard/DashboardSettingsTopbar";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import placeholderImage from "../assets/placeholder.png";
import {RightArrowHeadIcon, PencilEditIcon} from "../components/dashboard/icons";
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

type PaymentMethodProps = {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  onEdit: () => void;
};


export function PaymentMethod({
brand,
last4,
expMonth,
expYear,
onEdit
}: PaymentMethodProps) {
  return (
    <div className=" w-full p-5 bg-gray-100 rounded-2xl inline-flex justify-between items-center">
    <div className="size- flex justify-start items-center gap-3">
      {/* Alter this depending on the card brand. */}
        <div 
            className={`
                rounded-md px-3 py-2 font-bold uppercase text-white
                ${
                    brand === "visa"
                        ? "bg-blue-950"
                        : brand === "mastercard"
                        ? "bg-red-600"
                        : "bg-zinc-700"
                }
            `}
        >
            {brand.toUpperCase()}
        </div>
        <div className="size- inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="size- inline-flex justify-start items-center gap-2.5">
              <div className="flex items-center gap-2 text-lg font-bold">
                  <span className="tracking-widest text-black">
                      •••• •••• ••••
                  </span>

                  <span className="text-sm tracking-widest mt-1">
                    {last4}
                  </span>
              </div>
            </div>
            <div className="justify-start text-black text-xs font-medium">
              Expires {expMonth.toString().padStart(2, "0")}/{expYear % 100}
            </div>
        </div>
    </div>
<button
  type="button"
  onClick={onEdit}
  className="w-11 self-stretch flex justify-start items-center gap-1 hover:underline"
>
  <div className="size-7 mt-2">
    <PencilEditIcon className="h-7 w-7" />
  </div>

  <div className="text-center text-black text-[12px] font-medium">
    Edit
  </div>
</button>
</div>
  );
}

type PlanProps = {
Header: string
Label: string
Access: string
BillTime: string
IsActive: boolean
};

export function PlanType({
Header,
Label,
Access,
BillTime,
IsActive
}: PlanProps) {
  return (
        <section >
          <h1 className="w-full max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
              Current Plan
          </h1>
          <p className="w-full mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
              {Header}
          </p>

<div className="w-full p-4 bg-gray-100 rounded-2xl inline-flex justify-between items-center">
    <div className="flex justify-start items-center gap-3">
        <div className={`h-10 w-10 bg-white/85 flex items-center justify-center text-center font-bold text-black/35 text-6xl`}>
          <img
            src={placeholderImage}
            className="w-full h-full object-cover"
            alt="" />
        </div>        
        <div className="inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="self-stretch justify-start text-black text-base font-medium">{Label}</div>
            <div className="justify-start text-black text-xs font-medium">{Access} · Billed {BillTime} </div>
        </div>
    </div>

          <div className="min-w-[80px] ml-auto">
            <div
              className={`px-2.5 py-[5px]
                flex items-center justify-center
                rounded-[52px] outline outline-[0.67px] text-bold outline-offset-[-0.67px]
                ${
                  IsActive
                    ? "text-navy outline-navy bg-blue-50"
                    : "outline-red-700 text-red-700 bg-red-50"
                }`}
            >
              <span className="text-[12px] font-bold uppercase">
                {IsActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

</div>          
                    
        </section>     
  );
}

const DashboardSettings = () => {
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [, setLoading] = useState(true);
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
          Dashboard  <span className="font-semibold text-base">/ </span> Settings 
            <span className="font-semibold text-base">/ </span> 
            <span className="text-black font-semibold">Billing</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Settings</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Manage your personal information, security preferences, and account details.
          </p>

          <DashboardSettingsTopbar />     
<div className="inline-flex justify-center items-start w-full h-full gap-5">


{/* Current Plan */}
  <div className="max-w-[650px] md:min-w-[475px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl p-4">
      <PlanType
      Header="You are on the Pro Plan."
      Label="Pro Plan"
      Access= "Full access"
      BillTime= "monthly"
      IsActive= {false}
      />
  <a
    href="/manage-subscriptions"
    className={`inline-flex items-center mt-5 mb-2 text-xs font-semibold hover:underline text-navy`}
  >
    Learn More
    <RightArrowHeadIcon className="h-6 w-6" />
  </a>      
  </div>   
 {/* End the Current Plan */}

{/* Payment Method */}
    <div className="max-w-[650px] md:min-w-[475px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl py-6 p-4">
        {/* Title */}
        <section >
        <h1 className="w-full max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Payment Method
        </h1>
        <p className="w-full mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Your payment information on file.
        </p>
        </section>  
        <div>
          <PaymentMethod
            brand="visa"
            last4="1234"
            expMonth={6}
            expYear={2030}
            onEdit={() => setCreditInfoChanged(true)}
          />  
        </div>     
              <button
              disabled={!creditInfoChanged}
              className={`${buttonSubmit} mt-6 mb-3 py-4`}
            >
              Update Payment Method
              </button>      
    
    </div>        
    {/* End the 2FA */} 
</div> 


{/* WIP ENDS */}
        </div>          
    </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
