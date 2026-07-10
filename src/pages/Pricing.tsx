import { useState } from "react";

import Footer from "../components/general/IndividualComponents/Footer";
import FAQ from "../components/general/IndividualComponents/Faq";
import { faqItems } from "../components/data/FaqData";
import TrustedBy from "../components/general/IndividualComponents/TrustedBy";
import Header from "../components/general/IndividualComponents/Header";
import FeatureCards from "../components/general/IndividualComponents/Cards";
import { PriceCard, SmallPriceCard } from "../components/general/IndividualComponents/Cards";
import placeholderImage from "../assets/placeholder.png";
import { CheckCircleIcon, InformationIcon, XIcon } from "../components/dashboard/icons";
import { founderFeatures, investorFeatures } from "../components/data/PricingFeaturesData";
import type { IconType } from "../components/data/PricingFeaturesData";

const renderIcon = (icon: IconType) => {
  switch (icon) {
    case "check":
      return <CheckCircleIcon className="h-7 w-7 text-zinc-500" />;

    case "x":
      return <XIcon className="h-7 w-7 text-zinc-500" />;

    default:
      return null;
  }
};
const featureCards = [
  {
    Image: placeholderImage,
    Label: "Feature",
    Title: "What you can achieve with this feature",
    Description: "Explain the value to the user",
    ImageFirst: true,
  },
  {
    Image: placeholderImage,
    Label: "Feature",
    Title: "Another capability users can unlock",
    Description: "Explain another benefit.",
    ImageFirst: false,
  },
  {
    Image: placeholderImage,
    Label: "Feature",
    Title: "A third powerful capability",
    Description: "Another explanation.",
    ImageFirst: true,
  },
];

type DataLineProps = {
  FeatureName: string;
  ShowFeatureIcon: boolean;
  Data1: string;
  Data1Icon: IconType;
  Data2: string;
  Data2Icon: IconType;
  Data3: string;
  Data3Icon: IconType;
};

const DataLine = ({
  FeatureName,
  ShowFeatureIcon,
  Data1,
  Data1Icon,
  Data2,
  Data2Icon,
  Data3,
  Data3Icon,
}: DataLineProps) => {
  return (
    <div className="self-stretch inline-flex justify-start items-start gap-7">
      <div className="w-80 pb-5 border-b-[0.67px] border-zinc-300 flex justify-start mt-1 items-center gap-2">
        <div className="justify-start text-black font-medium ">
          {FeatureName}
        </div>
        {ShowFeatureIcon && (
          <InformationIcon className="ml-auto h-7 w-7 text-zinc-500" />
        )}
      </div>
      <div className="size- flex justify-start items-start gap-5">
        <div className="w-65 pb-5 border-b-[0.67px] border-zinc-300 flex justify-start items-center gap-2">
          <div className="justify-start text-black text-1xl font-medium ">
            <div className="flex items-center gap-2">
              {renderIcon(Data1Icon)}
              {Data1}
            </div>
          </div>
          <div className="mt-8"></div>
        </div>
        <div className="w-65 pb-5 border-b-[0.67px] border-zinc-300 flex justify-start items-center gap-2">
          <div className="justify-start text-black font-medium ">
            <div className="flex items-center gap-2">
              {renderIcon(Data2Icon)}
              {Data2}
            </div>
          </div>
          <div className="mt-8"></div>
        </div>
        <div className="w-65 pb-5 border-b-[0.67px] border-zinc-300 flex justify-start items-center gap-2">
          <div className="justify-start text-black font-medium ">
            <div className="flex items-center gap-2">
              {renderIcon(Data3Icon)}
              {Data3}
            </div>
          </div>
          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
};

const founderPlans = [
  {
    Featured: false,
    Title: "Free",
    Cost: "$0",
    Body1: "AISC Spectrum Classification",
    Body2: "Standard Directory Listing",
    Body3: "Investor Accessibility",
    Body4: "Advisory Program Access",
    ButtonText: "Create Account",
    Link: "/signup",
  },
  {
    Featured: true,
    Title: "Premium",
    Cost: "$100",
    Body1: "Everything in Free",
    Body2: "AISC Readiness Score",
    Body3: "Profile Analytics & Views",
    Body4: "Automated Investor Match Suggestions",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: false,
    Title: "Pro",
    Cost: "$300",
    Body1: "Everything in Premium",
    Body2: "Dedicated Account Manager",
    Body3: "Quarterly Investor Interest Report",
    Body4: "+ much more!",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
];

const investorPlans = [
  {
    Featured: false,
    Title: "Explorer",
    Cost: "$500",
    Body1: "Browse Canadian AI Startup Directory",
    Body2: "Basic Investment Profile",
    Body3: "5 Founder Introductions A Month",
    Body4: "Watchlist to Monitor Startups",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: true,
    Title: "Professional",
    Cost: "$1500",
    Body1: "Everything in Explorer",
    Body2: "Access In-Depth AISC Readiness Scores",
    Body3: "15 Founder Introductions A Month",
    Body4: "Priority Introduction Approvals",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: false,
    Title: "Enterprise",
    Cost: "$3000",
    Body1: "Everything in Professional",
    Body2: "Unlimited Founder Introductions",
    Body3: "Export Directory Data",
    Body4: "+ much more!",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
];

const founderPlansSmall = [
  {
    Featured: false,
    Title: "Free",
    Cost: "$0",
    ButtonText: "Create Account",
    Link: "/signup",
  },
  {
    Featured: true,
    Title: "Premium",
    Cost: "$100",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: false,
    Title: "Pro",
    Cost: "$300",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
];

const investorPlansSmall = [
  {
    Featured: false,
    Title: "Explorer",
    Cost: "$500",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: true,
    Title: "Professional",
    Cost: "$1500",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
  {
    Featured: false,
    Title: "Enterprise",
    Cost: "$3000",
    ButtonText: "Book a Demo",
    Link: "/build-company-profile",
  },
];

type FeatureCardProps = {
  Image: string;
  Label: string;
  Title: string;
  Description: string;
  ImageFirst?: boolean;
};
const FeatureCard = ({
  Image,
  Label,
  Title,
  Description,
  ImageFirst = true,
}: FeatureCardProps) => {
  return (
    <div className="
      bg-white
      rounded-[35px]
      shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)]
      outline
      outline-[0.67px]
      outline-offset-[-0.67px]
      outline-zinc-300
      overflow-hidden
    ">
      <div
        className={`
          w-full
          p-8
          md:p-16
          flex
          flex-col
          lg:flex-row
          items-center
          gap-10
          ${!ImageFirst ? "lg:flex-row-reverse" : ""}
        `}
      >

        <div className="
          w-full
          lg:w-1/2
          aspect-[513/402]
          overflow-hidden
          rounded-[20px]
        ">
          <img
            src={Image}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>


        <div className="
          w-full
          lg:w-1/2
          flex
          flex-col
          gap-8
        ">
          <div className="flex flex-col gap-[5px]">

            <div className="
              text-black
              text-base
              font-bold
              uppercase
            ">
              {Label}
            </div>


            <div className="
              text-black
              text-3xl
              md:text-5xl
              font-bold
            ">
              {Title}
            </div>

          </div>


          <div className="
            text-black
            text-base
            font-medium
          ">
            {Description}
          </div>

        </div>

      </div>
    </div>
  );
};
const Pricing = () => {
  const [view, setView] = useState<"founder" | "investor">("founder");

  const plans = view === "founder" ? founderPlans : investorPlans;

  const plansSmall =
    view === "founder" ? founderPlansSmall : investorPlansSmall;

  const features = view === "founder" ? founderFeatures : investorFeatures;

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
          <div className="flex flex-col justify-center items-center gap-16">
            {/* Switch */}
            <div className="p-1.5 bg-zinc-400 rounded-2xl inline-flex gap-1">
              <button
                onClick={() => setView("founder")}
                className={`p-3.5 rounded-[10px] uppercase font-bold text-black
          ${
            view === "founder"
              ? "bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
              : "bg-white/40"
          }`}
              >
                Founder
              </button>
              <button
                onClick={() => setView("investor")}
                className={`p-3.5 rounded-[10px] uppercase font-bold text-black
          ${
            view === "investor"
              ? "bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
              : "bg-white/40"
          }`}
              >
                Investor
              </button>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-6">     
              {plans.map((plan) => (
                <PriceCard
                  key={plan.Title}
                  Featured={plan.Featured}
                  Title={plan.Title}
                  Cost={plan.Cost}
                  Body1={plan.Body1}
                  Body2={plan.Body2}
                  Body3={plan.Body3}
                  Body4={plan.Body4}
                  ButtonText={plan.ButtonText}
                  Link={plan.Link}
                />
              ))}
            </div>
            <div className="self-stretch text-center justify-start text-white/90 text-[11px] font-bold tracking-wide uppercase mb-16">
              all prices in cad. cancel or change plans anytime. contact us for
              enterprise or government licensing.
            </div>
          </div>
        </div>
      </div>
      <FeatureCards />

      <div className="bg-navy text-white mt-14 pt-24">
        <div className="text-center justify-start text-white text-5xl font-bold">
          Lorem ipsum
        </div>
        <div className="text-center justify-start text-white text-2xl font-medium mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>


      <section className="mx-auto max-w-6xl mt-24 space-y-14">
        {featureCards.map((feature) => (
          <FeatureCard
            key={feature.Title}
            Image={feature.Image}
            Label={feature.Label}
            Title={feature.Title}
            Description={feature.Description}
            ImageFirst={feature.ImageFirst}
          />
        ))}
      </section>
      </div>

      <section>
        <div className="bg-navy text-white">
          <div className="mx-auto max-w-7xl px-6 py-6 mb-20">
            <TrustedBy />
          </div>

          <div className="flex justify-center">
            <div className="self-stretch p-20 bg-white rounded-[100px] max-w-full inline-flex flex-col items-center gap-12">
              {/* Switch */}
              <div className="p-1.5 bg-zinc-400 rounded-2xl inline-flex gap-1">
                <button
                  onClick={() => setView("founder")}
                  className={`p-3.5 rounded-[10px] uppercase font-bold text-black
          ${
            view === "founder"
              ? "bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
              : "bg-white/40"
          }`}
                >
                  Founder
                </button>
                <button
                  onClick={() => setView("investor")}
                  className={`p-3.5 rounded-[10px] uppercase font-bold text-black
          ${
            view === "investor"
              ? "bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.25)]"
              : "bg-white/40"
          }`}
                >
                  Investor
                </button>
              </div>

              <div className="self-stretch inline-flex justify-start items-start">
                <div className="w-80 justify-start text-black text-6xl font-bold  capitalize">
                  Compare Plans
                </div>
                <div className="flex justify-start items-center gap-3.5">
                  {plansSmall.map((plansSmall) => (
                    <SmallPriceCard
                      key={plansSmall.Title}
                      Featured={plansSmall.Featured}
                      Title={plansSmall.Title}
                      Cost={plansSmall.Cost}
                      ButtonText={plansSmall.ButtonText}
                      Link={plansSmall.Link}
                    />
                  ))}
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-center gap-16">
                <div className="self-stretch flex flex-col justify-start items-center gap-6">
                  <div className="self-stretch justify-start text-black text-4xl font-bold ">
                    Main
                  </div>
                  {features.map((features) => (
                    <DataLine
                      key={features.Id}
                      FeatureName={features.FeatureName}
                      ShowFeatureIcon={features.ShowFeatureIcon}
                      Data1={features.Data1}
                      Data1Icon={features.Data1Icon}
                      Data2={features.Data2}
                      Data2Icon={features.Data2Icon}
                      Data3={features.Data3}
                      Data3Icon={features.Data3Icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <FAQ items={faqItems} />
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
