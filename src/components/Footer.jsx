import { Globe } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">

        <h2><Globe size={26} /> SIDORA</h2>

        <p>
          Sistem Informasi Desa Donowarih
        </p>

      </div>

      <div className="footer-center">

        <span>
          Universitas Negeri Malang Belajar Bersama Masyarakat (UMBBM) Kelompok 2 
        </span>

      </div>

      <div className="footer-right">

        <span>© 2026 SIDORA</span>

      </div>

    </footer>
  );
}

export default Footer;