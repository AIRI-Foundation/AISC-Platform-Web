import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "PRODUCT", href: "/" },
  { label: "DATABASE", href: "/database" },
  { label: "PRICING", href: "/pricing" },
  { label: "ABOUT US", href: "/about" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-dark-blue/15">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
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

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-semibold transition hover:text-white ${
                    pathname === link.href
                      ? "rounded-md bg-white/15 px-3 py-2 text-white"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="transition hover:text-white font-semibold">
                FR
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="rounded-md bg-red px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
              >
                LOGIN / SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
