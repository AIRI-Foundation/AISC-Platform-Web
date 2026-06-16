import { useNavigate } from "react-router-dom";

interface DashboardMilestoneSpectrumSidebarProps {
  activeStage: number;
}

const DashboardMilestoneSpectrumSidebar = ({
  activeStage,
}: DashboardMilestoneSpectrumSidebarProps) => {
  const navigate = useNavigate();

  const stages = [
    {
      number: 1,
      title: "Company Foundation",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
    {
      number: 2,
      title: "Problem & Market Validity",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
    {
      number: 3,
      title: "AI Solution Definition",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
    {
      number: 4,
      title: "MVP & Build Status",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
    {
      number: 5,
      title: "Intellectual Property",
      completed: 4,
      total: 4,
      status: "COMPLETE",
    },
    {
      number: 6,
      title: "Traction & Validation",
      completed: 4,
      total: 4,
      status: "COMPLETE",
    },
    {
      number: 7,
      title: "Team Capability",
      completed: 4,
      total: 4,
      status: "COMPLETE",
    },
    {
      number: 8,
      title: "Financial Foundations",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
    {
      number: 9,
      title: "Investment Readiness",
      completed: 5,
      total: 5,
      status: "COMPLETE",
    },
  ];

  const levelDividers: Record<number, string> = {
    2: "Level 1 Complete",
    4: "Level 2 Complete",
    6: "Level 3 Complete",
    8: "Level 4 Complete",
    9: "Level 5 Complete",
  };

  const handleStageClick = (stageNumber: number) => {
    navigate(`/dashboard/milestone-tracker/${stageNumber}`);
  };

  const completedStages = stages.filter((s) => s.status === "COMPLETE").length;

  return (
    <div className="hidden w-72 shrink-0 flex-col bg-[#102a54] border-r border-white/10 overflow-y-auto lg:flex">
      {/* Header */}
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
          {completedStages} stages complete · Level 5{" "}
          <span className="text-white/30">{completedStages}/9</span>
        </div>
      </div>

      {/* Stage list */}
      <div className="px-3 pb-4 space-y-0.5">
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
              <div className="text-xs mb-2">
                <span
                  className={
                    stage.status === "IN PROGRESS"
                      ? "text-amber-400 font-semibold"
                      : "text-[#10b981] font-semibold"
                  }
                >
                  {stage.status}
                </span>{" "}
                <span className="text-white/40">
                  {stage.completed}/{stage.total}
                </span>
              </div>

              {/* Segmented progress bar */}
              <div className="flex gap-1">
                {Array.from({ length: stage.total }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1.5 rounded-full ${
                      i < stage.completed
                        ? stage.status === "IN PROGRESS" &&
                          i === stage.completed - 1
                          ? "bg-amber-400"
                          : "bg-[#10b981]"
                        : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </button>

            {levelDividers[stage.number] && (
              <div className="flex items-center gap-2 my-2 px-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[9px] font-bold text-white/25 uppercase tracking-widest whitespace-nowrap">
                  {levelDividers[stage.number]}
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
