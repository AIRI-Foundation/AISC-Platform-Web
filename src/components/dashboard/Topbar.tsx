import { SearchIcon, BellIcon, ChevronDownIcon } from "./icons";

interface TopbarProps {
  firstName: string;
  companyName: string;
  initials: string;
  spectrumLevel: number;
  notificationCount: number;
}

const Topbar = ({
  firstName,
  companyName,
  initials,
  spectrumLevel,
  notificationCount,
}: TopbarProps) => {
  return (
    <header className="flex items-center gap-4 bg-[#102a54] px-6 py-3.5 text-white">
      <div className="relative max-w-xl flex-1">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Company, technology, keyword..."
          className="w-full rounded-full bg-white py-2.5 pl-12 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div className="ml-auto flex items-center gap-5">
        <div className="hidden text-right text-sm leading-tight sm:block">
          <div className="text-slate-300">Hi, {firstName}</div>
          <div className="font-semibold">{companyName}</div>
        </div>

        {spectrumLevel > 0 && (
          <span className="hidden rounded-full bg-[#16a34a] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white md:inline-block">
            Spectrum Level {spectrumLevel}
          </span>
        )}

        <button
          type="button"
          aria-label="Notifications"
          className="relative text-slate-200 transition hover:text-white"
        >
          <BellIcon className="h-6 w-6" />
          {notificationCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red text-[10px] font-bold">
              {notificationCount}
            </span>
          )}
        </button>

        <button
          type="button"
          className="flex items-center gap-1.5 text-slate-200 transition hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#102a54]">
            {initials || "?"}
          </span>
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        <button
          type="button"
          className="text-sm font-semibold text-slate-200 transition hover:text-white"
        >
          FR
        </button>
      </div>
    </header>
  );
};

export default Topbar;
