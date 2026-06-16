export default function TrustedBy() {
  return (
    <section className="mt-14 border-t border-dashed border-white/20 pt-14">
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
        Trusted by
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-200 sm:text-lg">
        Lorem ipsum dolor sit amet consectetur. Dignissim non iaculis
        accumsan dui. Sed fringilla malesuada vel malesuada volutpat id
        curabitur.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="h-24 rounded-[24px] bg-white/10" />
        <div className="h-24 rounded-[24px] bg-white/10" />
        <div className="h-24 rounded-[24px] bg-white/10" />
      </div>
    </section>
  );
}