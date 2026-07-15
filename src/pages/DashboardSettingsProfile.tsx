import { validatePassword } from "../services/authService";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import DashboardSettingsTopbar from "../components/dashboard/DashboardSettingsTopbar";
import PasswordToggle from "../components/general/IndividualComponents/PasswordToggle"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";

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

function formatPhoneNumber(phone: string) {
  if (phone.length !== 10) return phone;

  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
}

const DashboardSettings = () => {
  const [data, setData] = useState<ProfilePageData | null>(null);
  const [, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await validatePassword({
        password: formData.currentPassword,
      });
    navigate("/password-reset", {
      state: {
        email: user.email,
      },
    });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };    

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
            <span className="text-black font-semibold">Profile info</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Settings</h1>
          <p className="text-sm font-semibold text-slate-900 mb-18">
            Manage your personal information, security preferences, and account details.
          </p>

          <DashboardSettingsTopbar />     

{/* WIP */}
<div className="inline-flex justify-center items-start w-full h-full gap-5"> 

{/* Personal Information */}
    <div className="max-w-[650px] md:min-w-[450px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl py-6 p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Personal Information
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Update your personal information
        </p>
        </section>          
        <div className="grid gap-1 sm:grid-cols-2">
          <label className="text-sm font-medium">
            First name
            <div className={`${textField}`}> {data?.profile.firstName}</div>
           
          </label>
          <label className="text-sm font-medium">
            Last name
            <div className={`${textField}`}> {data?.profile.lastName}</div>                      
          </label>
        </div> 
        <label className="text-sm font-medium">
          Business email    
          <div className={`${textField}`}> {data?.profile.email}</div>                                            
        </label>

        <label className="text-sm font-medium">
          Phone number         
            <div className={`${textField}`}> {formatPhoneNumber(data?.profile.phoneNumber ?? "")}</div>            
        </label>
    
<p className="text-sm text-slate-600 mt-6">
              <a
                href="/contact" 
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Contact us {" "}  
              </a>
              to update your personal information.             
            </p>      
    </div>

{/* ChangePassword */}
    <div className="max-w-[650px] md:min-w-[450px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Change Password
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Change your password here
        </p>
        </section>                          
          <form onSubmit={handleSubmit}>
            <label className= "text-sm font-medium block">
              <div className= "px-2.5 mt-3"> Current Password </div>
                <div className="relative">
                  <input
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className={`${textField} pr-10 ${
                      (touched.currentPassword && formData.currentPassword =="")
                        ? "!border-red focus:border-red focus:ring-red/25"
                        : ""
                    }`}
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Current password"
                    onBlur={() => handleBlur("currentPassword")}
                  />

                  <PasswordToggle
                    show={showCurrentPassword}
                    onToggle={() =>
                      setShowCurrentPassword(!showCurrentPassword)
                    }
                  />
                </div>
               </label>           
        {/* BUTTONS */}
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              disabled={submitting || formData.currentPassword == ""}
              className={`${buttonSubmit} py-4`}
            >
              {submitting ? "Validating Password..." : "Update Password"}
            </button>
          </div>
            {error && (
              <div className="text-center mx-auto py-1 w-full max-w-sm mt-2 mb-3 text-md text-red-dark font-semibold">
                {error}
              </div>
            )}  
      </form>
    </div>
{/* Container Ends*/}    
</div> 


{/* WIP ENDS */}
        </div>          
    </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
