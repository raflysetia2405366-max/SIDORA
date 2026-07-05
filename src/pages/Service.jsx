import "./Service.css";

function Service() {

  const services = [

    {
      title: "Website Resmi Desa",
      icon: "🌐",
      desc: "Kunjungi website resmi Pemerintah Desa Donowarih untuk memperoleh informasi, berita, pengumuman, serta layanan administrasi desa secara daring.",
      button: "Kunjungi Website",
      link: "https://donowarih-malangkab.desa.id/",
    },

    {
      title: "Instagram Desa",
      icon: "📸",
      desc: "Ikuti akun Instagram resmi Desa Donowarih untuk melihat informasi kegiatan desa, dokumentasi acara, serta pengumuman terbaru.",
      button: "Buka Instagram",
      link: "https://www.instagram.com/desa_donowarih?igsh=cjhnNWRxbjR0b3Fk",
    },

    {
      title: "Kontak Pemerintah Desa",
      icon: "☎️",
      desc: "Hubungi Pemerintah Desa Donowarih melalui email resmi atau nomor telepon yang tersedia apabila membutuhkan informasi lebih lanjut.",
      button: "Hubungi Desa",
      link: "mailto:donowarih.karangploso@malangkab.go.id",
    },

  ];

  return (

    <div className="service-page">

      <div className="service-header">

        <h1>Pelayanan Desa</h1>

        <p>

          Halaman ini menyediakan akses menuju layanan resmi Pemerintah
          Desa Donowarih. SIDORA berfungsi sebagai media informasi
          digital, sedangkan pelayanan administrasi dilakukan melalui
          kanal resmi Pemerintah Desa.

        </p>

      </div>

      <div className="service-grid">

        {services.map((item,index)=>(

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

            <p>

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

      <div className="contact-box">

        <h2>Informasi Kontak</h2>

        <div className="contact-grid">

          <div>

            <span>Email</span>

            <strong>donowarih.karangploso@malangkab.go.id</strong>

          </div>

          <div>

            <span>Telepon</span>

            <strong>+6281230532606</strong>

          </div>

          <div>

            <span>Alamat</span>

            <strong>
              Desa Donowarih, Kecamatan Karangploso,
              Kabupaten Malang
            </strong>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Service;