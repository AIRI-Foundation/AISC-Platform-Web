import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import CompanyProfile from "./pages/CompanyProfile";
import Spectrum from "./pages/Spectrum";
import Advisory from "./pages/Advisory";
import InvestorHub from "./pages/InvestorHub";
import FounderPortal from "./pages/FounderPortal";
import SignUp from "./pages/SignUp";
import VerifyOtp from "./pages/VerifyOtp";
import BuildCompanyProfile from "./pages/BuildCompanyProfile";
import AuthenticationSuccess from "./pages/AuthenticationSuccess";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import DashboardMilestones from "./pages/DashboardMilestones";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardAdvisoryProgram from "./pages/DashboardAdvisoryProgram";
import DashboardSettings from "./pages/DashboardSettings";
import ChangePassword from "./pages/ChangePassword";
import SendPasswordResetOtp from "./pages/sendPasswordResetOtp";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
        <Route path="/spectrum" element={<Spectrum />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/investor-hub" element={<InvestorHub />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route
          path="/build-company-profile"
          element={<BuildCompanyProfile />}
        />
        <Route path="/authentication-success" element={<AuthenticationSuccess />} />
        <Route path="/password-success" element={<PasswordResetSuccess />} />        
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard/overview" element={<FounderPortal />} />
        <Route
          path="/dashboard/milestone-tracker"
          element={<DashboardMilestones />}
        />
        <Route
          path="/dashboard/milestone-tracker/:stage"
          element={<DashboardMilestones />}
        />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route
          path="/dashboard/advisory-program"
          element={<DashboardAdvisoryProgram />}
        />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
        <Route path="/change-password" element={<ChangePassword />} />   
        <Route path="/password-reset-otp" element={<SendPasswordResetOtp />} />
        <Route path="/password-reset" element={<PasswordReset />} />                       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
