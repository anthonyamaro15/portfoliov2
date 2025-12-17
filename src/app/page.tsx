"use client";
import { Hero, SectionHeading, Section } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/config/projects";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section className="pt-0 mt-14">
        <SectionHeading
          eyebrow="Highlights"
          title="Capabilities at a glance"
          subtitle="A pragmatic toolkit across frontend, backend, and systems."
        />
        <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card/90">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-white">Frontend</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Accessibility",
                  "Performance",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/90">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-white">Backend & Data</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Node.js", "REST/GraphQL", "PostgreSQL", "Prisma"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/90">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-white">Cloud & DevOps</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Vercel",
                  "AWS",
                  "Azure",
                  "Docker",
                  "CI/CD (GitHub Actions)",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/90">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-white">
                Systems & Tools
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Rust",
                  "Playwright",
                  "Vitest/Jest",
                  "ArcGIS JS SDK",
                  "n8n",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="mt-14">
        <SectionHeading
          eyebrow="Featured"
          title="Recent projects"
          subtitle="Outcome‑driven work with clean UX and pragmatic engineering."
        />
        <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <Card
              key={project.id}
              className="group bg-card/90 hover:-translate-y-0.5 transition-transform overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    src={project.image}
                    alt={project.imgAlt}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.headerDescription}
                </p>
                {project.metrics && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {project.metrics.slice(0, 2).map((m: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-md border border-border bg-background/50 px-2 py-1"
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies
                    ?.slice(0, 5)
                    .map((t: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {project.website && (
                    <Button size="sm" asChild>
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="mt-9 bg-card/90">
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Want the full picture?
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore more projects or get in touch — always happy to chat.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/projects">View all projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>

      <div className="main-container" />
    </main>
  );
}
