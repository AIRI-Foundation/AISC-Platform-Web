import { useNavigate } from 'react-router-dom';

import Footer from "../components/general/IndividualComponents/Footer"
import BottomSection from "../components/general/BottomSection";
import Header from "../components/general/IndividualComponents/Header"
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

const Success = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/login');
  };
  return (
    <div className="flex min-h-screen flex-col min-h-screen bg-navy text-white">
      <Header />
      <div className="flex-1 mx-auto max-w-7xl px-6 py-6">       

        <div className="mx-auto w-full mt-8 max-w-3xl rounded-[20px] bg-white/95 p-8 shadow-[0_5px_10px_rgba(0,0,0,0.6)] text-slate-900 backdrop-blur-xl sm:p-10">
         {/* Title */}
        <section className="mt-2 text-center">
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Password updated!
          </h1>
          <p className="mx-auto mt-5 mb-5 max-w-2xl text-navy text-slate-800 font-semibold text-lg">
             Your password has been successfully updated.
             <br />
             Click continue to log in.
          </p>
        </section>          
        <div className="mx-auto w-sm">
        <button           
          type="submit"
          className={buttonSubmit} 
          onClick={handleNavigation}
          >
            Continue
        </button>      
          
      </div>
      </div>
      <BottomSection />
      </div>

      <Footer />
    </div>
  );
};

export default Success;
