import { type ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetOtp } from "../services/authService";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";
import { buttonBack } from "../components/general/IndividualComponents/Buttons";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });  
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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

  const getError = (name: string, value: string) => {
  if (!touched[name]) return "";
  return value.trim() === "" ? "This field is required" : "";
};

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError(null);
    setSubmitting(true);

    try {
      await sendPasswordResetOtp(formData);

    navigate("/verify-otp", {
      state: {
      email: formData.email,
      mode: "password-reset",
      },});
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

return (
    <div className="flex min-h-screen flex-col min-h-screen bg-navy text-white">
      <Header />
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6">

        <div className="mx-auto mt-12 max-w-xl rounded-[20px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
        {/* Title */}
        <section className="mt-2 text-center">
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Forgot password
          </h1>
          <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            If an account with that email exists an email will be sent
            <br />
            with instructions on how to reset your password.
          </p>
        </section>                 
          
          <form onSubmit={handleSubmit} className="space-y-1">
            <label className="space-y-2 text-sm font-medium text-slate-800">
              Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={textField}
                type="email"
                placeholder="you@business.com"
                onBlur={() => handleBlur("email")}                
              />
            </label>            
            {getError("email", formData.email) && (
                  <p className="text-red text-sm">
                {getError("email", formData.email)}
              </p>
            )}
            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                disabled={submitting || formData.email == ""}
                className={buttonSubmit}
              >
                {submitting ? "Sending Verification Code..." : "Reset Password"}
              </button>

              <button
                type="button"
                onClick={() => window.history.back()}
                className={buttonBack}
              >
                Back
              </button>
            </div>
            {error && (
              <div className="text-center mx-auto rounded-[6px] border-red/20 border-2 border py-1 w-full max-w-sm mt-2 mb-3 bg-red/10 text-md text-red-dark font-semibold">
                {error}
              </div>
            )} 
            <p className="text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Sign up
              </a>
            </p>     
          </form>
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;