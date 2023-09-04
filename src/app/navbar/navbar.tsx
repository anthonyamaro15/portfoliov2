"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import { GiAzulFlake } from "react-icons/gi";
import MobileNavbar from "../mobileNav/mobileNav";
import { LINKS } from "@/config/routes";
import "./navbar.scss";

const Navbar = () => {
  const matches = useMediaQuery("(max-width: 650px)");
  const pathname = usePathname();

  return (
    <>
      {!matches && (
        <nav className="navbar">
          <div className="left-side">
            <span>
              <GiAzulFlake />
            </span>
          </div>
          <div className="right-side">
            {LINKS.map((link) => (
              <Link
                className={pathname === link.path ? "active" : ""}
                key={link.path}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
      {matches && <MobileNavbar />}
    </>
  );
};

export default Navbar;
