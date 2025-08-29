import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { RESOURCES } from "@/config/resources";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anthonyamaro.dev"),
  title: {
    default: "Anthony Amaro",
    template: "%s — Anthony Amaro",
  },
  description:
    "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters. Deploying to Vercel, AWS, Azure.",
  keywords: [
    "Software",
    "Engineer",
    "Developer",
    "Full Stack",
    "React",
    "Node",
    "Rust",
    "Next.js",
  ],
  themeColor: "#0A0B0D",
  alternates: { canonical: "https://www.anthonyamaro.dev" },
  openGraph: {
    type: "website",
    url: "https://www.anthonyamaro.dev",
    title: "Anthony Amaro",
    description:
      "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters. Deploying to Vercel, AWS, Azure.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Amaro",
    description:
      "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters. Deploying to Vercel, AWS, Azure.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anthony Amaro",
              jobTitle: "Full-Stack Software Engineer",
              email: RESOURCES.email,
              url: "https://www.anthonyamaro.dev",
              sameAs: [RESOURCES.github, RESOURCES.linkedin, RESOURCES.twitter],
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
