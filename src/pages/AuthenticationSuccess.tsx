import { useNavigate } from 'react-router-dom';
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";
const Success = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard/overview');
  };  
  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">

      <Header />

      <main className="flex flex-1 min-h-screen items-center justify-center">
        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-gold">AISC</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
            Your company has been successfully authenticated
          </p>

        <div className="mx-auto mt-10 w-sm">
        <button           
          type="submit"
          className={buttonSubmit} 
          onClick={handleNavigation}
          >
            Go to dashboard
        </button>      
          
      </div>
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default Success;
