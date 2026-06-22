import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { RightArrowHeadIcon } from "../components/dashboard/icons";

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
                <div className="mt-12 flex flex-col gap-4 justify-center sm:flex-row">

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

          <section className="bg-slate-50 px-6 py-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-3xl font-bold text-navy sm:text-5xl">
                Our Core Technology
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-center font-semibold text-navy text-slate-800 sm:text-lg">
                For every stakeholder in the value - AISC provides the measurement standard,
                <br />
                scoring framework and tools that enable trustworthy AI deployment
              </p>

              <div className="size- inline-flex justify-start items-start gap-3.5 mt-20">

                    <div className="max-w-[600px] hover:bg-dark-blue self-stretch p-8 bg-navy rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className="size- flex flex-col justify-start items-start gap-5">
                            <div className="size- flex flex-col justify-start items-start gap-6">
                                <div className="size- px-2.5 py-[5px] rounded-full border-orange bg-[#fffceb] border border-2 inline-flex justify-center text-orange items-center gap-2.5">
                                    <div className="justify-start text-orange text-xs font-bold uppercase">
                                      level classification
                                      </div>
                                </div>
                                <div className="size- flex flex-col justify-start items-start gap-[5px]">
                                    <div className="size- inline-flex justify-center items-center gap-2.5">
                                        <div className="justify-start text-white text-base font-bold uppercase">
                                          AISC spectrum
                                          </div>
                                    </div>
                                    <div className="inline-flex justify-start items-center gap-2.5">
                                        <div className="justify-start text-gold font-normal text-2xl font-medium ">
                                          The National  Maturity Standard for AI Startups
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center gap-2.5">
                                <div className="mr-25 justify-start text-white text-base font-medium font-normal">
                                  A trusted 5-level classification system that measures the true depth of a startup’s artificial intelligence technology, development stage, and commercial revenue.
                                </div>
                                <div className="mr-25 justify-start text-white text-base font-medium font-normal  ">
                                  The AISC Spectrum separates legitimate verified AI technology from surface-level marketing claims.
                                </div>
                            </div>
                        </div>
                        <div className="h-60 mt-6 w-full bg-white/85 flex items-center justify-center text-center font-bold text-black/35 text-6xl">
                          PLACEHOLDER <br ></br>IMAGE
                        </div>
                        <div className="inline-flex justify-start items-center">
                            <a
                              className="inline-flex text-gold text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/spectrum"                            
                            >Explore AISC Spectrum
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-gold text-sm font-bold" href="/spectrum"  />  
                            </a>                        
                        </div>
                    </div>

                    <div className="max-w-[600px] hover:bg-dark-blue self-stretch p-8 bg-navy rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start overflow-hidden">
                        <div className="size- flex flex-col justify-start items-start gap-5">
                            <div className="size- flex flex-col justify-start items-start gap-6">
                                <div className="size- px-2.5 py-[5px] rounded-full border-orange bg-[#fffceb] border border-2 inline-flex justify-center text-orange items-center gap-2.5">
                                    <div className="justify-start text-orange text-xs font-bold uppercase">
                                      investment readiness
                                      </div>
                                </div>
                                <div className="size- flex flex-col justify-start items-start gap-[5px]">
                                    <div className="size- inline-flex justify-center items-center gap-2.5">
                                        <div className="justify-start text-white text-base font-bold uppercase">
                                          AISC readiness score
                                          </div>
                                    </div>
                                    <div className="inline-flex justify-start items-center gap-2.5">
                                        <div className="justify-start text-gold font-normal text-2xl font-medium ">
                                          The 0 - 100 Venture Report Card
                                          </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center gap-2.5">
                                <div className="mr-25 justify-start text-white text-base font-medium font-normal">
                                  A data-driven score that evaluates a startup’s investment potential across 12 dimensions, including technology differentiation and privacy compliance.
                                </div>
                                <div className="mr-25 justify-start text-white text-base font-medium font-normal  ">
                                  Startups with a score below 60 are not visible to investors.
                                </div>
                            </div>
                        </div>
                        {/* Change the mt to be inline with the other image!!! */}
                        <div className="h-60 mt-12 w-full bg-white/85 flex items-center justify-center text-center font-bold text-black/35 text-6xl">
                          PLACEHOLDER <br ></br>IMAGE
                        </div>
                        <div className="inline-flex justify-start items-center">
                            <a
                              className="inline-flex text-gold text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/spectrum"                            
                            >Explore AISC Readiness Score
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-gold text-sm font-bold" href="/spectrum"  />  
                            </a>                        
                        </div>
                    </div>                               
                </div>
          
            </div>

            <div className="flex flex-col justify-start items-center gap-5 mt-18 mb-18">
                <div className="self-stretch text-center justify-start text-navy text-5xl font-bold ">Connect Every Player</div>
                <div className="self-stretch text-center justify-start text-black text-2xl font-medium ">The AISC platform delivers value to every role in the AI ecosystem</div>
            </div>

                <div className="self-stretch py-3.5 inline-flex justify-center items-center gap-3.5 overflow-hidden">

                  {/* Card */}
                    <div className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
                        <div className="size- flex flex-col justify-center items-start gap-3.5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon */}
                                <div className="size-12 p-2.5 bg-blue-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
                                    <div className="size- inline-flex flex-col justify-start items-start">
                                        <div className="size-4 relative overflow-hidden">
                                            <div className="w-2.5 h-1 left-[3.75px] top-[11.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-blue-950" />
                                            <div className="size-1.5 left-[6px] top-[2.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-blue-950" />
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                        <div className="flex-1 justify-start text-navy text-base font-bold uppercase">
                                          Founders
                                        </div>
                                    </div>
                                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                        <div className="flex-1 justify-start text-black text-base font-medium ">
                                          Get Discovered by Top Investors
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-80 justify-start text-black/80 text-xs font-medium ">
                              <ul className="list-disc list-outside space-y-4 px-4">
                                <li>List your company on the public directory.</li>
                                <li>Receive an AISC Score Readiness to discover what gaps your business needs to fill before talking to investors.</li>
                                <li>Take part in practical training programs to improve your startup.</li>
                                <li>Get matched with investors that align with your business.</li>
                              </ul>
                            </div>                            
                           </div>
                        <div className="size- inline-flex justify-start items-center gap-2.5">
                            <a
                              className="inline-flex text-navy text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/learn-founders"                            
                            >Learn More
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-dark-blue text-sm font-bold" href="/spectrum"  />  
                            </a>                              
                            
                        </div>
                    </div>
                    

                  {/* Card */}
                    <div className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
                        <div className="size- flex flex-col justify-center items-start gap-3.5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon */}
                                <div className="size-12 p-2.5 bg-green-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
                                    <div className="size-4 relative overflow-hidden">
                                        <div className="w-2.5 h-1 left-[1.50px] top-[11.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-green" />
                                        <div className="size-1.5 left-[3.75px] top-[2.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-green" />
                                        <div className="w-0.5 h-1 left-[14.25px] top-[11.35px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-green" />
                                        <div className="w-0.5 h-1.5 left-[12px] top-[2.35px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-green" />
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                        <div className="flex-1 justify-start text-green text-base font-bold uppercase">
                                          Investors
                                        </div>
                                    </div>
                                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                        <div className="flex-1 justify-start text-black text-base font-medium ">
                                          Get Access to Verified AI Startups
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-80 justify-start text-black/80 text-xs font-medium ">
                              <ul className="list-disc list-outside space-y-4 px-4">
                                <li>Browse a database of Canadian AI startups to discover startups that match your needs.</li>
                                <li>View comprehensive AISC Readiness Scores to see what stage of development each startup is in.</li>
                                <li>Send and receive requests from startups that align with your goals to get in contact with them.</li>
                                <li>Create a watchlist of your favourite startups to get instant alerts when they hit big milestones.</li>
                              </ul>
                            </div>                             
                           
                        </div>
                        <div className="size- inline-flex justify-start items-center gap-2.5">
                            <a
                              className="inline-flex text-green text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/learn-investors"                            
                            >Learn More
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-green text-sm font-bold" href="/spectrum"  />  
                            </a>                              
                            
                        </div>
                    </div>

                  {/* Card */}
                    <div className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
                        <div className="size- flex flex-col justify-center items-start gap-3.5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon */}
                                 <div className="size-12 p-2.5 bg-amber-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
                                     <div className="size-4 relative">
                                         <div className="w-2 h-1 left-[4px] top-0 absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-4 h-3 left-0 top-[4px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-0 h-[1.60px] left-[8px] top-[6px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-0 h-[1.60px] left-[8px] top-[12.40px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-1 h-[4.80px] left-[6.20px] top-[7.60px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                     </div>
                                 </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                        <div className="flex-1 justify-start text-gold text-base font-bold uppercase">
                                          Corporations
                                        </div>
                                    </div>
                                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                        <div className="flex-1 justify-start text-black text-base font-medium ">
                                          Discover Vendors to Power Your Business
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-80 justify-start text-black/80 text-xs font-medium ">
                              <ul className="list-disc list-outside space-y-4 px-4">
                                <li>Locate AI startups specifically built for your industry.</li>
                                <li>Monitor AISC Champions to find perfect candidates for corporate venture investments, partnerships or acquisitions.</li>
                                <li>Body.</li>
                                <li>Body.</li>
                              </ul>
                            </div>                             
                           
                        </div>
                        <div className="size- inline-flex justify-start items-center gap-2.5">
                            <a
                              className="inline-flex text-gold text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/learn-corporations"                            
                            >Learn More
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-gold text-sm font-bold" href="/spectrum"  />  
                            </a>                              
                            
                        </div>
                    </div>  

                  {/* Card */}
                    <div className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
                        <div className="size- flex flex-col justify-center items-start gap-3.5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                                {/* Icon */}
                                 <div className="size-12 p-2.5 bg-amber-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
                                     <div className="size-4 relative">
                                         <div className="w-2 h-1 left-[4px] top-0 absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-4 h-3 left-0 top-[4px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-0 h-[1.60px] left-[8px] top-[6px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-0 h-[1.60px] left-[8px] top-[12.40px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                         <div className="w-1 h-[4.80px] left-[6.20px] top-[7.60px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
                                     </div>
                                 </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
                                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                                        <div className="flex-1 justify-start text-red text-base font-bold uppercase">
                                          Government
                                        </div>
                                    </div>
                                    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                                        <div className="flex-1 justify-start text-black text-base font-medium ">
                                          Track Funding & Measure Economic Results
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-80 justify-start text-black/80 text-xs font-medium ">
                              <ul className="list-disc list-outside space-y-4 px-4">
                                <li>Utilize the AISC Spectrum as the national standard for AI startup maturity.</li>
                                <li>Build policy reports and data models around the AISC Spectrum.</li>
                                <li>Body.</li>
                                <li>Body.</li>
                              </ul>
                            </div>                             
                           
                        </div>
                        <div className="size- inline-flex justify-start items-center gap-2.5">
                            <a
                              className="inline-flex text-red text-sm font-bold mt-3 mr-1 hover:underline"
                              href="/learn-government"                            
                            >Learn More
                             <RightArrowHeadIcon className="h-6 w-6 justify-start text-red text-sm font-bold" href="/spectrum"  />  
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
