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

      {/* Featured Projects with Asymmetric Layout */}
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
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Featured Project - Takes 7 columns */}
          {PROJECTS[0] && (
            <motion.div
              key={PROJECTS[0].id}
              variants={itemVariants}
              className="lg:col-span-7"
            >
              <TiltCard>
                <Card className="group h-full overflow-hidden rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15 relative">
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-foreground text-background font-semibold px-3 py-1 rounded-full text-xs shadow-lg">
                      Featured
                    </Badge>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-bento">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      src={PROJECTS[0].image}
                      alt={PROJECTS[0].imgAlt}
                      fill
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Border glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-t-bento ring-1 ring-inset ring-foreground/10" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {PROJECTS[0].name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {PROJECTS[0].headerDescription}
                    </p>
                    {PROJECTS[0].metrics && (
                      <div className="mt-5 flex gap-3">
                        {PROJECTS[0].metrics
                          .slice(0, 2)
                          .map((m: string, i: number) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 border border-border bg-muted/20 px-4 py-2.5 text-xs text-muted-foreground rounded-bento-inner"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {m}
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {PROJECTS[0].technologies?.map((t: string, i: number) => (
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
                      {PROJECTS[0].website && (
                        <Button size="sm" className="rounded-full" asChild>
                          <a
                            href={PROJECTS[0].website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {PROJECTS[0].github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          asChild
                        >
                          <a
                            href={PROJECTS[0].github}
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
          )}

          {/* Secondary Project - Takes 5 columns, compact style */}
          {PROJECTS[1] && (
            <motion.div
              key={PROJECTS[1].id}
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <TiltCard>
                <Card className="group h-full overflow-hidden rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-bento">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      src={PROJECTS[1].image}
                      alt={PROJECTS[1].imgAlt}
                      fill
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {PROJECTS[1].name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {PROJECTS[1].headerDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {PROJECTS[1].technologies
                        ?.slice(0, 4)
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
                    <div className="mt-5 flex gap-3">
                      {PROJECTS[1].website && (
                        <Button size="sm" className="rounded-full" asChild>
                          <a
                            href={PROJECTS[1].website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {PROJECTS[1].github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          asChild
                        >
                          <a
                            href={PROJECTS[1].github}
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
          )}
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
