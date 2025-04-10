"use client";
import { useEffect, useState } from "react";

export type OS = "windows" | "linux" | "mac" | "android" | "ios" | "unknown";

export default function useDetectOS(): OS {
  const [os, setOS] = useState<OS>("unknown");

  useEffect(() => {
    setOS(getOS());
  }, []);

  function getOS(): OS {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform.toLowerCase();

    if (/mac|macintosh|macintel/.test(platform)) return "mac";
    if (/iphone|ipad|ipod/.test(userAgent)) return "ios";
    if (/win/.test(platform)) return "windows";
    if (/android/.test(userAgent)) return "android";
    if (/linux/.test(platform)) return "linux";

    return "unknown";
  }

  return os;
}
