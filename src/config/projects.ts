import portfolioImg from "../../public/portfoliov1.png";
import fileFinderImg from "../assets/file-finder.png";

export const PROJECTS = [
  {
    id: "file-finder-rust",
    name: "File Finder (Rust)",
    category: "Tools",
    headerDescription: "A fast and efficient file finder built in Rust",
    description:
      "I built this project to speed up my workflow when navigating large directories. Traditional file explorers felt slow and clunky, so I decided to create a lightweight TUI (Terminal User Interface) tool in Rust. I actually use it on a daily basis to quickly search, preview, and open files directly from the terminal. This project helped me deepen my Rust skills and explore performance-focused development.",
    technologies: ["Rust", "Crossterm", "Ratatui"],
    metrics: ["Instant search", "TUI workflow"],
    website: "", // optional if you don’t have a demo site for it
    github: "https://github.com/anthonyamaro15/file-finder-rust",
    image: fileFinderImg, // replace with actual image import
    imgAlt: "File Finder Rust TUI preview",
  },
  {
    id: "portfolio-v1",
    name: "Portfolio version one",
    category: "Web",
    headerDescription: "My first portfolio website",
    description: "I built this website to showcase my projects and experience.",
    technologies: ["React", "SCSS", "JavaScript"],
    metrics: ["95+ Lighthouse", "Static site"],
    website: "https://glowing-starburst-c9b86c.netlify.app/",
    github: "https://github.com/anthonyamaro15/portfolio",
    image: portfolioImg,
    imgAlt: "Portfolio v1 main page",
  },
];
