import { useNavigate } from "react-router-dom";

interface Stage {
  number: number;
  title: string;
  completed: number;
  total: number;
  status: string;
  levelBoundaryAfter: number | null;
}

interface DashboardMilestoneSpectrumSidebarProps {
  activeStage: number;
  stages: Stage[];
  totalComplete: number;
  spectrumLevel: number;
}

const DashboardMilestoneSpectrumSidebar = ({
  activeStage,
  stages,
  totalComplete,
  spectrumLevel,
}: DashboardMilestoneSpectrumSidebarProps) => {
  const navigate = useNavigate();

  const handleStageClick = (stageNumber: number) => {
    navigate(`/dashboard/milestone-tracker/${stageNumber}`);
  };

  return (
    <div className="hidden w-72 shrink-0 flex-col bg-[#102a54] border-r border-white/10 overflow-y-auto lg:flex">
      <div className="px-5 pt-6 pb-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
          Spectrum Stages
        </div>

        {/* Overall segmented bar */}
        <div className="flex gap-1 mb-2">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`flex-1 h-1.5 rounded-full ${
                stage.status === "COMPLETE" ? "bg-[#10b981]" : "bg-white/15"
              }`}
            />
          ))}
        </div>

        <div className="text-xs text-white/60 font-medium">
          {totalComplete} stages complete · Level {spectrumLevel}{" "}
          <span className="text-white/30">
            {totalComplete}/{stages.length}
          </span>
        </div>
      </div>

      {/* Stage list */}
      <div className="px-3 pb-8 space-y-0.5">
        {stages.map((stage) => (
          <div key={stage.number}>
            <button
              onClick={() => handleStageClick(stage.number)}
              className={`w-full text-left px-3 py-3 rounded-lg transition ${
                activeStage === stage.number
                  ? "bg-white/10 border-l-4 border-[#10b981]"
                  : "hover:bg-white/5 border-l-4 border-transparent"
              }`}
            >
              <div className="text-xs font-bold text-white mb-0.5 tracking-wide">
                {stage.number}. {stage.title.toUpperCase()}
              </div>
              <div className="text-xs">
                <span
                  className={
                    stage.status === "IN PROGRESS"
                      ? "text-amber-400 font-semibold"
                      : stage.status === "COMPLETE"
                        ? "text-[#10b981] font-semibold"
                        : "text-white/40 font-semibold"
                  }
                >
                  {stage.status}
                </span>{" "}
                <span className="text-white/40">
                  {stage.completed}/{stage.total}
                </span>
              </div>
            </button>

            {stage.levelBoundaryAfter !== null && (
              <div className="flex items-center gap-2 my-2 px-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[9px] font-bold text-white/25 uppercase tracking-widest whitespace-nowrap">
                  Level {stage.levelBoundaryAfter} Complete
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMilestoneSpectrumSidebar;
