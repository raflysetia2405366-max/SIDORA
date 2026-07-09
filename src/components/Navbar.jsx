import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo-sidora.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (

    <header className="navbar">

      {/* ================= LOGO ================= */}

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

      {/* ================= MENU BUTTON ================= */}

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* ================= MENU ================= */}

      <nav
        className={`navbar-menu ${menuOpen ? "active" : ""}`}
      >

        <NavLink
          to="/map"
          onClick={closeMenu}
        >
          Peta
        </NavLink>

      </nav>

    </header>

  );

}

export default Navbar;