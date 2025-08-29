"use client";
import { Hero, SectionHeading, Section, Badge, Card } from "@/components";
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
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5">
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
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5">
            <h3 className="text-sm font-semibold text-white">Backend & Data</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Node.js", "REST/GraphQL", "PostgreSQL", "Prisma"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5">
            <h3 className="text-sm font-semibold text-white">Cloud & DevOps</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Vercel",
                "AWS",
                "Azure",
                "Docker",
                "CI/CD (GitHub Actions)",
              ].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-5">
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
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
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
              className="bg-opacity-90 hover:-translate-y-0.5 transition-transform"
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
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  {project.headerDescription}
                </p>
                {project.metrics && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-400">
                    {project.metrics.slice(0, 2).map((m: string, i: number) => (
                      <div
                        key={i}
                        className="rounded-md border border-borderD bg-slate-900/50 px-2 py-1"
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
                      <Badge key={i}>{t}</Badge>
                    ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-white text-slate-900 px-3 py-1.5 text-xs font-medium shadow hover:opacity-90 transition"
                    >
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium hover:bg-slate-800 transition"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mt-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/90 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Want the full picture?
            </h3>
            <p className="text-sm text-slate-300">
              Explore more projects or get in touch — always happy to chat.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none text-white"
              style={{ backgroundColor: "var(--accent)" }}
            >
              View all projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-800 transition focus:outline-none"
            >
              Contact
            </Link>
          </div>
        </div>
      </Section>

      <div className="main-container" />
    </main>
  );
}
