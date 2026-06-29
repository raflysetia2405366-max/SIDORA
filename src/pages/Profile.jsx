function Profile() {
  return (
    <div
      style={{
        background: "#071019",
        minHeight: "100vh",
        padding: "35px",
        color: "white",
      }}
    >
      {/* Header */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "18px",
          padding: "30px",
          marginBottom: "25px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#22c55e",
          }}
        >
          🏡 Profil Desa Donowarih
        </h1>

        <p
          style={{
            marginTop: "15px",
            color: "#9ca3af",
            lineHeight: "28px",
          }}
        >
          Desa Donowarih merupakan salah satu desa di Kecamatan
          Karangploso, Kabupaten Malang, Provinsi Jawa Timur.
          Sistem SIDORA dikembangkan sebagai media penyajian
          informasi desa berbasis WebGIS.
        </p>
      </div>

      {/* Informasi */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <Info title="Kecamatan" value="Karangploso" />
        <Info title="Kabupaten" value="Malang" />
        <Info title="Provinsi" value="Jawa Timur" />
        <Info title="Kode Pos" value="65152" />
        <Info title="Jumlah Dusun" value="4 Dusun" />
        <Info title="Luas Wilayah" value="1.298 Ha" />
      </div>

      {/* Visi */}

      <Section
        title="Visi"
        text="Mewujudkan Desa Donowarih yang maju, mandiri, transparan, serta berbasis teknologi informasi."
      />

      {/* Misi */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "18px",
          padding: "25px",
          marginTop: "25px",
        }}
      >
        <h2
          style={{
            color: "#22c55e",
            marginTop: 0,
          }}
        >
          Misi
        </h2>

        <ul
          style={{
            lineHeight: "34px",
            color: "#d1d5db",
          }}
        >
          <li>Meningkatkan pelayanan publik.</li>
          <li>Mengembangkan sistem informasi desa.</li>
          <li>Meningkatkan kualitas SDM.</li>
          <li>Mengoptimalkan potensi desa.</li>
        </ul>
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <div
        style={{
          color: "#9ca3af",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <strong
        style={{
          fontSize: "20px",
          color: "#22c55e",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "18px",
        padding: "25px",
        marginTop: "25px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#22c55e",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "#d1d5db",
          lineHeight: "30px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Profile;