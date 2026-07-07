import { RightArrowHeadIcon, ProfileIcon, AdvisoryIcon, GovernmentIcon, CorporationIcon, CheckCircleIcon  } from "../../dashboard/icons";
import { buttonSubmit } from "../../general/IndividualComponents/Buttons";
import placeholderImage from "../../../assets/placeholder.png";

export default function FeatureCards() {
  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-5 mt-18 mb-18">
          <div className="self-stretch text-center justify-start text-navy text-5xl font-bold ">
            Connect Every Player
          </div>
          <div className="self-stretch text-center justify-start text-black text-2xl font-medium ">
            The AISC platform delivers value to every role in the AI ecosystem
          </div>
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
    </div>
  );
}

type FeatureCardProps = {
  Icon: React.ComponentType<{ className?: string }>;
  colour: string;
  bgColour: string;
  title: string;
  subtitle: string;
  items: string[];
  link: string;
};

export function FeatureCard({
  Icon,
  colour,
  bgColour,
  title,
  subtitle,
  items,
  link,
}: FeatureCardProps) {
  return (
    <div className="self-stretch p-10 px-15 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.08)] outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex flex-col justify-between items-start overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">

          <div className={`size-12 p-2.5 rounded-2xl inline-flex justify-center items-center ${bgColour}`}>
            <Icon className={`h-6 w-6 text-${colour}`} />
          </div>

          <div className="self-stretch flex flex-col gap-[5px]">
            <div className={`text-base font-bold uppercase text-${colour}`}>
              {title}
            </div>

            <div className="text-black text-base font-medium">
              {subtitle}
            </div>
          </div>
        </div>

        <div className="w-80 text-black/80 text-xs font-medium">
          <ul className="list-disc list-outside space-y-4 px-4">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={link}
        className={`inline-flex items-center mt-3 text-sm font-bold hover:underline text-${colour}`}
      >
        Learn More
        <RightArrowHeadIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

type PriceCardProps = {
  Featured: boolean;
  Title: string;
  Cost: string;
  Body1: string;
  Body2: string;
  Body3: string;
  Body4: string;
  ButtonText: string;
  Link: string
};

export function PriceCard({
  Featured,
  Title,
  Cost,
  Body1,
  Body2,
  Body3,
  Body4,
  ButtonText,
  Link
}: PriceCardProps) {
  return (
  <div
  className={`
    p-8 bg-white rounded-2xl
    shadow-[0px_8px_50px_22px_rgba(0,0,0,0.15)]
    inline-flex flex-col justify-start items-start gap-5
    ${Featured
      ? "relative outline-2 outline-emerald-600"
      : "outline outline-[0.67px] outline-zinc-300"}`}>

    {/* Add the Most Popular text */}
    {Featured && (
      <div
        className="
          absolute -top-3 left-1/2
          -translate-x-1/2
          px-3 py-1
          rounded-full
          bg-green-50
          border border-emerald-600">

        <span className="text-[10px] font-bold uppercase text-emerald-600">
          Most Popular
        </span>
      </div>
    )}

    <div className="flex flex-col justify-start items-start gap-5">
      <div
        className={`
          text-base font-bold uppercase
          ${Featured ? "text-green" : "text-black"}`}>
        {Title}
      </div>
        <div className="flex flex-col justify-start items-start">
            <div className=" inline-flex justify-start items-center gap-1.5">
                <div className="justify-start text-black text-5xl font-bold ">
                  {Cost}
                </div>
                <div className="justify-start text-zinc-400 text-2xl font-medium ">
                  /mo
                </div>
            </div>
            <div className="justify-start text-zinc-400 text-base font-medium ">
              Who the plan is for
            </div>
        </div>
    </div>
      <div className="w-64 h-56 flex flex-col justify-between items-center">
          <div className="self-stretch h-px bg-zinc-400" />
          <div className="self-stretch inline-flex justify-start items-center gap-3">
              <CheckCircleIcon className={`4.5 w-4.5  ${Featured ? "text-green" : "text-zinc-400"}`} />
              <div className="justify-start text-black text-xs font-medium ">
                {Body1}
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-3">            
              <CheckCircleIcon className={`4.5 w-4.5  ${Featured ? "text-green" : "text-zinc-400"}`} />
              <div className="justify-start text-black text-xs font-medium ">
                {Body2}
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-3">
              <CheckCircleIcon className={`4.5 w-4.5  ${Featured ? "text-green" : "text-zinc-400"}`} />
              <div className="justify-start text-black text-xs font-medium ">
                {Body3}
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-3">
              <CheckCircleIcon className={`4.5 w-4.5 ${Featured ? "text-green" : "text-zinc-400"}`} />
              <div className="justify-start text-black text-xs font-medium ">
                {Body4}
              </div>
          </div>
            <a
                type="submit"
                className={`${buttonSubmit} text-center w-full mt-1 py-4.5 `}
                href={Link}
              >
                {ButtonText}
            </a>                    
      </div>              
  </div>
  );
}


type SmallPriceCardProps = {
  Featured: boolean;
  Title: string;
  Cost: string;
  ButtonText: string;
  Link: string
};

export function SmallPriceCard({
  Featured,
  Title,
  Cost,
  ButtonText,
  Link
}: SmallPriceCardProps) {
  return (
  <div
    className={`
      relative
      w-[260px]
      h-[280px]
      py-10 px-8
      bg-white rounded-2xl
      shadow-[0px_2px_22px_6px_rgba(0,0,0,0.15)]
      flex flex-col
      ${Featured
        ? "outline-2 outline-emerald-600"
        : "outline outline-[0.67px] outline-zinc-300"}`}>

        {/* Add the Most Popular text */}
        {Featured && (
          <div
            className="
              absolute -top-3 left-1/2
              -translate-x-1/2
              px-3 py-1
              rounded-full
              bg-green-50
              border border-emerald-600">

            <span className="text-[10px] font-bold uppercase text-emerald-600">
              Most Popular
            </span>
          </div>
        )}
        <div className="flex flex-col h-full gap-5">
          <div
            className={`
              text-base font-bold uppercase
              ${Featured ? "text-green" : "text-black"}
            `}
          >
            {Title}
        </div>

        <div className="flex flex-col flex-1 items-stretch">
          <div className="inline-flex items-center gap-1.5">
            <div className="text-black text-5xl font-bold">
              {Cost}
            </div>
            <div className="text-zinc-400 text-2xl font-medium">
              /mo
            </div>
          </div>

        <div className="text-zinc-400 mt-2 mx-auto text-base mb-8 font-medium">
          Who the plan is for
        </div>

          <a
            href={Link}
            className={`${buttonSubmit} text-center !py-4.5 whitespace-nowrap`}
          >
            {ButtonText}
          </a>                    
      </div>
    </div>           
  </div>    
  );
}

//Add an image when we have one
type InfoCardProps = {
  header: string;
  title: string;
  subtitle: string;
  body1: string;
  body2: string;
  spacer: string;
  closing: string;
  link: string;
};

export function InfoCard({
  header,
  title,
  subtitle,
  body1,
  body2,
  spacer,
  closing,
  link,
}: InfoCardProps) {
  return (

  <div className="max-w-[600px] self-stretch p-8 bg-navy rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start">
      <div className="flex flex-col justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-6">
              <div className="px-2.5 py-[5px] rounded-full border-orange bg-[#fffceb] border border-2 inline-flex justify-center text-orange items-center gap-2.5">
                  <div className="justify-start text-orange text-xs font-bold uppercase">
                    {header}
                    </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-[5px]">
                  <div className="inline-flex justify-center items-center gap-2.5">
                      <div className="justify-start text-white text-base font-bold uppercase">
                        {title}
                        </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-2.5">
                      <div className="justify-start text-gold font-normal text-2xl font-medium ">
                        {subtitle}
                        </div>
                  </div>
              </div>
          </div>
          <div className="flex flex-col justify-start gap-2.5">
              <div className="mr-10 justify-start text-start text-white text-base font-medium font-normal">
                {body1}
              </div>
              <div className="mr-10 justify-start text-start text-white text-base font-medium font-normal ">
                {body2}
              </div>
          </div>
      </div>
      <div className={`h-60 w-full bg-white/85 flex items-center justify-center text-center font-bold text-black/35 text-6xl ${spacer}`}>
        <img
          src={placeholderImage}
          className="w-full h-full object-cover"
          alt="" />
      </div>      
      <div className="inline-flex justify-start items-center">
          <a
            className="inline-flex text-gold text-sm font-bold mt-3 mr-1 hover:underline"
            href={link}                           
          >
            {closing}
          <RightArrowHeadIcon className="h-6 w-6 justify-start text-gold text-sm font-bold" href={link} />  
          </a>                        
      </div>
  </div>
  );
}