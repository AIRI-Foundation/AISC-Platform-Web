import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
//import { setSession } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

interface FAQItem {
  id: number;
  title: string;
  answer: string;
}

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
  const faqItems: FAQItem[] = [
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
  ];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = event.target;
    const { name, value, type } = target;
    const checked =
      type === "checkbox" && "checked" in target ? target.checked : false;

    const newValue = type === "checkbox" ? checked : value;

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

  const isEmpty = (value: string) => value.trim() === "";

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

  // const [formErrors, setFormErrors] = useState<{
  // firstName?: string;
  // lastName?: string;
  // businessEmail?: string;
  // phoneNumber?: number;
  // }>({});

  // const validateField = (name: string, value: string) => {
  //   switch (name) {
  //     case "firstName":
  //       return value.trim() ? "" : "First name is required";
  //     case "lastName":
  //       return value.trim() ? "" : "Last name is required";
  //     case "businessEmail":
  //       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  //         ? ""
  //         : "Valid email required";
  //     case "phoneNumber":
  //       return value.trim() ? "" : "Phone number is required";          
  //     default:
  //       return "";
  //   }
  // };

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
    navigate("/verify-email", {
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

        <section className="mt-14 border-t border-dashed border-white/20 pt-14">
          <p className="text-center text-sm uppercase tracking-[0.32em] text-slate-300">
            Trusted by
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-200 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dignissim non iaculis
            accumsan dui. Sed fringilla malesuada vel malesuada volutpat id
            curabitur.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="h-24 rounded-[24px] bg-white/10" />
            <div className="h-24 rounded-[24px] bg-white/10" />
            <div className="h-24 rounded-[24px] bg-white/10" />
          </div>
        </section>

        <section className="mt-14 border-t border-dashed border-white/20 pt-14">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-3">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                  }
                  className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition hover:bg-slate-50"
                >
                  <span className="font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <svg
                    className={`h-5 w-5 text-slate-600 transition-transform ${
                      expandedFAQ === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {expandedFAQ === item.id && (
                  <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-4 text-sm text-slate-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-white/10 bg-[#0a1f3c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-5">
            <div className="sm:col-span-1">
              <div className="mb-4 flex flex-col gap-2">
                <div className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
                  AI Startups Canada
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  AISC PLATFORM
                </p>
              </div>
              <p className="text-xs text-slate-400">
                Canada's AI Startups Intelligence Platform
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
