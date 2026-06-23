import { RightArrowHeadIcon } from "../../dashboard/icons";

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
      <div className="size- flex flex-col justify-start items-start gap-5">
          <div className="size- flex flex-col justify-start items-start gap-6">
              <div className="size- px-2.5 py-[5px] rounded-full border-orange bg-[#fffceb] border border-2 inline-flex justify-center text-orange items-center gap-2.5">
                  <div className="justify-start text-orange text-xs font-bold uppercase">
                    {header}
                    </div>
              </div>
              <div className="size- flex flex-col justify-start items-start gap-[5px]">
                  <div className="size- inline-flex justify-center items-center gap-2.5">
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
          <div className=" flex flex-col justify-center gap-2.5">
              <div className="mr-10 justify-start text-white text-base font-medium font-normal">
                {body1}
              </div>
              <div className="mr-10 justify-start text-white text-base font-medium font-normal ">
                {body2}
              </div>
          </div>
      </div>
      <div className={`h-60 w-full bg-white/85 flex items-center justify-center text-center font-bold text-black/35 text-6xl ${spacer}`}>
        PLACEHOLDER <br ></br>IMAGE
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