import { useState } from "react";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"

const Pricing = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const ecosystemFeatures = [
    {
      title: "Founders",
      description:
        "List your company for free. Get verified. Complete an advisory program to earn your AISC Certified badge and unlock investor visibility on the platform.",
    },
    {
      title: "Investors",
      description:
        "Search verified Canadian AI companies by AISC Spectrum level, sector, traction, and Readiness Score. Request qualified introductions that convert at 10x cold outreach.",
    },
    {
      title: "Government",
      description:
        "Data-driven selection and delivery of startup readiness cohort programs. Ecosystem intelligence reports with demographic analytics for equity reporting.",
    },
    {
      title: "Corporations",
      description:
        "Discover verified AI vendors, partners, and acquisition targets. Searchable database with procurement filters, ESG reporting, and facilitated pilots.",
    },
    {
      title: "AISC Spectrum",
      description:
        "Canada's first standardized AI startup classification framework — from Level 1 Explorers to Level 5 Champions. Cited by government, investors, and academia.",
    },
    {
      title: "AISC Readiness Score",
      description:
        "The only 12-dimension readiness score for AI startups — covering commercial fundamentals, responsible AI, ethics, environmental footprint, and regulatory compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#0f2b5c] text-white">
        <Header />        
        <div className="mx-auto max-w-7xl px-6 py-6">

          <section className="mt-16 text-center">
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Pricing
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
              Choose the plan that works best for you
            </p>
          </section>

          <div className="mx-auto mt-16 max-w-6xl grid gap-6 sm:grid-cols-3 pb-16">
            <div className="rounded-[32px] bg-white p-8 shadow-lg text-slate-900">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                $50<span className="text-lg text-slate-600">/mo</span>
              </p>
              <p className="mt-4 text-sm text-slate-600">For those...</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
              </ul>
              <button className="mt-8 w-full rounded-lg bg-[#dc2626] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]">
                Try for free
              </button>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-lg text-slate-900">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="mt-2 text-sm text-slate-600">For those...</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
              </ul>
              <button className="mt-8 w-full rounded-lg bg-[#dc2626] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]">
                Book a demo
              </button>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-lg text-slate-900">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="mt-2 text-sm text-slate-600">For those...</p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-slate-900">•</span>
                  <span className="text-sm">List item</span>
                </li>
              </ul>
              <button className="mt-8 w-full rounded-lg bg-[#dc2626] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for Every Player in the Ecosystem
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base text-slate-600 sm:text-lg">
            One platform. Four audiences. Compounding value with every
            interaction.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemFeatures.map((feature, idx) => (
              <div key={idx} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2b5c] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Lorem ipsum
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-12 space-y-8">
            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">
              <div className="grid gap-8 sm:grid-cols-[1fr_250px]">
                <div>
                  <p className="text-sm text-slate-300">Feature</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    What you can achieve with this feature
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">
                    Explain the value to the user
                  </p>
                </div>
                <div className="h-40 rounded-xl bg-slate-200 sm:order-first" />
              </div>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">
              <div className="grid gap-8 sm:grid-cols-[250px_1fr]">
                <div className="h-40 rounded-xl bg-slate-200" />
                <div>
                  <p className="text-sm text-slate-300">Feature</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    What you can achieve with this feature
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">
                    Explain the value to the user
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-xl">
              <div className="grid gap-8 sm:grid-cols-[1fr_250px]">
                <div>
                  <p className="text-sm text-slate-300">Feature</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    What you can achieve with this feature
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">
                    Explain the value to the user
                  </p>
                </div>
                <div className="h-40 rounded-xl bg-slate-200 sm:order-first" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Compare Plans
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 text-left text-sm font-semibold text-slate-900" />
                  <th className="pb-4 text-center text-sm font-semibold text-slate-900">
                    <div>Basic</div>
                    <div className="text-xs font-normal text-slate-600">
                      $50/mo
                    </div>
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-slate-900">
                    <div>Premium</div>
                  </th>
                  <th className="pb-4 text-center text-sm font-semibold text-slate-900">
                    <div>Pro</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Lorem ipsum",
                    basic: true,
                    premium: true,
                    pro: true,
                  },
                  {
                    label: "Lorem ipsum",
                    basic: true,
                    premium: true,
                    pro: true,
                  },
                  {
                    label: "Lorem Ipsum",
                    basic: false,
                    premium: true,
                    pro: true,
                  },
                  {
                    label: "Lorem ipsum",
                    basic: false,
                    premium: true,
                    pro: true,
                  },
                  {
                    label: "Lorem ipsum",
                    basic: false,
                    premium: false,
                    pro: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-200">
                    <td className="py-4 text-sm font-medium text-slate-900">
                      {row.label}
                    </td>
                    <td className="py-4 text-center">
                      {row.basic ? (
                        <svg
                          className="mx-auto h-5 w-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="mx-auto h-5 w-5 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.premium ? (
                        <svg
                          className="mx-auto h-5 w-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="mx-auto h-5 w-5 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.pro ? (
                        <svg
                          className="mx-auto h-5 w-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="mx-auto h-5 w-5 text-slate-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
          <div className="bg-[#0f2b5c] text-white">
            <div className="mx-auto max-w-7xl px-6 py-6">
              <BottomSection />
            </div>
      <Footer />             
          </div>       
      </section>
    </div>
  );
};

export default Pricing;
