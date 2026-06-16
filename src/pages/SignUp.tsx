import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";

const SignUp = () => {
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

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = event.target;
    const { name, value, type } = target;
    const checked =
      type === "checkbox" && "checked" in target ? target.checked : false;

    // const newValue = type === "checkbox" ? checked : value;

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

  // const isEmpty = (value: string) => value.trim() === "";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.agreeTerms !== true) {
      setError("Please accept the terms & conditions");
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
      agreeToTerms: formData.agreeTerms
    }); 

    setSuccess(
      "Account created. Check your email for a verification code."
    );    
    navigate("/verify-otp", {
      state: {
      email: formData.businessEmail,
      mode: "email-verification",
      },});
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    } 
  };
console.log("Registration successful");

  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">
              AI Startups Canada
            </div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-300">
              AISC PLATFORM
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <a href="/directory" className="transition hover:text-white">
              Directory
            </a>
            <a href="/spectrum" className="transition hover:text-white">
              AISC Spectrum
            </a>
            <a href="/pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="/investor-hub" className="transition hover:text-white">
              Investor Hub
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-[#dc2626] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
            >
              Sign up / Login
            </a>
          </div>
        </header>

        <section className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-300">
            Sign up
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Start using <span className="text-[#f8d547]">AISC</span> today!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
          </p>
        </section>

        <div className="mx-auto mt-12 max-w-4xl rounded-[32px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                First name
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("firstName")}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="text"
                  placeholder="First name"
                />
                {getError("firstName", formData.firstName) && (
                  <p className="text-red-500 text-sm">
                    {getError("firstName", formData.firstName)}
                  </p>
                )}               
              </label>
              <label className="text-sm font-medium text-slate-800">
                Last name
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("lastName")}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="text"
                  placeholder="Last name"
                />
                {getError("lastName", formData.lastName) && (
                  <p className="text-red-500 text-sm">
                    {getError("lastName", formData.lastName)}
                  </p>
                )}                
              </label>
            </div>

            <label className="text-sm font-medium text-slate-800">
              Business email
              <input
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                onBlur={() => handleBlur("businessEmail")}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                type="email"
                placeholder="you@business.com"
              />
                {getError("businessEmail", formData.businessEmail) && (
                  <p className="text-red-500 text-sm">
                    {getError("businessEmail", formData.businessEmail)}
                  </p>
                )}   
                <p className="mb-2">
                  </p>                              
            </label>

            <label className="text-sm font-medium text-slate-800">
              Phone number
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={() => handleBlur("phoneNumber")}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                type="tel"
                placeholder="(123) 456-7890"
              />
                {getError("phoneNumber", formData.phoneNumber) && (
                  <p className="text-red-500 text-sm">
                    {getError("phoneNumber", formData.phoneNumber)}
                  </p>
                )}    
                <p className="mb-2">
                  </p>               
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                Create password
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="password"
                  placeholder="Create password"
                  onBlur={() => handleBlur("password")}
                />
                {getError("password", formData.password) && (
                  <p className="text-red-500 text-sm">
                    {getError("password", formData.password)}
                  </p>
                )}                   
              </label>
              <label className="text-sm font-medium text-slate-800">
                Confirm password
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="password"
                  placeholder="Confirm password"
                  onBlur={() => handleBlur("confirmPassword")}
                />
                {getError("confirmPassword", formData.confirmPassword) && (
                  <p className="text-red-500 text-sm">
                    {getError("confirmPassword", formData.confirmPassword)}
                  </p>
                )}                   
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.8fr_1fr]">
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50/75 p-4 text-slate-700 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Password requirements
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    8 characters minimum
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    a number
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    a symbol
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    At least one lowercase character
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
                    At least one uppercase character
                  </li>
                </ul>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-800">
                What describes you best?
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value={1}>Founder</option>
                  <option value={2}>Investor</option>
                  <option value={3}>Startup</option>
                  <option value={4}>Advisor</option>
                  <option value={5}>Partner</option>
                </select>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2563eb] focus:ring-[#2563eb]"
              />
              <label
                htmlFor="agreeTerms"
                className="text-sm leading-6 text-slate-700"
              >
                I agree to terms & conditions
              </label>
            </div>

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

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-2xl bg-[#dc2626] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Creating account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-slate-600">
              Already have an AISC account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Log in
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

export default SignUp;
