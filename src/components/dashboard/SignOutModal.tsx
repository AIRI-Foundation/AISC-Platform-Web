import { LogoutIcon } from "./icons";

interface SignOutModalProps {
  open: boolean;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const SignOutModal = ({ open, loading, onCancel, onConfirm }: SignOutModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sign-out-title"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <LogoutIcon className="h-7 w-7 text-slate-500" />
          </div>
          <h2
            id="sign-out-title"
            className="mt-5 text-2xl font-bold text-slate-900"
          >
            Sign Out?
          </h2>
        </div>

        <hr className="my-5 border-slate-200" />

        <p className="text-center text-sm text-slate-700">
          Are you sure you want to sign out of AISC?
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#dc2626] transition hover:bg-red-100 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-xl bg-[#dc2626] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#b91c1c] disabled:opacity-60"
          >
            {loading ? "Signing Out..." : "Sign Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
