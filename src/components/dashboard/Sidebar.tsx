import { NavLink } from "react-router-dom";
import type { ComponentType, SVGProps } from "react";
import {
  OverviewIcon,
  MilestoneIcon,
  ProfileIcon,
  AdvisoryIcon,
  SettingsIcon,
  LogoutIcon,
} from "./icons";

interface SidebarProps {
  fullName: string;
  email: string;
  initials: string;
}

interface NavItem {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/dashboard/overview", icon: OverviewIcon },
  {
    label: "Milestone Tracker",
    href: "/dashboard/milestone-tracker",
    icon: MilestoneIcon,
  },
  { label: "Profile", href: "/dashboard/profile", icon: ProfileIcon },
  {
    label: "Advisory Program",
    href: "/dashboard/advisory-program",
    icon: AdvisoryIcon,
  },
  { label: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];

const Sidebar = ({ fullName, email, initials }: SidebarProps) => {
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-[#102a54] text-white lg:flex">
      <div className="flex items-center gap-3 px-6 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
          <span className="text-[10px] font-bold leading-tight text-[#dc2626]">
            AISC
          </span>
        </div>
        <div className="leading-tight">
          <div className="text-base font-bold">AI Startups Canada</div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f8d547]">
            AISC Platform
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4">
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Main Menu
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
            {initials || "?"}
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <div className="truncate text-sm font-semibold">
              {fullName || "Your account"}
            </div>
            <div className="truncate text-xs text-slate-400">{email}</div>
          </div>
          <button
            type="button"
            aria-label="Log out"
            className="text-slate-400 transition hover:text-white"
          >
            <LogoutIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
