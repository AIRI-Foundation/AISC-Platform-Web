import {
  TrendingUpIcon,
  CheckCircleIcon,
  EyeIcon,
  CalendarIcon,
} from "./icons";
import type { DashboardStats } from "../../types/dashboard";
import { formatMemberSince } from "../../lib/format";

interface StatCardsProps {
  stats: DashboardStats;
}

const StatCards = ({ stats }: StatCardsProps) => {
  const cards = [
    {
      icon: TrendingUpIcon,
      label: "Spectrum level",
      value: stats.spectrumLevelLabel,
      caption: stats.spectrumLevelSublabel,
      accent: "border-l-[#102a54]",
      iconBg: "bg-slate-100",
      iconColor: "text-[#102a54]",
      captionColor: "text-slate-500",
    },
    {
      icon: CheckCircleIcon,
      label: "Stages completed",
      value: stats.stagesCompleted + " of " + stats.totalStages,
      caption: stats.allStagesVerified
        ? "All stages verified"
        : "Verification in progress",
      accent: "border-l-[#16a34a]",
      iconBg: "bg-green-50",
      iconColor: "text-[#16a34a]",
      captionColor: "text-[#16a34a]",
    },
    {
      icon: EyeIcon,
      label: "profile visibility",
      value: stats.profileVisibility,
      caption: stats.profileVisibilitySublabel,
      accent: "border-l-gold",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      captionColor: "text-amber-600",
    },
    {
      icon: CalendarIcon,
      label: "days on platform",
      value: stats.daysOnPlatform + " days",
      caption: "Member since " + formatMemberSince(stats.memberSince),
      accent: "border-l-red",
      iconBg: "bg-red-50",
      iconColor: "text-red",
      captionColor: "text-red",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`rounded-xl border-l-4 bg-white p-5 shadow-sm ${card.accent}`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full ${card.iconBg} ${card.iconColor}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-sm text-slate-500">{card.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">
              {card.value}
            </p>
            <p className={`mt-1 text-xs ${card.captionColor}`}>{card.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
