
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        RADEBE GUTTER
        <span>SOLUTION</span>
      </Link>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <a href="tel:0796322508" className="nav-call">
        <Phone size={17} />
        079 632 2508
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
