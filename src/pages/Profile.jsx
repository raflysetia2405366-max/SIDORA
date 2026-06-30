import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-header">

        <h1>🏡 Profil Desa Donowarih</h1>

        <p>
          Desa Donowarih merupakan salah satu desa di Kecamatan
          Karangploso, Kabupaten Malang, Provinsi Jawa Timur.
          Sistem SIDORA dikembangkan sebagai media penyajian
          informasi desa berbasis WebGIS.
        </p>

      </div>

      <div className="profile-grid">

        <Info title="Kecamatan" value="Karangploso" />
        <Info title="Kabupaten" value="Malang" />
        <Info title="Provinsi" value="Jawa Timur" />
        <Info title="Kode Pos" value="65152" />
        <Info title="Jumlah Dusun" value="4 Dusun" />
        <Info title="Luas Wilayah" value="1.298 Ha" />

      </div>

      <Section
        title="Visi"
        text="Mewujudkan Desa Donowarih yang maju, mandiri, transparan, serta berbasis teknologi informasi."
      />

      <div className="profile-card">

        <h2>Misi</h2>

        <ul>

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
    <div className="info-card">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}

function Section({ title, text }) {
  return (
    <div className="profile-card">

      <h2>{title}</h2>

      <p>{text}</p>

    </div>
  );
}

export default Profile;