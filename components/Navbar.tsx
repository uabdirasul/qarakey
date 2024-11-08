"use client";

import Link from "next/link";
import { useState } from "react";
import LargeDeviceLinks from "./LargeDeviceLinks";
import SmallDeviceLinks from "./SmallDeviceLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="font-bold">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="flex flex-1 items-center justify-center sm:items-center custom-md:justify-start">
            <div className="flex shrink-0 items-center bg-black py-2.5 px-2 rounded-md">
              <Link href="/">
                <span>KK Keyboards</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block bg-black py-2.5 px-2 rounded-md">
              <LargeDeviceLinks />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 items-center custom-md:flex hidden">
            <button
              type="button"
              className="relative h-11 rounded-md bg-blue-600 py-2 px-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span>Download x64 (Windows)</span>
            </button>
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
