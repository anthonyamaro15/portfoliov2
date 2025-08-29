"use client";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PROJECTS } from "@/config/projects";
import { useState } from "react";
import TagsComponent from "../../components/tags/tags";
import "./projects.scss";

const Page = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleClick = (project: any) => {
    setSelectedProject(project);
    open();
  };

  return (
    <div className="main-container">
      <JsonLd
        id="ld-breadcrumb-projects"
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.anthonyamaro.dev/" },
            { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.anthonyamaro.dev/projects" },
          ],
        }}
      />
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
          <div className="drawer-content">
            <div className="drawer-description-container">
              <h2>{selectedProject?.name}</h2>
              <p>{selectedProject?.headerDescription}</p>
            </div>
            <div className="project drawer-single-project">
              <Image
                src={selectedProject?.image}
                alt={selectedProject?.headerDescription}
              />
            </div>

            <div className="drawer-description-container">
              <h3>about</h3>
              <p>{selectedProject?.description}</p>
            </div>

            <div className="drawer-description-container">
              <h3>Technologies</h3>
              <TagsComponent size="sm" data={selectedProject?.technologies} />
            </div>

            <div className="drawer-description-container">
              <h3>Website</h3>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={selectedProject?.website}
              >
                {selectedProject?.website}
              </a>
            </div>
            <div className="drawer-description-container">
              <h3>github</h3>
              {selectedProject?.github && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={selectedProject?.github}
                >
                  {selectedProject?.github}
                </a>
              )}
              {!selectedProject?.github && (
                <span className="not-found">Not available</span>
              )}
            </div>
          </div>
        )}
      </Drawer>
      <div className="content projects">
        <h1>Some Things I've built</h1>

        <div className="projects-container">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project"
              role="button"
              onClick={() => handleClick(project)}
            >
              <Image src={project.image} alt={project.imgAlt} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Page;
