import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { FeatureCard, InfoCard } from "../components/general/IndividualComponents/FeatureCards";
import { ProfileIcon, AdvisoryIcon, GovernmentIcon, CorporationIcon } from "../components/dashboard/icons";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-navy text-white">
        <div className="min-h-screen bg-white text-slate-900">
          <div className="bg-navy text-white">
            <Header />
            <div className="mx-auto max-w-7xl px-6 py-6">              

              <section className="mt-12 text-center">
                <div className="inline-block rounded-full border border-2 border-orange bg-[#fffceb] px-4 py-3 text-xl font-semibold tracking-[0.1em] text-orange backdrop-blur-xl">
                  Canada's #1 AI Startup Intelligence Platform
                </div>

                <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white sm:text-6xl">
                  The{" "}
                  <span className="text-gold">
                    Verified Intelligence Layer
                  </span>{" "}
                  for Canadian AI Innovation
                </h1>

                <p className="mx-auto mt-8 max-w-2xl font-semibold text-base text-slate-100 sm:text-lg">
                Discover, verify, and connect with every AI startup in Canada. 
                <br />
                The only platform with the AISC Spectrum, 12-Dimension Readiness Score,
                <br />and a structred advisory pathway from idea to investable company.
                </p>
                <div className="mt-12 grid sm:grid-cols-5 px-20">
                  <div className=" w-full font-bold text-2xl text-base sm:text-lg">
                  <span className="text-gold text-4xl">
                    1,247
                  </span>
                  <br />
                  <div className="mt-1 font-normal">Verified Ai Startups </div>
                  </div>

                  <div className="w-full font-bold text-2xl text-base sm:text-lg">
                  <span className="text-gold text-4xl">
                    94
                  </span>
                  <br />
                  <div className="mt-1 font-normal">Investort Accounts </div>
                  </div>

                  <div className="w-full font-bold text-2xl text-base sm:text-lg">
                  <span className="text-gold text-4xl">
                    143
                  </span>
                  <br />
                  <div className="mt-1 font-normal">Advisory Graduates </div>
                  </div>

                  <div className="w-full font-bold text-2xl text-base sm:text-lg">
                  <span className="text-gold text-4xl">
                    $2.1B
                  </span>
                  <br />
                  <div className="mt-1 font-normal">Alumni Funds Raised </div>
                  </div>

                  <div className=" w-full font-bold text-2xl text-base sm:text-lg">
                  <span className="text-gold text-4xl">
                    5
                  </span>
                  <br />
                  <div className="mt-1 font-normal">AISC Spectrum Levels </div>
                  </div>                                                        
                </div>
                <div className="mt-12 flex flex gap-4 justify-center sm:flex-row">

                  <a
                    href="/directory"
                     className={`${buttonSubmit} max-w-60 inline-flex items-center justify-center`}
                  >
                    Get Started
                  </a>            
                 
                </div>
              </section>
            </div>
          </div>

          <section className="bg-slate-50 py-16">
            <div className="mx-auto text-center">
              <h2 className="text-center text-3xl font-bold text-navy sm:text-5xl ">
                Our Core Technology
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-center font-semibold text-navy text-slate-800 sm:text-lg">
                For every stakeholder in the value - AISC provides the measurement standard,
                <br />
                scoring framework and tools that enable trustworthy AI deployment
              </p>
              <div className="overflow-x-auto py-3.5">
                <div className="inline-flex justify-center min-w-max items-start gap-3.5 mt-20 w-full">
                    <InfoCard
                      header="level classification"
                      title="AISC spectrum"
                      subtitle="The National  Maturity Standard for AI Startups"
                      body1 = "A trusted 5-level classification system that measures the true depth of a startup’s artificial intelligence technology, development stage, and commercial revenue."
                      body2 = "The AISC Spectrum separates legitimate verified AI technology from surface-level marketing claims."
                      spacer = "mt-6"
                      closing = "Explore AISC Spectrum"
                      link="/spectrum" 
                    />                    

                    <InfoCard
                      header="investment readiness"
                      title="AISC readiness score"
                      subtitle="The 0 - 100 Venture Report Card"
                      body1 = "A data-driven score that evaluates a startup’s investment potential across 12 dimensions, including technology differentiation and privacy compliance."
                      body2 = "Startups with a score below 60 are not visible to investors."
                      spacer = "mt-12"
                      closing = "Explore AISC Readiness Score"
                      link="/spectrum" 
                    />                               
                  </div>
            </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-5 mt-18 mb-18">
                <div className="self-stretch text-center justify-start text-navy text-5xl font-bold ">Connect Every Player</div>
                <div className="self-stretch text-center justify-start text-black text-2xl font-medium ">The AISC platform delivers value to every role in the AI ecosystem</div>
            </div>
            <div className="overflow-x-auto py-3.5">
              <div className="flex justify-center gap-4 min-w-max px-4">

                    <FeatureCard
                    Icon={ProfileIcon}
                    colour="navy"
                    bgColour="bg-blue-50"
                    title="Founders"
                    subtitle="Get Discovered by Top Investors"
                    link="/learn-founders"
                    items={[
                      "List your company on the public directory.",
                      "Receive an AISC Score Readiness to discover what gaps your business needs to fill before talking to investors.",
                      "Take part in practical training programs to improve your startup.",
                      "Get matched with investors that align with your business.",
                    ]}
                  />

                    <FeatureCard
                    Icon={AdvisoryIcon}
                    colour="green"
                    bgColour="bg-green-50"
                    title="Investors"
                    subtitle="Get Access to Verified AI Startups"
                    link="/learn-investors"
                    items={[
                      "Browse a database of Canadian AI startups to discover startups that match your needs.",
                      "View comprehensive AISC Readiness Scores to see what stage of development each startup is in.",
                      "Send and receive requests from startups that align with your goals to get in contact with them.",
                      "Create a watchlist of your favourite startups to get instant alerts when they hit big milestones.",
                    ]}
                  />

                    <FeatureCard
                    Icon={CorporationIcon}
                    colour="gold"
                    bgColour="bg-orange-50"                    
                    title="Corporations"
                    subtitle="Discover Vendors to Power Your Business"
                    link="/learn-corporations"
                    items={[
                      "Locate AI startups specifically built for your industry.",
                      "Monitor AISC Champions to find perfect candidates for corporate venture investments, partnerships or acquisitions.",
                      "Body.",
                      "Body.",
                    ]}
                  />
                    <FeatureCard
                    Icon={GovernmentIcon}
                    colour="red"
                    bgColour="bg-red-50"                      
                    title="Government"
                    subtitle="Track Funding & Measure Economic Results"
                    link="/learn-government"
                    items={[
                      "Utilize the AISC Spectrum as the national standard for AI startup maturity.",
                      "Build policy reports and data models around the AISC Spectrum.",
                      "Body.",
                      "Body.",
                    ]}
                  />                                                  
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
