import { type ChangeEvent, type FormEvent, useState } from "react";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header";
import {ChevronDownIcon, SearchIcon, ArrowRightIcon} from "../components/dashboard/icons";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import placeholderImage from "../assets/placeholder.png";

type SpectrumLevelFilterProps = {
  Level: string;
  LevelTitle: string;  
  Catagory: string;
};

const SpectrumLevelFilter = ({
  Level,
  LevelTitle,
  Catagory,
}: SpectrumLevelFilterProps) => {
  return (
  <div className="p-2.5 bg-gold rounded-[10px] inline-flex flex-col justify-start items-start gap-[5px]">
      <div className="self-stretch justify-start text-white text-base font-bold  uppercase">
        {Level}
      </div>
      <div className="self-stretch justify-start text-white text-base font-bold  uppercase">
        {LevelTitle}
      </div>
      <div className="self-stretch justify-start text-white text-sm font-bold ">
        {Catagory}
      </div>
  </div>    
  );
};


type SearchItemProps = {
  Title: string;
  Catagory: string;  
};

const SearchItem = ({
  Title,
  Catagory,
}: SearchItemProps) => {
  return (  
  <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
      <div className="size- inline-flex justify-start items-center gap-2">
          <div className="justify-start text-black text-base px-4 font-medium">
              {Title}
            </div>
      </div>
      <div className="w-full max-w-[496px] min-w-60 px-4 py-3 bg-white rounded-lg outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex justify-between items-center">
          <input className="justify-start text-black text-base font-medium"
          placeholder={Catagory}
          >            
          </input>
          <div data-property-1="Black" className="w-1 h-2 relative origin-top-left rotate-90">
          </div>
          <SearchIcon className="text-black h-6 w-6"/>
      </div>
  </div>   
  );
};


type DropdownItemProps = {
  Title: string;
  Catagory: string;  
};

const DropdownItem = ({
  Title,
  Catagory,
}: DropdownItemProps) => {
  return (  
  <div className="self-stretch inline-flex flex-col justify-start items-start gap-2">
      <div className="size- inline-flex justify-start items-center gap-2">
          <div className="justify-start text-black text-base px-4 font-medium">
              {Title}
            </div>
      </div>
      <div className="w-full max-w-[496px] min-w-60 px-4 py-3 bg-white rounded-lg outline outline-[0.67px] outline-offset-[-0.67px] outline-zinc-300 inline-flex justify-between items-center">
          <div className="justify-start text-black text-base font-medium">
            {Catagory}
          </div>
          <div data-property-1="Black" className="w-1 h-2 relative origin-top-left rotate-90">
          </div>
          <ChevronDownIcon className="text-black h-6 w-6"/>
      </div>
  </div>   
  );
}
                // <select
                //   name="role"
                //   value={formData.role}
                //   onChange={handleChange}
                //   className={textField}
                // >
                //   <option value={1}>Founder</option>
                //   <option value={2}>Investor</option>
                //   <option value={3}>Startup</option>
                //   <option value={4}>Advisor</option>
                //   <option value={5}>Partner</option>
                // </select>
// src={placeholderImage}
type CompanyCardProps = {
  Thumbnail: string;
  CompanyTitle: string;
  CompanyHeader: string;
  Accomplishment1: string;
  Accomplishment2: string;
  Accomplishment3: string;
  Revenue: string;
  Funding: string;
  Stage: string;
  AISCScore: number;
  Location:string;
  Link:string;
};

const CompanyCard = ({
  Thumbnail,
  CompanyTitle,
  CompanyHeader,
  Accomplishment1,
  Accomplishment2,
  Accomplishment3,
  Revenue,
  Funding,
  Stage,
  AISCScore,
  Location,
  Link,
}: CompanyCardProps) => {
  return (  
        <div className="p-5 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.15)] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">

                  {/* Logo and Title */}
                    <div className="inline-flex justify-start items-start gap-1.5">
                          <img
                            src={Thumbnail}
                            alt={`${CompanyTitle} logo`}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                        <div className="gap-[3px]">
                            <div className="text-black text-sm font-bold ">
                              {CompanyTitle}
                            </div>
                            <div className=" text-black/20 text-xs font-normal ">
                              {CompanyHeader}
                            </div>
                        </div>
                    </div>

                    {/* Accomplishments */}
                    <div className="self-stretch inline-flex justify-start items-center gap-[5px]">
                        <div className="h-7 p-2.5 bg-blue-400/20 rounded-[100px] flex justify-center items-center gap-2.5">
                            <div className="justify-start text-blue-400 text-xs font-bold ">
                              {Accomplishment1}
                            </div>
                        </div>
                        <div className="h-7 p-2.5 bg-orange-400/20 rounded-[100px] flex justify-center items-center gap-2.5">
                            <div className="justify-start text-amber-600 text-xs font-bold ">
                              {Accomplishment2}
                            </div>
                        </div>
                        <div className="h-7 p-2.5 bg-blue-950/20 rounded-[100px] flex justify-center items-center gap-2.5">
                            <div className="justify-start text-blue-950 text-xs font-bold ">
                              {Accomplishment3}
                            </div>
                        </div>
                    </div>

                    {/* Revenue and funding */}
                    <div className="inline-flex justify-start items-center gap-48">
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-black/20 text-xs font-bold ">
                              REVENUE
                            </div>
                            <div className="self-stretch justify-start text-black text-xs font-bold ">
                              ${Revenue} ARR
                            </div>
                        </div>
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-black/20 text-xs font-bold ">
                              FUNDING
                            </div>
                            <div className="justify-start text-black text-xs font-bold ">
                              ${Funding} Raised
                            </div>
                        </div>
                    </div>

                    {/* Stage and score*/}                    
                    <div className=" inline-flex justify-start items-center gap-48">
                        <div className="flex justify-start items-start gap-1">
                            <div className="w-16 inline-flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch justify-start text-black/20 text-xs font-bold ">
                                  STAGE
                                </div>
                                <div className="self-stretch justify-start text-black text-xs font-bold ">
                                  {Stage}
                                </div>
                            </div>
                        </div>
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="justify-start text-black/20 text-xs font-bold ">
                              AISC
                            </div>
                            <div className="justify-start text-emerald-600 text-xs font-bold ">
                              {AISCScore}/100
                            </div>
                        </div>
                    </div>
                </div>
                  
                  {/* Line */}
                  <div className="w-full h-0 outline outline-1 outline-black/10"></div>

                {/* Location and Profile */}
                <div className="w-full mt-4 flex gap-2.5">
                  <div className="justify-start text-black/20 text-sm font-bold ">
                    {Location}
                  </div>           
                  <a className="ml-auto flex text-blue-950 text-sm font-bold "
                    href={Link}
                  >
                    View Profile
                    <ArrowRightIcon className="h-6 w-6"/>
                  </a>
                </div>
            </div>
        </div>
  );
}

const Database = () => {
  const [searching, setSearching] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearching(true);
  };  
  return (

    <div className="min-h-screen bg-navy text-white">
      {/* HEADER */}
          <Header />
      
      {/* MAIN BODY */}
        <div className="bg-gray-100">
          <div className="w-[94%] mx-auto py-10">

            <div className="p-3.5 bg-blue-950 rounded-[10px] justify-start items-start gap-2.5">
                <div className="px-3.5 py-[5px] flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                        <div className="flex-1 justify-start text-white text-2xl font-medium ">Browse by AISC Spectrum Level</div>
                    </div>
                    <div className=" inline-flex justify-center items-center gap-2.5">
                        <div className="text-center justify-start text-white text-sm font-bold ">Companies at Level 4–5 and AISC Certified Level 3 show full profiles. Earlier-stage companies are visible by category only — protecting founders until they are ready.<br/></div>
                    </div>
                </div>
                <div className="mt-5 px-3.5 py-[5px] grid grid-cols-6 justify-start items-center gap-2.5">
                  <SpectrumLevelFilter
                    Level="All"
                    LevelTitle="LEVELS"
                    Catagory="1,247 Companies"
                  />
                  <SpectrumLevelFilter
                    Level="L1"
                    LevelTitle="EXPLORER"
                    Catagory="Category Only"
                  />  
                  <SpectrumLevelFilter
                    Level="L2"
                    LevelTitle="BUILDERS"
                    Catagory="Category Only"
                  />  
                  <SpectrumLevelFilter
                    Level="L3"
                    LevelTitle="DEPLOYERS"
                    Catagory="Category Only"
                  />  
                  <SpectrumLevelFilter
                    Level="L4"
                    LevelTitle="SCALERS"
                    Catagory="Category Only"
                  />  
                  <SpectrumLevelFilter
                    Level="L5"
                    LevelTitle="CHAMPIONS"
                    Catagory="Category Only"
                  />                                                                                              
                </div>
            </div>

          <div className="mt-5 w-full p-5 bg-white rounded-[10px] justify-start items-end gap-3.5 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4">          
                <div className="px-3.5 py-[2px] grid grid-cols-4 justify-start items-center gap-2.5">
                  <SearchItem 
                    Title="Search"
                    Catagory="company, technology..."
                  />                  
                  <DropdownItem 
                    Title="AI Category"
                    Catagory="All Categories"
                  />
                  <DropdownItem 
                    Title="Location"
                    Catagory="All Canada"
                  />
                  <DropdownItem 
                    Title="Stage"
                    Catagory="All Stages"
                  />                                   
                </div>
              <div className="px-3">
                <button
                  type="submit"
                  className={buttonSubmit}
                >
                  {searching ? "Searching" : "Search"}
                </button> 
              </div>    
            </form>               
          </div>
          
          {/* Grid/list */}
          <div className="w-full mt-4 flex ">
            <div className="justify-start my-auto text-black font-bold">
                Showing
                <span className="text-navy"> 12 </span> 
                of
                <span className="text-navy"> 1,247 </span>  
                verified AI startups in Canada.
            </div>
              {/* Switch */}
              <div className="p-1.5 ml-auto bg-zinc-200 rounded-2xl inline-flex gap-1">
                <button
                  onClick={() => setView("grid")}
                  className={`py-2.5 px-3 rounded-[8px] uppercase font-bold
            ${
              view === "grid"
                ? "bg-navy shadow-[0px_1px_3px_rgba(0,0,0,0.25)] text-white"
                : "bg-white text-navy"
            }`}
                >
                  GRID
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`py-2.5 px-3.5 rounded-[8px] uppercase font-bold
            ${
              view === "list"
                ? "bg-navy shadow-[0px_1px_3px_rgba(0,0,0,0.25)] text-white"
                : "bg-white text-navy"
            }`}
                >
                  LIST
                </button>
              </div>
          </div> 
                
                
          <div className="mt-3 py-[2px] grid grid-cols-3 justify-start items-center gap-3.5">
            <CompanyCard 
              Thumbnail = {placeholderImage}
              CompanyTitle = "NorthLight AI"
              CompanyHeader = "Enterprise AI risk intelligence platform"
              Accomplishment1 = "L5 Champion"
              Accomplishment2 = "AISC Champion"
              Accomplishment3 = "Predictive Analysis"
              Revenue = "4.2M"
              Funding = "18M"
              Stage = "Series A"
              AISCScore = {92}
              Location = "Toronto, ON"
              Link = ""
            />  
            <CompanyCard 
              Thumbnail = {placeholderImage}
              CompanyTitle = "NorthLight AI"
              CompanyHeader = "Enterprise AI risk intelligence platform"
              Accomplishment1 = "L5 Champion"
              Accomplishment2 = "AISC Champion"
              Accomplishment3 = "Predictive Analysis"
              Revenue = "4.2M"
              Funding = "18M"
              Stage = "Series A"
              AISCScore = {92}
              Location = "Toronto, ON"
              Link = ""              
            />     
            <CompanyCard 
              Thumbnail = {placeholderImage}
              CompanyTitle = "NorthLight AI"
              CompanyHeader = "Enterprise AI risk intelligence platform"
              Accomplishment1 = "L5 Champion"
              Accomplishment2 = "AISC Champion"
              Accomplishment3 = "Predictive Analysis"
              Revenue = "4.2M"
              Funding = "18M"
              Stage = "Series A"
              AISCScore = {92}
              Location = "Toronto, ON"
              Link = ""              
            />     
            <CompanyCard 
              Thumbnail = {placeholderImage}
              CompanyTitle = "NorthLight AI"
              CompanyHeader = "Enterprise AI risk intelligence platform"
              Accomplishment1 = "L5 Champion"
              Accomplishment2 = "AISC Champion"
              Accomplishment3 = "Predictive Analysis"
              Revenue = "4.2M"
              Funding = "18M"
              Stage = "STs"
              AISCScore = {92}
              Location = "Toronto, ON"
              Link = ""              
            />                                               
          </div>               
        </div>
      </div> 
      {/* BOTTOM SECTION */}
        <div className="bg-navy text-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <BottomSection />
          </div>
        </div>

      <Footer />    
  </div>                 
  );
};
export default Database;
