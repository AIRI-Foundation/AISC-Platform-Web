import { EyeIcon, ClosedEyeIcon } from "../../dashboard/icons";

interface PasswordToggleProps {
  show: boolean;
  onToggle: () => void;
}

export default function PasswordToggle({
  show,
  onToggle,
}: PasswordToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
      aria-label="Toggle password visibility"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {show ? (
          <ClosedEyeIcon className="h-6 w-6" />     
        ) : (
          <EyeIcon className="h-6 w-6" />           
        )}
      </svg>
    </button>
  );
}