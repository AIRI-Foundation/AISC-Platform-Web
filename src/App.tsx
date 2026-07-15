import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import AuthenticationSuccess from "./pages/AuthenticationSuccess";
import BookDemo from "./pages/BookDemo";
import BuildCompanyProfile from "./pages/BuildCompanyProfile";
import Contact from "./pages/Contact";
import DashboardMilestones from "./pages/DashboardMilestones";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettingsBilling from "./pages/DashboardSettingsBilling";
import DashboardSettingsNotifications from "./pages/DashboardSettingsNotifications";
import DashboardSettingsProfile from "./pages/DashboardSettingsProfile";
import DashboardSettingsSecurity from "./pages/DashboardSettingsSecurity";
import Directory from "./pages/Directory";
import Error from "./pages/Error";
import FounderPortal from "./pages/FounderPortal";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import SendPasswordResetOtp from "./pages/sendPasswordResetOtp";
import SignUp from "./pages/SignUp";
import SubmissionSent from "./pages/SubmissionSent";
import VerifyOtp from "./pages/VerifyOtp";

import Advisory from "./pages/StubPages/Advisory";
import CompanyProfile from "./pages/StubPages/CompanyProfile";
import DashboardAdvisoryProgram from "./pages/StubPages/DashboardAdvisoryProgram";
import InvestorHub from "./pages/StubPages/InvestorHub";
import LearnMoreCorporations from "./pages/StubPages/LearnMoreCorporations";
import LearnMoreFounders from "./pages/StubPages/LearnMoreFounders";
import LearnMoreGovernment from "./pages/StubPages/LearnMoreGovernment";
import LearnMoreInvestors from "./pages/StubPages/LearnMoreInvestors";
import ManageSubscriptions from "./pages/StubPages/ManageSubscriptions";
import Spectrum from "./pages/StubPages/Spectrum";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication-success" element={<AuthenticationSuccess />}/>
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/build-company-profile" element={<BuildCompanyProfile />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/milestone-tracker" element={<DashboardMilestones />} />
        <Route path="/dashboard/milestone-tracker/:stage" element={<DashboardMilestones />}/>
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/dashboard/settings-billing" element={<DashboardSettingsBilling />}/>
        <Route path="/dashboard/settings-notifications" element={<DashboardSettingsNotifications />}/>
        <Route path="/dashboard/settings-profile" element={<DashboardSettingsProfile />}/>
        <Route path="/dashboard/settings-security" element={<DashboardSettingsSecurity />}/>
        <Route path="/directory" element={<Directory/>} />
        <Route path="/error" element={<Error />} />
        <Route path="/dashboard/overview" element={<FounderPortal />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/password-success" element={<PasswordResetSuccess />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/password-reset-otp" element={<SendPasswordResetOtp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/submission-sent" element={<SubmissionSent />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
        <Route path="/dashboard/advisory-program" element={<DashboardAdvisoryProgram />}/>
        <Route path="/investor-hub" element={<InvestorHub />} />
        <Route path="/learn-corporations" element={<LearnMoreCorporations />} />
        <Route path="/learn-founders" element={<LearnMoreFounders />} />
        <Route path="/learn-government" element={<LearnMoreGovernment />} />
        <Route path="/learn-investors" element={<LearnMoreInvestors />} />
        <Route path="/manage-subscriptions" element={<ManageSubscriptions />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/spectrum" element={<Spectrum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
