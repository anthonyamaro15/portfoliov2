import "./globals.css";
import "./navbar/navbar.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/navbar";

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
    <html lang="en">
      <Navbar />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
