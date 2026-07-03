import placeholderImage from "../../../assets/placeholder.png";

export default function TrustedBy() {
  return (
    <section className="mt-14 pt-14">
      <div className="self-stretch text-center justify-start text-white text-6xl font-bold  capitalize">
        Trusted by
      </div>       
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-200 sm:text-lg">
        Lorem ipsum dolor sit amet consectetur. Dignissim non iaculis
        accumsan dui. Sed fringilla malesuada vel malesuada volutpat id
        curabitur.
      </p>
    <div className="mt-8 grid gap-12 sm:grid-cols-3">
      <div className="w-[200x] h-[170px] overflow-hidden">
        <img
          src={placeholderImage}
          className="w-full h-full object-cover"
          alt="" />
      </div>
      <div className="w-[200x] h-[170px] overflow-hidden">
        <img
          src={placeholderImage}
          className="w-full h-full object-cover"
          alt="" />
      </div>
      <div className="w-[200x] h-[170px] overflow-hidden">
        <img
          src={placeholderImage}
          className="w-full h-full object-cover"
          alt="" />
      </div>          
    </div>
    </section>
  );
}