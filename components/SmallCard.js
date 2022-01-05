function SmallCard({ data }) {
  return (
    <div className="flex items-center space-x-3 p-2 hover:scale-110 transition duration-200 hover:bg-gray-100 mr-7 ease-out transform">
      <img src={data.img} alt="" className="h-12 w-12 rounded-lg object-contain cursor-pointer " />
      <div>
        <p className="font-semibold text-md cursor-pointer">{data.location}</p>
        <p className="text-gray-500 text-sm cursor-pointer">{data.distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
