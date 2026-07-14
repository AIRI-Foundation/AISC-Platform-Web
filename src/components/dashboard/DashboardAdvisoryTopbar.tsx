import { NavLink } from "react-router-dom";
import {
  ProfileIcon,
  AdvisoryIcon,
} from "./icons";

type DashboardSettingsTopbarProps = {
  notifications: {
    advisory: number;
    investor: number;
  };
};

const DashboardSettingsTopbar = ({
  notifications,
}: DashboardSettingsTopbarProps) => {

const settingsPages = [
  {
    title: "Advisory Program",
    path: "/dashboard/advisory-program",
    icon: ProfileIcon,
    iconClass: "h-6 w-6",
    notifications: notifications.advisory,
  },
  {
    title: "Investor Introductions",
    path: "/dashboard/advisory-investor",
    icon: AdvisoryIcon,
    iconClass: "h-6 w-6",
    notifications: notifications.investor,
  },
];

  return (
    <div className="flex mx-auto justify-center items-center gap-3 mb-14">
      {settingsPages.map((page) => {
        const Icon = page.icon;

        return (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              `
                p-3.5 max-h-[52px]
                rounded-[10px]
                flex justify-center items-center gap-2.5
                overflow-hidden
                bg-black/4
                transition
                ${
                  isActive
                    ? "bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.25)] pointer-events-none cursor-default"
                    : "hover:bg-black/10"
                }
              `
            }
          >
            <div className="text-black">
              <Icon className={page.iconClass} />
            </div>

            <div className="text-black text-base font-bold uppercase">
              {page.title}
            </div>

            <div className="relative">
              {page.notifications > 0 && (
                <div
                  className="
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red
                    px-1
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  {page.notifications}
                </div>
              )}
            </div>            
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSettingsTopbar;