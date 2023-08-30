import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/experience">Experience</Link>

      <Link href="/projects">projects</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
};

export default Navbar;
