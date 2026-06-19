import { useState, useRef } from "react";
import type { MilestoneDetail } from "../../services/milestoneService";
import {
  uploadDocument,
  submitMilestone,
} from "../../services/milestoneService";
import { getErrorMessage } from "../../lib/api";

interface MilestoneCardProps {
  milestone: MilestoneDetail;
  stageNumber: number;
  onSubmitSuccess: () => void; // tells the parent to reload the stage data
}

type MilestoneStatus = "verified" | "in-review" | "not-started" | "locked";

function normalizeStatus(status: string): MilestoneStatus {
  switch (status.toLowerCase()) {
    case "verified":
    case "complete":
    case "completed":
      return "verified";
    case "inreview":
    case "in_review":
    case "in-review":
      return "in-review";
    case "locked":
      return "locked";
    default:
      return "not-started";
  }
}

function formatTimestamp(value: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  return (
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " · " +
    date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  );
}

const MilestoneCard = ({
  milestone,
  stageNumber,
  onSubmitSuccess,
}: MilestoneCardProps) => {
  const status = normalizeStatus(milestone.status);

  // File the user has dropped/selected
  const [file, setFile] = useState<File | null>(null);
  // Whether the user is dragging over the drop zone
  const [isDragging, setIsDragging] = useState(false);
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  // ── Drag and drop handlers ──────────────────────────────────
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // required to allow drop
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  // ── Submit handler ──────────────────────────────────────────
  const handleSubmit = async () => {
    if (!file) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      // Step 1 — upload the file
      const documentUrl = await uploadDocument(file);
      // Step 2 — submit the milestone with the returned URL
      await submitMilestone(
        stageNumber,
        milestone.milestoneNumber,
        documentUrl,
      );
      // Tell parent to reload so this card updates to "In Review"
      onSubmitSuccess();
    } catch (err) {
      setSubmitError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  // ── Eyebrow label ───────────────────────────────────────────
  const eyebrowLabel = {
    verified: "DONE",
    "in-review": "IN REVIEW",
    "not-started": "ACTION REQUIRED",
    locked: "LOCKED",
  }[status];

  const eyebrowColor = {
    verified: "text-[#10b981]",
    "in-review": "text-amber-500",
    "not-started": "text-red-500",
    locked: "text-slate-400",
  }[status];

  // ── Card styles per status ──────────────────────────────────
  const borderColor = {
    verified: "border-l-[#10b981]",
    "in-review": "border-l-amber-400",
    "not-started": "border-l-red-500",
    locked: "border-l-slate-200",
  }[status];

  const cardBg = {
    verified: "bg-[#f0fdf4]",
    "in-review": "bg-amber-50",
    "not-started": "bg-red-50",
    locked: "bg-white",
  }[status];

  const badgeClass = {
    verified: "border-2 border-[#10b981] text-[#10b981] bg-white",
    "in-review": "border-2 border-amber-400 text-amber-500 bg-white",
    "not-started": "border-2 border-red-500 text-red-500 bg-white",
    locked: "border-2 border-slate-200 text-slate-300 bg-white",
  }[status];

  const badgeLabel = {
    verified: "VERIFIED ✓",
    "in-review": "IN REVIEW ⏱",
    "not-started": "ACTION REQUIRED",
    locked: "LOCKED",
  }[status];

  return (
    <div>
      {/* Eyebrow label — outside the card */}
      <div
        className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${eyebrowColor}`}
      >
        Milestone {milestone.milestoneNumber} · {eyebrowLabel}
      </div>

      {/* Card */}
      <div
        className={`rounded-xl border-l-4 shadow-sm overflow-hidden ${cardBg} ${borderColor}`}
      >
        <div className="px-5 py-4">
          {/* Top row — title + badge */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-base font-semibold text-slate-900">
              {milestone.title}
            </h3>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide whitespace-nowrap ${badgeClass}`}
            >
              {badgeLabel}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed mb-3">
            {milestone.description}
          </p>

          {/* VERIFIED — show timestamp */}
          {status === "verified" && milestone.verifiedAt && (
            <p className="text-xs text-slate-400">
              Verified {formatTimestamp(milestone.verifiedAt)}
            </p>
          )}

          {/* IN REVIEW — show review message */}
          {status === "in-review" && (
            <p className="text-xs text-amber-500 font-medium">
              Typically reviewed within 2–3 business days. You'll receive a
              notification when complete.
            </p>
          )}

          {/* IN REVIEW — show review notes if admin left one */}
          {status === "in-review" && milestone.reviewNotes && (
            <p className="text-xs text-slate-500 mt-1">
              Note: {milestone.reviewNotes}
            </p>
          )}

          {/* ACTION REQUIRED — file upload zone + submit */}
          {status === "not-started" && (
            <div className="mt-3 space-y-3">
              {/* Drop zone */}
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-6 cursor-pointer transition ${
                  isDragging
                    ? "border-red-400 bg-red-100"
                    : file
                      ? "border-red-400 bg-red-50"
                      : "border-red-200 bg-white hover:bg-red-50"
                }`}
              >
                {/* Upload icon */}
                <svg
                  className="w-6 h-6 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>

                {file ? (
                  <div className="text-center">
                    <p className="text-sm font-semibold text-red-600">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB · Click to
                      change
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-sm font-semibold text-slate-700">
                      Drag & drop your file here
                    </p>
                    <p className="text-xs text-slate-400">
                      Upload your document (.pdf - max 25 MB)
                    </p>
                  </div>
                )}

                {/* Hidden file input */}
                <input
                  ref={inputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {/* Error message */}
              {submitError && (
                <p className="text-xs text-red-600">{submitError}</p>
              )}

              {/* Submit button — greyed out until file selected */}
              <button
                onClick={handleSubmit}
                disabled={!file || submitting}
                className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition ${
                  file && !submitting
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>

              {/* AISC Submission Guidance link */}
              <div className="flex items-center gap-1 mt-1">
                <svg
                  className="w-3.5 h-3.5 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <a
                  href="#"
                  className="text-xs font-bold text-red-500 uppercase tracking-wide hover:underline"
                >
                  AISC Submission Guidance
                </a>
                <svg
                  className="w-3 h-3 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
