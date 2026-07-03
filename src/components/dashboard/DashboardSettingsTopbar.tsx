import { NavLink } from "react-router-dom";
import {
  ProfileIcon,
  SecurityIcon,
  BellIcon,
  CreditCardIcon,
} from "./icons";

const settingsPages = [
  {
    title: "Profile Info",
    path: "/dashboard/settings-profile",
    icon: ProfileIcon,
    iconClass: "h-6 w-6",
  },
  {
    title: "Security",
    path: "/dashboard/settings-security",
    icon: SecurityIcon,
    iconClass: "h-7 w-7 mt-2",
  },
  {
    title: "Notifications",
    path: "/dashboard/settings-notifications",
    icon: BellIcon,
    iconClass: "h-6 w-6",
  },
  {
    title: "Billing",
    path: "/dashboard/settings-billing",
    icon: CreditCardIcon,
    iconClass: "h-7 w-7 mt-3",
  },
];

const DashboardSettingsTopbar = () => {
  return (
    <div className="flex mx-auto justify-center items-center gap-3 mb-18">
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
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSettingsTopbar;