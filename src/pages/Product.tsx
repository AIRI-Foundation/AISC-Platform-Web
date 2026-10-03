import Footer from "../components/general/IndividualComponents/Footer";

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Tortor elementum nunc nisl sed nisl sed quam gravida. Aenean adipiscing velit sed mattis eu ac. Integer sed pellentesque dignissim at rutrum et amet pellentesque dolor. Est nisi duis nunc at molestie et. Sem ornare vitae mauris quis. Lobortis scelerisque velit suscipit ut et in pharetra. Convallis ultricies ut metus ultrices. Condimentum suscipit ipsum sit nulla sagittis erat. Viverra arcu elit egestas consequat vel semper scelerisque et.";

const levels = [
  {
    number: 1,
    title: "LEVEL 1: AI EXPLORERS",
    description: "Still figuring things out...",
  },
  {
    number: 2,
    title: "LEVEL 2: AI ADOPTERS",
    description:
      "Artificial Intelligence integrated into one or two workflows with measurable results.",
  },
  {
    number: 3,
    title: "LEVEL 3: AI BUILDERS",
    description:
      "Artificial Intelligence is a core feature to the product being shipped to users.",
  },
  {
    number: 4,
    title: "LEVEL 4: AI INNOVATORS",
    description: "Still figuring things out....",
  },
  {
    number: 5,
    title: "LEVEL 5: AI CHAMPIONS",
    description: "Still figuring things out....",
  },
];

const stakeholders = [
  {
    title: "FOUNDERS",
    description:
      "Gives you a clear roadmap as you know exactly which milestones to hit to become investor ready.",
    color: "text-light-blue",
    iconBg: "bg-blue-50",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "INVESTORS",
    description:
      "You only see companies that actually fits your investment criteria.",
    color: "text-green",
    iconBg: "bg-green-50",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M12 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "CORPORATIONS",
    description: "Idk....",
    color: "text-gold",
    iconBg: "bg-amber-50",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
        />
      </svg>
    ),
  },
  {
    title: "GOVERNMENT",
    description:
      "See where funding lands. Track which levels are being served and which ones aren't getting enough support",
    color: "text-red",
    iconBg: "bg-red-50",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21V4m0 1h13l-2.5 4L17 13H4"
        />
      </svg>
    ),
  },
];

const operationalAreas = [
  "Founding Team Depth & Velocity",
  "Legal Entity & IP Ownership",
  "Software Architecture",
  "Data Governance",
  "Customer Traction",
  "Financial Health & Runway",
  "Security",
  "Market Differentiation",
  "Governance & Board Structure",
  "Revenue Model",
  "Partnership Integration",
  "Scalability Plan",
];

const scoreRows = [
  {
    score: "0 - 59",
    visibility: "PRIVATE (FOUNDER ONLY)",
    color: "text-red",
    bg: "bg-red-50",
  },
  {
    score: "60 - 79",
    visibility: "VISIBLE",
    color: "text-orange",
    bg: "bg-yellow-50",
  },
  {
    score: "80 - 100",
    visibility: "HIGHLIGHTED",
    color: "text-green",
    bg: "bg-green-50",
  },
];

const Product = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-dark-blue/15">
        <div className="w-full px-12 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <div className="rounded-lg border border-white/5 bg-white/2 px-3 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                    <span className="text-[10px] font-bold leading-tight text-red">
                      AISC
                    </span>
                  </div>
                  <div className="leading-tight">
                    <div className="text-base font-bold">
                      AI Startups Canada
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      AISC Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
                <a
                  href="/product"
                  className="rounded-md bg-white/10 px-4 py-2 font-semibold text-white"
                >
                  PRODUCT
                </a>
                <a
                  href="/directory"
                  className="transition hover:text-white font-semibold"
                >
                  DATABASE
                </a>
                <a
                  href="/pricing"
                  className="transition hover:text-white font-semibold"
                >
                  PRICING
                </a>
                <a
                  href="#"
                  className="transition hover:text-white font-semibold"
                >
                  ABOUT US
                </a>
                <a
                  href="#"
                  className="transition hover:text-white font-semibold"
                >
                  FR
                </a>
              </nav>

              <a
                href="/signup"
                className="rounded-md bg-red px-3 py-2.25 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
              >
                LOGIN / SIGN UP
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
          A Standardized Ecosystem
          <br />
          <span className="text-gold">Built To Support</span>
          <br />
          Canadian Innovation.
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-lg text-slate-100">
          Whether you're building, investing, funding, or procuring — the
          transparency and structure you need to make confident decisions is
          already here.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/signup"
            className="w-52 rounded-md bg-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
          >
            Get Started
          </a>
          <a
            href="/directory"
            className="w-52 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-slate-100"
          >
            Explore Database
          </a>
        </div>
      </section>

      <section className="bg-slate-100 py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-navy">
            The AISC Spectrum
          </h2>
          <p className="mt-4 text-center text-lg text-slate-800">
            Five clear levels that describe any AI startup's maturity
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              {levels.map((level) => (
                <div
                  key={level.number}
                  className="flex items-center gap-5 rounded-xl bg-white px-6 py-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold">
                    {level.number}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{level.title}</div>
                    <div className="mt-1 text-xs text-slate-600">
                      {level.description}
                    </div>
                  </div>
                </div>
              ))}
              <p className="mt-2 text-sm text-slate-800">
                Most Canadian AI Startups land at Levels 2-3 today
              </p>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-slate-700">
              <p>{lorem}</p>
              <p>{lorem}</p>
              <p>{lorem}</p>
            </div>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stakeholders.map((stakeholder) => (
              <div
                key={stakeholder.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${stakeholder.iconBg} ${stakeholder.color}`}
                >
                  {stakeholder.icon}
                </div>
                <div className={`mt-5 text-sm font-bold ${stakeholder.color}`}>
                  {stakeholder.title}
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  {stakeholder.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-navy">
            The AISC Readiness Score
          </h2>
          <p className="mt-4 text-center text-lg text-slate-800">
            A number used to determine a startup's readiness to get in contact
            with investors
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="h-fit rounded-2xl bg-dark-blue p-8 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                12 Operational Areas Assessed
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {operationalAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <div className="h-4 w-4 shrink-0 rounded-full border-2 border-white" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-slate-700">
              <p>{lorem}</p>
              <p>{lorem}</p>
              <p>{lorem}</p>
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="bg-dark-blue px-8 py-6 text-white">
              <h3 className="text-xl font-semibold">
                The 60-Point Privacy Wall
              </h3>
              <p className="mt-1 text-sm text-slate-200">
                Our 60-Point Privacy Wall is a smart buffer that protects
                founders from premature outreach while guaranteeing
                investor-ready deal flow.
              </p>
            </div>

            <div className="space-y-5 px-8 py-8 text-sm leading-relaxed text-slate-800">
              <p>
                To ensure every connection on our platform is built for
                success, we protect both sides with our 60-Point Privacy Wall.
                If a startup's readiness score falls below 60, it remains
                entirely confidential—no public profile is activated. Instead
                of facing premature rejection from investors, founders get a
                risk-free space to identify the gaps in their business and
                access the resources they need.
              </p>
              <p>
                For investors, this acts as an automatic quality filter,
                guaranteeing that every startup visible to them is fully
                vetted, compliant, and ready to talk terms. It isn't
                gatekeeping; it's a protective buffer that saves investors time
                and ensures founders only step into the spotlight when they are
                completely equipped to win.
              </p>
            </div>

            <div className="px-8 pb-10">
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <div className="flex items-center justify-between bg-slate-100 px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-900">
                  <span>Score</span>
                  <span>Platform Visibility</span>
                </div>
                {scoreRows.map((row) => (
                  <div
                    key={row.score}
                    className={`mt-2 flex items-center justify-between px-6 py-3 text-sm font-bold ${row.bg} ${row.color}`}
                  >
                    <span>{row.score}</span>
                    <span>{row.visibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-blue py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Advisory Program</h2>
          <p className="mt-5 text-lg text-slate-100">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="mt-10 space-y-6 text-left text-sm leading-relaxed text-slate-200">
            <p>{lorem}</p>
            <p>{lorem}</p>
            <p>{lorem}</p>
          </div>
        </div>
      </section>

      <div className="flow-root bg-dark-blue">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
