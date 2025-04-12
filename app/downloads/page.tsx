"use client";

import "@/constants/KeyboardAssets";
import { KEYBOARD_ASSETS } from "@/constants/KeyboardAssets";
import { SoftwareType } from "@/types/software_type";
import { Download, ExternalLink, Info, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Downloads() {
  const [activeTab, setActiveTab] = useState("Windows OS Keyboard");

  const getIconForType = (type: string) => {
    switch (type) {
      case "download":
        return <Download className="w-5 h-5" />;
      case "install_instructions":
      case "use_instructions":
        return <Info className="w-5 h-5" />;
      case "store":
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getButtonText = (software: SoftwareType) => {
    if (software.type === "download") {
      return software.charset
        ? `Júklep alıw (${
            software.charset.charAt(0).toUpperCase() + software.charset.slice(1)
          })`
        : "Júklep alıw";
    } else if (software.type === "install_instructions") {
      return "Ornatıw instrukciyası";
    } else if (software.type === "use_instructions") {
      return "Paydalanıw instrukciyası";
    } else if (software.type === "store") {
      return (
        software.name ||
        (software.store === "google_play" ? "Google Play" : "App Store")
      );
    }
    return "Basqa";
  };

  const activeAsset = KEYBOARD_ASSETS.find((asset) => asset.name === activeTab);

  return (
    <section className="sm:w-[90%] w-[97%] mt-4 container mx-auto bg-white/20 bg-gradient-to-tr from-gray-800/50 to-gray-800/50 border border-white/30 rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-700/80 rounded-lg p-6 text-white mb-8">
          <h1 className="text-2xl font-bold mb-4">Klaviaturalar</h1>

          {/* OS Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-6">
            {KEYBOARD_ASSETS.map((asset) => (
              <button
                key={asset.name}
                onClick={() => setActiveTab(asset.name)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === asset.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-600 hover:bg-gray-500 text-white"
                }`}
              >
                {asset.name}
              </button>
            ))}
          </div>

          {/* Active OS Content */}
          {activeAsset && (
            <div className="bg-gray-800/80 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">{activeAsset.name}</h2>

              <div className="space-y-4">
                {activeAsset.softwares.map((software, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      {getIconForType(software.type)}
                    </div>
                    <Link
                      download
                      href={software.url}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex-grow text-center"
                    >
                      {getButtonText(software)}
                    </Link>
                  </div>
                ))}
              </div>

              {activeAsset.original_source && (
                <div className="mt-6 text-sm text-gray-300">
                  <p>
                    Original source:{" "}
                    <Link
                      href={activeAsset.original_source}
                      className="text-blue-400 hover:underline"
                    >
                      {activeAsset.original_source}
                    </Link>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
