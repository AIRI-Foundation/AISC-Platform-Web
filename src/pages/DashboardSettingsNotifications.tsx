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

const DashboardSettings = () => {
  const [milestoneUpdatesEnabled, setMilestoneUpdatesEnabled] = useState(false);
  const [originalMilestoneUpdatesEnabled, setOriginalMilestoneUpdatesEnabled] = useState(false);

  const [sessionUpdatesEnabled, setSessionUpdatesEnabled] = useState(false);
  const [originalSessionUpdatesEnabled, setOriginalSessionUpdatesEnabled] = useState(false);
  
  const [activityUpdatesEnabled, setActivityUpdatesEnabled] = useState(false);
  const [originalActivityUpdatesEnabled, setOriginalActivityUpdatesEnabled] = useState(false);
  
  const [platformUpdatesEnabled, setPlatformUpdatesEnabled] = useState(false);
  const [originalPlatformUpdatesEnabled, setOriginalPlatformUpdatesEnabled] = useState(false);  
  useEffect(() => {
    const load2FA = async () => {
      const enabled = true; // value from DB

      setMilestoneUpdatesEnabled(enabled);
      setOriginalMilestoneUpdatesEnabled(enabled);

      setSessionUpdatesEnabled(enabled);
      setOriginalSessionUpdatesEnabled(enabled);

      setActivityUpdatesEnabled(enabled);
      setOriginalActivityUpdatesEnabled(enabled);

      setPlatformUpdatesEnabled(enabled);
      setOriginalPlatformUpdatesEnabled(enabled);                  
    };

    load2FA();
  }, []);
  
    const hasChanges =
    (milestoneUpdatesEnabled !== originalMilestoneUpdatesEnabled) || 
    (sessionUpdatesEnabled !== originalSessionUpdatesEnabled) || 
    (activityUpdatesEnabled !== originalActivityUpdatesEnabled) || 
    (platformUpdatesEnabled !== originalPlatformUpdatesEnabled);
    
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
            <span className="text-black font-semibold">Notifications</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Settings</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Manage your personal information, security preferences, and account details.
          </p>

          <DashboardSettingsTopbar />     
<div className="inline-flex justify-center items-start w-full h-full gap-5">

{/* Email Notifications [add mr-auto for left aligned is needed]*/}
    <div className="max-w-[700px] md:min-w-[500px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl py-6 p-4">
        {/* Title */}
        <section >
        <h1 className="w-full max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Email Notifications
        </h1>
        <p className="w-full mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Choose which emails you’d like to receive from AISC.
        </p>
          </section>  

          {/* Start enable section 1 */}
              <div className="flex">
                <div>
                  <p className="mt-2 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Milestone Updates
                  </p>    
                  <p className="mb-2 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    When a milestone moves to a new stage.
                  </p>  
                </div>
                <div className="my-auto item:right justify-right ml-auto">                                                
                  <button
                    onClick={() => setMilestoneUpdatesEnabled(!milestoneUpdatesEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${milestoneUpdatesEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${milestoneUpdatesEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>   {/* End enable section 1 */}


          {/* Start enable section 2 */}
              <div className="flex">
                <div>
                  <p className="mt-6 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Session Reminders
                  </p>    
                  <p className="mb-8 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    24 hours before a scheduled session.
                  </p>  
                </div>
                <div className="my-auto item:right justify-right ml-auto">                                                
                  <button
                    onClick={() => setSessionUpdatesEnabled(!sessionUpdatesEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${sessionUpdatesEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${sessionUpdatesEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>   {/* End enable section 2 */} 

          {/* Start enable section 3 */}
              <div className="flex">
                <div>
                  <p className="mt-2 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Activity Alerts
                  </p>    
                  <p className="mb-2 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    When an investor views your profile.
                  </p>  
                </div>
                <div className="my-auto item:right justify-right ml-auto">                                                
                  <button
                    onClick={() => setActivityUpdatesEnabled(!activityUpdatesEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${activityUpdatesEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${activityUpdatesEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>   {/* End enable section 3 */}

          {/* Start enable section 4 */}
              <div className="flex">
                <div>
                  <p className="mt-6 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
                    Platform Announcements
                  </p>    
                  <p className="mb-8 max-w-2xl text-navy text-slate-800 font-semibold text-sm">
                    New AISC features and updates
                  </p>  
                </div>
                <div className="my-auto item:right justify-right ml-auto">                                                
                  <button
                    onClick={() => setPlatformUpdatesEnabled(!platformUpdatesEnabled)}
                    className={`
                      relative w-16 h-8 rounded-full transition-colors duration-200
                      ${platformUpdatesEnabled ? "bg-navy" : "bg-gray-200"}
                    `}
                  >
                    <div
                      className={`
                        absolute top-1 h-6 w-6 rounded-full bg-white shadow-md
                        transition-all duration-200
                        ${platformUpdatesEnabled ? "left-[36px]" : "left-[4px]"}
                      `}
                    />
                  </button>
                </div>
              </div>   {/* End enable section 4 */}               
            <button
            disabled={!hasChanges}
            className={`${buttonSubmit} mt-6 mb-3 py-4`}
            onClick={() => {
              setOriginalMilestoneUpdatesEnabled(milestoneUpdatesEnabled);
              setSessionUpdatesEnabled(sessionUpdatesEnabled);
              setOriginalActivityUpdatesEnabled(activityUpdatesEnabled);
              setOriginalPlatformUpdatesEnabled(platformUpdatesEnabled);
            }}
          >
            SAVE Preferences
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
