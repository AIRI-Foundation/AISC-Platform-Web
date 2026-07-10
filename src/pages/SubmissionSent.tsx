import { useNavigate } from 'react-router-dom';
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";

const SubmissionSent = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/dashboard/overview');
  };      
  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">
      <Header />
      <main className="flex flex-1 min-h-screen items-center justify-center">      
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">
          Submission <span className="text-gold">Sent</span>
        </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
            Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
          </p>

        <div className="mx-auto mt-10 w-sm">
        <button           
          type="submit"
          className={buttonSubmit} 
          onClick={handleNavigation}
          >
            Home
        </button>      
          
      </div>  
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionSent;
