import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="logo-circle">
          🌍
        </div>

        <div>

          <h1>SIDORA</h1>

          <span>
            Sistem Informasi Desa Donowarih
          </span>

        </div>

      </div>

      <nav className="navbar-menu">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Peta
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Profil Desa
        </NavLink>

        <NavLink
          to="/potensi"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Potensi
        </NavLink>

        <NavLink
          to="/pelayanan"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Pelayanan
        </NavLink>

        <NavLink
          to="/tentang"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
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