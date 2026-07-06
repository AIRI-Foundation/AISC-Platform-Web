import { type ChangeEvent, type FormEvent, useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    role: "",
    message: "",
  });

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.businessEmail.trim() &&
    formData.role &&
    formData.message.trim();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((curr) => ({ ...curr, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      businessEmail: "",
      role: "",
      message: "",
    });
  };

  const sideCards = [
    {
      color: "text-[#10b981]",
      iconBg: "bg-[#f0fdf4]",
      label: "FOUNDERS",
      description:
        'If you are ready to submit your company, just hit the "Sign Up" to start creating an account',
      linkLabel: "Sign Up",
      href: "/signup",
      icon: (
        <svg
          className="w-5 h-5 text-[#10b981]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      color: "text-[#10b981]",
      iconBg: "bg-[#f0fdf4]",
      label: "INVESTORS",
      description:
        "If you are ready to start contacting startups, book a demo so we can set you up with the plan that suits you best.",
      linkLabel: "Book a Demo",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[#10b981]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <path d="M16 5.5a3.5 3.5 0 0 1 0 6.8" />
          <path d="M18 14a6.5 6.5 0 0 1 3.5 6" />
        </svg>
      ),
    },
    {
      color: "text-amber-500",
      iconBg: "bg-amber-50",
      label: "CORPORATIONS",
      description:
        "If you are ready to start contacting startups, book a demo so we can set you up with the plan that suits you best.",
      linkLabel: "Book a Demo",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-amber-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      color: "text-[#dc2626]",
      iconBg: "bg-red-50",
      label: "GOVERNMENT",
      description:
        "If you are ready to start contacting startups, book a demo so we can set you up with the plan that suits you best.",
      linkLabel: "Book a Demo",
      href: "#",
      icon: (
        <svg
          className="w-5 h-5 text-[#dc2626]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 22V12M21 22V12M12 22V2M2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      {/* Nav */}
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#0f2b5c"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
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

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200 tracking-wide">
          <a href="/" className="hover:text-white transition">
            Product
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
            FR
          </a>
        </nav>

        <div className="flex items-center gap-3">
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

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Left — form card */}
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            {!submitted ? (
              <>
                <h1 className="text-3xl font-bold text-[#0f2b5c] mb-2">
                  Get <span className="text-[#f8d547]">In Touch</span>
                </h1>
                <p className="text-sm text-[#0f2b5c] text-center mb-6">
                  Lorem ipsum dolor sit amet consectetur.
                  <br />
                  Sed nibh consequat eget in.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First + Last name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0f2b5c] focus:ring-2 focus:ring-[#0f2b5c]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0f2b5c] focus:ring-2 focus:ring-[#0f2b5c]/20"
                      />
                    </div>
                  </div>

                  {/* Business email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="Business Email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0f2b5c] focus:ring-2 focus:ring-[#0f2b5c]/20"
                    />
                  </div>

                  {/* Role dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      What describes you best?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0f2b5c] focus:ring-2 focus:ring-[#0f2b5c]/20"
                    >
                      <option value="">Select Option</option>
                      <option value="founder">Founder</option>
                      <option value="investor">Investor</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#0f2b5c] focus:ring-2 focus:ring-[#0f2b5c]/20 resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to our{" "}
                    <a
                      href="#"
                      className="underline font-medium text-slate-700"
                    >
                      Privacy Policy
                    </a>
                    . We will never share your details with third parties
                    without your explicit consent.
                  </p>
                  <p className="text-xs text-red-500">* Required Field</p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition ${
                      isFormValid
                        ? "bg-[#dc2626] text-white hover:bg-[#b91c1c]"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              /* Success state */
              <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Message <span className="text-[#f8d547]">Received</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-sm">
                  A member of the AISC team will review your message and get
                  back to you within 24 hours. Keep an eye out on your inbox.
                </p>
                <button
                  onClick={handleReset}
                  className="rounded-xl bg-[#dc2626] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#b91c1c]"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right — side cards */}
          <div className="flex flex-col gap-4">
            {sideCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-5 text-slate-900"
              >
                <div
                  className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center mb-3`}
                >
                  {card.icon}
                </div>
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${card.color}`}
                >
                  {card.label}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  className={`text-sm font-semibold ${card.color} flex items-center gap-1 hover:underline`}
                >
                  {card.linkLabel}
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a1f3c] mt-10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-5">
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="#0f2b5c"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
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
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                  aria-label="X"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-white/20 transition"
                  aria-label="LinkedIn"
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

export default Contact;
