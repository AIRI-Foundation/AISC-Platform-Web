import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import FeatureCards from "../components/general/IndividualComponents/Cards";
import { PriceCard } from "../components/general/IndividualComponents/Cards";

const Pricing = () => {
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
      <div className="bg-navy text-white">
        <Header />     
        
  <div className="flex-col mt-auto item-center justify-center items-centergap-24">
    <div className="size- flex flex-col justify-start items-center mt-20 ">
        <div className="self-stretch text-center justify-start text-white text-6xl font-bold  capitalize">
          Pricing
        </div>
        <div className="self-stretch text-center justify-start text-white text-2xl font-medium mb-16 mt-6">
          Choose the plan that works best for you
        </div>
    </div>
    <div className="size- flex flex-col justify-center items-center gap-16">

      {/* Swap pages */}
        <div data-property-1="Left" className="size- p-1.5 bg-zinc-300 rounded-2xl inline-flex justify-start items-center gap-1">
            <div data-page="Advisory Program" data-show-notification="false" data-show-page-icon="false" data-state="Active" className="size- p-3.5 bg-white rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-black text-base font-bold  uppercase">founder</div>
            </div>
            <div data-page="Advisory Program" data-show-notification="false" data-show-page-icon="false" data-state="Default" className="size- p-3.5 rounded-[10px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25)] flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-black text-base font-bold  uppercase">investor</div>
            </div>
        </div>

        
              
        <div className="size- inline-flex justify-start items-center gap-6">

          <PriceCard
            Title="Free"
            Cost="$0"
            Body1 = "AISC Spectrum Classification"
            Body2 = "Standard Directory Listing."
            Body3 = "Investor Accessibility"
            Body4 = "Advisory Program Access"
            ButtonText = "Create Account"
            Link = "/signup"
          />  
            {/* <div data-highlighted="False" data-size="Large" className="size- p-8 bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-5">
                <div className="size- flex flex-col justify-start items-start gap-5">
                    <div className="justify-start text-black text-base font-bold  uppercase">Free</div>
                    <div className="size- flex flex-col justify-start items-start">
                        <div className="size- inline-flex justify-start items-center gap-1.5">
                            <div className="justify-start text-black text-5xl font-bold ">$0</div>
                            <div className="justify-start text-zinc-300 text-2xl font-medium ">/mo</div>
                        </div>
                        <div className="justify-start text-zinc-300 text-base font-medium ">Who the plan is for</div>
                    </div>
                </div>
                <div className="w-64 h-56 flex flex-col justify-between items-center">
                    <div className="self-stretch h-px bg-zinc-300" />
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">AISC Spectrum Classification</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Standard Directory Listing</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Investor Accessibility</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Advisory Program Access</div>
                    </div>
                    <div data-show-left-icon="false" data-show-right-icon="false" data-size="Large" data-state="Default" className="self-stretch h-14 p-5 bg-red-700 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                        <div className="text-center justify-start text-white text-base font-bold  uppercase">create account</div>
                    </div>
                </div>
            </div> */}


            <div data-highlighted="True" data-size="Large" className="size- p-8 relative bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] outline outline-2 outline-offset-[-2px] outline-emerald-600 inline-flex flex-col justify-start items-start gap-5">
                <div className="size- flex flex-col justify-start items-start gap-5">
                    <div className="justify-start text-emerald-600 text-base font-bold  uppercase">Premium</div>
                    <div className="size- flex flex-col justify-start items-start">
                        <div className="size- inline-flex justify-start items-center gap-1.5">
                            <div className="justify-start text-black text-5xl font-bold ">$100</div>
                            <div className="justify-start text-zinc-300 text-2xl font-medium ">/mo</div>
                        </div>
                        <div className="justify-start text-zinc-300 text-base font-medium ">Who the plan is for</div>
                    </div>
                </div>
                <div className="w-64 h-56 flex flex-col justify-between items-center">
                    <div className="self-stretch h-px bg-zinc-300" />
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Everything in Free</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">AISC Readiness Score</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Profile Analytics &amp; Views</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-emerald-600" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Automated Investor Match Suggestions</div>
                    </div>
                    <div data-show-left-icon="false" data-show-right-icon="false" data-size="Large" data-state="Default" className="self-stretch h-14 p-5 bg-red-700 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                        <div className="text-center justify-start text-white text-base font-bold  uppercase">book a demo</div>
                    </div>
                </div>
                <div data-left-icon="false" data-right-icon="false" data-size="Small" data-state="Green" className="size- px-2.5 py-[5px] left-[109px] top-[-11px] absolute bg-green-50 rounded-[52px] outline outline-[0.67px] outline-offset-[-0.67px] outline-emerald-600 inline-flex justify-center items-center gap-2.5">
                    <div className="justify-start text-emerald-600 text-[10px] font-bold  uppercase">most popular</div>
                </div>
            </div>
            <div data-highlighted="False" data-size="Large" className="size- p-8 bg-white rounded-2xl shadow-[0px_8px_32px_0px_rgba(0,0,0,0.25)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-5">
                <div className="size- flex flex-col justify-start items-start gap-5">
                    <div className="justify-start text-black text-base font-bold  uppercase">Pro</div>
                    <div className="size- flex flex-col justify-start items-start">
                        <div className="size- inline-flex justify-start items-center gap-1.5">
                            <div className="justify-start text-black text-5xl font-bold ">$300</div>
                            <div className="justify-start text-zinc-300 text-2xl font-medium ">/mo</div>
                        </div>
                        <div className="justify-start text-zinc-300 text-base font-medium ">Who the plan is for</div>
                    </div>
                </div>
                <div className="w-64 h-56 flex flex-col justify-between items-center">
                    <div className="self-stretch h-px bg-zinc-300" />
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Everything in Premium</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Dedicated Account Manager</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">Quarterly Investor Interest Report</div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                        <div data-property-1="Green" className="size-4 relative overflow-hidden">
                            <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                            <div className="w-1 h-[2.67px] left-[6px] top-[6.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-zinc-300" />
                        </div>
                        <div className="justify-start text-black text-xs font-medium ">+ much more</div>
                    </div>
                    <div data-show-left-icon="false" data-show-right-icon="false" data-size="Large" data-state="Default" className="self-stretch h-14 p-5 bg-red-700 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                        <div className="text-center justify-start text-white text-base font-bold  uppercase">book a demo</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch text-center justify-start text-white text-[10px] font-bold  uppercase">all prices in cad. cancel or change plans anytime. contact us for enterprise or government licensing.</div>
    </div>
</div>
        {/* <div className="mx-auto max-w-7xl px-6 py-6">

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
              <button className="mt-8 w-full rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark">
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
              <button className="mt-8 w-full rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark">
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
              <button className="mt-8 w-full rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark">
                Book a demo
              </button>
            </div>
          </div>          
        </div> */}
      </div>
      <FeatureCards />
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

      <section className="bg-navy px-6 py-16 text-white">
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
          <div className="bg-navy text-white">
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
