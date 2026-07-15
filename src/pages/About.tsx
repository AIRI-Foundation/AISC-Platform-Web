import { useState } from "react";
import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";
import placeholderImage from "../assets/placeholder.png";

const founders = [
  { name: "Akin Oluwadare", role: "CEO & Co-founder" },
  { name: "Tunde Adeyemi", role: "CTO & Co-founder" },
  { name: "Ngozi Okafor", role: "COO & Co-founder" },
];

const team = [
  { name: "Emeka Nwosu", role: "Lead Developer" },
  { name: "Amara Diallo", role: "Product Designer" },
  { name: "Chidi Eze", role: "Data Scientist" },
  { name: "Fatima Hassan", role: "Marketing Lead" },
  { name: "Kwame Asante", role: "Business Analyst" },
  { name: "Zainab Musa", role: "Community Manager" },
];

const faqAnswer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus. Vivamus in ante sed libero feugiat fermentum.";

const foundersFaq = [
  { question: "How do I update my billing information?", answer: faqAnswer },
  { question: "How do I update my billing information?", answer: faqAnswer },
  { question: "How do I update my billing information?", answer: faqAnswer },
  { question: "How do I update my billing information?", answer: faqAnswer },
  { question: "How do I update my billing information?", answer: faqAnswer },
];

const investorsFaq = [
  { question: "What is the minimum investment amount?", answer: faqAnswer },
  { question: "How do I track my portfolio?", answer: faqAnswer },
  { question: "What are the expected returns?", answer: faqAnswer },
  { question: "How do I withdraw my funds?", answer: faqAnswer },
];

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[260px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <img
          src={placeholderImage}
          alt={name}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-900">
        {name}
      </div>
      <div className="mt-1 text-xs text-slate-500">{role}</div>
    </div>
  );
}

function FaqGroup({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <h3 className="text-2xl font-bold text-gold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">
        {description}
      </p>

      <div className="mt-6 divide-y divide-white/15 border-b border-white/15">
        {items.map((item, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-sm font-semibold text-white">
                {item.question}
              </span>
              <svg
                className={`h-4 w-4 shrink-0 text-white transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="bg-dark-blue text-white">
        <Header />

        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-5xl font-bold sm:text-6xl">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            We noticed three problems that every player in the ecosystem was
            quietly paying for: wasted time, misaligned capital, and founders
            who didn't know where they stood.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-block rounded-md bg-red px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-dark"
          >
            Get Started
          </a>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-4xl font-bold text-dark-blue">
          Meet the Founders
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {founders.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-4xl font-bold text-dark-blue">
          Meet the Team
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-3">
          {team.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      <div className="mt-16 bg-dark-blue text-white">
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <h2 className="text-4xl font-bold text-gold">Why We Built This</h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-100 sm:text-base">
            The African startup ecosystem is growing fast, but the
            infrastructure connecting founders with capital, mentorship, and
            visibility remains fragmented. AISC was developed to bridge that
            gap creating a single source of truth for startup readiness,
            investor alignment, and ecosystem collaboration. The African
            startup ecosystem is growing fast, but the infrastructure
            connecting founders with capital, mentorship, and visibility
            remains fragmented. AISC was developed to bridge that gap creating
            a single source of truth for startup readiness, investor
            alignment, and ecosystem collaboration.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-4xl font-bold text-gold">Trusted By</h2>
          <p className="mt-3 text-base text-white">Partners and Investors</p>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-20 w-20 overflow-hidden rounded-lg bg-white"
              >
                <img
                  src={placeholderImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:pt-24">
              <h2 className="text-5xl font-bold leading-tight text-white">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="mt-6 text-base text-slate-300">
                See What Founders and Investors are Asking About the Platform
              </p>
            </div>

            <div className="space-y-16">
              <FaqGroup
                title="Founders FAQ"
                description="Founders ask a couple of questions regarding what they are to develop now about what to expect and how they are carrying out different aspects of the business. Here are some of the ways we have put up questions in the development phase."
                items={foundersFaq}
              />
              <FaqGroup
                title="Investors FAQ"
                description="Investors ask a couple of questions regarding what returns to expect and how their capital is being deployed across different opportunities. Here are some of the common questions during the investment phase."
                items={investorsFaq}
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
