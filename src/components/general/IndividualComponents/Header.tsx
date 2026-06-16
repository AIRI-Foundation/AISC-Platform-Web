export default function Header() {
  return (
    //Full
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] ">
      <div className="mx-auto max-w-7xl px-6 py-9">
          {/* Small */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 px-10 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">
              AI Startups Canada
            </div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-300">
              AISC PLATFORM
            </div>
          </div>

          {/* Nav + login */}
          <div className="flex items-center gap-8">
          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="/" className="transition hover:text-white">
              HOME
            </a>
            <a href="/directory" className="transition hover:text-white">
              DIRECTORY
            </a>
            <a href="/spectrum" className="transition hover:text-white">
              AISC SPECTRUM
            </a>
            <a href="/pricing" className="transition hover:text-white">
              PRICING
            </a>
            <a href="#" className="transition hover:text-white">
              FR
            </a>
          </nav>

            <a
              href="/signup"
              className="rounded-md bg-[#dc2626] px-3 py-2.25 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
            >
              SIGN UP/LOGIN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
