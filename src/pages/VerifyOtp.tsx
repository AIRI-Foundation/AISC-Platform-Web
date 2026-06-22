import { type FormEvent, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/authService";
import { verifyEmail, login } from "../services/authService";
import { setSession, isFounder } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const email = location.state?.email;
  const password = location.state?.password;
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

        if (!password) {
          navigate("/login");
          return;
        }

        const auth = await login({ email, password });
        setSession(auth.token, auth.email, auth.role, auth.refreshToken);

        if (isFounder(auth.role)) {
          navigate("/build-company-profile");
        } else {
          navigate("/dashboard/overview");
        }
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
    <div className="min-h-screen bg-navy text-white">  
      <div className="mx-auto max-w-7xl px-6 py-6">

        <section className="flex min-h-[80vh] items-center justify-center text-center">
          <div className="mx-auto w-full max-w-4xl rounded-[32px] border-2 border-dashed border-white/20 bg-white/2 p-12 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-16">
            <h1 className="text-5xl font-bold text-white sm:text-6x1">
              Verify Your <span className="text-gold">One Time Password</span>
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
              <div className = "w-fit">         
                          <div className="flex gap-3 sm:gap-2">
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
                                className="h-20 w-16 rounded-[10px] border-2 border-white/30 bg-white text-center text-5xl font-bold text-black/85 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25 sm:h-34 sm:w-27"
                                placeholder="0"
                                inputMode="numeric"
                              />
                            ))}
                          </div>       
                          {error && (
                          <div className="text-center mx-auto py-1 w-full max-w-sm mt-2 text-md text-red-dark font-semibold">
                                  {error}
                                </div>
                              )}                                              
                          <button
                            type="submit"
                            disabled={submitting || otp.some((digit) => !digit)}
                            className={`${buttonSubmit} w-full mt-3`}
                          >
                            Confirm
                          </button>
                         
              </div>   
            </form>
            <p className="mt-3 text-sm text-slate-400">
              Didn't receive the code?{" "}
              <a
                href="#"
                className="font-semibold text-gold transition hover:text-white"
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
