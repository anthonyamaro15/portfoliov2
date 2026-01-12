"use client";

import { motion } from "framer-motion";
import { Hero, SectionHeading, Section } from "@/components";
import {
  BentoGrid,
  BentoCard,
  containerVariants,
  itemVariants,
} from "@/components/ui/bento-grid";
import { TiltCard } from "@/components/ui/tilt-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/config/projects";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

// Capability data
const capabilities = [
  {
    title: "Frontend",
    description:
      "Building performant, accessible user interfaces with modern React patterns.",
    icon: "</>" ,
    techs: ["React", "Next.js", "TypeScript", "Tailwind", "A11y"],
    large: true,
  },
  {
    title: "Backend & Data",
    techs: ["Node.js", "REST/GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    techs: ["Vercel", "AWS", "Azure", "Docker", "GitHub Actions"],
  },
  {
    title: "Systems & Tools",
    techs: ["Rust", "Playwright", "Vitest/Jest", "ArcGIS SDK"],
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Capabilities - Bento Grid */}
      <Section className="pt-0 mt-20" id="capabilities">
        <SectionHeading
          eyebrow="Highlights"
          title="Capabilities at a glance"
          subtitle="A pragmatic toolkit across frontend, backend, and systems."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <BentoGrid className="mt-10">
            {/* Large Frontend Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 md:col-span-3 lg:col-span-6 row-span-2"
            >
              <BentoCard className="h-full" colSpan={3} rowSpan={2}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-bento-inner bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center mb-4">
                      <span className="text-xl font-mono text-foreground/80">
                        {"</>"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Frontend
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Building performant, accessible user interfaces with
                      modern React patterns and component-driven architecture.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {capabilities[0].techs.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs rounded-full"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Decorative gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-foreground/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </BentoCard>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 md:col-span-3 lg:col-span-3"
            >
              <BentoCard className="h-full" colSpan={2}>
                <div className="w-10 h-10 rounded-bento-inner bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center mb-3">
                  <span className="text-sm">⚡</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  Backend & Data
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capabilities[1].techs.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs rounded-full"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Cloud Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 md:col-span-3 lg:col-span-3"
            >
              <BentoCard className="h-full" colSpan={2}>
                <div className="w-10 h-10 rounded-bento-inner bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center mb-3">
                  <span className="text-sm">☁️</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  Cloud & DevOps
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {capabilities[2].techs.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="text-xs rounded-full"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </BentoCard>
            </motion.div>

            {/* Systems Card */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 md:col-span-6 lg:col-span-6"
            >
              <BentoCard className="h-full" colSpan={3}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-bento-inner bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center shrink-0">
                    <span className="text-sm">🦀</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Systems & Tools
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {capabilities[3].techs.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="text-xs rounded-full"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          </BentoGrid>
        </motion.div>
      </Section>

      {/* Featured Projects with Tilt Cards */}
      <Section className="mt-16" id="projects">
        <SectionHeading
          eyebrow="Featured"
          title="Recent projects"
          subtitle="Outcome-driven work with clean UX and pragmatic engineering."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.slice(0, 2).map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard>
                <Card className="group overflow-hidden rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-bento">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      src={project.image}
                      alt={project.imgAlt}
                      fill
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.headerDescription}
                    </p>
                    {project.metrics && (
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {project.metrics.slice(0, 2).map((m: string, i: number) => (
                          <div
                            key={i}
                            className="border border-border bg-muted/20 px-3 py-2 text-xs text-muted-foreground rounded-bento-inner"
                          >
                            {m}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies
                        ?.slice(0, 5)
                        .map((t: string, i: number) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs rounded-full"
                          >
                            {t}
                          </Badge>
                        ))}
                    </div>
                    <div className="mt-6 flex gap-3">
                      {project.website && (
                        <Button size="sm" className="rounded-full" asChild>
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          asChild
                        >
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
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="rounded-bento border-2 border-border overflow-hidden relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.02] via-transparent to-foreground/[0.02] pointer-events-none" />
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Want the full picture?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Explore more projects or get in touch — always happy to chat.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Button className="rounded-full px-6" asChild>
                  <Link href="/projects">View all projects</Link>
                </Button>
                <Button variant="outline" className="rounded-full px-6" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </main>
  );
}
