"use client";
import Footer from "./footer/footer";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main className="main-container">
      <JsonLd
        id="ld-breadcrumb-home"
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.anthonyamaro.dev/" },
          ],
        }}
      />
      <div className="home-page-content content">
        <h1>I'm Anthony Amaro</h1>
        <p>
          Experienced software engineer with a passion for unraveling complex
          problems and a proven track record of developing innovative solutions.
          Highly skilled in coding, debugging, and optimizing software
          applications for optimal performance. A dedicated lifelong learner,
          always staying current with the latest technologies to ensure the
          delivery of cutting-edge solutions. Excels in collaborating with
          cross-functional teams to deliver high-quality projects on time. Known
          for a strong problem-solving mindset and a commitment to driving
          excellence in software development
        </p>
      </div>
      <Footer />
    </main>
  );
}

// SEO head for Home is handled by src/app/head.tsx
