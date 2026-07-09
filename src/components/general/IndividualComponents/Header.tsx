import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    {
      name: "PRODUCT",
      path: "/",
    },
    {
      name: "DIRECTORY",
      path: "/directory",
    },
    {
      name: "PRICING",
      path: "/pricing",
    },
    {
      name: "ABOUT US",
      path: "/about-us",
    },
    {
      name: "FR",
      path: "#",
    },
  ];

  return (
    //Full
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-dark-blue/15">
      <div className="w-full px-12 py-4">
          {/* Small */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  {/* //ICON                            */}
                <div className="rounded-lg border border-white/5 bg-white/2 px-3 py-2">
            <div className="flex items-center gap-3  ">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                <span className="text-[10px] font-bold leading-tight text-red">
                  AISC
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold">AI Startups Canada</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  AISC Platform
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* Nav + login */}
          <div className="flex items-center gap-3">
            <nav className="hidden gap-3 text-sm text-slate-200 md:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`
                      transition hover:text-white text-lg font-semibold px-4 py-2.5 rounded-[14px]
                      ${
                        isActive
                          ? "bg-white/8"
                          : ""
                      }
                    `}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            <a
              href="/login"
              className="rounded-md bg-red px-8 py-2.5 text-md font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
            >
              LOGIN
            </a>  
            <a
              href="/signup"
              className="rounded-md bg-red px-8 py-2.5 text-md font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
            >
              SIGN UP
            </a>          
          </div>
        </div>
      </div>
    </header>
  );
}
