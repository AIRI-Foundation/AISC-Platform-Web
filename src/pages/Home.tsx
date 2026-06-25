const Home = () => {
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

          <section className="mt-20 text-center">
            <div className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-xl">
              Canada's #1 AI Startup Intelligence Platform
            </div>

            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl">
              The{" "}
              <span className="text-[#f8d547]">
                Verified Intelligence Layer
              </span>{" "}
              for Canadian AI Innovation
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base text-slate-300 sm:text-lg">
              Discover, verify, and connect with every AI startup in Canada. The
              only platform with the AISC Spectrum, 12-Dimension Readiness
              Score, and a structured advisory pathway from idea to investable
              company.
            </p>

            <div className="mt-12 flex flex-col gap-4 justify-center sm:flex-row">
              <a
                href="/directory"
                className="inline-flex items-center justify-center rounded-lg bg-[#dc2626] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
              >
                Browse the Directory
              </a>
              <a
                href="/investor-hub"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Investor Hub
              </a>
            </div>
          </section>
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
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
            {["Contact Us", "Contact Us", "Contact Us", "Contact Us"].map(
              (title, i) => (
                <div key={i}>
                  <h4 className="mb-4 text-sm font-semibold">{title}</h4>
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
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
