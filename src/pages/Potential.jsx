import { useState } from "react";
import "./Potential.css";

import agm1 from "../assets/agm1.jpeg";
import agm2 from "../assets/agm2.jpeg";
import agm3 from "../assets/agm3.jpeg";

import religi1 from "../assets/religi1.jpeg";
import religi2 from "../assets/religi2.jpeg";

function Potential() {

  const [selected, setSelected] = useState(null);

  const wisata = [

    {
      title: "Taman AGM (Arjuno Gunung Mujur)",
      image: agm1,
      gallery: [agm1, agm2, agm3],
      location: "Dusun Karangan",
      desc:
        "Kawasan wisata alam dengan panorama pegunungan, hutan pinus, dan udara yang sejuk. Menjadi salah satu destinasi unggulan Desa Donowarih.",
    },

    {
      title: "Wisata Religi Gunung Mujur",
      image: religi1,
      gallery: [religi1, religi2],
      location: "Gunung Mujur",
      desc:
        "Destinasi wisata religi yang menjadi tujuan ziarah masyarakat. Berada di kawasan Gunung Mujur dengan suasana yang tenang dan asri.",
    },

    {
      title: "Wisata Petik Jeruk",
      image: null,
      gallery: [],
      location: "Desa Donowarih",
      desc:
        "Wisata edukasi pertanian dimana pengunjung dapat menikmati pengalaman memetik jeruk langsung dari kebun masyarakat.",
    },

    {
      title: "Wisata Lereng Kebun (WLK)",
      image: null,
      gallery: [],
      location: "Desa Donowarih",
      desc:
        "Kawasan wisata alam yang menawarkan pemandangan perbukitan serta udara pegunungan yang sejuk.",
    },

    {
      title: "Rest Area Karangploso",
      image: null,
      gallery: [],
      location: "Perbatasan Donowarih",
      desc:
        "Tempat persinggahan sekaligus pusat kuliner dan UMKM yang menjadi pintu masuk menuju kawasan wisata Desa Donowarih.",
    },

  ];

  return (

    <div className="potential-page">

      <div className="potential-header">

        <h1>🌿 Potensi Wisata Desa Donowarih</h1>

        <p>
          Desa Donowarih memiliki berbagai destinasi wisata alam,
          wisata religi, dan wisata edukasi yang menjadi daya tarik
          bagi masyarakat maupun wisatawan.
        </p>

      </div>

      <div className="potential-grid">

        {wisata.map((item, index) => (

          <div
            className="destination-card"
            key={index}
          >

            {item.image ? (

              <img
                src={item.image}
                alt={item.title}
                className="destination-image"
              />

            ) : (

              <div className="coming-soon">

                <span>📸</span>

                <h3>Foto Segera Hadir</h3>

              </div>

            )}

            <div className="destination-content">

              <h2>{item.title}</h2>

              <p className="location">

                📍 {item.location}

              </p>

              <p>

                {item.desc}

              </p>

              <button
                onClick={() => setSelected(item)}
              >
                Lihat Detail
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ================= POPUP ================= */}

      {selected && (

        <div
          className="modal-overlay"
          onClick={() => setSelected(null)}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {selected.gallery.length > 0 ? (

              <img
                src={selected.gallery[0]}
                alt={selected.title}
                className="modal-image"
              />

            ) : (

              <div className="coming-large">

                📸 Foto Akan Ditambahkan

              </div>

            )}

            <h2>{selected.title}</h2>

            <p>

              <strong>Lokasi :</strong> {selected.location}

            </p>

            <p>

              {selected.desc}

            </p>

          </div>

        </div>

      )}

    </div>

  );

}

export default Potential;