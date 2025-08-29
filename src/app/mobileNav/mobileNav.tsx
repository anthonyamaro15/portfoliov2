"use client";
import { Burger, Drawer } from "@mantine/core";
import { GiAzulFlake } from "react-icons/gi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LINKS } from "@/config/routes";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const label = open ? "Close menu" : "Open menu";
  const pathname = usePathname();

  const handleClose = () => setOpen(!open);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-surface/60 border-b border-borderD">
      <div className="main-container flex items-center justify-between py-3">
        <span className="text-2xl text-slate-100"><GiAzulFlake /></span>
        <Burger color="currentColor" opened={open} onClick={handleClose} aria-label={label} />
      </div>

      <Drawer
        size="100%"
        opened={open}
        onClose={handleClose}
        title={null}
        overlayProps={{ color: '#000', opacity: 0.7, blur: 4 }}
        classNames={{ content: 'bg-[var(--color-card)] text-[var(--color-fg)] border border-[var(--color-border)]' }}
      >
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={handleClose}
              className={`${pathname === link.path ? 'text-white' : 'text-slate-300'} text-xl`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </nav>
  );
};

export default MobileNavbar;
