import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo-sidora.png";

function Navbar() {

  return (

    <header className="navbar">

      <Link
        to="/map"
        className="navbar-brand"
      >

        <img
          src={logo}
          alt="SIDORA"
          className="navbar-logo"
        />

        <div className="brand-text">

          <h1>SIDORA</h1>

          <span>Sistem Informasi Desa Donowarih</span>

        </div>

      </Link>

    </header>

  );

}

export default Navbar;