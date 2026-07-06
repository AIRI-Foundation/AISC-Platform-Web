import { type ChangeEvent, type FormEvent, useState } from "react";
import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";
import {
  ProfileIcon,
  GovernmentIcon,
  CorporationIcon,
} from "../components/dashboard/icons";

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
      color: "text-navy",
      iconBg: "bg-[#f0fdf4]",
      label: "FOUNDERS",
      description:
        'If you are ready to submit your company, just hit the "Sign Up" to start creating an account',
      linkLabel: "Sign Up",
      href: "/signup",
      icon: <ProfileIcon className="w-5 h-5 text-navy" />,
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
      icon: <CorporationIcon className="w-5 h-5 text-amber-500" />,
    },
    {
      color: "text-[#dc2626]",
      iconBg: "bg-red-50",
      label: "GOVERNMENT",
      description:
        "If you are ready to start contacting startups, book a demo so we can set you up with the plan that suits you best.",
      linkLabel: "Book a Demo",
      href: "#",
      icon: <GovernmentIcon className="w-5 h-5 text-[#dc2626]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      <Header />

      {/* Main content */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Left — form card */}
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            {!submitted ? (
              <>
                <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-2 mt-8 text-center">
                  Get <span className="text-gold">In Touch</span>
                </h1>
                <p className="text-lg font-normal text-[#0f2b5c] text-center mb-10">
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
                      rows={7}
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
                  <p className="text-xs mb-10">
                    <span className="text-red-500">*</span>{" "}
                    <span className="text-black">Required Field</span>
                  </p>

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
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  Message <span className="text-gold">Received</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-sm">
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

      <Footer />
    </div>
  );
};

export default Contact;
