import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import { changePassword } from "../services/authService";
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
const [data, setData] = useState<ProfilePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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

    // if( formData.currentPassword != ) VALIDATE PASSWORD
    try {
      await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
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
<div className="inline-flex justify-center items-center w-full h-full gap-5">  {/* change gold */}

{/* Personal Information */}
    <div className="max-w-[650px] md:min-w-[450px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl py-6 p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Change Password
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Choose a strong password
        </p>
        </section>          

            <form onSubmit={handleSubmit} className="space-y-1">
            <label className= "text-sm font-medium block">
            <div className= "px-2.5"> Current password </div>
            <div className="relative">
                <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    touched.currentPassword && formData.currentPassword == ""
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
        <div className="flex gap-3 py-2 mt-3">
        <button
            type="submit"
            disabled={submitting || formData.confirmPassword == "" || formData.newPassword == ""}
            className={`${buttonSubmit} py-3`}
        >
            {submitting ? "Updating Password..." : "Update Password"}
        </button>
        </div>
        {error && (
            <div className="text-center mx-auto py-1 w-full max-w-sm mt-2 mb-3 text-md text-red-dark font-semibold">
            {error}
            </div>
        )}  

    </form>
    </div>

{/* ChangePassword */}
    <div className="max-w-[650px] md:min-w-[450px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.15)] text-slate-900 backdrop-blur-xl p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Change Password
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Choose a strong password
        </p>
        </section>          

            <form onSubmit={handleSubmit} className="space-y-1">
            <label className= "text-sm font-medium block">
            <div className= "px-2.5"> Current password </div>
            <div className="relative">
                <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    touched.currentPassword && formData.currentPassword == ""
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
        <div className="flex gap-3 py-2 mt-3">
        <button
            type="submit"
            disabled={submitting || formData.confirmPassword == "" || formData.newPassword == ""}
            className={`${buttonSubmit} py-3`}
        >
            {submitting ? "Updating Password..." : "Update Password"}
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
