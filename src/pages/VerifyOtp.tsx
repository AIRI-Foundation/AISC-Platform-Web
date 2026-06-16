import { type FormEvent, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/authService";
import { verifyEmail } from "../services/authService";
import { getErrorMessage } from "../lib/api";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const email = location.state?.email;
  const mode = location.state?.mode;
  
  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];

    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 5) {
      setError("Please enter the full verification code.");
      return;
    }

    if (!email) {
      setError("Email information is missing.");
      return;
    }

    setSubmitting(true);
    setError(null);
    if (mode === "email-verification") {
      try {
        await verifyEmail({
          email,
          otp: otpCode,
        });

        navigate("/authentication-success");
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setSubmitting(false);
      }
    }
    if (mode === "password-reset") {
      try {
        await verifyOtp({
          email,
          otp: otpCode,
        });   
        navigate("/password-reset", {
          state: {
          email
          },
        });
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setSubmitting(false);
      }
    }               
  };  


  return (
    <div className="min-h-screen bg-[#0f2b5c] text-white">  
      <div className="mx-auto max-w-7xl px-6 py-6">

        <section className="mt-3 text-center">
          <div className="mx-auto max-w-2xl rounded-[32px] border-2 border-dashed border-white/30 bg-white/5 p-12 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-16">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Verify your email
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base text-slate-300">
              A 5-digit code has been sent to{" "}
              <span className="font-semibold">{email ?? "your email"}</span>,
              please enter it below
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col items-center gap-8"
            >
              <div className="flex gap-3 sm:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="h-20 w-16 rounded-3xl border-2 border-white/30 bg-white/10 text-center text-2xl font-semibold text-white outline-none transition focus:border-[#f8d547] focus:ring-2 focus:ring-[#f8d547]/25 sm:h-24 sm:w-20"
                    placeholder="0"
                    inputMode="numeric"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={submitting || otp.some((digit) => !digit)}
                className="rounded-2xl bg-[#dc2626] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition enabled:hover:bg-[#b91c1c] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify email
              </button>
            </form>
            {error && (
              <div className="mt-6 mx-auto w-full max-w-sm rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-300">
                {error}
              </div>
            )}
            <p className="mt-8 text-sm text-slate-400">
              Didn't receive the code?{" "}
              <a
                href="#"
                className="font-semibold text-[#f8d547] transition hover:text-white"
              >
                Resend
              </a>
            </p>
          </div>
        </section>
          </div>
    </div>  
  );
};

export default VerifyOtp;
