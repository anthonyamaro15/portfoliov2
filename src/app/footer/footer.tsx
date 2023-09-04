"use client";

import "./footer.scss";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { useMediaQuery } from "@mantine/hooks";
import { RESOURCES } from "@/config/resources";
const { github, twitter, linkedin, email } = RESOURCES;
const Footer = () => {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <footer>
      <div className="left-footer">
        <a
          aria-label="My Github profile"
          rel="noopener noreferrer"
          target="_blank"
          href={github}
        >
          {" "}
          <span>
            <FiGithub />
          </span>{" "}
        </a>
        <a
          aria-label="My LinkedIn profile"
          rel="noopener noreferrer"
          target="_blank"
          href={linkedin}
        >
          <span>
            <FaLinkedinIn />
          </span>{" "}
        </a>
        <a
          aria-label="My Twitter profile"
          rel="noopener noreferrer"
          target="_blank"
          href={twitter}
        >
          <span>
            <FiTwitter />
          </span>{" "}
        </a>
        <div className="line"></div>
      </div>

      <div className="right-footer">
        {!matches && (
          <>
            <span>{email}</span>
            <div className="line"></div>
          </>
        )}
      </div>
    </footer>
  );
};
export default Footer;
