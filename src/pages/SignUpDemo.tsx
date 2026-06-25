import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { getErrorMessage } from "../lib/api";

const SignUpDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: 1,
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const faqItems = [
    {
      id: 0,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 1,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 2,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 3,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 4,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 5,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      id: 6,
      title: "Title",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
  ];

  // Password rules
  const passwordRules = [
    { label: "8 characters minimum", test: (p: string) => p.length >= 8 },
    { label: "at least one uppercase", test: (p: string) => /[A-Z]/.test(p) },
    { label: "at least one lowercase", test: (p: string) => /[a-z]/.test(p) },
    { label: "a number", test: (p: string) => /[0-9]/.test(p) },
    { label: "a symbol", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
  ];

  const passwordStrength = passwordRules.filter((r) =>
    r.test(formData.password),
  ).length;

  const strengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500";
    if (passwordStrength <= 3) return "bg-amber-400";
    return "bg-[#10b981]";
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.businessEmail.trim() &&
    formData.phoneNumber.trim() &&
    passwordStrength === 5 &&
    formData.password === formData.confirmPassword &&
    formData.agreeTerms;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked =
      type === "checkbox" && "checked" in target ? target.checked : false;
    setFormData((curr) => ({
      ...curr,
      [name]:
        type === "checkbox" ? checked : name === "role" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.businessEmail,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
        agreeToTerms: formData.agreeTerms,
      });
      navigate("/verify-email", { state: { email: formData.businessEmail } });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      {/* Top nav */}
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[9px] font-bold text-[#dc2626] leading-tight text-center">
              AISC
            </span>
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-tight">
              AI Startups Canada
            </div>
            <div className="text-[10px] text-[#f8d547] uppercase tracking-widest">
              AISC Platform
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/directory" className="hover:text-white transition">
            Directory
          </a>
          <a href="/pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition">
            About Us
          </a>
          <a href="#" className="hover:text-white transition">
            Fr
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#dc2626] px-5 py-2.5 text-sm font-semibold text-[#dc2626] transition hover:bg-[#dc2626] hover:text-white"
          >
            Login
          </a>
          <a
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-[#dc2626] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Main card */}
      <div className="mx-auto mt-6 max-w-lg px-4 pb-16">
        <div className="rounded-3xl bg-white text-slate-900 p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-slate-900 text-center mb-1">
            Start Using <span className="text-[#f8d547]">AISC</span> Today!
          </h1>
          <p className="text-sm text-slate-500 text-center mb-6">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Sed nibh consequat eget in.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create Password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7C7.523 19 3.732 16.057 2.458 12z"
                    />
                  </svg>
                </button>
              </div>

              {/* Strength bar */}
              {formData.password.length > 0 && (
                <div className="mt-2 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strengthColor()}`}
                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                  />
                </div>
              )}

              {/* Password rules */}
              <div className="mt-2 space-y-1">
                {passwordRules.map((rule) => {
                  const passed = rule.test(formData.password);
                  return (
                    <div key={rule.label} className="flex items-center gap-2">
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition ${
                          passed
                            ? "border-[#10b981] bg-[#10b981]"
                            : "border-slate-300"
                        }`}
                      >
                        {passed && (
                          <svg
                            className="w-2 h-2 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-xs ${passed ? "text-[#10b981]" : "text-slate-400"}`}
                      >
                        {rule.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1.5">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7C7.523 19 3.732 16.057 2.458 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Agree to terms */}
            <div className="flex items-center gap-3">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-300 text-[#2563eb] focus:ring-[#2563eb]"
              />
              <label htmlFor="agreeTerms" className="text-sm text-slate-700">
                Agree to terms & conditions{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>

            <p className="text-xs text-red-500">* Required Field</p>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={!isFormValid || submitting}
              className={`w-full rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition ${
                isFormValid && !submitting
                  ? "bg-[#0f2b5c] text-white hover:bg-[#0a1f3c]"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {submitting ? "Creating account..." : "SIGN UP"}
            </button>

            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Log in
              </a>
            </p>
          </form>
        </div>

        {/* Trusted by */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted By</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur. Dignissim non iaculis
            accumsan dui. Sed fringilla malesuada vel malesuada volutpat id
            curabitur.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 rounded-2xl bg-white/10" />
            <div className="h-24 rounded-2xl bg-white/10" />
            <div className="h-24 rounded-2xl bg-white/10" />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-300 bg-white"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <svg
                    className={`h-5 w-5 text-slate-500 transition-transform ${expandedFAQ === item.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m6 9 6 6 6-6"
                    />
                  </svg>
                </button>
                {expandedFAQ === item.id && (
                  <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a1f3c]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-5">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-[8px] font-bold text-[#dc2626]">
                    AISC
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    AI Startups Canada
                  </div>
                  <div className="text-[9px] text-[#f8d547] uppercase tracking-widest">
                    AISC Platform
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Canada's #1 AI Startup Intelligence Platform
              </p>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                {/* X/Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {["Contact Us", "Contact Us", "Contact Us", "Contact Us"].map(
              (title, i) => (
                <div key={i}>
                  <h4 className="text-sm font-semibold text-white mb-4">
                    {title}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>
                      <a href="#" className="hover:text-white transition">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpDemo;
