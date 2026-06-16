export default function Header() {
  return (
    //Full
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.50)] bg-dark-blue/15">
      <div className="mx-auto max-w-7xl px-6 py-4">
          {/* Small */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  {/* //ICON                            */}
                <div className="rounded-lg border border-white/5 bg-white/2 px-3 py-2">
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

          {/* Nav + login */}
          <div className="flex items-center gap-8">
          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="/" className="transition hover:text-white font-semibold">
              HOME
            </a>
            <a href="/directory" className="transition hover:text-white font-semibold">
              DIRECTORY
            </a>
            <a href="/spectrum" className="transition hover:text-white font-semibold">
              AISC SPECTRUM
            </a>
            <a href="/pricing" className="transition hover:text-white font-semibold">
              PRICING
            </a>
            <a href="#" className="transition hover:text-white font-semibold">
              FR
            </a>
          </nav>

            <a
              href="/signup"
              className="rounded-md bg-red px-3 py-2.25 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
            >
              SIGN UP/LOGIN
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
