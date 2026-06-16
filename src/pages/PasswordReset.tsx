import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordReset } from "../services/authService";
import { getErrorMessage } from "../lib/api";
import { useLocation } from "react-router-dom";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",  
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [success, setSuccess] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const location = useLocation();
  const stateEmail = location.state?.email;
  
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

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
      await PasswordReset({
        email: stateEmail,
        NewPassword: formData.newPassword,
        ConfirmPassword: formData.confirmPassword
      });

    navigate("/password-success")
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      <Header />      
      <div className="mx-auto max-w-7xl px-6 py-6">        

        <section className="mt-16 text-center">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Reset Password
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Please enter your new password and confirm it
          </p>
        </section>

          {/* FORM CARD */}
            <div className="mx-auto mt-12 max-w-2xl rounded-[32px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">


                {/* NEW PASSWORD */}
                <label className="text-sm font-medium text-slate-800">
                  New password
                  <input
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                    type="password"
                    placeholder="Enter new password"
                    onBlur={() => handleBlur("newPassword")}
                  />
                {getError("newPassword", formData.newPassword) && (
                  <p className="text-red-500 text-sm">
                    {getError("newPassword", formData.newPassword)}
                  </p>
                )}
                <p className="mb-2">
                  </p>                             
                </label>


                {/* CONFIRM PASSWORD */}
                <label className="text-sm font-medium text-slate-800">
                  Confirm password
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                    type="password"
                    placeholder="Confirm new password"
                    onBlur={() => handleBlur("confirmPassword")}
                  />
                {getError("confirmPassword", formData.confirmPassword) && (
                  <p className="text-red-500 text-sm">
                    {getError("confirmPassword", formData.confirmPassword)}
                  </p>     
                )}
                <p className="mb-2">
                  </p>                                             
                </label>


                {/* PASSWORD REQUIREMENTS */}
                <div className="rounded-3xl border border-slate-200 mt-4 bg-slate-50/75 p-4 text-slate-700 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Password requirements
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                      8 characters minimum
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                      At least one number
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                      At least one symbol
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                      One uppercase letter
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                      One lowercase letter
                    </li>
                  </ul>
                </div>


          {/* ERROR / SUCCESS */}
          {error && (
            <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}


          {success && (
            <div className="rounded-2xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}


          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-2xl bg-[#dc2626] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Updating Password..." : "Update Password"}
            </button>


            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex-1 rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-slate-100"
            >
              Back
            </button>
          </div>


        </form>
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
    
  );
};

export default ForgotPassword;