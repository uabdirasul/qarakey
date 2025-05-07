"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import QarakeyLogo from "../public/qarakey-logo.png";
import LargeDeviceLinks from "./LargeDeviceLinks";
import SmallDeviceLinks from "./SmallDeviceLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="font-bold">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 right-0 flex items-center custom-md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center">
            <div className="flex shrink-0 items-center bg-black p-1.5 rounded-md">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  className="bg-white rounded-full inline-block shadow-lg"
                  src={QarakeyLogo}
                  alt="Qarakey logo"
                  width={36}
                  height={36}
                />
                <span className="text-white font-semibold text-lg hover:text-yellow-400 transition duration-200">
                  Qarakey
                </span>
              </Link>
            </div>

            <div className="hidden custom-md:block sm:ml-6 bg-black py-2.5 px-2 rounded-md">
              <LargeDeviceLinks />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 items-center flex mx-12 custom-md:m-0">
            <Link
              href={"/downloads"}
              className="relative h-11 rounded-md bg-blue-600 px-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center"
            >
              <span className="absolute -inset-1.5"></span>
              <span>Júklemeler</span>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden flex justify-center">
          <SmallDeviceLinks clickHandler={handleToggle} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
