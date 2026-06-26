import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getProfile, getUserCompany } from "../services/dashboardService";
import { getErrorMessage } from "../lib/api";
import { isLoggedIn } from "../lib/auth";
import { getInitials } from "../lib/format";
import { ProfileIcon, SecurityIcon, BellIcon, CreditCardIcon } from "../components/dashboard/icons";

import { changePassword } from "../services/authService";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import PasswordRequirements from "../components/general/IndividualComponents/PasswordRequirements"
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
  const [isInvestorView, setIsInvestorView] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
//   const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     businessEmail: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     role: 1,
//     agreeTerms: false,
//   });

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

  // Returns an error message if the password fails a rule, otherwise null.
  const validatePassword = (password: string): string | null => {
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[a-z]/.test(password))
      return "Password must include at least one lowercase character.";
    if (!/[A-Z]/.test(password))
      return "Password must include at least one uppercase character.";
    if (!/[0-9]/.test(password))
      return "Password must include at least one number.";
    if (!/[^A-Za-z0-9]/.test(password))
      return "Password must include at least one symbol.";
    return null;
  };

  const passwordsMatch =
    formData.newPassword === formData.confirmPassword;

  const passwordValid =
    validatePassword(formData.newPassword) === null;  
      

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError(null);

//     const passwordError = validatePassword(formData.password);
//     if (passwordError) {
//       setError(passwordError);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (formData.agreeTerms !== true) {
//       setError("Please accept the terms & conditions");
//       return;
//     }
//     setSubmitting(true);

//   try {
//     await register({
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.businessEmail,
//       phoneNumber: formData.phoneNumber,
//       password: formData.password,
//       confirmPassword: formData.confirmPassword,
//       role: formData.role,
//       agreeToTerms: formData.agreeTerms
//     }); 

//     navigate("/verify-otp", {
//       state: {
//       email: formData.businessEmail,
//       password: formData.password,
//       mode: "email-verification",
//       },});
//     } catch (err) {
//       setError(getErrorMessage(err));
//     } finally {
//       setSubmitting(false);
//     } 
//   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

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


  const hasFieldError = (name: string, value: string) => {
    return touched[name] && value.trim() === "";
  };

  const getInputClass = (name: string, value: string, touched: boolean) =>
  `${textField} ${
     touched && hasFieldError(name, value)
      ? "!border-red focus:border-red focus:ring-red/25"
      : ""
  }`;

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
    <div className=" min-h-screen max-w-7xl !px-8 !py-8 bg-red">
        <div className="flex-1 text-sm text-slate-400 bg-navy">
          Dashboard  <span className="font-semibold text-base">/ </span> Settings 
            <span className="font-semibold text-base">/ </span> 
            <span className="text-black font-semibold">Profile info</span>
            
          <h1 className="text-2xl font-bold text-slate-900 mt-3 mb-1">Settings</h1>
          <p className="text-sm font-semibold text-slate-900 mb-6">
            Manage your personal information, security preferences, and account details.
          </p>


          <div className="flex mx-auto justify-center items-center gap-3 mb-20">
              <div className="p-3.5 max-h-[52px] bg-white rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] flex justify-center items-center 
              gap-2.5 overflow-hidden hover:bg-black/10 "> {/*Swap settings page here!!*/}
                  <div className="inline-flex flex-col justify-start items-start text-black">
                    <ProfileIcon className="h-6 w-6" />
                  </div>
                  <div className="justify-start text-black text-base font-bold uppercase">Profile Info</div>
              </div>

              <div className="p-3.5 max-h-[52px] bg-white rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] flex justify-center items-center 
               overflow-hidden hover:bg-black/10"> {/*Swap settings page here!!*/}
                  <div className="inline-flex flex-col justify-start items-start text-black">
                    <SecurityIcon className="h-7 w-7 mt-2" />
                  </div>
                  <div className="justify-start text-black text-base font-bold uppercase">Security</div>
              </div>

              <div className="p-3.5 pl-2.5 max-h-[52px] bg-white rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] flex justify-center items-center 
              gap-2.5 overflow-hidden hover:bg-black/10 "> {/*Swap settings page here!!*/}
                  <div className="inline-flex flex-col justify-start items-start text-black">
                    <BellIcon className="h-6 w-6" />
                  </div>
                  <div className="justify-start text-black text-base font-bold uppercase">Notifications</div>
              </div>

              <div className="p-3.5 max-h-[52px] bg-white rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] flex justify-center items-center 
              gap-1 overflow-hidden hover:bg-black/10 "> {/*Swap settings page here!!*/}
                  <div className="inline-flex flex-col justify-start items-start text-black">
                    <CreditCardIcon className="h-7 w-7 mt-3" />
                  </div>
                  <div className="justify-start text-black text-base font-bold uppercase">Billing</div>
              </div>                                 
          </div>       

{/* WIP */}
<div className="inline-flex justify-center items-center w-full h-full gap-5 bg-gold">

{/* ChangePassword */}
    <div className="max-w-[650px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.35)] text-slate-900 backdrop-blur-xl p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Change Password
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 pr-60 font-semibold text-lg">
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

        <label className= "text-sm font-medium block">
            <div className= "px-2.5"> New password </div>
            <div className="relative">
                <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    touched.newPassword && !passwordValid
                    ? "!border-red focus:border-red focus:ring-red/25"
                    : ""
                }`}
                type={showNewPassword ? "text" : "password"}
                placeholder="New password"
                onBlur={() => handleBlur("newPassword")}
                />

                <PasswordToggle
                show={showNewPassword}
                onToggle={() =>
                    setShowNewPassword(!showNewPassword)
                }
                />
            </div>
            </label>   

            <PasswordRequirements password={formData.newPassword} />  

            <label className= "text-sm font-medium block">
            <div className= "px-2.5 mt-3"> Confirm password </div>
            <div className="relative">
                <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    (touched.confirmPassword && !passwordsMatch) || (touched.confirmPassword && formData.confirmPassword =="")
                    ? "!border-red focus:border-red focus:ring-red/25"
                    : ""
                }`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                onBlur={() => handleBlur("confirmPassword")}
                />

                <PasswordToggle
                show={showConfirmPassword}
                onToggle={() =>
                    setShowConfirmPassword(!showConfirmPassword)
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

{/* ChangePersonalInfo */}
    <div className="max-w-[650px] rounded-[20px] bg-white/95 shadow-[0px_4px_12px_4px_rgba(0,0,0,0.35)] text-slate-900 backdrop-blur-xl p-4">
        {/* Title */}
        <section >
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-2xl">
            Change Password
        </h1>
        <p className="mx-auto mt-1 mb-5 max-w-2xl text-navy text-slate-800 pr-60 font-semibold text-lg">
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

        <label className= "text-sm font-medium block">
            <div className= "px-2.5"> New password </div>
            <div className="relative">
                <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    touched.newPassword && !passwordValid
                    ? "!border-red focus:border-red focus:ring-red/25"
                    : ""
                }`}
                type={showNewPassword ? "text" : "password"}
                placeholder="New password"
                onBlur={() => handleBlur("newPassword")}
                />

                <PasswordToggle
                show={showNewPassword}
                onToggle={() =>
                    setShowNewPassword(!showNewPassword)
                }
                />
            </div>
            </label>   

            <PasswordRequirements password={formData.newPassword} />  

            <label className= "text-sm font-medium block">
            <div className= "px-2.5 mt-3"> Confirm password </div>
            <div className="relative">
                <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`${textField} pr-10 ${
                    (touched.confirmPassword && !passwordsMatch) || (touched.confirmPassword && formData.confirmPassword =="")
                    ? "!border-red focus:border-red focus:ring-red/25"
                    : ""
                }`}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                onBlur={() => handleBlur("confirmPassword")}
                />

                <PasswordToggle
                show={showConfirmPassword}
                onToggle={() =>
                    setShowConfirmPassword(!showConfirmPassword)
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
