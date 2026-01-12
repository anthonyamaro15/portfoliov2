"use client";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { RESOURCES } from "@/config/resources";

const { github, twitter, linkedin, email } = RESOURCES;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-border relative bg-background">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Anthony Amaro — <a href={`mailto:${email}`} className="underline hover:text-foreground transition-colors duration-200">{email}</a>
        </p>
        <nav aria-label="Social links" className="flex items-center gap-4 text-muted-foreground">
          <a aria-label="GitHub" href={github} target="_blank" rel="noopener noreferrer" className="p-2 transition-all duration-300 hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-foreground/5">
            <FiGithub className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 transition-all duration-300 hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-foreground/5">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href={twitter} target="_blank" rel="noopener noreferrer" className="p-2 transition-all duration-300 hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-foreground/5">
            <FiTwitter className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
