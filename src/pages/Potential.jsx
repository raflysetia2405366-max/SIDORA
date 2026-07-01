import "./Potential.css";

function Potential() {
  const data = [
    {
      icon: "🌳",
      title: "TAMAN AGM (Arjuno Gunung Mujur)",
      desc: "Kawasan wisata alam yang menawarkan suasana pegunungan yang sejuk, area rekreasi keluarga, serta panorama alam khas Desa Donowarih.",
    },

    {
      icon: "🍊",
      title: "Wisata Petik Jeruk",
      desc: "Agrowisata yang memberikan pengalaman memetik jeruk langsung dari kebun dengan pemandangan alam yang asri.",
    },

    {
      icon: "🚗",
      title: "Rest Area Karangploso",
      desc: "Kawasan persinggahan wisata yang menyediakan kuliner, produk UMKM lokal, serta menjadi titik istirahat bagi wisatawan.",
    },

    {
      icon: "🕌",
      title: "Wisata Religi Gunung Mujur",
      desc: "Destinasi wisata religi yang menjadi tempat ziarah sekaligus menawarkan panorama alam pegunungan yang menenangkan.",
    },

    {
      icon: "🌄",
      title: "Wisata Lereng Kebun (WLK)",
      desc: "Objek wisata dengan panorama perbukitan, area swafoto, dan suasana pedesaan yang cocok untuk rekreasi keluarga.",
    },
  ];

  return (
    <div className="potential-page">

      <div className="potential-header">

        <h1>🌿 Potensi Wisata Desa Donowarih</h1>

        <p>
          Desa Donowarih memiliki berbagai destinasi wisata yang
          memadukan keindahan alam, wisata religi, agrowisata,
          serta kawasan rekreasi yang menjadi daya tarik bagi
          masyarakat maupun wisatawan.
        </p>

      </div>

      <div className="potential-grid">

        {data.map((item, index) => (

          <div
            className="potential-card"
            key={index}
          >

            <div className="potential-icon">
              {item.icon}
            </div>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Potential;