import AboutUs from "../../../pages/StubPages/AboutUs";

const Contacts = [
  {
  Header: "Contact Us",
  Contact: "Contact",
  ContactLink: "/#",
  About: "About",
  AboutLink: "/#",
  Privacy: "Privacy",
  PrivacyLink: "/#",   
  },
  {
  Header: "Contact Us",
  Contact: "Contact",
  ContactLink: "/#",
  About: "About",
  AboutLink: "/#",
  Privacy: "Privacy",
  PrivacyLink: "/#",   
  },
  {
  Header: "Contact Us",
  Contact: "Contact",
  ContactLink: "/#",
  About: "About",
  AboutLink: "/#",
  Privacy: "Privacy",
  PrivacyLink: "/#",   
  },
  {
  Header: "Contact Us",
  Contact: "Contact",
  ContactLink: "/#",
  About: "About",
  AboutLink: "/#",
  Privacy: "Privacy",
  PrivacyLink: "/#",   
  }      
];

type ContactUsProps = {
  Header: string;
  Contact: string;  
  ContactLink: string;    
  About: string;
  AboutLink: string;  
  Privacy: string;  
  PrivacyLink: string;         
};

const ContactUs = ({
  Header,  
  Contact,  
  ContactLink,
  About,
  AboutLink,  
  Privacy,
  PrivacyLink,  
}: ContactUsProps) => {
  return (
    <div className="flex flex-col w-fit">
      <h4 className="mb-3 text-md font-semibold">
        {Header}
      </h4>
      <ul className="space-y-1 text-sm text-slate-300">
        <li>
          <a href={ContactLink} className="transition hover:text-white">
            {Contact}
          </a>
        </li>
        <li>
          <a href={AboutLink} className="transition hover:text-white">
            {About}
          </a>
        </li>
        <li>
          <a href={PrivacyLink} className="transition hover:text-white">
            {Privacy}
          </a>
        </li>
      </ul>
    </div>   
  );
};


export default function Footer() {
  return (
      <footer className="mt-16 border-t border-white/10 bg-dark-blue text-white">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-x-20">
            <div className="sm:col-span-1">
              <div className="mb-4 flex flex-col gap-2">
                  {/* //ICON                            */}
                <div className="rounded-lg border border-white/10 bg-white/3 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <svg
                      className="h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                    </svg>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-100">
                        AI Startups Canada
                      </div>

                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        <span className="text-gold">AISC PLATFORM</span>
                      </p>
                    </div>
                  </div>
                  </div>

              </div>
              <p className="text-xs text-slate-400 indent-1">
                Canada's #1 AI Startups Intelligence Platform
              </p>

              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
              {Contacts.map(Contacts => (
                <ContactUs
                  Header={Contacts.Header}
                  Contact={Contacts.Contact}
                  ContactLink={Contacts.ContactLink}
                  About={Contacts.About}
                  AboutLink={Contacts.AboutLink}
                  Privacy={Contacts.Privacy}
                  PrivacyLink={Contacts.PrivacyLink}            
                />
              ))}   
          </div>
        </div>
      </footer>
  );
}