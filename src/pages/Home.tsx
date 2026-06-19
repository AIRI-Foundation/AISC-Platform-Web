import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

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
                <div className="inline-block rounded-full border border-white/30 bg-[#fffceb] px-4 py-3 text-xl font-semibold tracking-[0.1em] text-orange backdrop-blur-xl">
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

// <div className="w-[1440px] h-[2793px] relative bg-blue-950">
//     <div className="w-[1440px] p-7 left-0 top-[2610px] absolute bg-slate-900 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] inline-flex justify-start items-start gap-44">
//         <div className="size- inline-flex flex-col justify-start items-start gap-3.5">
//             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                 <img className="size-11" src="https://placehold.co/46x45" />
//                 <div className="size- inline-flex flex-col justify-start items-start">
//                     <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">AI Startups Canada</div>
//                     <div className="self-stretch justify-start text-orange-400 text-base font-bold font-['Inter'] uppercase">AISC PLATFORM</div>
//                 </div>
//             </div>
//             <div className="justify-start text-white text-sm font-bold font-['Inter']">Canada’s #1 AI Startup Intelligence Platform</div>
//             <div className="size- inline-flex justify-start items-center gap-5">
//                 <div data-color="Negative" data-platform="Instagram" className="size-7 relative overflow-hidden">
//                     <div className="size-7 left-0 top-0 absolute bg-white" />
//                     <div className="size-4 left-[7.29px] top-[7.29px] absolute bg-white" />
//                     <div className="size-1 left-[21.21px] top-[5.19px] absolute bg-white" />
//                 </div>
//                 <div data-color="Negative" data-platform="X (Twitter)" className="size-7 relative overflow-hidden">
//                     <div className="w-7 h-6 left-[1.25px] top-[2.38px] absolute bg-white" />
//                 </div>
//                 <div data-color="Negative" data-platform="LinkedIn" className="size-7 relative overflow-hidden">
//                     <div className="size-7 left-0 top-0 absolute bg-white" />
//                 </div>
//             </div>
//         </div>
//         <div className="size- flex justify-start items-center gap-14">
//             <div className="w-32 inline-flex flex-col justify-start items-start gap-5">
//                 <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">Contact Us</div>
//                 <div className="w-14 flex flex-col justify-start items-start gap-[5px]">
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Contact</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">About</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Privacy</div>
//                 </div>
//             </div>
//             <div className="w-32 inline-flex flex-col justify-start items-start gap-5">
//                 <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">Contact Us</div>
//                 <div className="w-14 flex flex-col justify-start items-start gap-[5px]">
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Contact</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">About</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Privacy</div>
//                 </div>
//             </div>
//             <div className="w-32 inline-flex flex-col justify-start items-start gap-5">
//                 <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">Contact Us</div>
//                 <div className="w-14 flex flex-col justify-start items-start gap-[5px]">
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Contact</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">About</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Privacy</div>
//                 </div>
//             </div>
//             <div className="w-32 inline-flex flex-col justify-start items-start gap-5">
//                 <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">Contact Us</div>
//                 <div className="w-14 flex flex-col justify-start items-start gap-[5px]">
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Contact</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">About</div>
//                     <div className="justify-start text-white text-sm font-bold font-['Inter']">Privacy</div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="w-[1440px] left-0 top-[154px] absolute inline-flex flex-col justify-start items-center gap-20">
//         <div className="self-stretch flex flex-col justify-start items-center gap-11">
//             <div data-left-icon="false" data-right-icon="false" data-size="Large" data-state="Yellow" className="size- p-3.5 bg-amber-50 rounded-[52px] outline outline-[0.67px] outline-offset-[-0.67px] outline-amber-600 inline-flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-amber-600 text-2xl font-medium font-['Inter']">Canada’s #1 AI Startup Intelligence Platform</div>
//             </div>
//             <div className="w-[1016px] text-center justify-start"><span class="text-white text-6xl font-bold font-['Inter'] capitalize">The </span><span class="text-orange-400 text-6xl font-bold font-['Inter'] capitalize">Verified Intelligence Layer</span><span class="text-white text-6xl font-bold font-['Inter'] capitalize"> for Canadian AI Innovation</span></div>
//             <div className="w-[876px] text-center justify-start text-white text-2xl font-medium font-['Inter']">Discover, verify, and connect with every AI startup in Canada. <br/>The only platform with the AISC Spectrum, 12-Dimension Readiness Score, and a structured advisory pathway from idea to investable company.</div>
//             <div className="size- inline-flex justify-start items-center gap-3.5">
//                 <div className="w-56 inline-flex flex-col justify-start items-center gap-2.5">
//                     <div className="self-stretch text-center justify-start text-orange-400 text-5xl font-bold font-['Inter']">1,247</div>
//                     <div className="self-stretch text-center justify-start text-white text-2xl font-medium font-['Inter']">Verified AI Startups</div>
//                 </div>
//                 <div className="w-56 inline-flex flex-col justify-start items-center gap-2.5">
//                     <div className="self-stretch text-center justify-start text-orange-400 text-5xl font-bold font-['Inter']">94</div>
//                     <div className="self-stretch text-center justify-start text-white text-2xl font-medium font-['Inter']">Investor Accounts</div>
//                 </div>
//                 <div className="w-56 inline-flex flex-col justify-start items-center gap-2.5">
//                     <div className="self-stretch text-center justify-start text-orange-400 text-5xl font-bold font-['Inter']">143</div>
//                     <div className="self-stretch text-center justify-start text-white text-2xl font-medium font-['Inter']">Advisory Graduates</div>
//                 </div>
//                 <div className="w-56 inline-flex flex-col justify-start items-center gap-2.5">
//                     <div className="self-stretch text-center justify-start text-orange-400 text-5xl font-bold font-['Inter']">$2.1B</div>
//                     <div className="w-72 text-center justify-start text-white text-2xl font-medium font-['Inter']">Alumni Funds Raised</div>
//                 </div>
//                 <div className="w-64 inline-flex flex-col justify-start items-center gap-2.5">
//                     <div className="self-stretch text-center justify-start text-orange-400 text-5xl font-bold font-['Inter']">5</div>
//                     <div className="self-stretch text-center justify-start text-white text-2xl font-medium font-['Inter']">AISC Spectrum Levels</div>
//                 </div>
//             </div>
//             <div className="size- inline-flex justify-start items-center gap-7">
//                 <div data-show-left-icon="false" data-show-right-icon="false" data-size="Large" data-state="Default" className="w-80 h-14 p-5 bg-red-700 rounded-[10px] flex justify-center items-center gap-1.5">
//                     <div className="text-center justify-start text-white text-base font-bold font-['Inter'] uppercase">get started</div>
//                 </div>
//             </div>
//         </div>
//         <div className="self-stretch flex flex-col justify-start items-start">
//             <div className="self-stretch px-[5px] py-20 bg-gray-100 flex flex-col justify-start items-center gap-24 overflow-hidden">
//                 <div className="size- bg-gray-100 flex flex-col justify-start items-center gap-24">
//                     <div className="w-[901px] flex flex-col justify-start items-center gap-5">
//                         <div className="self-stretch text-center justify-start text-blue-950 text-5xl font-bold font-['Inter']">Our Core Technology</div>
//                         <div className="self-stretch text-center justify-start text-black text-2xl font-medium font-['Inter']">For every stakeholder in the value - AISC provides the measurement standard, scoring framework and tools that enable trustworthy AI deployment</div>
//                     </div>
//                     <div className="size- inline-flex justify-start items-start gap-3.5">
//                         <div className="w-[701px] self-stretch p-8 bg-blue-950 rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start gap-9 overflow-hidden">
//                             <div className="size- flex flex-col justify-start items-start gap-5">
//                                 <div className="size- flex flex-col justify-start items-start gap-6">
//                                     <div data-left-icon="false" data-right-icon="false" data-size="Small" data-state="Yellow" className="size- px-2.5 py-[5px] bg-amber-50 rounded-[52px] outline outline-[0.67px] outline-offset-[-0.67px] outline-amber-600 inline-flex justify-center items-center gap-2.5">
//                                         <div className="justify-start text-amber-600 text-[10px] font-bold font-['Inter'] uppercase">level classification</div>
//                                     </div>
//                                     <div className="size- flex flex-col justify-start items-start gap-[5px]">
//                                         <div className="size- inline-flex justify-center items-center gap-2.5">
//                                             <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">AIsc spectrum</div>
//                                         </div>
//                                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                                             <div className="justify-start text-orange-400 text-2xl font-medium font-['Inter']">The National  Maturity Standard for AI Startups</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="size- flex flex-col justify-center items-center gap-2.5">
//                                     <div className="w-[552px] justify-start text-white text-base font-medium font-['Inter']">A trusted 5-level classification system that measures the true depth of a startup’s artificial intelligence technology, development stage, and commercial revenue.</div>
//                                     <div className="w-[552px] justify-start text-white text-base font-medium font-['Inter']">The AISC Spectrum separates legitimate verified AI technology from surface-level marketing claims.</div>
//                                 </div>
//                             </div>
//                             <img className="self-stretch h-64" src="https://placehold.co/637x262" />
//                             <div className="size- inline-flex justify-start items-center gap-2.5">
//                                 <div className="justify-start text-orange-400 text-sm font-bold font-['Inter']">Explore AISC Spectrum</div>
//                                 <div data-property-1="Yellow" className="w-1 h-2 relative">
//                                     <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-400" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-[701px] self-stretch p-8 bg-blue-950 rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start gap-9 overflow-hidden">
//                             <div className="size- flex flex-col justify-start items-start gap-5">
//                                 <div className="size- flex flex-col justify-start items-start gap-6">
//                                     <div data-left-icon="false" data-right-icon="false" data-size="Small" data-state="Yellow" className="size- px-2.5 py-[5px] bg-amber-50 rounded-[52px] outline outline-[0.67px] outline-offset-[-0.67px] outline-amber-600 inline-flex justify-center items-center gap-2.5">
//                                         <div className="justify-start text-amber-600 text-[10px] font-bold font-['Inter'] uppercase">investment readiness</div>
//                                     </div>
//                                     <div className="size- flex flex-col justify-start items-start gap-[5px]">
//                                         <div className="size- inline-flex justify-center items-center gap-2.5">
//                                             <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">AISC READiness score</div>
//                                         </div>
//                                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                                             <div className="justify-start text-orange-400 text-2xl font-medium font-['Inter']">The 0 - 100 Venture Report Card</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="size- flex flex-col justify-center items-center gap-2.5">
//                                     <div className="w-[552px] justify-start text-white text-base font-medium font-['Inter']">A data-driven score that evaluates a startup’s investment potential across 12 dimensions, including technology differentiation and privacy compliance.</div>
//                                     <div className="w-[552px] justify-start text-white text-base font-medium font-['Inter']">Startups with a score below 60 are not visible to investors.</div>
//                                 </div>
//                             </div>
//                             <img className="self-stretch h-64" src="https://placehold.co/637x262" />
//                             <div className="size- inline-flex justify-start items-center gap-2.5">
//                                 <div className="justify-start text-orange-400 text-sm font-bold font-['Inter']">Explore AISC Readiness Score</div>
//                                 <div data-property-1="Yellow" className="w-1 h-2 relative">
//                                     <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-400" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-[901px] flex flex-col justify-start items-center gap-5">
//                     <div className="self-stretch text-center justify-start text-blue-950 text-5xl font-bold font-['Inter']">Connect Every Player</div>
//                     <div className="self-stretch text-center justify-start text-black text-2xl font-medium font-['Inter']">The AISC platform delivers value to every role in the AI ecosystem</div>
//                 </div>
//                 <div className="self-stretch py-3.5 inline-flex justify-center items-center gap-3.5 overflow-hidden">
//                     <div data-property-1="Blue" className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
//                         <div className="size- flex flex-col justify-center items-start gap-3.5">
//                             <div className="self-stretch flex flex-col justify-start items-start gap-6">
//                                 <div data-property-1="Blue" className="size-12 p-2.5 bg-blue-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
//                                     <div data-property-1="Blue" className="size- inline-flex flex-col justify-start items-start">
//                                         <div className="size-4 relative overflow-hidden">
//                                             <div className="w-2.5 h-1 left-[3.75px] top-[11.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-blue-950" />
//                                             <div className="size-1.5 left-[6px] top-[2.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-blue-950" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
//                                     <div className="self-stretch inline-flex justify-center items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-blue-950 text-base font-bold font-['Inter'] uppercase">Founders</div>
//                                     </div>
//                                     <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-black text-base font-medium font-['Inter']">Get Discovered by Top Investors</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">List your company on the public directory</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Receive an AISC Score Readiness to discover what gaps your business needs to fill before talking to investors</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Take part in practical training programs to improve your startup</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Get matched with investors that align with your business</div>
//                             </div>
//                         </div>
//                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                             <div className="justify-start text-blue-950 text-sm font-bold font-['Inter']">Learn More</div>
//                             <div data-property-1="Blue" className="w-1 h-2 relative">
//                                 <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-blue-950" />
//                             </div>
//                         </div>
//                     </div>
//                     <div data-property-1="Green" className="h-96 p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
//                         <div className="size- flex flex-col justify-center items-start gap-3.5">
//                             <div className="self-stretch flex flex-col justify-start items-start gap-6">
//                                 <div data-property-1="Green" className="size-12 p-2.5 bg-green-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
//                                     <div data-property-1="Green" className="size- inline-flex flex-col justify-start items-start">
//                                         <div className="size-4 relative overflow-hidden">
//                                             <div className="w-2.5 h-1 left-[1.50px] top-[11.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-emerald-600" />
//                                             <div className="size-1.5 left-[3.75px] top-[2.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-emerald-600" />
//                                             <div className="w-0.5 h-1 left-[14.25px] top-[11.35px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-emerald-600" />
//                                             <div className="w-0.5 h-1.5 left-[12px] top-[2.35px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-emerald-600" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
//                                     <div className="self-stretch inline-flex justify-center items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-emerald-600 text-base font-bold font-['Inter'] uppercase">Investors</div>
//                                     </div>
//                                     <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-black text-base font-medium font-['Inter']">Get Access to Verified AI Startups</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Browse a database of Canadian AI startups to discover startups that match your needs</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">View comprehensive AISC Readiness Scores to see what stage of development each startup is in</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Send and receive requests from startups that align with your goals to get in contact with them</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Create a watchlist of your favourite startups to get instant alerts when they hit big milestones</div>
//                             </div>
//                         </div>
//                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                             <div className="justify-start text-emerald-600 text-sm font-bold font-['Inter']">Learn More</div>
//                             <div data-property-1="Green" className="w-1 h-2 relative">
//                                 <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-emerald-600" />
//                             </div>
//                         </div>
//                     </div>
//                     <div data-property-1="Yellow" className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
//                         <div className="size- flex flex-col justify-center items-start gap-3.5">
//                             <div className="self-stretch flex flex-col justify-start items-start gap-6">
//                                 <div data-property-1="Yellow" className="size-12 p-2.5 bg-amber-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
//                                     <div data-property-1="Orange" className="size-4 relative">
//                                         <div className="w-2 h-1 left-[4px] top-0 absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
//                                         <div className="w-4 h-3 left-0 top-[4px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
//                                         <div className="w-0 h-[1.60px] left-[8px] top-[6px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
//                                         <div className="w-0 h-[1.60px] left-[8px] top-[12.40px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
//                                         <div className="w-1 h-[4.80px] left-[6.20px] top-[7.60px] absolute outline outline-1 outline-offset-[-0.58px] outline-amber-600" />
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
//                                     <div className="self-stretch inline-flex justify-center items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-orange-400 text-base font-bold font-['Inter'] uppercase">corporations</div>
//                                     </div>
//                                     <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-black text-base font-medium font-['Inter']">Discover Vendors to Power Your Business</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Locate AI startups specifically built for your industry</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']"> Monitor AISC Champions to find perfect candidates for corporate venture investments, partnerships or acquisitions</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Body</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Body</div>
//                             </div>
//                         </div>
//                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                             <div className="justify-start text-orange-400 text-sm font-bold font-['Inter']">Learn More</div>
//                             <div data-property-1="Yellow" className="w-1 h-2 relative">
//                                 <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-400" />
//                             </div>
//                         </div>
//                     </div>
//                     <div data-property-1="Red" className="self-stretch p-6 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
//                         <div className="size- flex flex-col justify-center items-start gap-3.5">
//                             <div className="self-stretch flex flex-col justify-start items-start gap-6">
//                                 <div data-property-1="Red" className="size-12 p-2.5 bg-red-50 rounded-2xl inline-flex justify-center items-center gap-2.5">
//                                     <div data-property-1="Red" className="size-4 relative overflow-hidden">
//                                         <div className="w-3.5 h-2.5 left-[1.33px] top-[2.67px] absolute outline outline-1 outline-offset-[-0.58px] outline-red-700" />
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch flex flex-col justify-start items-start gap-[5px]">
//                                     <div className="self-stretch inline-flex justify-center items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-red-700 text-base font-bold font-['Inter'] uppercase">government</div>
//                                     </div>
//                                     <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                         <div className="flex-1 justify-start text-black text-base font-medium font-['Inter']">Track Funding &amp; Measure Economic Results</div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Utilize the AISC Spectrum as the national standard for AI startup maturity</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Build policy reports and data models around the AISC Spectrum</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Body</div>
//                             </div>
//                             <div className="self-stretch inline-flex justify-start items-center gap-2.5">
//                                 <div className="w-80 justify-start text-black text-xs font-medium font-['Inter']">Body</div>
//                             </div>
//                         </div>
//                         <div className="size- inline-flex justify-start items-center gap-2.5">
//                             <div className="justify-start text-red-700 text-sm font-bold font-['Inter']">Learn More</div>
//                             <div data-property-1="Red" className="w-1 h-2 relative">
//                                 <div className="w-2 h-1 left-0 top-[7.25px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-red-700" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div data-property-1="English" className="w-[1440px] h-24 px-5 py-2.5 left-0 top-0 absolute bg-blue-950 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-between items-center overflow-hidden">
//         <div className="size- flex justify-start items-center gap-2.5 overflow-hidden">
//             <img className="size-11" src="https://placehold.co/46x45" />
//             <div className="size- inline-flex flex-col justify-start items-start">
//                 <div className="self-stretch justify-start text-white text-2xl font-medium font-['Inter']">AI Startups Canada</div>
//                 <div className="self-stretch justify-start text-orange-400 text-base font-medium font-['Inter']">AISC PLATFORM</div>
//             </div>
//         </div>
//         <div className="size- flex justify-start items-center gap-3.5 overflow-hidden">
//             <div data-page="Topbar" data-show-notification="true" data-show-page-icon="true" data-state="Default" className="size- px-3.5 py-2.5 rounded-[10px] flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">Product</div>
//             </div>
//             <div data-page="Topbar" data-show-notification="true" data-show-page-icon="true" data-state="Default" className="size- px-3.5 py-2.5 rounded-[10px] flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">Directory</div>
//             </div>
//             <div data-page="Topbar" data-show-notification="true" data-show-page-icon="true" data-state="Default" className="size- px-3.5 py-2.5 rounded-[10px] flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">Pricing</div>
//             </div>
//             <div data-page="Topbar" data-show-notification="true" data-show-page-icon="true" data-state="Default" className="size- px-3.5 py-2.5 rounded-[10px] flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">About us</div>
//             </div>
//             <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">FR</div>
//             <div data-property-1="Red" className="size- px-3.5 py-2.5 bg-red-700 rounded-[10px] flex justify-center items-center gap-2.5">
//                 <div className="justify-start text-white text-base font-bold font-['Inter'] uppercase">Login / sign up</div>
//             </div>
//         </div>
//     </div>
// </div>
export default Home;
