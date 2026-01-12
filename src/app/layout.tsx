import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anthonyamaro.dev/"),
  title: {
    default: "Anthony Amaro — Full-Stack Software Engineer (React, Node, Rust)",
    template: "%s | Anthony Amaro",
  },
  description:
    "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters. Deploying to Vercel, AWS, Azure.",
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
    "React",
    "Node",
    "Rust",
  ],
  openGraph: {
    type: "website",
    title: "Anthony Amaro — Full-Stack Software Engineer",
    description:
      "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters.",
    url: "https://www.anthonyamaro.dev/",
    images: ["/api/og?title=Anthony%20Amaro"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Amaro — Full-Stack Software Engineer",
    description:
      "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters.",
    images: ["/api/og?title=Anthony%20Amaro"],
  },
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
