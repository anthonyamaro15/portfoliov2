import Link from "next/link";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <Link href="/">Home</Link>
      </div>

      <div className="right-side">
        <Link href="/experience">Experience</Link>

        <Link href="/projects">projects</Link>
        <Link href="/contact">contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
