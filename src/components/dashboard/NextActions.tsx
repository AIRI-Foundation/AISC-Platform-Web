import { useRef, useState } from "react";
import { ArrowRightIcon } from "./icons";
import type { DashboardAction } from "../../types/dashboard";
import { uploadDocument, submitMilestone } from "../../services/milestoneService";
import { getErrorMessage } from "../../lib/api";

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
  if (value === "high") return "bg-red-50 text-[#dc2626] border border-red-200";
  if (value === "low")
    return "bg-green-50 text-[#16a34a] border border-green-200";
  return "bg-amber-50 text-amber-600 border border-amber-200";
}

interface ActionRowProps {
  action: DashboardAction;
  index: number;
  onUploaded?: () => void;
}

const ActionRow = ({ action, index, onUploaded }: ActionRowProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const documentUrl = await uploadDocument(file);
      await submitMilestone(
        action.stageNumber,
        action.milestoneNumber,
        documentUrl,
      );
      onUploaded?.();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <li className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center">
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
        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
      </div>
      <div className="flex shrink-0 flex-col items-stretch gap-1 sm:items-end">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition ${
            uploading
              ? "cursor-not-allowed bg-[#dc2626]/60"
              : "bg-[#dc2626] hover:bg-[#b91c1c]"
          }`}
        >
          {uploading ? "Uploading..." : "Upload Document"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </li>
  );
};

const NextActions = ({
  actions,
  progressMessage,
  onUploaded,
}: NextActionsProps) => {
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
            <ActionRow
              key={index}
              action={action}
              index={index}
              onUploaded={onUploaded}
            />
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
