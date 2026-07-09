import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";
import { buttonSubmit } from "../components/general/IndividualComponents/Buttons";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="bg-navy text-white">
        <Header />
      </div>
      <div className="flex flex-1 flex-col bg-navy text-white">
        <div className="mx-auto mt-14 max-w-7xl px-6 py-6 w-full"></div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-center text-6xl font-bold">
            Error
          </h1>
          <p className="mx-auto mt-6 text-center text-2xl text-slate-100">
            We failed to authenticate your company. Please try again

          </p>
          <div className="mt-16 mb-10 w-[60%] mx-auto inline-flex items-center justify-center px-8 py-3" >
                 <a
            href="/build-company-profile"
            className={`${buttonSubmit} text-center`}
          >
            Edit company profile
          </a>                 
          </div>
          
        </div>
      </div>
      <div className="bg-navy text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Error;
