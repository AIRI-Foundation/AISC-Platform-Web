import { useState } from "react";
import { ArrowRightIcon } from "./icons";
import { uploadDocument, submitMilestone } from "../../services/documentService";
import { getErrorMessage } from "../../lib/api";
import type { DashboardAction } from "../../types/dashboard";

interface NextActionsProps {
  actions: DashboardAction[];
  progressMessage: string;
  onUploaded?: () => void;
}

function priorityLabel(priority: string): string {
  const value = priority.toLowerCase();
  if (value === "high") return "HIGH";
  if (value === "low") return "LOW";
  return "MED";
}

function priorityStyle(priority: string): string {
  const value = priority.toLowerCase();
  if (value === "high") return "bg-red-50 text-red border border-red-200";
  if (value === "low")
    return "bg-green-50 text-[#16a34a] border border-green-200";
  return "bg-amber-50 text-amber-600 border border-amber-200";
}

const NextActions = ({
  actions,
  progressMessage,
  onUploaded,
}: NextActionsProps) => {
  const [status, setStatus] = useState<Record<number, string>>({});
  const [errors, setErrors] = useState<Record<number, string>>({});

  const handleFile = async (
    action: DashboardAction,
    index: number,
    file: File,
  ) => {
    setStatus((current) => ({ ...current, [index]: "Uploading..." }));
    setErrors((current) => ({ ...current, [index]: "" }));
    try {
      const url = await uploadDocument(file);
      await submitMilestone(action.stageNumber, action.milestoneNumber, url);
      setStatus((current) => ({ ...current, [index]: "Submitted ✓" }));
      onUploaded?.();
    } catch (err) {
      setStatus((current) => ({ ...current, [index]: "" }));
      setErrors((current) => ({ ...current, [index]: getErrorMessage(err) }));
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex items-start justify-between px-6 pt-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            YOUR NEXT 3 ACTIONS
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">
            Prioritized by AISC · Updated Today
          </p>
        </div>
        <a
          href="/milestone-tracker"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#102a54] hover:underline"
        >
          View All <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>

      {actions.length === 0 ? (
        <p className="px-6 py-10 text-center text-sm text-slate-500">
          You have no actions right now.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-100">
          {actions.map((action, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-slate-400">
                  {index + 1}
                </span>
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 border-slate-300" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${priorityStyle(action.priority)}`}
                  >
                    {priorityLabel(action.priority)}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                    {action.stageLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  {action.description || action.milestoneTitle}
                </p>
                {errors[index] && (
                  <p className="mt-2 text-sm font-medium text-[#dc2626]">
                    {errors[index]}
                  </p>
                )}
              </div>
              <label className="shrink-0 cursor-pointer rounded-lg bg-[#dc2626] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#b91c1c]">
                {status[index] || "Upload Document"}
                <input
                  type="file"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) handleFile(action, index, file);
                    event.target.value = "";
                  }}
                />
              </label>
            </li>
          ))}
        </ul>
      )}

      {progressMessage && (
        <div className="bg-slate-100 px-6 py-3 text-center text-xs text-slate-500">
          {progressMessage}
        </div>
      )}
    </div>
  );
};

export default NextActions;
