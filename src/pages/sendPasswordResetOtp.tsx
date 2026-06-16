import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetOtp } from "../services/authService";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };  
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

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
      setLoading(false);
    }
  };

return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-6">

        <section className="mt-16 text-center">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Forgot your password?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            If an account with that email exists an email will be sent
            <br />
            with instructions on how to reset your password.
          </p>
        </section>

        <div className="mx-auto mt-12 max-w-xl rounded-[32px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="space-y-2 text-sm font-medium text-slate-800">
              Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                type="email"
                placeholder="you@business.com"
              />
            </label>            
            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}
            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-2xl bg-[#dc2626] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Sending Verification Code..." : "Reset Password"}
              </button>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 rounded-2xl bg-[#0f2b5c] text-white border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-slate-100"
              >
                Back
              </button>
            </div>

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