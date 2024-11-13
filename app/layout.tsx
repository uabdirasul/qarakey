import { source_code_pro_font } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Script from "next/script";

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
      <head>{/* Meta and title settings handled by Next.js metadata */}</head>
      <body className={`${source_code_pro_font.className} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                cookie_domain: "kk-keyboards.vercel.app"
              });
            `
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
