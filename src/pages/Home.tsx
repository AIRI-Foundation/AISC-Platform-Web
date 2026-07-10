import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header";
import { buttonSubmit, whiteButton } from "../components/general/IndividualComponents/Buttons";
import { InfoCard } from "../components/general/IndividualComponents/Cards";
import FeatureCards from "../components/general/IndividualComponents/Cards";
import {RightArrowHeadIcon} from "../components/dashboard/icons";

type DataSectionProps = {
  Attribute1: number;
  Attribute1Title: string;  
  Attribute2: number;
  Attribute2Title: string; 
  Attribute3: number;
  Attribute3Title: string; 
  Attribute4: number;
  Attribute4Title: string;    
};

const DataSection = ({
  Attribute1,
  Attribute1Title,
  Attribute2,
  Attribute2Title,  
  Attribute3,
  Attribute3Title,
  Attribute4,
  Attribute4Title,  
}: DataSectionProps) => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-12">
      <div className="text-center font-bold text-2xl text-base sm:text-lg">
        <span className="text-gold text-4xl">{Attribute1}+</span>
        <br />
        <div className="mt-1 font-normal">{Attribute1Title}+ </div>
      </div>

      <div className="text-center font-bold text-2xl text-base sm:text-lg">
        <span className="text-gold text-4xl">{Attribute2}</span>
        <br />
        <div className="mt-1 font-normal">{Attribute2Title} </div>
      </div>

      <div className="text-center font-bold text-2xl text-base sm:text-lg">
        <span className="text-gold text-4xl">{Attribute3}</span>
        <br />
        <div className="mt-1 font-normal">{Attribute3Title}</div>
      </div>

      <div className="text-center font-bold text-2xl text-base sm:text-lg">
        <span className="text-gold text-4xl">${Attribute4}B</span>
        <br />
        <div className="mt-1 font-normal">{Attribute4Title} </div>
      </div>
    </div>    
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="min-h-screen bg-white text-slate-900">
        <div className="bg-navy text-white">
          <Header />
          <div className="mx-auto max-w-7xl px-6 py-6">
            <section className="mt-12 text-center">

              <h1 className="mx-auto mt-8 max-w-4xl text-6xl font-bold leading-tight text-white sm:text-6xl">
                The{" "}
                <span className="text-gold">Verified Intelligence Layer</span>{" "}
                for Canadian AI Innovation
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-2xl font-semibold text-base text-slate-100 sm:text-lg">
                Discover, verify, and connect with every AI startup in Canada.
                <br />
                The only platform with the AISC Spectrum, 12-Dimension Readiness
                Score,
                <br />
                and a structred advisory pathway from idea to investable
                company.
              </p>
                <DataSection
                  Attribute1={350}
                  Attribute1Title="Verified Startups"
                  Attribute2={80}
                  Attribute2Title="Active Investors"
                  Attribute3={12}
                  Attribute3Title="Federal Partners"
                  Attribute4={2.4}
                  Attribute4Title="Capital Connected"
                />
              <div className="mt-12 flex flex gap-4 justify-center sm:flex-row">
                <a
                  href="/directory"
                  className={`${buttonSubmit} !py-4 max-w-60 inline-flex items-center justify-center`}
                >
                  Get Started
                </a>

                <a
                  href="/directory"
                  className={`${whiteButton} max-w-60 inline-flex items-center justify-center`}
                >
                  explore directory
                </a>                
              </div>
            </section>
          </div>
        </div>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto text-center">
            <h2 className="text-center text-5xl font-bold text-navy">
              Our Core Technology
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center font-semibold text-navy text-slate-800 text-2xl">
              Two interlocking systems that establish trust across every interaction on the platform.
            </p>
            <div className="overflow-x-auto py-3.5">
              <div className="inline-flex justify-center min-w-max items-start gap-3.5 mt-20 w-full">
                <InfoCard
                  header="level classification"
                  title="AISC spectrum"
                  subtitle="The National  Maturity Standard for AI Startups"
                  body1="A trusted 5-level classification system that measures the true depth of a startup’s artificial intelligence technology, development stage, and commercial revenue."
                  body2="The AISC Spectrum separates legitimate verified AI technology from surface-level marketing claims."
                  spacer="mt-6"
                  closing="Explore AISC Spectrum"
                  link="/spectrum"
                />

                <InfoCard
                  header="investment readiness"
                  title="AISC readiness score"
                  subtitle="The 0 - 100 Venture Report Card"
                  body1="A data-driven score that evaluates a startup’s investment potential across 12 dimensions, including technology differentiation and privacy compliance."
                  body2="Startups with a score below 60 are not visible to investors."
                  spacer="mt-12"
                  closing="Explore AISC Readiness Score"
                  link="/spectrum"
                />
              </div>
            </div>
          </div>

          <FeatureCards />
        
        <div className="p-8 w-[98%] mx-auto mb-15 mt-30 bg-navy rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.45)] justify-center items-start gap-9 overflow-hidden">
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-9">
                <div className="flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                        <div className="inline-flex justify-center items-center gap-2.5">
                            <div className="justify-start text-white text-base font-bold  uppercase">
                              open Access
                            </div>
                        </div>
                        <div className="inline-flex justify-start items-center gap-2.5">
                            <div className="justify-start text-gold text-2xl font-medium ">
                              Explore the Database Freely
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
                        <div className="justify-start text-white text-base font-medium ">
                          You don’t need an account to get started. Anyone can search and browse the profiles of Canadian AI Startups for free.
                        </div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                    <a 
                    className="inline-flex text-gold text-sm font-bold mt-3 mr-1 hover:underline"
                    href="/directory"
                    >
                      Explore Database
                      <RightArrowHeadIcon 
                        className="h-6 w-6 justify-start text-gold text-sm font-bold" 
                        href="/directory"
                      />                
                    </a>

                </div>
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
