import banner from "../assets/56cedc8881d2091a1bb8039f54b8846e.png";
const Banner = () => {
  return (
    <div className="h-[90vh] overflow-hidden relative flex items-center justify-center">
      <img src={banner} className="object-cover h-full w-full" alt="" />
      {/* Glass effect overlay */}
      <div className="absolute inset-0  bg-opacity-40 flex  justify-center top-32 md:top-20">
        <div className="flex flex-col items-center">
          <p className="text-white text-center text-3xl md:text-4xl leading-none font-semibold">
            Where Wheels Meet Passion!
          </p>
          <span className="text-white text-center text-4xl leading-none font-semibold">
            ___
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
