import { source_code_pro_font } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Head from "next/head";

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
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y10H128YC7');
            `
          }}
        ></script>
      </Head>

      <body className={`${source_code_pro_font.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
