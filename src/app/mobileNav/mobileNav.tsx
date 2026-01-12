"use client";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
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
    <nav className="sticky top-0 z-50 nav-blur border-b border-border">
      <div className="main-container flex items-center justify-between py-3">
        {/* Match desktop branding */}
        <div className="flex items-center gap-2 text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center bg-foreground text-background font-bold text-sm">
            AA
          </span>
          <span className="font-semibold tracking-tight">
            Anthony Amaro
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          aria-label={label}
          aria-expanded={open}
        >
          {open ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-full bg-background text-foreground border-l border-border"
        >
          <div className="min-h-[60vh] flex flex-col items-center justify-center gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={handleClose}
                className={`text-2xl font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button size="lg" asChild className="mt-4">
              <Link href="/blogs" onClick={handleClose}>Blogs</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavbar;
