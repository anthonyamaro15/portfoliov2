import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Anthony Amaro, Full-Stack Engineer",
  description: "Roles, impact, and results across frontend, backend, and systems.",
  openGraph: {
    type: "website",
    title: "Experience — Anthony Amaro, Full-Stack Engineer",
    description: "Roles, impact, and results across frontend, backend, and systems.",
    url: "https://www.anthonyamaro.dev/experience",
    images: ["/api/og?title=Experience"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience — Anthony Amaro, Full-Stack Engineer",
    description: "Roles, impact, and results across frontend, backend, and systems.",
    images: ["/api/og?title=Experience"],
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
