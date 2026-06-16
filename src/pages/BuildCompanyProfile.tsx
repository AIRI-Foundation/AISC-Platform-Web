import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"

const BuildCompanyProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    city: "",
    province: "",
    industry: "",
    aiCategory: "",
    productStage: "",
    teamSize: "",
    foundingYear: "",
    revenueBand: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = event.target;
    const { name, value } = target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/authentication-success");
  };

  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">
      <Header />    
      <div className="mx-auto max-w-7xl px-6 py-6">

        <section className="mt-16 text-center">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Build your company profile
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Sed nibh consequat eget in.
          </p>
        </section>

        <div className="mx-auto mt-12 max-w-2xl rounded-[32px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="space-y-2 text-sm font-medium text-slate-800">
              *Company name
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                type="text"
                placeholder="Enter company name"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-800">
              *Website URL
              <input
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                type="url"
                placeholder="https://example.com"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *City
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="text"
                  placeholder="Enter city"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Province
                <input
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                  type="text"
                  placeholder="Enter province"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Industry
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Manufacturing</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *AI Category
                <select
                  name="aiCategory"
                  value={formData.aiCategory}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select category</option>
                  <option>Generative AI</option>
                  <option>Machine Learning</option>
                  <option>Computer Vision</option>
                  <option>NLP</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Product stage
                <select
                  name="productStage"
                  value={formData.productStage}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select stage</option>
                  <option>Idea</option>
                  <option>MVP</option>
                  <option>Beta</option>
                  <option>Production</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Team Size
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select team size</option>
                  <option>1-5</option>
                  <option>6-15</option>
                  <option>16-50</option>
                  <option>50+</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Founding year
                <select
                  name="foundingYear"
                  value={formData.foundingYear}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select year</option>
                  {Array.from(
                    { length: 30 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-800">
                *Revenue band
                <select
                  name="revenueBand"
                  value={formData.revenueBand}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/25"
                >
                  <option value="">Select revenue band</option>
                  <option>$0 - $100K</option>
                  <option>$100K - $1M</option>
                  <option>$1M - $10M</option>
                  <option>$10M+</option>
                </select>
              </label>
            </div>

            <button
              type="submit"
              className="mx-auto block rounded-2xl bg-[#dc2626] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
            >
              Submit
            </button>
          </form>
        
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
  );
};

export default BuildCompanyProfile;
