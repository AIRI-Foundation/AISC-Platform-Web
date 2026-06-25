import { useState } from "react";

interface FAQItem {
  id: number;
  title: string;
  answer: string;
}

const Pricing = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

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
              <a href="#" className="transition hover:text-white">
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
          </header>

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

      <section className="bg-[#0f2b5c] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm uppercase tracking-[0.32em] text-slate-300">
            Trusted by
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-200 sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Dignissim non iaculis
            accumsan dui. Sed fringilla malesuada vel malesuada volutpat id
            curabitur.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="h-24 rounded-lg bg-white/10" />
            <div className="h-24 rounded-lg bg-white/10" />
            <div className="h-24 rounded-lg bg-white/10" />
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

      <section className="bg-[#0f2b5c] px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
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
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#0a1f3c] text-white">
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

export default Pricing;
