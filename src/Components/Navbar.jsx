import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "My Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>

      <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`nav-link ${
              location.pathname === link.path ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
            <span className="nav-underline"></span>
          </Link>
        ))}
      </div>

      <Link
        to="/contact"
        className="nav-cta"
        onClick={() => setMenuOpen(false)}
      >
        Let's Talk <span>↗</span>
      </Link>
    </nav>
  );
};

export default Navbar;