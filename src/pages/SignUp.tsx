import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { getErrorMessage } from "../lib/api";

import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import PasswordRequirements from "../components/general/IndividualComponents/PasswordRequirements"
import PasswordToggle from "../components/general/IndividualComponents/PasswordToggle"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";
import { textField } from "../components/general/IndividualComponents/Buttons";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: 1,
    agreeTerms: false,
  });
  
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = event.target;
    const { name, value, type } = target;
    const checked =
      type === "checkbox" && "checked" in target ? target.checked : false;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : name === "role"
            ? Number(value)
            : value,
    })); 
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // Returns an error message if the password fails a rule, otherwise null.
  const validatePassword = (password: string): string | null => {
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[a-z]/.test(password))
      return "Password must include at least one lowercase character.";
    if (!/[A-Z]/.test(password))
      return "Password must include at least one uppercase character.";
    if (!/[0-9]/.test(password))
      return "Password must include at least one number.";
    if (!/[^A-Za-z0-9]/.test(password))
      return "Password must include at least one symbol.";
    return null;
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

  const passwordsMatch =
    formData.password === formData.confirmPassword;

  const passwordValid =
    validatePassword(formData.password) === null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.agreeTerms !== true) {
      setError("Please accept the terms & conditions");
      return;
    }
    setSubmitting(true);

  try {
    await register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.businessEmail,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
      agreeToTerms: formData.agreeTerms
    }); 

    setSuccess(
      "Account created. Check your email for a verification code."
    );    
    navigate("/verify-otp", {
      state: {
      email: formData.businessEmail,
      mode: "email-verification",
      },});
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    } 
  };
console.log("Registration successful");

  return (
    <div className="flex flex-col min-h-screen bg-navy text-white">
      <Header />      
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6">

        <div className="mx-auto mt-12 max-w-4xl rounded-[24px] bg-white/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.18)] text-slate-900 backdrop-blur-xl sm:p-10">
        <section className="mt-2 text-center">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Start using <span className="text-gold">AISC</span> today!
          </h1>
          <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
          </p>
        </section>
        <div className="px-40">
          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="grid gap-1 sm:grid-cols-2">
              <label className="text-sm font-medium">
                <span className="text-red">*</span> First name
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("firstName")}
                  className={getInputClass("firstName", formData.firstName, touched.firstName)}
                  placeholder="First name"
                />              
              </label>
              <label className="text-sm font-medium">
                <span className="text-red">*</span> Last name
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("lastName")}
                  className={getInputClass("lastName", formData.lastName, touched.lastName)}
                  type="text"
                  placeholder="Last name"
                />              
              </label>
            </div>

            <label className="text-sm font-medium">
              <span className="text-red">*</span> Business email
              <input
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                onBlur={() => handleBlur("businessEmail")}
                className={getInputClass("businessEmail", formData.businessEmail, touched.businessEmail)}
                type="email"
                placeholder="you@business.com"
              />  
                <p className="mb-2">
                  </p>                              
            </label>

            <label className="text-sm font-medium">
              <span className="text-red">*</span> Phone number
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={() => handleBlur("phoneNumber")}
                className={getInputClass("phoneNumber", formData.phoneNumber, touched.phoneNumber)}
                type="tel"
                placeholder="(123) 456-7890"
              /> 
                <p className="mb-2">
                  </p>               
            </label>
              <label className="text-sm font-medium">
                <span className="text-red">*</span> Create password
                <div className="relative">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`${textField} pr-10 ${
                      touched.password && !passwordValid
                        ? "!border-red focus:border-red focus:ring-red/25"
                        : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    onBlur={() => handleBlur("confirmPassword")}
                  />

                  <PasswordToggle
                    show={showPassword}
                    onToggle={() =>
                      setShowPassword(!showPassword)
                    }
                  />
                </div>
              </label>

              <PasswordRequirements password={formData.password} />  
              <label className="text-sm font-medium">
                <span className="text-red">*</span> Confirm password
                <div className="relative">
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`${textField} pr-10 ${
                      touched.confirmPassword && !passwordsMatch
                        ? "!border-red focus:border-red focus:ring-red/25"
                        : ""
                    }`}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    onBlur={() => handleBlur("confirmPassword")}
                  />

                  <PasswordToggle
                    show={showConfirmPassword}
                    onToggle={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  />
                </div>
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span className="text-red">*</span> What describes you best?
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={textField}
                >
                  <option value={1}>Founder</option>
                  <option value={2}>Investor</option>
                  <option value={3}>Startup</option>
                  <option value={4}>Advisor</option>
                  <option value={5}>Partner</option>
                </select>
              </label>
            <div className="flex items-start gap-3 mt-2">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#2563eb] focus:ring-[#2563eb]"
              />
              <label
                htmlFor="agreeTerms"
                className="text-sm leading-6 text-slate-700 "
              >
                I agree to terms & conditions <span className="text-red">*</span>
              </label>
            </div>

            <div className="flex items-start gap-3 mt-2 mb-6">
              <label
                htmlFor="agreeTerms"
                className="text-sm leading-6 text-slate-700 "
              >
                <span className="text-red">*</span> Required Field
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting || 
                formData.firstName == "" || 
                formData.lastName == "" ||
                formData.businessEmail == "" ||
                formData.phoneNumber == "" ||
                formData.password == "" ||
                formData.confirmPassword == "" ||
                !passwordValid  ||  
                !passwordsMatch ||                
                formData.agreeTerms == false                                                                              
              }          
              className={buttonSubmit}
            >
              {submitting ? "Creating account..." : "Create Account"}
            </button>

            <p className="text-center mt-3 text-sm text-slate-600 mb-6">
              Already have an AISC account?{" "}
              <a
                href="/login"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Log in
              </a>
            </p>
          </form>
          </div>
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
