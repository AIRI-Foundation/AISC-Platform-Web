import type { ComponentType, SVGProps } from "react";
import { CheckCircleIcon, ClockIcon, AlertIcon } from "./icons";
import type { DashboardActivity } from "../../types/dashboard";
import { formatRelativeTime } from "../../lib/format";

interface RecentActivityProps {
  activities: DashboardActivity[];
}

interface ActivityStyle {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
}

function activityStyle(type: string): ActivityStyle {
  const value = type.toLowerCase();
  if (value === "verified") {
    return {
      icon: CheckCircleIcon,
      iconBg: "bg-green-50",
      iconColor: "text-[#16a34a]",
    };
  }
  if (value === "actionrequired") {
    return {
      icon: AlertIcon,
      iconBg: "bg-red-50",
      iconColor: "text-red",
    };
  }
  return {
    icon: ClockIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  };
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-base font-bold text-slate-900">Recent Activity</h2>

      {activities.length === 0 ? (
        <p className="mt-5 text-sm text-slate-500">No recent activity yet.</p>
      ) : (
        <ul className="mt-5 space-y-5">
          {activities.map((item, index) => {
            const style = activityStyle(item.type);
            const Icon = style.icon;
            return (
              <li key={index} className="flex gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${style.iconBg} ${style.iconColor}`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-800">
                      {item.headline}
                    </p>
                    <span className="shrink-0 text-[11px] text-slate-400">
                      {formatRelativeTime(item.occurredAt)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default RecentActivity;
