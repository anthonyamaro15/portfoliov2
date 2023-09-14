import portfolioImg from "../../public/portfoliov1.png";
import iucnImg from "../assets/iucn.png";

export const PROJECTS = [
  {
    id: "portfolio-v1",
    name: "Portfolio version one",
    headerDescription: "My first portfolio website",
    description: "I built this website to showcase my projects and experience.",
    technologies: ["React", "SCSS", "JavaScript"],
    website: "https://glowing-starburst-c9b86c.netlify.app/",
    github: "https://github.com/anthonyamaro15/portfolio",
    image: portfolioImg,
    imgAlt: "Portfolio v1 main page",
  },
  {
    id: "iucn",
    name: "IUCN Contributions for Nature",
    headerDescription:
      "Online tool quantifies contributions to global goals for nature",
    description:
      "IUCN (International Union for Conservation of Nature) presents the IUCN Contributions for Nature Platform. This online tool provides governments, civil society and Indigenous Peoples Organisations with a simple way to measure potential contributions from specific actions in specific places towards global biodiversity and climate goals.",
    technologies: ["React", "TypeScript", "SCSS", "Arcgis SDK JS"],
    website: "https://www.iucncontributionsfornature.org/",
    github: null,
    image: iucnImg,
    imgAlt: "IUCN Contributions for Nature",
  },
];
