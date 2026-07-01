import "./Service.css";

function Service() {

  const services = [

    {
      title: "Website Resmi Desa",
      icon: "🌐",
      desc: "Akses website resmi Pemerintah Desa Donowarih untuk memperoleh informasi desa, berita terbaru, layanan administrasi, dan berbagai informasi resmi lainnya.",
      button: "Kunjungi Website",
      link: "https://donowarih-malangkab.desa.id/",
    },

    {
      title: "Instagram Desa",
      icon: "📸",
      desc: "Ikuti akun Instagram resmi Desa Donowarih untuk mendapatkan informasi kegiatan desa, dokumentasi acara, pengumuman, dan berita terbaru.",
      button: "Buka Instagram",
      link: "https://www.instagram.com/desa_donowarih?igsh=cjhnNWRxbjR0b3Fk",
    },

    {
      title: "Kontak Desa",
      icon: "📧",
      desc:
        "Email : donowarih.karangploso@malangkab.go.id\n\nTelepon : +62 812-3053-2606",
      button: "Kirim Email",
      link: "mailto:donowarih.karangploso@malangkab.go.id",
    },

  ];

  return (

    <div className="service-page">

      <div className="service-header">

        <h1>📑 Pelayanan Desa</h1>

        <p>

          Halaman ini menyediakan akses menuju layanan resmi Pemerintah
          Desa Donowarih. SIDORA berfungsi sebagai media informasi,
          sedangkan pelayanan administrasi dilakukan melalui kanal
          resmi Pemerintah Desa Donowarih.

        </p>

      </div>

      <div className="service-grid">

        {services.map((item, index) => (

          <div
            className="service-card"
            key={index}
          >

            <div className="service-icon">

              {item.icon}

            </div>

            <h2>

              {item.title}

            </h2>

            <p
              style={{ whiteSpace: "pre-line" }}
            >

              {item.desc}

            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >

              <button>

                {item.button}

              </button>

            </a>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Service;