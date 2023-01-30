"use client";

import Image from "next/image";
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  // const search = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //       noOfGuests,
  //     },
  //   });
  // };

  const search = () => {
    const query = Object.entries({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests,
    })
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
      .replace(/#/g, "[other character]");
    // const url = `/search?${queryString}`;
    const url = `/search?/${query}`;

    router.push(url);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        {/* <Link href="/"> */}
        <Image
          // src="https://links.papareact.com/qd3"
          src="../airbnb.svg"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
          alt=""
          sizes="auto"
        />
        {/* </Link> */}
      </div>

      <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 md:placeholder-gray-600 "
          type="text"
          placeholder={
            placeholder || `Anywhere   |   Any week   |   Add guests`
          }
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-[#5f5ff5] text-white 
          rounded-full p-[7px] cursor-pointer md:mx-2"
        />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div
          className="absolute opacity-[0.98] flex flex-col items-center top-[32px] 
          md:top-[84px] mx-auto left-0 right-0"
        >
          <DateRangePicker
            className="scale-[0.70] md:scale-100"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#5f5ff5"]}
            onChange={handleChange}
          />
          <div
            className="absolute md:static top-[81%] scale-[0.70] md:scale-100 flex 
            items-center border-b mb-6 min-w-[558px] p-5 bg-white"
          >
            <h2 className="text-xl flex-grow font-semibold">Guests</h2>
            <UserIcon className="h-5 px-2" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="text-center rounded-sm w-24 p-2 text-lg outline-none text-[#5f5ff5] font-bold bg-gray-100"
            />
          </div>
          <div
            className="absolute top-[94%] scale-[0.70] md:scale-100 flex 
            items-center min-w-[558px] p-5 bg-white"
          >
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-[#5f5ff5]">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
