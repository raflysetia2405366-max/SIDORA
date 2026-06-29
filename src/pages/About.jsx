function About() {
  return (
    <div
      style={{
        background: "#071019",
        minHeight: "100vh",
        padding: "35px",
        color: "white",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "18px",
          padding: "35px",
          marginBottom: "25px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#22c55e",
            fontSize: "40px",
          }}
        >
          🌍 SIDORA
        </h1>

        <h3
          style={{
            color: "#9ca3af",
            marginTop: "10px",
            fontWeight: "500",
          }}
        >
          Sistem Informasi Desa Donowarih
        </h3>

        <p
          style={{
            lineHeight: "32px",
            color: "#d1d5db",
            marginTop: "25px",
          }}
        >
          SIDORA merupakan aplikasi WebGIS yang dikembangkan
          untuk membantu Pemerintah Desa Donowarih dalam
          menyajikan informasi desa secara digital melalui
          peta interaktif. Sistem ini diharapkan mampu
          mempermudah masyarakat dalam memperoleh informasi
          mengenai wilayah, profil desa, potensi desa,
          serta layanan pemerintahan secara cepat,
          akurat, dan mudah diakses.
        </p>
      </div>

      {/* TUJUAN */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        <Card
          icon="🎯"
          title="Tujuan"
          text="Menyediakan media informasi desa berbasis WebGIS yang modern, mudah digunakan, dan mendukung digitalisasi pelayanan desa."
        />

        <Card
          icon="🗺"
          title="Fitur"
          text="Peta Interaktif, Profil Desa, Potensi Desa, Informasi Pelayanan, serta visualisasi batas administrasi desa."
        />

        <Card
          icon="💻"
          title="Teknologi"
          text="React.js, React Leaflet, OpenStreetMap, QGIS, GeoJSON, dan Vite."
        />
      </div>

      {/* TIM */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "18px",
          padding: "30px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#22c55e",
          }}
        >
          👨‍🎓 Pengembang
        </h2>

        <p
          style={{
            lineHeight: "30px",
            color: "#d1d5db",
          }}
        >
          Sistem ini dikembangkan sebagai bagian dari
          Program Kerja Kuliah Kerja Nyata (KKN)
          Universitas Negeri Malang di Desa Donowarih.
        </p>

        <hr
          style={{
            border: "1px solid #1f2937",
            margin: "20px 0",
          }}
        />

        <table
          style={{
            width: "100%",
            color: "#d1d5db",
          }}
        >
          <tbody>

            <tr>
              <td><b>Universitas</b></td>
              <td>Universitas Negeri Malang</td>
            </tr>

            <tr>
              <td><b>Program</b></td>
              <td>KKN Reguler</td>
            </tr>

            <tr>
              <td><b>Lokasi</b></td>
              <td>Desa Donowarih</td>
            </tr>

            <tr>
              <td><b>Nama Sistem</b></td>
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
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "18px",
        padding: "25px",
      }}
    >
      <div
        style={{
          fontSize: "45px",
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          color: "#22c55e",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "28px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default About;