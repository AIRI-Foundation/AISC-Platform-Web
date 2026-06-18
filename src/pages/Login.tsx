import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { setSession } from "../lib/auth";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getError = (name: string, value: string) => {
    if (!touched[name]) return "";
    return value.trim() === "" ? "This field is required" : "";
  };

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
      setError(getErrorMessage(err)); // 401 → "wrong credentials" message from the API
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col min-h-screen bg-navy text-white">
      <Header />
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6">       

        <div className="mx-auto mt-8 max-w-lg rounded-[20px] bg-white/95 p-8 shadow-[0_5px_10px_rgba(0,0,0,0.6)] text-slate-900 backdrop-blur-xl sm:p-10">
        {/* Title */}
        <section className="mt-2 text-center">
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Welcome back
          </h1>
          <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur. Sed 
            <br />
            nibh consequat eget in.
          </p>
        </section>          
          
          <form onSubmit={handleSubmit} className="space-y-1">
            <label className="space-y-1 text-sm font-medium text-slate-800">
              Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={textField}
                type="email"
                placeholder="you@business.com"
                onBlur={() => handleBlur("email")}                     
              />
            </label>
            {getError("email", formData.email) && (
                  <p className="text-red text-sm">
                {getError("email", formData.email)}
              </p>
            )}
            <label className="space-y-2 text-sm font-medium text-slate-800 ">
              Password
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={textField}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onBlur={() => handleBlur("password")}                       
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
                  aria-label="Toggle password visibility"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7C7.523 19 3.732 16.057 2.458 12z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </label>
            {getError("password", formData.password) && (
                  <p className="text-red text-sm">
                {getError("password", formData.password)}
              </p>
            )}            
            <p className="mt-4 text-right text-xs text-slate-600">
              <a
                href="/password-reset-otp"
                className="font-semibold text-black hover:underline"
              >
                Forgot Password?
              </a>
            </p>       
            <button
              type="submit"
              disabled={submitting || formData.password == "" || formData.email == ""}
              className={buttonSubmit}
            >
              {submitting ? "Logging in..." : "Login"}
            </button>
            {error && (
              <div className="text-center mx-auto rounded-[6px] border-red/20 border-2 border py-1 w-full max-w-sm mt-1 mb-3 bg-red/10 text-md text-red-dark font-semibold">
                {error}
              </div>
            )} 
            <p className="text-center text-sm text-slate-600 mt-2">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-[#2563eb] hover:underline"
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
