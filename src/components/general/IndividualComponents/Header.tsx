import { useLocation, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: "HOME",
      path: "/",
    },    
    {
      name: "PRODUCT",
      path: "/product",
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
  {/* Desktop Navigation */}
  <nav className="hidden md:flex gap-3 text-sm text-slate-200">
    {navItems.map((item) => {
      const isActive = location.pathname === item.path;

      return (
        <NavLink
          key={item.name}
          to={item.path}
          className={`px-4 py-2.5 rounded-[14px] text-lg font-semibold transition
            ${isActive ? "bg-white/10" : "hover:bg-white/5"}
          `}
        >
          {item.name}
        </NavLink>
      );
    })}
  </nav>

  {/* Desktop buttons */}
  <div className="hidden md:flex gap-3">
    <NavLink to="/login" className="rounded-md bg-red px-8 py-2.5">
      LOGIN
    </NavLink>

    <NavLink to="/signup" className="rounded-md bg-red px-8 py-2.5">
      SIGN UP
    </NavLink>
  </div>

  {/* Hamburger */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden mx-auto rounded-md p-2 hover:bg-white/10"
  >
    ☰
  </button>  
</div>
{menuOpen && (
  <div className="md:hidden mt-4 border-t border-white/10 pt-4">
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `rounded-lg px-4 py-3 font-semibold transition ${
              isActive
                ? "bg-white/10"
                : "hover:bg-white/5"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}

      <NavLink
        to="/login"
        onClick={() => setMenuOpen(false)}
        className="mt-2 rounded-md bg-red px-4 py-3 text-center font-semibold"
      >
        LOGIN
      </NavLink>

      <NavLink
        to="/signup"
        onClick={() => setMenuOpen(false)}
        className="rounded-md bg-red px-4 py-3 text-center font-semibold"
      >
        SIGN UP
      </NavLink>
    </nav>
  </div>
)}
        </div>
      </div>
    </header>
  );
}
