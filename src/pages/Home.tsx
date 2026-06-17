import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"

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
    <div className="min-h-screen bg-navy text-white">
        <div className="min-h-screen bg-white text-slate-900">
          <div className="bg-navy text-white">
            <Header />
            <div className="mx-auto max-w-7xl px-6 py-6">              

              <section className="mt-20 text-center">
                <div className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                  Canada's #1 AI Startup Intelligence Platform
                </div>

                <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl">
                  The{" "}
                  <span className="text-gold">
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
                    className="inline-flex items-center justify-center rounded-lg bg-red px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
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
          <div className="bg-navy text-white">
            <div className="mx-auto max-w-7xl px-6 py-6">
              <BottomSection />
            </div>
          </div>
          </div>

      <Footer />
    </div>
  );
};

export default Home;
