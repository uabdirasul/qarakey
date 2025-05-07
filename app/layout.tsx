import { source_code_pro_font } from "@/app/ui/fonts";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Qarakey",
    template: "%s - Qarakey"
  },
  description: "Qaraqalpaqsha klaviatura maketleri",
  appleWebApp: {
    title: "Qarakey"
  },
  twitter: {
    card: "summary_large_image",
    site: "@qarakey",
    title: "Qarakey",
    description: "Qaraqalpaqsha klaviatura maketleri"
  },
  openGraph: {
    title: "Qarakey",
    description: "Qaraqalpaqsha klaviatura maketleri",
    siteName: "Qarakey",
    type: "website",
    url: "https://qarakey.tech", // replace with your actual URL
    images: [
      {
        url: "./opengraph-image.png", // path to your image
        width: 1200,
        height: 630,
        alt: "Qarakey"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kaa">
      <head>
        <meta name="apple-mobile-web-app-title" content="Qarakey" />
      </head>
      <body className={`${source_code_pro_font.className} antialiased`}>
        <Navbar />
        <article>{children}</article>
      </body>
    </html>
  );
}
