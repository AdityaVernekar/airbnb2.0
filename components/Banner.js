import Image from "next/image";
import bg from "../images/bg.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={bg} objectFit="cover" layout="fill" />
      <div className="absolute top-1/3 w-full text-center text-white font-semibold">
        <p className="text-xl sm:text-lg  font-bold xl:text-3xl">Not sure where to go? Perfect.</p>
        <button className="text-red-400 bg-white rounded-full px-6 py-3 md:px-9 md:py-4 shadow-md font-bold  my-3 hover:shadow-xl hover:shadow-red-300/50 active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
