import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">

          {/* Logo / Brand */}
          <a href="#top" className="brand" onClick={closeMenu}>
            MGGS <span>/</span> 26
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#tools" onClick={closeMenu}>
              Tools
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#work" onClick={closeMenu}>
              Work
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          {/* Desktop Type */}
          <div className="nav-type">
            creative direction | strategy
          </div>

          {/* Mobile Burger */}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#tools" onClick={closeMenu}>
            Tools
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <div className="mobile-menu-footer">
            <span>MGGS / 26</span>
            <span>GRAPHICS · FILM</span>
          </div>

        </div>
      </div>
    </>
  );
}