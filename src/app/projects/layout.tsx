import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Rust tools, React/Node apps, GIS",
  description: "Selected projects with outcomes, tech stacks, and source links.",
  openGraph: {
    type: "website",
    title: "Projects — Rust tools, React/Node apps, GIS",
    description: "Selected projects with outcomes, tech stacks, and source links.",
    url: "https://www.anthonyamaro.dev/projects",
    images: ["/api/og?title=Projects"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Rust tools, React/Node apps, GIS",
    description: "Selected projects with outcomes, tech stacks, and source links.",
    images: ["/api/og?title=Projects"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
