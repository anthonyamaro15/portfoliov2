"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import MobileNavbar from "../mobileNav/mobileNav";
import { LINKS } from "@/config/routes";

const Navbar = () => {
  const matches = useMediaQuery("(max-width: 650px)");
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  if (matches === undefined) return null;

  return (
    <>
      {!matches && (
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50 nav-blur h-16 md:h-[72px]"
        >
          <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-3 md:py-4 h-full grid grid-cols-3 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground group"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-bento-inner bg-foreground text-background font-bold text-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                AA
              </motion.span>
              <span className="font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground/80">
                Anthony Amaro
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center justify-center gap-1">
              {LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-3 py-2 text-sm transition-colors duration-300 ${
                    pathname === link.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  {pathname === link.path && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-full bg-foreground/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center justify-end">
              <Button size="sm" className="rounded-full" asChild>
                <Link href="/blogs">Blogs</Link>
              </Button>
            </div>
          </div>
        </motion.nav>
      )}
      {matches && <MobileNavbar />}
    </>
  );
};

export default Navbar;
