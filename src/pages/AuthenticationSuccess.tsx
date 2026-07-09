import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";

const Success = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="bg-navy text-white">
        <Header />
      </div>
      <div className="flex flex-1 flex-col bg-navy text-white items-center justify-center">
      
          <h1 className="text-center mt-25 text-6xl font-bold">
            Welcome to <span className="text-gold">AISC</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-2xl text-slate-50">
            Your company has been successfully authenticated.
          </p>

          <a
            href="/dashboard/overview"
            className="mt-18 mb-10 w-[40%] inline-flex items-center justify-center rounded-lg bg-red px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
          >
            Go to dashboard
          </a>
        </div>
      <div className="bg-navy text-white">

      <Footer />
      </div>

    </div>
  );
};

export default Success;
