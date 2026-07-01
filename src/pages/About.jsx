import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <div className="hero-card">

        <h1>SIDORA</h1>

        <h3>Sistem Informasi Desa Donowarih</h3>

        <p>
          SIDORA merupakan Sistem Informasi Desa berbasis WebGIS
          yang dikembangkan sebagai media digital untuk membantu
          Pemerintah Desa Donowarih dalam menyajikan informasi desa
          secara interaktif, akurat, dan mudah diakses oleh masyarakat.
          Melalui SIDORA, masyarakat dapat memperoleh informasi mengenai
          profil desa, batas wilayah, potensi desa, hingga pelayanan
          pemerintahan dalam satu platform digital.
        </p>

      </div>

      {/* ================= GRID ================= */}

      <div className="about-grid">

        <div className="about-card">

          <h2>Tujuan SIDORA</h2>

          <ul>

            <li>Menyediakan informasi desa secara digital.</li>

            <li>Menampilkan peta interaktif berbasis WebGIS.</li>

            <li>Mempermudah masyarakat memperoleh informasi desa.</li>

            <li>Mendukung digitalisasi pelayanan Pemerintah Desa Donowarih.</li>

          </ul>

        </div>

        <div className="about-card">

          <h2>Fitur SIDORA</h2>

          <ul>

            <li>Peta Interaktif Desa</li>

            <li>Profil Desa</li>

            <li>Potensi Desa</li>

            <li>Pelayanan Desa</li>

            <li>Informasi Wisata</li>

            <li>Visualisasi Batas Administrasi Dusun</li>

          </ul>

        </div>

      </div>

      {/* ================= PENGEMBANG ================= */}

      <div className="developer-card">

        <h2>Informasi Pengembangan</h2>

        <table>

          <tbody>

            <tr>
              <td>Universitas</td>
              <td>Universitas Negeri Malang</td>
            </tr>

            <tr>
              <td>Program</td>
              <td>KKN Reguler 2026</td>
            </tr>

            <tr>
              <td>Lokasi</td>
              <td>Desa Donowarih, Kecamatan Karangploso</td>
            </tr>

            <tr>
              <td>Kabupaten</td>
              <td>Malang</td>
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

export default About;