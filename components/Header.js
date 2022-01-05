import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-4 md:px-10 ">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logoimg"
        />
      </div>
      {/* middle */}

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm ">
        <input
          type="text"
          className="flex-grow pl-6 bg-transparent outline-none placeholder:italic placeholder:text-gray-400 text-gray-600
          text-sm font-semibold
          focus:ring-1 focus:ring-red-300 focus:ring-rounded rounded-full py-2 md:focus:ring-0"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden h-8 w-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:inline-flex m-1" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className=" flex items-center border-2 rounded-full p-1 md:p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
