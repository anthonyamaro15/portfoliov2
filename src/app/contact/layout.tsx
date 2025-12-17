import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Work with Anthony Amaro",
  description: "Get in touch for engineering roles, consulting, or collaborations.",
  openGraph: {
    type: "website",
    title: "Contact — Work with Anthony Amaro",
    description: "Get in touch for engineering roles, consulting, or collaborations.",
    url: "https://www.anthonyamaro.dev/contact",
    images: ["/api/og?title=Contact"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Work with Anthony Amaro",
    description: "Get in touch for engineering roles, consulting, or collaborations.",
    images: ["/api/og?title=Contact"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
