"use client";
import Image from "next/image";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/projects";
import { useState } from "react";

const Page = () => {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState<'All' | 'Web' | 'Tools'>('All');

  const handleClick = (project: any) => {
    setSelectedProject(project);
    setOpened(true);
  };

  return (
    <div className="main-container" id="projects">
      <Sheet open={opened} onOpenChange={setOpened}>
        <SheetContent
          side="right"
          className="w-[500px] sm:max-w-[500px] bg-card text-foreground border-l border-border overflow-y-auto"
        >
          {selectedProject && (
            <div className="drawer-content pt-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">{selectedProject?.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedProject?.headerDescription}</p>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden border border-border">
                <Image src={selectedProject?.image} alt={selectedProject?.headerDescription} />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-medium">About</h3>
                <p className="text-sm text-muted-foreground">{selectedProject?.description}</p>
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-medium">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map((t: string, i: number) => (
                    <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-1">
                <h3 className="text-lg font-medium">Website</h3>
                <a rel="noopener noreferrer" target="_blank" href={selectedProject?.website} className="text-sm text-primary underline hover:text-primary/80">
                  {selectedProject?.website}
                </a>
              </div>
              <div className="mt-6 space-y-1">
                <h3 className="text-lg font-medium">GitHub</h3>
                {selectedProject?.github ? (
                  <a rel="noopener noreferrer" target="_blank" href={selectedProject?.github} className="text-sm text-primary underline hover:text-primary/80">
                    {selectedProject?.github}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Not available</span>
                )}
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
      <div className="content py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Projects</h1>
          <Tabs value={filter} onValueChange={(v) => setFilter(v as 'All' | 'Web' | 'Tools')}>
            <TabsList className="bg-card/90">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Web">Web</TabsTrigger>
              <TabsTrigger value="Tools">Tools</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.filter(p => filter === 'All' ? true : p.category === filter).map((project) => (
            <Card
              key={project.id}
              className="group bg-card/90 backdrop-blur-[2px] hover:-translate-y-0.5 transition-transform cursor-pointer overflow-hidden"
              onClick={() => handleClick(project)}
            >
              <div className="relative">
                <Image src={project.image} alt={project.imgAlt} />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-medium text-white">{project.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.headerDescription}</p>
                {project.metrics && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    {project.metrics.slice(0, 2).map((m: string, i: number) => (
                      <div key={i} className="rounded-md border border-border bg-background/50 px-2 py-1">{m}</div>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((t: string, i: number) => (
                    <Badge key={i} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.website && (
                    <Button size="sm" asChild>
                      <a href={project.website} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Source
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
