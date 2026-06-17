import Footer from "../components/general/IndividualComponents/Footer";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 flex-col bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 w-full"></div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold">Error</h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg text-slate-300">
            We failed to authenticate your company.
            <br />
            Please try again
          </p>

          <a
            href="/build-company-profile"
            className="mt-12 inline-flex items-center justify-center rounded-lg bg-red px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
          >
            Edit company profile
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Error;
