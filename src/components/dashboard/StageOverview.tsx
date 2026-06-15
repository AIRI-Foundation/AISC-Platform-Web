import { CheckIcon } from "./icons";
import type { DashboardStage } from "../../types/dashboard";

interface StageOverviewProps {
  stages: DashboardStage[];
  stagesCompleted: number;
  totalStages: number;
}

const VISIBLE_COUNT = 5;

function stageState(status: string): string {
  const value = status.toLowerCase();
  if (value === "complete" || value === "completed") return "complete";
  if (value === "locked" || value === "notstarted") return "locked";
  return "active";
}

const StageMarker = ({ state }: { state: string }) => {
  if (state === "complete") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white">
        <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (state === "active") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#ea8b1f]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ea8b1f]" />
      </span>
    );
  }
  return (
    <span className="h-6 w-6 shrink-0 rounded-full border-2 border-slate-300" />
  );
};

const StageOverview = ({
  stages,
  stagesCompleted,
  totalStages,
}: StageOverviewProps) => {
  const visibleStages = stages.slice(0, VISIBLE_COUNT);
  const lockedCount = stages.length - visibleStages.length;

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-base font-bold text-slate-900">STAGE OVERVIEW</h2>
      <p className="mt-0.5 text-xs text-slate-500">
        {stagesCompleted} of {totalStages} stages complete
      </p>

      <ul className="mt-5 space-y-1">
        {visibleStages.map((stage) => {
          const state = stageState(stage.status);
          return (
            <li key={stage.stageNumber}>
              <div className="flex items-center gap-3 py-1.5">
                <StageMarker state={state} />
                <span
                  className={`flex-1 text-sm font-semibold uppercase tracking-wide ${
                    state === "locked" ? "text-slate-400" : "text-slate-800"
                  }`}
                >
                  Stage {stage.stageNumber}: {stage.title}
                </span>
                {state === "active" && (
                  <span className="rounded-full border border-slate-300 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    Active
                  </span>
                )}
              </div>
              {stage.levelBoundaryAfter !== null && (
                <div className="flex items-center gap-3 py-2">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Level {stage.levelBoundaryAfter}
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {lockedCount > 0 && (
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
          + {lockedCount} more stages locked
        </p>
      )}
    </section>
  );
};

export default StageOverview;
