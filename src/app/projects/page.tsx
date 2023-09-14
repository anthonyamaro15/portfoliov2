"use client";

import Footer from "../footer/footer";
import Image from "next/image";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { PROJECTS } from "@/config/projects";
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
      <Drawer
        className="drawer-container"
        size="500px"
        padding="2rem"
        opened={opened}
        onClose={close}
        title={null}
        position="right"
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
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={selectedProject?.github}
              >
                {selectedProject?.github}
              </a>
            </div>
          </div>
        )}
      </Drawer>
      <div className="content projects">
        <h1>Some Things I've built</h1>

        <div className="projects-container">
          <p>Projects comming soon!</p>

          {/* {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project"
              role="button"
              onClick={() => handleClick(project)}
            >
              <Image src={project.image} alt="Picture of the author" />
            </div>
          ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
