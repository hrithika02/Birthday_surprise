import type { Metadata } from "next";

import "./globals.css";

import SmoothScroll from "@/components/effects/SmoothScroll";

import {
  Cormorant_Garamond,
  Inter,
  Caveat,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "For Someone Special",
  description: "A quiet little space for memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${cormorant.variable}
          ${inter.variable}
          ${caveat.variable}

          bg-[#0f0f10]
          text-[#f7f3ee]
          antialiased
          overflow-x-hidden
        `}
      >
        <SmoothScroll />


        {children}
      </body>
    </html>
  );
}