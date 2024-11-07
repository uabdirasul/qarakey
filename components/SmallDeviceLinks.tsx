"use client";

import { LINKS } from "@/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SmallDeviceLinks = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-1 px-1 pb-3 pt-2 absolute top-13 left-0 w-full bg-black/40 backdrop-blur-lg rounded-lg">
      {LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            pathname === link.href
              ? "bg-gray-500 text-white"
              : "text-gray-300 hover:bg-white hover:text-black"
          } px-3 py-2 block text-base font-medium rounded-md text-gray-300 hover:bg-white hover:text-black`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default SmallDeviceLinks;
