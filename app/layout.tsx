import { source_code_pro_font } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { CSPostHogProvider } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Karakalpak Keyboards",
  description: "á, ó, ú, ı háripleri menen jazıw"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={`${source_code_pro_font.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
