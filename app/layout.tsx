import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Kalkidan · personal web space",
  description: "Code, creativity, faith, and everything in between.",
  openGraph: {
    title: "kallkidan · personal web space",
    description: "Code, creativity, faith, and everything in between.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
