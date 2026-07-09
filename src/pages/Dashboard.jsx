import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

import previewMap from "../assets/preview-map.png";

function Dashboard() {

  const navigate = useNavigate();

  return (

    <div className="dashboard">

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">

            WEBGIS DESA DONOWARIH

          </span>

          <h1>

            SIDORA

          </h1>

          <h3>

            Sistem Informasi Desa Donowarih

          </h3>

          <p>

            Platform digital berbasis WebGIS yang digunakan
            untuk menyajikan informasi wilayah,
            batas administrasi,
            profil desa,
            serta potensi Desa Donowarih
            secara interaktif.

          </p>

          <div className="hero-button">

            <button
              onClick={() => navigate("/map")}
            >

              Jelajahi Peta

            </button>

          </div>

        </div>

      </section>

      {/* ================= STATISTIK ================= */}

      <section className="statistics">

        <div className="stat-card">

          <h2>4</h2>

          <span>Dusun</span>

        </div>

        <div className="stat-card">

          <h2>52</h2>

          <span>RT</span>

        </div>

        <div className="stat-card">

          <h2>12</h2>

          <span>RW</span>

        </div>

        <div className="stat-card">

          <h2>1298 Ha</h2>

          <span>Luas Wilayah</span>

        </div>

      </section>

      {/* ================= MAP PREVIEW ================= */}

      <section className="preview-section">

        <div className="section-title">

          <div>

            <h2>

              Preview Peta Administrasi

            </h2>

            <p>

              Hasil digitasi wilayah Desa Donowarih menggunakan QGIS.

            </p>

          </div>

          <button
            onClick={() => navigate("/map")}
          >

            Buka Peta →

          </button>

        </div>

        <div className="preview-map">

          <img
            src={previewMap}
            alt="Preview Map"
          />

        </div>

      </section>

    </div>

  );

}

export default Dashboard;
// test