import "./Profile.css";

const kepalaDesa = [
  {
    nama: "Tirtorejo Parto",
    tahun: "1918 - 1945",
  },
  {
    nama: "Ismail",
    tahun: "1945 - 1948",
  },
  {
    nama: "Mandalil",
    tahun: "1948 - 1950",
  },
  {
    nama: "Munasir Donoharjo",
    tahun: "1950 - 1968",
  },
  {
    nama: "Salamun Donokaryo",
    tahun: "1968 - 1976",
  },
  {
    nama: "Iskak Harjo Sumarto",
    tahun: "1976 - 1979",
  },
  {
    nama: "Ach. Slamet Tirto Raharjo",
    tahun: "1980 - 1990",
  },
  {
    nama: "Kabul Donosantoso",
    tahun: "1999 - 2007",
  },
  {
    nama: "Kabul Donosantoso",
    tahun: "2007 - 2013",
  },
  {
    nama: "Sujoko Donoprasetyo",
    tahun: "2013 - Sekarang",
  },
];

function Profile() {
  return (
    <div className="profile-page">

      {/* ================= HEADER ================= */}

      <section className="profile-header">

        <h1>🏡 Profil Desa Donowarih</h1>

        <p>
          Desa Donowarih merupakan salah satu desa yang berada di
          Kecamatan Karangploso, Kabupaten Malang, Provinsi Jawa Timur.
          SIDORA (Sistem Informasi Desa Donowarih) dikembangkan sebagai
          media informasi digital untuk menyajikan informasi desa secara
          cepat, transparan, serta mudah diakses oleh seluruh masyarakat.
        </p>

      </section>

      {/* ================= SEJARAH ================= */}

      <section className="profile-card">

        <h2>📖 Sejarah Desa</h2>

        <p>

          Pemerintahan Desa Donowarih mulai berdiri sejak
          <strong> tahun 1918</strong>. Kepala pemerintahan pertama
          Desa Donowarih adalah
          <strong> Bapak Tirtorejo Parto</strong> yang menjabat
          pada periode <strong>1918–1945</strong>.

        </p>

        <p>

          Sejak berdirinya pemerintahan desa,
          kepemimpinan Desa Donowarih terus mengalami
          perkembangan dari masa ke masa hingga saat ini
          sebagai bagian dari upaya meningkatkan pelayanan
          kepada masyarakat serta mewujudkan tata kelola
          pemerintahan desa yang semakin baik.

        </p>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="profile-card">

        <h2>👑 Sejarah Kepala Desa</h2>

        <div className="timeline">

          {kepalaDesa.map((item, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-year">
                  {item.tahun}
                </span>

                <h3>
                  {item.nama}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= VISI ================= */}

      <section className="profile-card">

        <h2>🎯 Visi Desa</h2>

        <div className="vision-box">

          <h3>

            Terwujudnya masyarakat

            <br />

            Agamis, Demokratis, Mandiri,
            Sehat, Harmonis,
            Tertib dan Indah

          </h3>

          <span>

            (ADEM SEHATI)

          </span>

        </div>

      </section>

      {/* ================= MISI ================= */}

      <section className="profile-card">

        <h2>📌 Misi Desa</h2>

        <ol className="mission-list">

          <li>
            Melaksanakan pembinaan keagamaan
            melalui kelompok-kelompok yang ada di desa.
          </li>

          <li>
            Melaksanakan musyawarah desa dalam
            penyusunan perencanaan, pelaksanaan,
            dan pelaporan segala kegiatan.
          </li>

          <li>
            Menjalankan kebijakan pemerintahan,
            pembangunan dan pemberdayaan masyarakat
            sesuai peraturan perundang-undangan
            yang berlaku.
          </li>

          <li>
            Melaksanakan pembinaan kemasyarakatan
            melalui bimbingan dan pelatihan kepada
            kelompok masyarakat menuju kemandirian
            usaha dan organisasi.
          </li>

          <li>
            Penyediaan sarana prasarana pertanian,
            peternakan, perdagangan,
            usaha mikro dan pendukung
            usaha ekonomi produktif.
          </li>

          <li>
            Melaksanakan pembinaan kader kesehatan
            dan memfasilitasi pelayanan
            kesehatan masyarakat.
          </li>

          <li>
            Melaksanakan pembinaan kerukunan umat
            beragama, aliran kepercayaan,
            adat istiadat yang berkembang
            di masyarakat.
          </li>

        </ol>

      </section>

      {/* ================= MOTTO ================= */}

      <section className="profile-card">

        <h2>🌿 Moto Desa</h2>

        <div className="motto-box">

          <h3>ADEM SEHATI</h3>

          <p>

            Agamis • Demokratis • Mandiri •
            Sehat • Harmonis •
            Tertib • Indah

          </p>

        </div>

      </section>

    </div>
  );
}

export default Profile;
// test