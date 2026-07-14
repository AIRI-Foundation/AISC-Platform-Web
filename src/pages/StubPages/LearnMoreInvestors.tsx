import Footer from "../../components/general/IndividualComponents/Footer";
import BottomSection from "../../components/general/BottomSection";
import Header from "../../components/general/IndividualComponents/Header";

const Investors = () => {
  return (
// Header
    <div className="min-h-screen bg-white text-slate-900">
      <div className="bg-navy text-white">
        <Header />

      {/* Body */}
      <div className="bg-white text-navy">
        <div className="p-8">
          <h1 className="text-2xl font-bold">Investors</h1>
        </div>
      </div>      

        {/* Bottom */}
        <div className="mx-auto max-w-7xl px-6 py-6">
          <BottomSection />
        </div>
      <Footer />           
      </div> 
    </div>
  );
};
export default Investors;
