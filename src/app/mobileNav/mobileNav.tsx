"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { GiAzulFlake } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LINKS } from "@/config/routes";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const label = open ? "Close menu" : "Open menu";
  const pathname = usePathname();

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-surface/60 border-b border-borderD">
      <div className="main-container flex items-center justify-between py-3">
        <span className="text-2xl text-slate-100"><GiAzulFlake /></span>
        <button
          onClick={handleToggle}
          aria-label={label}
          aria-expanded={open}
          className="p-2 text-slate-100 hover:text-white transition-colors"
        >
          {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-full bg-[var(--color-card)] text-[var(--color-fg)] border-l border-[var(--color-border)]"
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
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavbar;
