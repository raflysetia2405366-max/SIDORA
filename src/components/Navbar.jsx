import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="navbar-left">
        <div className="logo-circle">🌍</div>

        <div className="logo-text">
          <h1>SIDORA</h1>
          <span>Sistem Informasi Desa Donowarih</span>
        </div>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav
      className={`navbar-menu ${menuOpen ? "open" : ""}`}
      onClick={closeMenu}
      >

        <NavLink to="/" onClick={closeMenu}>
          Dashboard
        </NavLink>

        <NavLink to="/map" onClick={closeMenu}>
          Peta
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          Profil Desa
        </NavLink>

        <NavLink to="/potensi" onClick={closeMenu}>
          Potensi
        </NavLink>

        <NavLink to="/pelayanan" onClick={closeMenu}>
          Pelayanan
        </NavLink>

        <NavLink to="/tentang" onClick={closeMenu}>
          Tentang
        </NavLink>

      </nav>

      <div className="navbar-right">
        <div className="online-dot"></div>
        <span>Online</span>
      </div>

    </header>
  );
}

export default Navbar;