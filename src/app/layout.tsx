import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliov2-green.vercel.app/"),
  title: "Anthony Amaro",
  keywords: [
    "Software",
    "Engineer",
    "Developer",
    "Full Stack",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Software Developer",
    "Anthony Amaro",
  ],
  themeColor: "#000000",
  description:
    "Hi,  I'm a dedicated and passionate software engineer who thrives on turning intricate challenges into elegant solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${inter.className} bg-[var(--color-bg)] text-[var(--color-fg)] antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
