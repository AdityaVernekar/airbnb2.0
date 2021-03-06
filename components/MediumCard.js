import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer  hover:scale-105 transform transition duration-300 ease-out my-2 ">
      <div className="relative h-72 w-72 p-3  ">
        <Image src={img} alt="" layout="fill" className="rounded-xl p-10" alt="med card" />
      </div>
      <h3 className="text-2xl mt-3 font-semibold text-gray-900 text-center">{title}</h3>
    </div>
  );
}

export default MediumCard;
