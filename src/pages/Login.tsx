import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { setSession } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header";
import PasswordToggle from "../components/general/IndividualComponents/PasswordToggle";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const hasFieldError = (name: string, value: string) => {
    return touched[name] && value.trim() === "";
  };

  const getInputClass = (name: string, value: string, touched: boolean) =>
    `${textField} ${
      touched && hasFieldError(name, value)
        ? "!border-red focus:border-red focus:ring-red/25"
        : ""
    }`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const auth = await login({
        email: formData.email,
        password: formData.password,
      });
      setSession(auth.token, auth.email, auth.role, auth.refreshToken);
      navigate("/dashboard/overview");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">
      <Header />
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6 w-full">
        <div className="mx-auto mt-8 max-w-xl rounded-[20px] bg-white/95 p-8 shadow-[0_5px_10px_rgba(0,0,0,0.6)] text-slate-900 backdrop-blur-xl sm:p-10">
          {/* Title */}
          <section className="mt-2 text-center">
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
              <span className="text-gold">Welcome</span> Back
            </h1>
            <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur. Sed
              <br />
              nibh consequat eget in.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1.5 px-2.5">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClass(
                  "email",
                  formData.email,
                  touched.email,
                )}
                type="email"
                placeholder="you@business.com"
                onBlur={() => handleBlur("email")}
              />
            </div>

            <div>
              <label className="text-sm font-medium block mb-1.5 px-2.5">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={getInputClass(
                    "password",
                    formData.password,
                    touched.password,
                  )}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onBlur={() => handleBlur("password")}
                />

                <PasswordToggle
                  show={showPassword}
                  onToggle={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <p className="mt-4 text-right text-xs text-slate-600 !mb-6">
              <a
                href="/password-reset-otp"
                className="font-semibold text-black hover:underline"
              >
                Forgot Password?
              </a>
            </p>

            <button
              type="submit"
              disabled={
                submitting || formData.password === "" || formData.email === ""
              }
              className={buttonSubmit}
            >
              {submitting ? "Logging in..." : "Submit"}
            </button>

            {error && (
              <div className="text-center mx-auto py-1 w-full max-w-sm mt-2 mb-3 text-md text-red-700 font-semibold">
                {error}
              </div>
            )}

            <p className="text-center text-sm text-slate-600 mt-4">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-gold hover:underline"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>

        <BottomSection />
      </div>

      <Footer />
    </div>
  );
};

export default Login;
