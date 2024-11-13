"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DownloadForWindows = () => {
  const DOWNLOAD_ID = process.env.NEXT_PUBLIC_DOWNLOAD_ID;
  const [loading, setLoading] = useState(false);

  const trackDownload = (fileName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download", {
        event_category: "file_download",
        event_label: fileName,
        value: 1
      });
    }
  };

  const handleDownloadClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000); // e.g., reset after 5 seconds
    trackDownload("QQ.zip");
  };

  return (
    <div className="pt-6 flex flex-col items-center justify-center">
      <Image
        src="https://i.ibb.co/nL075Wx/windows-logo.png"
        alt="Windows Logo"
        width={250}
        height={250}
      />
      <span className="bg-blue-600 px-4 py-2 rounded-md mt-4">
        Windows 7, 8, 10, 11
      </span>
      <div className="p-5 flex justify-around w-full flex-col md:flex-row">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 px-14 py-4 rounded-md text-center m-2">
          <p className="bg-blue-500 px-3 py-1 rounded-md text-center">
            x32 | x64 bit
          </p>
          <p className="mt-6">
            <b>.zip</b> file —{" "}
            <Link
              href={`https://drive.google.com/uc?export=download&id=${DOWNLOAD_ID}`}
              passHref
              legacyBehavior
            >
              <button
                onClick={handleDownloadClick}
                disabled={loading}
                className={`p-2 rounded-md ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
                }`}
              >
                {loading ? "Processte..." : "Júklep alıw"}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadForWindows;
