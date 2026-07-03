import Footer from "../components/general/IndividualComponents/Footer";

const Success = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 flex-col bg-navy text-white items-center justify-center">

          <h1 className="text-center text-5xl font-bold">
            Welcome to <span className="text-gold">AISC</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-300">
            Your company has been successfully
            <br />
            authenticated
          </p>

          <a
            href="/dashboard/overview"
            className="mt-28 inline-flex items-center justify-center rounded-lg bg-red px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
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
