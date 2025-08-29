"use client";

import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { RESOURCES } from "@/config/resources";

const { github, twitter, linkedin, email } = RESOURCES;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-surface-strong)' }}>
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          © {year} Anthony Amaro — <a href={`mailto:${email}`} className="underline">{email}</a>
        </p>
        <nav aria-label="Social links" className="flex items-center gap-4 text-slate-400">
          <a aria-label="GitHub" href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FiGithub className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a aria-label="Twitter" href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FiTwitter className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
