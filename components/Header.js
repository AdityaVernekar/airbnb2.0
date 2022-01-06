import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
const Header = ({ placeholder }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        NoOfguests: guests,
      },
    });
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-4 md:px-10 "
      id="header"
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logoimg"
          onClick={() => router.push("/")}
        />
      </div>
      {/* middle */}

      <div className="flex items-center md:border-2 rounded-full md:shadow-sm ">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-6 bg-transparent outline-none placeholder:italic placeholder:text-gray-400 text-gray-600
          text-sm font-semibold
          focus:ring-1 focus:ring-red-300 focus:ring-rounded rounded-full py-2 md:focus:ring-0"
          placeholder={!placeholder ? "Start Your Search" : placeholder}
        />
        <SearchIcon className="hidden h-8 w-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:inline-flex m-1" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:animate-spin ml-2" />
        <div className=" flex items-center border-2 rounded-full p-1 md:p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              min={1}
              max={25}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-12 pl-2 outline-none font-bold text-lg text-red-500"
            />
          </div>
          <div className="flex justify-evenly">
            <button
              className="px-10 py-2 hover:bg-red-400 rounded-xl active:scale-90 transition duration-200 transform ease-out hover:font-semibold hover:text-white"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              className="px-10 py-2 hover:ring-red-400 hover:bg-red-400 rounded-xl outline-none active:scale-90 transition duration-200 transform ease-out ring-0 hover:font-semibold text-red-500 hover:text-white"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
