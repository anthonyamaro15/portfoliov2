"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import MobileNavbar from "../mobileNav/mobileNav";
import { LINKS } from "@/config/routes";

const Navbar = () => {
  const matches = useMediaQuery("(max-width: 650px)");
  const pathname = usePathname();

  if (matches === undefined) return null;
  return (
    <>
      {!matches && (
        <nav className="sticky top-0 z-50 nav-blur h-16 md:h-[72px]">
          <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-3 md:py-4 h-full grid grid-cols-3 items-center">
            <div className="flex items-center gap-2 text-slate-100">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-accent)] text-slate-900 font-bold">
                AA
              </span>
              <span className="font-semibold tracking-tight">
                Anthony Amaro
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              {LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-3 py-2 text-sm transition-colors duration-200 ${pathname === link.path ? "text-white" : "text-slate-300 hover:text-white"}`}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  <span className="relative inline-block after:absolute after:left-1 after:right-1 after:-bottom-[2px] after:h-[2px] after:bg-[var(--color-accent)] after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100">
                    {link.name}
                  </span>
                  {pathname === link.path && (
                    <span className="pointer-events-none absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full bg-[var(--color-accent)]" />
                  )}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <Link
                href="/blogs"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Blogs
              </Link>
            </div>
          </div>
        </nav>
      )}
      {matches && <MobileNavbar />}
    </>
  );
};

export default Navbar;
