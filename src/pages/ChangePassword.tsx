import { changePassword } from "../services/authService";
import { getErrorMessage } from "../lib/api";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import PasswordRequirements from "../components/general/IndividualComponents/PasswordRequirements"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = event.target;
    const { name, value, type } = target;
    const checked =
      type === "checkbox" && "checked" in target ? target.checked : false;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : name === "role"
            ? Number(value)
            : value,
    }));  
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getError = (name: string, value: string) => {
  if (!touched[name]) return "";
  return value.trim() === "" ? "This field is required" : "";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

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
    navigate("/password-success")
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };


return (
    <div className="flex min-h-screen flex-col min-h-screen bg-navy text-white">
      <Header />      
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6">        

        <div className="mx-auto mt-12 mx-full max-w-3xl rounded-[20px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
          {/* Title */}
          <section className="mt-2 text-center">
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Change Password
            </h1>
            <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
              Enter your current password and new password.
            </p>
          </section>          

              <form onSubmit={handleSubmit} className="space-y-1 px-25 mb-6">
              <label className="text-sm font-medium">
                Current password
                <input
                  name="currentPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={textField}
                  type="password"
                  placeholder="Current password"
                  onBlur={() => handleBlur("currentPassword")}
                />
                {getError("currentPassword", formData.currentPassword) && (
                  <p className="text-red text-sm">
                    {getError("currentPassword", formData.currentPassword)}
                  </p>
                )}                   
              </label>

              <label className="text-sm font-medium">
                New password
                <input
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={textField}
                  type="password"
                  placeholder="New password"
                  onBlur={() => handleBlur("newPassword")}
                />
                {getError("newPassword", formData.newPassword) && (
                  <p className="text-red text-sm">
                    {getError("newPassword", formData.newPassword)}
                  </p>
                )}                   
              </label>

              <PasswordRequirements password={formData.newPassword} />  

              <label className="text-sm font-medium">
                Confirm password
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={textField}
                  type="password"
                  placeholder="Confirm password"
                  onBlur={() => handleBlur("confirmPassword")}
                />
                {getError("confirmPassword", formData.confirmPassword) && (
                  <p className="text-red text-sm">
                    {getError("confirmPassword", formData.confirmPassword)}
                  </p>
                )}                   
              </label>
          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              disabled={submitting || formData.confirmPassword == "" || formData.newPassword == ""}
              className={buttonSubmit}
            >
              {submitting ? "Updating Password..." : "Update Password"}
            </button>
          </div>
            {error && (
              <div className="text-center mx-auto rounded-[6px] border-red/20 border-2 border py-1 w-full max-w-sm mt-1 mb-3 bg-red/10 text-md text-red-dark font-semibold">
                {error}
              </div>
            )}  

        </form>
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
    
  );
};

export default ChangePassword;