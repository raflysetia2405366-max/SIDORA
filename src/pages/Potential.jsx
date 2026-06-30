import "./Potential.css";

function Potential() {

  const data = [

    {
      icon:"🌾",
      title:"Pertanian",
      desc:"Pengembangan tanaman pangan, hortikultura, dan perkebunan sebagai sektor utama masyarakat.",
    },

    {
      icon:"🐄",
      title:"Peternakan",
      desc:"Potensi peternakan sapi, kambing, dan unggas yang menjadi mata pencaharian warga.",
    },

    {
      icon:"🏞️",
      title:"Pariwisata",
      desc:"Wisata alam, perbukitan, dan potensi agrowisata yang dapat dikembangkan.",
    },

    {
      icon:"🏪",
      title:"UMKM",
      desc:"Produk olahan pangan, kerajinan, dan usaha kecil masyarakat Desa Donowarih.",
    },

    {
      icon:"🎓",
      title:"Pendidikan",
      desc:"Fasilitas pendidikan yang mendukung peningkatan kualitas sumber daya manusia.",
    },

    {
      icon:"🕌",
      title:"Sarana Umum",
      desc:"Fasilitas ibadah, kesehatan, olahraga, dan pelayanan masyarakat.",
    }

  ];

  return (

    <div className="potential-page">

      <div className="potential-header">

        <h1>🌱 Potensi Desa Donowarih</h1>

        <p>

          Desa Donowarih memiliki berbagai potensi yang dapat
          dikembangkan untuk meningkatkan kesejahteraan masyarakat
          dan mendukung pembangunan desa berbasis teknologi.

        </p>

      </div>

      <div className="potential-grid">

        {data.map((item,index)=>(

          <div
            className="potential-card"
            key={index}
          >

            <div className="potential-icon">

              {item.icon}

            </div>

            <h2>

              {item.title}

            </h2>

            <p>

              {item.desc}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Potential;