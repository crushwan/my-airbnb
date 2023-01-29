import Image from "next/image";
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5">
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
          alt=""
          sizes="auto"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-1 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 md:placeholder-gray-600 "
          type="text"
          placeholder={`Anywhere   |   Any week   |   Add guests`}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#ff385c] text-white rounded-full p-[7px] cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
