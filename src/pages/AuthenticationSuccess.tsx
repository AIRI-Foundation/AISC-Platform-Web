import Footer from "../components/general/IndividualComponents/Footer";
import BottomSection from "../components/general/BottomSection";

const Success = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 flex-col bg-[#0f2b5c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 w-full"></div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold">
            Welcome to <span className="text-[#f8d547]">AISC</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-300">
            Your company has been successfully
            <br />
            authenticated
          </p>

          <a
            href="/dashboard/overview"
            className="mt-28 inline-flex items-center justify-center rounded-lg bg-[#dc2626] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-[#b91c1c]"
          >
            Go to dashboard
          </a>
        </div>
      </div>
      <div className="bg-[#0f2b5c] text-white">

      <Footer />
      </div>

    </div>
  );
};

export default Success;
