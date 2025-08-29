"use client";
import Image from "next/image";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PROJECTS } from "@/config/projects";
import { useState } from "react";
import TagsComponent from "../../components/tags/tags";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState<'All' | 'Web' | 'Tools'>('All');

  const handleClick = (project: any) => {
    setSelectedProject(project);
    open();
  };

  return (
    <div className="main-container" id="projects">
      <Drawer
        className="drawer-container"
        size="500px"
        padding="2rem"
        opened={opened}
        onClose={close}
        title={null}
        position="right"
        overlayProps={{ color: '#000', opacity: 0.7, blur: 4 }}
        classNames={{ content: 'bg-[var(--color-card)] text-[var(--color-fg)] border border-[var(--color-border)]' }}
      >
        {selectedProject && (
          <div className="drawer-content text-slate-200">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{selectedProject?.name}</h2>
              <p className="text-sm text-slate-300">{selectedProject?.headerDescription}</p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-800">
              <Image src={selectedProject?.image} alt={selectedProject?.headerDescription} />
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-medium">About</h3>
              <p className="text-sm text-slate-300">{selectedProject?.description}</p>
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-medium">Technologies</h3>
              <TagsComponent size="sm" data={selectedProject?.technologies} />
            </div>
            <div className="mt-6 space-y-1">
              <h3 className="text-lg font-medium">Website</h3>
              <a rel="noopener noreferrer" target="_blank" href={selectedProject?.website} className="text-sm text-[var(--color-accent)] underline">
                {selectedProject?.website}
              </a>
            </div>
            <div className="mt-6 space-y-1">
              <h3 className="text-lg font-medium">GitHub</h3>
              {selectedProject?.github ? (
                <a rel="noopener noreferrer" target="_blank" href={selectedProject?.github} className="text-sm text-[var(--color-accent)] underline">
                  {selectedProject?.github}
                </a>
              ) : (
                <span className="text-sm text-slate-500">Not available</span>
              )}
            </div>
          </div>
        )}
      </Drawer>
      <div className="content py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Projects</h1>
          <div role="tablist" aria-label="Project filters" className="inline-flex rounded-md border border-[var(--color-border)] bg-[var(--color-card)]/90 p-1 text-sm">
            {(['All','Web','Tools'] as const).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={filter === tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded ${filter === tab ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                style={filter === tab ? { backgroundColor: 'rgba(12,15,20,0.9)' } : undefined}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.filter(p => filter === 'All' ? true : p.category === filter).map((project) => (
            <button
              key={project.id}
              className="group text-left rounded-xl overflow-hidden border border-[var(--color-border)] shadow-card bg-[var(--color-card)]/90 backdrop-blur-[2px] hover:-translate-y-0.5 transition-transform"
              onClick={() => handleClick(project)}
            >
              <div className="relative">
                <Image src={project.image} alt={project.imgAlt} />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium text-white">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{project.headerDescription}</p>
                {project.metrics && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-400">
                    {project.metrics.slice(0, 2).map((m: string, i: number) => (
                      <div key={i} className="rounded-md border border-borderD bg-slate-900/50 px-2 py-1">{m}</div>
                    ))}
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 4).map((t: string, i: number) => (
                    <span key={i} className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded border border-[var(--color-border)] text-slate-300 bg-slate-800/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium transition focus:outline-none text-white" style={{ backgroundColor: 'var(--accent)' }}>
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-medium hover:bg-slate-800 transition">
                      Source
                    </a>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
