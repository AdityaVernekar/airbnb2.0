import Image from "next/image";

function LargeCard({ img, title, desc, buttonText }) {
  return (
    <section className="my-10">
      <div className="relative h-[300px] w-full ">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
        <div className="absolute top-10 left-6">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-700 text-md p-1">{desc}</p>
          <button className="bg-blue-900 rounded-lg p-2 my-4 text-white active:scale-90 transform transition duration-200 hover:shadow-lg hover:shadow-blue-700/70">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
