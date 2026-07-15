import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import DashboardSettingsTopbar from "../components/dashboard/DashboardSettingsTopbar";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

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

type ActiveDevicesProps = {
DeviceType: string
Location: string
LastUse: string
DeviceState: string
};

export function ActiveDevices({
DeviceType,
Location,
LastUse,
DeviceState
}: ActiveDevicesProps) {
  return (
    <div>
      <div className="py-3.5 w-full border-b-[0.67px] border-zinc-300 inline-flex justify-start items-center">
          <div className="inline-flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch justify-start text-black text-base font-medium ">
                {DeviceType}
              </div>
              <div className="w-72 justify-start text-black/20 text-xs font-medium ">
                {Location} · {LastUse}
              </div>
          </div>
          <div className="min-w-[80px] ml-auto">
            <div
              className={`px-2.5 py-[5px]
                flex items-center justify-center
                rounded-[52px] outline outline-[0.67px] text-bold outline-offset-[-0.67px]
                ${
                  DeviceState === "Current"
                    ? "outline-emerald-600 text-emerald-600 bg-emerald-50"
                    : "outline-red-600 text-red-600 bg-red-50"
                }`}
            >
              <span className="text-[12px] font-bold uppercase">
                {DeviceState}
              </span>
            </div>
          </div>                  
      </div>   
    </div>
  );
}

const DashboardSettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [originalTwoFactorEnabled, setOriginalTwoFactorEnabled] = useState(false);


  useEffect(() => {
    const load2FA = async () => {
      const enabled = true; // value from DB

      setTwoFactorEnabled(enabled);
      setOriginalTwoFactorEnabled(enabled);
    };

    load2FA();
  }, []);
  
    const hasChanges =
    twoFactorEnabled !== originalTwoFactorEnabled;
    
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);
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



  return (
    <DashboardLayout user={user}>
    <div className=" min-h-screen !px-8 !py-8">
        <div className="flex-1 text-sm text-slate-400">
          Dashboard  <span className="font-semibold text-base">/ </span> Settings 
            <span className="font-semibold text-base">/ </span> 
            <span className="text-black font-semibold">Security</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Settings</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Manage your personal information, security preferences, and account details.
          </p>

          <DashboardSettingsTopbar />     
<div className="inline-flex justify-center items-start w-full h-full gap-5">

{/* Two-Factor Authentication */}
    <div className="max-w-[650px] md:min-w-[475px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl py-6 p-4">
        {/* Title */}
        <section >
        <h1 className="w-full max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Two-Factor Authentication
        </h1>
        <p className="w-full mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Add a second layer of security to your account.
        </p>
        </section>  
              <div className="flex">
                <div>
                  <p className="mt-2 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Enable
                  </p>    
                  <p className="mb-2 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    Use an authenticator app or SMS code on sign-in.
                  </p>  
                </div>
                <div className="my-auto item:right justify-right ml-auto">                                                
                  <button
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${twoFactorEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${twoFactorEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>    
              <button
              disabled={!hasChanges}
              className={`${buttonSubmit} mt-6 mb-3 py-4`}
              onClick={() => setOriginalTwoFactorEnabled(twoFactorEnabled)}
            >
              Save Changes
              </button>      
    
    </div>        
    {/* End the 2FA */}

{/* Active Sessions */}
    <div className="max-w-[650px] md:min-w-[475px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl p-4">
        {/* Title */}
        <section >
          <h1 className="w-full max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
              Active Sessions
          </h1>
          <p className="w-full mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
              Devices currently signed in to your account.
          </p>


          <ActiveDevices 
            DeviceType="Windows PC"
            Location = "Toronto, ON"
            LastUse = "Now"
            DeviceState = "Current"
          />                   
                    
        </section> 
  </div>   
 {/* End the Active Sessions */}

</div> 


{/* WIP ENDS */}
        </div>          
    </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
