import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo-sidora.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (

    <header className="navbar">

      <div className="navbar-brand">

        <img
          src={logo}
          alt="SIDORA"
          className="navbar-logo"
        />

        <div className="brand-text">

          <h1>SIDORA</h1>

          <span>Sistem Informasi Desa Donowarih</span>

        </div>

      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav
        className={`navbar-menu ${menuOpen ? "active" : ""}`}
      >

        <NavLink to="/" onClick={closeMenu}>
          Dashboard
        </NavLink>

        <NavLink to="/map" onClick={closeMenu}>
          Peta
        </NavLink>

        <NavLink to="/profile" onClick={closeMenu}>
          Profil
        </NavLink>

        <NavLink to="/potential" onClick={closeMenu}>
          Potensi
        </NavLink>

        <NavLink to="/service" onClick={closeMenu}>
          Pelayanan
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          Tentang
        </NavLink>

      </nav>

    </header>

  );

}

export default Navbar;