import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import CompanyProfile from "./pages/CompanyProfile";
import Spectrum from "./pages/Spectrum";
import Advisory from "./pages/Advisory";
import InvestorHub from "./pages/InvestorHub";
import FounderPortal from "./pages/FounderPortal";
import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";
import BuildCompanyProfile from "./pages/BuildCompanyProfile";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";

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
        <Route path="/founder-portal" element={<FounderPortal />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/build-company-profile"
          element={<BuildCompanyProfile />}
        />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
