import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCompany } from "../services/companyService";
import { isLoggedIn } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { textField } from "../components/general/IndividualComponents/Buttons";

const BuildCompanyProfile = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    city: "",
    province: "",
    industry: "",
    aiCategory: "",
    productStage: "",
    teamSize: "",
    fundingYear: "",
    revenueBand: "",
  });

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await addCompany({
        name: formData.companyName,
        website: formData.websiteUrl,
        city: formData.city,
        province: formData.province,
        industry: formData.industry,
        aiCategory: formData.aiCategory,
        productStage: formData.productStage,
        teamSize: formData.teamSize ? Number(formData.teamSize) : null,
        fundingYear: formData.fundingYear ? Number(formData.fundingYear) : null,
        revenueBand: formData.revenueBand,
      });

      navigate("/dashboard/overview");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white">
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
          <form onSubmit={handleSubmit} className="space-y-1">
            <label className="text-sm font-medium text-slate-800">
              <span className="text-red">*</span>Company name
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={textField}
                type="text"
                placeholder="Enter company name"
              />
            </label>

            <label className="text-sm font-medium text-slate-800">
              <span className="text-red">*</span>Website URL
              <input
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className={textField}
                type="url"
                placeholder="https://example.com"
              />
            </label>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>City
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Enter city"
                />
              </label>
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Province
                <input
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Enter province"
                />
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Industry
                <input
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="e.g. Healthcare"
                />
              </label>
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>AI Category
                <input
                  name="aiCategory"
                  value={formData.aiCategory}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="e.g. Generative AI"
                />
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Product stage
                <input
                  name="productStage"
                  value={formData.productStage}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="e.g. MVP"
                />
              </label>
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Team Size
                <input
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className={textField}
                  type="number"
                  min={1}
                  max={100000}
                  placeholder="Number of people"
                />
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Funding year
                <select
                  name="fundingYear"
                  value={formData.fundingYear}
                  onChange={handleChange}
                  className={textField}
                >
                  <option value="">Select year</option>
                  {Array.from(
                    { length: 2026 - 2000 + 1 },
                    (_, i) => 2026 - i,
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium text-slate-800">
                <span className="text-red">*</span>Revenue band
                <input
                  name="revenueBand"
                  value={formData.revenueBand}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="e.g. $100K - $1M"
                />
              </label>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={submitting || formData.companyName.trim() === ""}
                className="inline-block rounded-[8px] bg-red px-12 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {error && (
              <div className="mx-auto mt-3 w-full max-w-sm rounded-[6px] border-2 border border-red/20 bg-red/10 py-1 text-center text-sm font-semibold text-red-dark">
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

export default BuildCompanyProfile;
