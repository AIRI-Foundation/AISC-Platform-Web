import {CheckCircleIcon } from "../../dashboard/icons";

export const getPasswordRequirements = (password: string) => ({
  minLength: password.length >= 8,
  lowercase: /[a-z]/.test(password),
  uppercase: /[A-Z]/.test(password),
  number: /[0-9]/.test(password),
  symbol: /[^A-Za-z0-9]/.test(password),
});

const Dot = ({ passed }: { passed: boolean }) => (
  <div className="mt-1 flex h-4 w-4 items-center justify-center">
    {passed ? (
      <CheckCircleIcon className="h-3.75 w-3.75 text-green" />
    ) : (
      <span className="h-3 w-3 rounded-full border border-slate-400 bg-white" />
    )}
  </div>
);

type PasswordRequirementsProps = {
  password: string;
};

const getProgressColor = (progress: number) => {
  if (progress === 100) return "bg-green";
  if (progress >= 60) return "bg-orange";
  return "bg-red";
};

const ProgressBar = ({ progressPercentage } : {progressPercentage: number}) => {
    return (
    <div className="relative mb-2 h-2 w-full rounded-full bg-slate-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full rounded-full transition-all duration-300 ${getProgressColor(
          progressPercentage
        )}`}
      />
    </div>
  );
};

export default function PasswordRequirements({
  password,
}: PasswordRequirementsProps) {
  const requirements = getPasswordRequirements(password);
  const textCompleted = 400;
  const textUncompleted = 900;
  const completedRequirements = Object.values(requirements).filter(Boolean).length;
  const calculatedProgressPercentage = (completedRequirements / Object.keys(requirements).length) * 100;    
  return (
  <div>
    <p className="text-sm font-semibold text-slate-900 mb-1">
      <div className="px-2">Password requirements</div>
    </p>
    <ProgressBar progressPercentage = {calculatedProgressPercentage}/>
    <ul className="space-y-1 text-sm">
      <li className="flex items-start gap-3 font-semibold">
        <Dot passed={requirements.minLength} />
      <span
        className={
          requirements.minLength
            ? "text-slate-"+textUncompleted
            : "text-slate-"+textCompleted
        }
      >
        8 characters minimum
      </span>
      </li>

      <li className="flex items-start gap-3 font-semibold">
        <Dot passed={requirements.lowercase} />
        <span
          className={
            requirements.lowercase
            ? "text-slate-"+textUncompleted
            : "text-slate-"+textCompleted
          }
        >
          At least one lowercase character
        </span>        
      </li>

      <li className="flex items-start gap-3 font-semibold">
        <Dot passed={requirements.uppercase} />
        <span
          className={
            requirements.uppercase
            ? "text-slate-"+textUncompleted
            : "text-slate-"+textCompleted
          }
        >
        At least one uppercase character
        </span>           
      </li>

      <li className="flex items-start gap-3 font-semibold">
        <Dot passed={requirements.number} />
        <span
          className={
            requirements.number
            ? "text-slate-"+textUncompleted
            : "text-slate-"+textCompleted
          }
        >
        At least one number
        </span>           
      </li>

      <li className="flex items-start gap-3 font-semibold">
        <Dot passed={requirements.symbol} />
        <span
          className={
            requirements.symbol
            ? "text-slate-"+textUncompleted
            : "text-slate-"+textCompleted
          }
        >
        At least one symbol
        </span>           
      </li>      
    </ul>
  </div>
  );
}