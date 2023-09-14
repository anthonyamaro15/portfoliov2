"use client";
import { Burger, Drawer } from "@mantine/core";
import { GiAzulFlake } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import "../navbar/navbar.scss";
import { LINKS } from "@/config/routes";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const label = open ? "Close menu" : "Open menu";
  const pathname = usePathname();

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbar mobile">
      <div className="top-side">
        <span>
          <GiAzulFlake />
        </span>
        <div>
          <Burger
            color="white"
            opened={open}
            onClick={handleClose}
            aria-label={label}
          />
        </div>

        <Drawer
          size="100%"
          closeButtonProps={{ iconSize: "2rem" }}
          opened={open}
          onClose={handleClose}
          title={null}
        >
          <div className="bottom-side">
            {LINKS.map((link) => (
              <Link
                className={pathname === link.path ? "active" : ""}
                key={link.path}
                href={link.path}
                onClick={handleClose}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default MobileNavbar;
