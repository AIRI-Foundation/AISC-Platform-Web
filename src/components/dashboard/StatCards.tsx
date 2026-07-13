import {
  TrendingUpIcon,
  CheckCircleIcon,
  EyeIcon,
  CalendarIcon,
} from "./icons";
import type { DashboardStats } from "../../types/dashboard";
import { formatMemberSince } from "../../lib/format";
import type { ComponentType, SVGProps } from "react";

interface StatCardsProps {
  cards: StatCard[];
}

export type StatCard = {
  label: string;
  value: string;
  caption: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
  iconBg: string;
  iconColor: string;
  captionColor: string;
};

const StatCards = ({ cards }: StatCardsProps) => {

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
