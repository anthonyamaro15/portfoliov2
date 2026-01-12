"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { PROJECTS } from "@/config/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Page = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState<"All" | "Web" | "Tools">("All");

  const handleClick = (project: any) => {
    setSelectedProject(project);
    setOpened(true);
  };

  const filteredProjects = PROJECTS.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <div className="main-container" id="projects">
      <Sheet open={opened} onOpenChange={setOpened}>
        <SheetContent
          side="right"
          className="w-[500px] sm:max-w-[500px] bg-card text-foreground border-l border-border overflow-y-auto rounded-l-bento"
        >
          {selectedProject && (
            <div className="drawer-content pt-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">
                  {selectedProject?.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedProject?.headerDescription}
                </p>
              </div>
              <div className="mt-4 rounded-bento overflow-hidden border border-border">
                <Image
                  src={selectedProject?.image}
                  alt={selectedProject?.headerDescription}
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-medium">About</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProject?.description}
                </p>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-medium">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map(
                    (t: string, i: number) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs rounded-full"
                      >
                        {t}
                      </Badge>
                    )
                  )}
                </div>
              </div>
              {selectedProject?.website && (
                <div className="mt-6 space-y-1">
                  <h3 className="text-lg font-medium">Website</h3>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={selectedProject?.website}
                    className="text-sm text-primary underline hover:text-primary/80"
                  >
                    {selectedProject?.website}
                  </a>
                </div>
              )}
              <div className="mt-6 space-y-1">
                <h3 className="text-lg font-medium">GitHub</h3>
                {selectedProject?.github ? (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={selectedProject?.github}
                    className="text-sm text-primary underline hover:text-primary/80"
                  >
                    {selectedProject?.github}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Not available
                  </span>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <div className="content py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
            Projects
          </h1>
          <Tabs
            value={filter}
            onValueChange={(v) => setFilter(v as "All" | "Web" | "Tools")}
          >
            <TabsList className="rounded-full">
              <TabsTrigger value="All" className="rounded-full">
                All
              </TabsTrigger>
              <TabsTrigger value="Web" className="rounded-full">
                Web
              </TabsTrigger>
              <TabsTrigger value="Tools" className="rounded-full">
                Tools
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard tiltAmount={6}>
                <Card
                  className="group overflow-hidden cursor-pointer rounded-bento transition-all duration-400 hover:shadow-[var(--shadow-card-hover)] hover:border-foreground/15"
                  onClick={() => handleClick(project)}
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-bento">
                    <Image
                      src={project.image}
                      alt={project.imgAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.headerDescription}
                    </p>
                    {project.metrics && (
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {project.metrics
                          .slice(0, 2)
                          .map((m: string, i: number) => (
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
                    <div
                      className="mt-6 flex gap-3"
                      onClick={(e) => e.stopPropagation()}
                    >
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
      </div>
    </div>
  );
};

export default Page;
