import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import CompanyProfile from "./pages/CompanyProfile";
import Spectrum from "./pages/Spectrum";
import Advisory from "./pages/Advisory";
import InvestorHub from "./pages/InvestorHub";
import FounderPortal from "./pages/FounderPortal";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
