import "./Service.css";

function Service() {

  const services = [

    {
      title:"Website Resmi Desa",
      icon:"🌐",
      desc:"Akses website resmi Desa Donowarih untuk memperoleh informasi dan pelayanan terbaru.",
      button:"Kunjungi Website",
      link:"https://donowarih-malang.desa.id",
    },

    {
      title:"Administrasi Desa",
      icon:"📄",
      desc:"Informasi mengenai pelayanan administrasi kependudukan dan surat-menyurat.",
      button:"Lihat Informasi",
      link:"https://donowarih-malang.desa.id",
    },

    {
      title:"Kontak Pemerintah Desa",
      icon:"☎️",
      desc:"Hubungi Pemerintah Desa Donowarih apabila membutuhkan informasi lebih lanjut.",
      button:"Hubungi",
      link:"https://donowarih-malang.desa.id",
    },

  ];

  return (

    <div className="service-page">

      <div className="service-header">

        <h1>📑 Pelayanan Desa</h1>

        <p>

          Halaman ini menyediakan akses menuju layanan resmi Pemerintah
          Desa Donowarih. SIDORA berfungsi sebagai media informasi,
          sedangkan pelayanan administrasi tetap dilakukan melalui
          website resmi desa.

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

    </div>

  );

}

export default Service;