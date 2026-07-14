import { type ChangeEvent, type FormEvent, useState, useEffect, useRef, } from "react";
import { searchCompanies } from "../services/companyService";
import type { Company } from "../types/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header";
import {ChevronDownIcon, SearchIcon, ArrowRightIcon} from "../components/dashboard/icons";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import placeholderImage from "../assets/placeholder.png";
// REPLACE WITH DATABASE INFO
const spectrumLevels = [
  { level: "All", title: "LEVELS", category: "1,247 Companies" },
  { level: "L1", title: "EXPLORER", category: "Category Only" },
  { level: "L2", title: "BUILDERS", category: "Category Only" },
  { level: "L3", title: "DEPLOYERS", category: "Category Only" },
  { level: "L4", title: "SCALERS", category: "Category Only" },
  { level: "L5", title: "CHAMPIONS", category: "Category Only" },
];

const aiCategories = [
  "All Categories",
  "Predictive Analytics",
  "NLP - Health",
  "Robotics - AgTech",
  "FinTech-ML",
  "BioAI - Health",
  "AISC Certified",
  "AISC Champion",
];

const locations = [
  "All Canada",
  "Toronto, ON",
  "Montreal, QC",
  "Waterloo, ON",
  "Vancouver, BC",
];

const stages = [
  "All Stages",
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
];

type SpectrumLevelFilterProps = {
  Level: string;
  LevelTitle: string;  
  Catagory: string;
  selected: boolean;
  onClick: () => void;  
};

const SpectrumLevelFilter = ({
  Level,
  LevelTitle,
  Catagory,
  selected,
  onClick,  
}: SpectrumLevelFilterProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2.5 rounded-[10px] inline-flex flex-col justify-start items-start gap-[5px] text-start
      ${selected ? "bg-gold" : "bg-navy"}
      `}
    >
      <div className="self-stretch justify-start text-white text-base font-bold uppercase">
        {Level}
      </div>
      <div className="self-stretch justify-start text-white text-base font-bold uppercase">
        {LevelTitle}
      </div>
      <div className="self-stretch justify-start text-white text-sm font-bold ">
        {Catagory}
      </div>
  </button>  
  );
};


type SearchItemProps = {
    title: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    suggestions: Company[];
    showSuggestions: boolean;
    onSelectSuggestion: (company: Company) => void;
};

const SearchItem = ({
  title,
  value,
  placeholder,
  onChange,
  suggestions,
  showSuggestions,
  onSelectSuggestion
}: SearchItemProps) => {
  return (
    <div className="self-stretch flex flex-col gap-2">
      <div className="px-4 text-base font-medium text-black">
        {title}
      </div>

<div className="relative w-full max-w-[496px] min-w-60">

  <div className="px-4 py-3 bg-white rounded-lg outline outline-[0.67px] outline-zinc-300 flex items-center gap-2">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 bg-transparent text-base font-medium text-black outline-none placeholder:text-gray-400"
    />

    <SearchIcon className="h-6 w-6 text-black" />
  </div>

  {showSuggestions && suggestions.length > 0 && (
    <div className="absolute left-0 top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-black/20 z-20">
      {suggestions.map(company => (
        <button
          key={company.id}
          type="button"
          className="w-full px-4 py-3 text-left hover:bg-gray-100 text-black"
          onClick={() => onSelectSuggestion(company)}
        >
          <div className="font-bold">
            {company.name}
          </div>

          <div className="text-sm text-gray-500">
            {company.description}
          </div>
        </button>
      ))}
    </div>
  )}

</div>
    </div>
  );
};


type DropdownItemProps = {
    title: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
};

const DropdownItem = ({
  title,
  value,
  options,
  onChange,
}: DropdownItemProps) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

   return (
    <div
      ref={dropdownRef}
      className="relative self-stretch flex flex-col gap-2"
      >    
      <div className="relative self-stretch flex flex-col gap-2">
        {/* Label */}
        <div className="px-4 text-black text-base font-medium">
          {title}
        </div>

        {/* Selected value */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full max-w-[496px] min-w-60 px-4 py-3 bg-white rounded-lg 
          text-black text-base font-medium outline outline-zinc-300 flex justify-between items-center"
        >
          <span>{value}</span>
          <ChevronDownIcon className="h-6 w-6 text-black" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-full mt-2 w-full rounded-lg border border-black/20 bg-white shadow-lg z-10 text-zinc-400 text-base font-medium">
            {options.map(option => (
              <button
                key={option}
                type="button"
                className="w-full px-4 py-3 text-left hover:bg-gray-100"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
  </div>      
  );
};


type CompanyCardProps = {
  Thumbnail: string;
  CompanyTitle: string;
  CompanyHeader: string;
  spectrum: string;
  badges: string[];
  Revenue: number;
  Funding: number;
  Stage: string;
  AISCScore: number;
  Location:string;
  Link:string;
};

const CompanyCard = ({
  Thumbnail,
  CompanyTitle,
  CompanyHeader,
  spectrum,
  badges,
  Revenue,
  Funding,
  Stage,
  AISCScore,
  Location,
  Link,
}: CompanyCardProps) => {
  const spectrumLevel = Number(spectrum.replace("L", ""));
  const isRestricted = spectrumLevel <= 2;

  const spectrumBadge = isRestricted
    ? "Verified"
    : `${spectrum} ${
        spectrum === "L5"
          ? "Champion"
          : spectrum === "L4"
          ? "Scaler"
          : spectrum === "L3"
          ? "Deployer"
          : "Verified"
      }`;

  const displayedBadges = badges;      

  function formatMoney(value: number) {
    if (value >= 1000000) {
      const millions = value / 1000000;
      return `$${millions % 1 === 0 ? millions : millions.toFixed(1)}M`;
    }

    if (value >= 1000) {
      return `$${Math.round(value / 1000)}K`;
    }

    return `$${value}`;
  }

  return (  
        <div className="p-5 bg-white rounded-[10px] shadow-[0px_4px_12px_5px_rgba(0,0,0,0.15)] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-2.5">

                  {/* Logo and Title */}
                    <div className="inline-flex justify-start items-start gap-1.5">
                      <div className={isRestricted ? "blur-sm" : ""}>
                          <img
                            src={Thumbnail}
                            alt={`${CompanyTitle} logo`}
                            className="h-10 w-10 rounded-lg object-cover"
                          />
                      </div>                                                      
                        <div className="gap-[3px]">
                            <div className="text-black text-sm font-bold ">
                              <div className={isRestricted ? "blur-sm" : ""}>
                                {CompanyTitle}
                              </div>                              
                            </div>
                            <div className=" text-black/20 text-xs font-normal ">
                              <div className={isRestricted ? "blur-sm" : ""}>
                                {CompanyHeader}
                              </div>  
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="self-stretch inline-flex justify-start items-center gap-[5px]">
                      {[spectrumBadge, ...displayedBadges].map((badge, index) => (
                        <div
                          key={badge}
                          className={`
                            h-7 px-2.5 rounded-[100px] flex justify-center items-center
                            ${
                              index === 0
                                ? "bg-blue-400/20 text-blue-400"
                                : index === 1
                                ? "bg-orange-400/20 text-amber-600"
                                : "bg-blue-950/20 text-blue-950"
                            }
                          `}
                        >
                          <div className="text-xs font-bold">
                            {badge}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Revenue and funding */}
                    <div className="inline-flex justify-start items-center gap-48">
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-black/20 text-xs font-bold ">
                              REVENUE
                            </div>
                            <div className="self-stretch justify-start text-black text-xs font-bold ">
                              <div className={isRestricted ? "blur-sm" : ""}>
                                {formatMoney(Revenue)} ARR
                              </div>
                            </div>
                        </div>
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch justify-start text-black/20 text-xs font-bold ">
                              FUNDING
                            </div>
                            <div className="justify-start text-black text-xs font-bold ">
                              <div className={isRestricted ? "blur-sm" : ""}>
                                {formatMoney(Funding)} Raised
                              </div>                                
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
                                  <div className={isRestricted ? "blur-sm" : ""}>
                                    {Stage}
                                  </div>                                   
                                </div>
                            </div>
                        </div>
                        <div className=" inline-flex flex-col justify-start items-start gap-1">
                            <div className="justify-start text-black/20 text-xs font-bold ">
                              AISC
                            </div>
                            <div className="justify-start text-emerald-600 text-xs font-bold ">
                              <div className={isRestricted ? "blur-sm" : ""}>
                                {AISCScore}/100
                              </div>                                  
                            </div>
                        </div>
                    </div>
                </div>
                  
                  {/* Line */}
                  <div className="w-full h-0 outline outline-1 outline-black/10"></div>

                {/* Location and Profile */}
                <div className="w-full mt-4 flex gap-2.5">
                  <div className="justify-start text-black/20 text-sm font-bold ">
                    <div className={isRestricted ? "blur-sm" : ""}>
                      {Location}
                    </div>                        
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

const Directory = () => {
  const [searching, setSearching] = useState(false);
  
  const [suggestions, setSuggestions] = useState<Company[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  const [filters, setFilters] = useState({
      search: "",
      spectrum: "All",
      category: "All Categories",
      location: "All Canada",
      stage: "All Stages",
  });

  useEffect(() => {
  async function loadCompanies() {
    const results = await searchCompanies({
      search: "",
      spectrum: "All",
      category: "All Categories",
      location: "All Canada",
      stage: "All Stages",
    });

    setCompanies(results);
  }

  loadCompanies();
}, []);

  const handleSearchChange = (value: string) => {
    setFilters(current => ({
      ...current,
      search: value,
    }));

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const searchTerm = value.toLowerCase();

    const matches = companies
      .filter(company => {
      const spectrumLevel = Number(company.spectrum.replace("L", ""));
      
        // Hide L1 and L2 companies from autocomplete/search
        if (spectrumLevel <= 2) {
          return false;
        }
                
        const searchableText = [
          company.name,
          company.description,
          ...company.categories,
          company.location
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(searchTerm);
      })
      .slice(0, 5); // only show top 5

    setSuggestions(matches);
    setShowSuggestions(true);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSearching(true);

    try {
      const results = await searchCompanies(filters);

      setCompanies(results);

    } finally {
      setSearching(false);
    }
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
                        <div className="flex-1 justify-start text-white text-2xl font-medium ">
                          Browse by AISC Spectrum Level
                        </div>
                    </div>
                    <div className=" inline-flex justify-center items-center gap-2.5">
                        <div className="text-center justify-start text-white text-sm font-bold ">
                          Companies at Level 4–5 and AISC Certified Level 3 show full profiles. Earlier-stage companies are visible by category only — protecting founders until they are ready.
                        </div>
                    </div>
                </div>
                <div className="mt-5 px-3.5 py-[5px] grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] justify-start items-center gap-2.5">

                {spectrumLevels.map((item) => (
                  <SpectrumLevelFilter
                    key={item.level}
                    Level={item.level}
                    LevelTitle={item.title}
                    Catagory={item.category}
                    selected={filters.spectrum === item.level}
                    onClick={() =>
                      setFilters((current) => ({
                        ...current,
                        spectrum: item.level,
                      }))
                    }
                  />
                ))}                 
                </div>
            </div>

          <div className="mt-5 w-full p-5 bg-white rounded-[10px] justify-start items-end gap-3.5 overflow-visible">
            <form onSubmit={handleSubmit} className="space-y-4">          
                <div className="px-3.5 py-[2px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start items-center gap-2.5">
                    <SearchItem
                      title="Search"
                      value={filters.search}
                      placeholder="Company, technology..."
                      onChange={handleSearchChange}
                      suggestions={suggestions}
                      showSuggestions={showSuggestions}
                      onSelectSuggestion={(company) => {
                        setFilters(current => ({
                          ...current,
                          search: company.name,
                        }));

                        setShowSuggestions(false);
                      }}
                    />            
                  <DropdownItem
                      title="AI Category"
                      value={filters.category}
                      options={aiCategories}
                      onChange={(value) =>
                          setFilters(current => ({
                              ...current,
                              category: value,
                          }))
                      }
                  />
                  <DropdownItem
                      title="Location"
                      value={filters.location}
                      options={locations}
                      onChange={(value) =>
                          setFilters(current => ({
                              ...current,
                              location: value,
                          }))
                      }
                  />
                  <DropdownItem
                      title="Stages"
                      value={filters.stage}
                      options={stages}
                      onChange={(value) =>
                          setFilters(current => ({
                              ...current,
                              stage: value,
                          }))
                      }
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
          </div> 
                
                
          <div className="mt-3 py-[2px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-start items-center gap-3.5">
              {companies.map(company => (
                <CompanyCard
                  key={company.id}
                  Thumbnail={company.logoUrl || placeholderImage}
                  CompanyTitle={company.name}
                  CompanyHeader={company.description}
                  spectrum = {company.spectrum}
                  badges={company.categories}
                  Revenue={company.revenue}
                  Funding={company.funding}
                  Stage={company.stage}
                  AISCScore={company.aiscScore}
                  Location={company.location}
                  Link={company.profileLink}
                />
              ))}                                            
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
export default Directory;
