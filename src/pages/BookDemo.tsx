import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";
import { textField, buttonSubmit } from "../components/general/IndividualComponents/Buttons";

const describesYouOptions = ["Founder", "Investor"];

const locationOptions = [
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

const initialForm = {
  firstName: "",
  lastName: "",
  businessEmail: "",
  phoneNumber: "",
  describesYou: "",
  companyName: "",
  location: "",
  city: "",
  industry: "",
  aiCategory: "",
  productStage: "",
  teamSize: "",
  fundingYear: "",
  revenueBand: "",
  companyWebsite: "",
  businessChallenge: "",
};

const labelClass = "text-sm font-medium text-slate-800";
const required = <span className="text-red"> *</span>;

const BookDemo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const isComplete = Object.values(formData).every((value) => value.trim() !== "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isComplete) return;
    navigate("/submission-sent");
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 text-slate-900 shadow-[0_40px_120px_rgba(0,0,0,0.18)] sm:p-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-navy">Book A </span>
              <span className="text-gold">Demo</span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-navy">
              Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-1">
            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className={labelClass}>
                First Name{required}
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="First Name"
                />
              </label>
              <label className={labelClass}>
                Last Name{required}
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Last Name"
                />
              </label>
            </div>

            <label className={labelClass}>
              Business Email{required}
              <input
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                className={textField}
                type="email"
                placeholder="kwameasante@vaultai.com"
              />
            </label>

            <label className={labelClass}>
              Phone Number{required}
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={textField}
                type="tel"
                placeholder="Phone Number"
              />
            </label>

            <label className={labelClass}>
              What describes you best?{required}
              <select
                name="describesYou"
                value={formData.describesYou}
                onChange={handleChange}
                className={textField}
              >
                <option value="">Select Option</option>
                {describesYouOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className={labelClass}>
              Company Name{required}
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={textField}
                type="text"
                placeholder="Company Name"
              />
            </label>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className={labelClass}>
                Location{required}
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={textField}
                >
                  <option value="">Select Option</option>
                  {locationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                City{required}
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="City"
                />
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className={labelClass}>
                Industry{required}
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={textField}
                >
                  <option value="">Select Option</option>
                  {industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                AI Category{required}
                <select
                  name="aiCategory"
                  value={formData.aiCategory}
                  onChange={handleChange}
                  className={textField}
                >
                  <option value="">Select Option</option>
                  {aiCategoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className={labelClass}>
                Product Stage{required}
                <input
                  name="productStage"
                  value={formData.productStage}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Product Stage"
                />
              </label>
              <label className={labelClass}>
                Team Size{required}
                <input
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Team Size"
                />
              </label>
            </div>

            <div className="grid gap-x-4 sm:grid-cols-2">
              <label className={labelClass}>
                Funding Year{required}
                <input
                  name="fundingYear"
                  value={formData.fundingYear}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Funding Year"
                />
              </label>
              <label className={labelClass}>
                Revenue Band{required}
                <input
                  name="revenueBand"
                  value={formData.revenueBand}
                  onChange={handleChange}
                  className={textField}
                  type="text"
                  placeholder="Revenue Band"
                />
              </label>
            </div>

            <label className={labelClass}>
              Company Website{required}
              <input
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                className={textField}
                type="text"
                placeholder="Company Website"
              />
            </label>

            <label className={labelClass}>
              What business challenge can we help you solve?{required}
              <textarea
                name="businessChallenge"
                value={formData.businessChallenge}
                onChange={handleChange}
                className={`${textField} min-h-32 resize-y`}
                placeholder="Start typing..."
              />
            </label>

            <div className="pt-6">
              <button type="submit" disabled={!isComplete} className={buttonSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookDemo;
