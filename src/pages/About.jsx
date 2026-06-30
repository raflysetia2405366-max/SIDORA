import "./About.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-header">

        <h1>🌍 SIDORA</h1>

        <h3>Sistem Informasi Desa Donowarih</h3>

        <p>
          SIDORA merupakan aplikasi WebGIS yang dikembangkan
          untuk membantu Pemerintah Desa Donowarih dalam
          menyajikan informasi desa secara digital melalui
          peta interaktif. Sistem ini diharapkan mampu
          mempermudah masyarakat memperoleh informasi wilayah,
          profil desa, potensi desa, serta pelayanan
          pemerintahan secara cepat, akurat, dan mudah diakses.
        </p>

      </div>

      <div className="about-grid">

        <Card
          icon="🎯"
          title="Tujuan"
          text="Menyediakan media informasi desa berbasis WebGIS yang modern, mudah digunakan, dan mendukung digitalisasi pelayanan desa."
        />

        <Card
          icon="🗺️"
          title="Fitur"
          text="Peta Interaktif, Profil Desa, Potensi Desa, Pelayanan, serta visualisasi batas administrasi desa."
        />

        <Card
          icon="💻"
          title="Teknologi"
          text="React, React Leaflet, OpenStreetMap, QGIS, GeoJSON dan Vite."
        />

      </div>

      <div className="developer-card">

        <h2>👨‍🎓 Pengembang</h2>

        <p>
          Sistem ini dikembangkan sebagai bagian dari
          Program Kerja Kuliah Kerja Nyata (KKN)
          Universitas Negeri Malang di Desa Donowarih.
        </p>

        <table>

          <tbody>

            <tr>
              <td>Universitas</td>
              <td>Universitas Negeri Malang</td>
            </tr>

            <tr>
              <td>Program</td>
              <td>KKN Reguler</td>
            </tr>

            <tr>
              <td>Lokasi</td>
              <td>Desa Donowarih</td>
            </tr>

            <tr>
              <td>Nama Sistem</td>
              <td>SIDORA</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="about-card">

      <div className="about-icon">

        {icon}

      </div>

      <h2>{title}</h2>

      <p>{text}</p>

    </div>
  );
}

export default About;