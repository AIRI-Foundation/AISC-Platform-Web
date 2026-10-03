import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCompany } from "../services/companyService";
import { isLoggedIn } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import Header from "../components/general/IndividualComponents/Header";

const provinceOptions = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

const industryOptions = [
  "Aerospace & Defense",
  "Agriculture & Agritech",
  "Automotive & Autonomous Vehicles",
  "Biotech & Life Sciences",
  "Cleantech, Climate & Environment",
  "Cybersecurity & Privacy",
  "E-Commerce & Retail",
  "EdTech & Education",
  "Energy, Utilities & Mining",
  "Fintech, Banking & Insurance",
  "Gaming & Entertainment",
  "Government & Public Sector",
  "Healthcare & MedTech",
  "HR & Workforce Tech (Future of Work)",
  "LegalTech & Compliance",
  "Logistics, Supply Chain & Transportation",
  "Manufacturing & Industrial Automation",
  "Real Estate & Proptech",
  "Software & IT Infrastructure",
  "Telecom & Communications",
  "Media, Advertising & MarTech",
  "Sports & Fitness Technology",
  "Travel, Hospitality & Tourism",
  "Nonprofit & Social Impact",
  "Food & Beverage / Agrifood Tech",
  "Construction & Heavy Engineering",
  "Others (please specify)",
];

const aiCategoryOptions = [
  "Generative AI (LLMs, text, image, audio, video generation)",
  "Machine Learning & Deep Learning (general)",
  "Natural Language Processing (NLP) & Computational Linguistics",
  "Computer Vision & Image/Video Recognition",
  "Predictive Analytics & Forecasting",
  "Robotics & Edge AI",
  "Autonomous Systems & Drones",
  "Reinforcement Learning",
  "AI Infrastructure, MLOps & Developer Tools",
  "AI Security, Ethics & Governance (Responsible AI)",
  "Speech Recognition & Conversational AI (Chatbots/Voice)",
  "Recommendation Systems & Personalization Engines",
  "Bioinformatics & Computational Biology",
  "Synthetic Data Generation",
  "Knowledge Graphs & Semantic Reasoning",
  "Graph Neural Networks & Geometric Deep Learning",
  "Time-Series Analysis & Anomaly Detection",
  "Federated Learning & Privacy-Preserving AI",
  "Causal AI & Inference",
  "Multi-Agent Systems & Swarm Intelligence",
  "Explainable AI (XAI) & Interpretability",
  "AI for Code Generation & Software Automation",
  "Neural Symbolic AI",
  "Others (please specify)",
];

const productStageOptions = [
  "Idea / Concept",
  "Prototype",
  "MVP",
  "Beta",
  "Live / Commercial",
  "Scaling",
];

const teamSizeOptions = ["Solo Founder", "2–5", "6–10", "11–25", "26–50", "50+"];

const teamSizeValues: Record<string, number> = {
  "Solo Founder": 1,
  "2–5": 2,
  "6–10": 6,
  "11–25": 11,
  "26–50": 26,
  "50+": 50,
};

const revenueBandOptions = [
  "Pre-revenue ($0)",
  "Early ($0–$50K)",
  "Seed ($50K–$1M ARR)",
  "Growth ($1M–$10M ARR)",
  "Scale ($10M+ ARR)",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-light-blue focus:ring-2 focus:ring-light-blue/25";

const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const SelectField = ({
  label,
  name,
  value,
  options,
  onChange,
}: SelectFieldProps) => (
  <label className="block text-sm font-medium text-slate-900">
    {label} <span className="text-red">*</span>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`${inputClass} appearance-none bg-no-repeat pr-9 ${
        value ? "text-slate-900" : "text-slate-400"
      }`}
      style={{
        backgroundImage: chevron,
        backgroundPosition: "right 0.75rem center",
      }}
    >
      <option value="" disabled hidden>
        Select Option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

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
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const isComplete = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

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
        teamSize: teamSizeValues[formData.teamSize] ?? null,
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
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[24px] bg-white px-6 pb-12 pt-16 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 sm:px-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Build Your <span className="text-gold">Company</span> Profile
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-center text-lg text-navy">
            Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 w-full max-w-[450px] space-y-7"
          >
            <label className="block text-sm font-medium text-slate-900">
              Company Name <span className="text-red">*</span>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClass}
                type="text"
                placeholder="Company Name"
              />
            </label>

            <div className="grid gap-x-2.5 gap-y-7 sm:grid-cols-2">
              <SelectField
                label="Location"
                name="province"
                value={formData.province}
                options={provinceOptions}
                onChange={handleChange}
              />
              <label className="block text-sm font-medium text-slate-900">
                City <span className="text-red">*</span>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                  type="text"
                  placeholder="City"
                />
              </label>
            </div>

            <div className="grid gap-x-2.5 gap-y-7 sm:grid-cols-2">
              <SelectField
                label="Industry"
                name="industry"
                value={formData.industry}
                options={industryOptions}
                onChange={handleChange}
              />
              <SelectField
                label="AI Category"
                name="aiCategory"
                value={formData.aiCategory}
                options={aiCategoryOptions}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-x-2.5 gap-y-7 sm:grid-cols-2">
              <SelectField
                label="Product Stage"
                name="productStage"
                value={formData.productStage}
                options={productStageOptions}
                onChange={handleChange}
              />
              <SelectField
                label="Team Size"
                name="teamSize"
                value={formData.teamSize}
                options={teamSizeOptions}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-x-2.5 gap-y-7 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-900">
                Funding Year <span className="text-red">*</span>
                <input
                  name="fundingYear"
                  value={formData.fundingYear}
                  onChange={handleChange}
                  className={inputClass}
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="Funding Year"
                />
              </label>
              <SelectField
                label="Revenue Band"
                name="revenueBand"
                value={formData.revenueBand}
                options={revenueBandOptions}
                onChange={handleChange}
              />
            </div>

            <label className="block text-sm font-medium text-slate-900">
              Company Website <span className="text-red">*</span>
              <input
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                className={inputClass}
                type="url"
                placeholder="Company Website"
              />
            </label>

            <button
              type="submit"
              disabled={submitting || !isComplete}
              className="!mt-9 w-full rounded-lg bg-red py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-dark disabled:cursor-not-allowed disabled:bg-grey"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>

            {error && (
              <div className="mx-auto w-full rounded-[6px] border-2 border-red/20 bg-red/10 py-1 text-center text-sm font-semibold text-red-dark">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuildCompanyProfile;
