import Header from "../components/general/IndividualComponents/Header";
import Footer from "../components/general/IndividualComponents/Footer";

const SubmissionSent = () => {
  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Submission <span className="text-gold">Sent</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-slate-200">
          Lorem ipsum dolor sit amet consectetur. Sed nibh consequat eget in.
        </p>

        <a
          href="/"
          className="mt-12 inline-flex w-full max-w-md items-center justify-center rounded-lg bg-red px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-red-500/20 transition hover:bg-red-dark"
        >
          Home
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default SubmissionSent;
