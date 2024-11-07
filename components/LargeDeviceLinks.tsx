"use client";

import { LINKS } from "@/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LargeDeviceLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-4">
      {LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            pathname === link.href
              ? "bg-gray-500 text-white"
              : "text-gray-300 hover:bg-white hover:text-black"
          } px-2 py-1 text-sm font-bold rounded-md text-gray-300 hover:bg-white hover:text-black`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LargeDeviceLinks;
