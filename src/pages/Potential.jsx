import { useState } from "react";
import "./Potential.css";
import agm1 from "../assets/agm1.jpeg";
import agm2 from "../assets/agm2.jpeg";
import agm3 from "../assets/agm3.jpeg";
import religi1 from "../assets/religi1.jpeg";
import religi2 from "../assets/religi2.jpeg";
import ra from "../assets/ra.jpeg";
import wlk from "../assets/wlk.jpeg";

function Potential() {

  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const wisata = [

    {
      title: "Taman AGM",
      subtitle: "Arjuno Gunung Mujur",
      image: agm1,
      gallery: [agm1, agm2, agm3],
      location: "Dusun Karangan",
      maps: "https://maps.google.com/",
      featured: true,
      desc:
        "Taman AGM (Arjuno Gunung Mujur) merupakan salah satu destinasi wisata alam unggulan Desa Donowarih yang menawarkan panorama pegunungan, hutan pinus, udara yang sejuk, serta area swafoto yang menarik bagi wisatawan.",
    },

    {
      title: "Wisata Religi",
      subtitle: "Gunung Mujur",
      image: religi1,
      gallery: [religi1, religi2],
      location: "Gunung Mujur",
      maps: "https://maps.google.com/",
      featured: false,
      desc:
        "Wisata Religi Gunung Mujur menjadi salah satu tujuan ziarah masyarakat dengan suasana yang tenang, asri, dan memiliki nilai sejarah maupun spiritual.",
    },

    {
      title: "Wisata Lereng Kebun",
      subtitle: "(WLK)",
      image: wlk,
      gallery: [wlk],
      location: "Desa Donowarih",
      maps: "",
      featured: false,
      desc:
        "Kawasan wisata alam dengan panorama perbukitan dan udara pegunungan yang sejuk.",
    },

    {
      title: "Rest Area",
      subtitle: "Donowarih",
      image: ra,
      gallery: [ra],
      location: "Desa Donowarih",
      maps: "",
      featured: false,
      desc:
      "Rest Area Donowarih merupakan tempat persinggahan wisatawan yang berada di kawasan Desa Donowarih. Fasilitas ini menyediakan area parkir, tempat beristirahat, gazebo, serta menjadi pusat kuliner dan UMKM lokal sehingga mendukung kegiatan pariwisata desa.",
    },

  ];

  const nextImage = () => {

    if (!selected) return;

    setCurrentImage((prev) =>
      (prev + 1) % selected.gallery.length
    );

  };

  const prevImage = () => {

    if (!selected) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selected.gallery.length - 1
        : prev - 1
    );

  };

  return (

    <div className="potential-page">

      <div className="potential-header">

        <h1>Potensi Wisata Desa Donowarih</h1>

        <p>

          Desa Donowarih memiliki berbagai destinasi wisata
          alam, wisata religi, dan wisata edukasi yang
          menjadi daya tarik masyarakat maupun wisatawan.

        </p>

      </div>

      <div className="potential-grid">

        {wisata.map((item,index)=>(

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

                <span>📷</span>

                <h3>Foto Segera Hadir</h3>

              </div>

            )}

            <div className="destination-content">

              {item.featured && (

                <span className="featured">

                  Destinasi Unggulan

                </span>

              )}

              <h2>{item.title}</h2>

              <h4>{item.subtitle}</h4>

              <p className="location">

                {item.location}

              </p>

              <p>

                {item.desc}

              </p>

              <button
                onClick={()=>{
                  setSelected(item);
                  setCurrentImage(0);
                }}
              >

                Lihat Detail

              </button>

            </div>

          </div>

        ))}

      </div>
      {/* ================= MODAL ================= */}

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

              <div className="gallery-wrapper">

                <img
                  src={selected.gallery[currentImage]}
                  alt={selected.title}
                  className="modal-image"
                />

                {selected.gallery.length > 1 && (

                  <>

                    <button
                      className="gallery-btn left"
                      onClick={prevImage}
                    >
                      ❮
                    </button>

                    <button
                      className="gallery-btn right"
                      onClick={nextImage}
                    >
                      ❯
                    </button>

                  </>

                )}

              </div>

            ) : (

              <div className="coming-large">

                <span>📷</span>

                <h3>Foto Akan Ditambahkan</h3>

              </div>

            )}

            <div className="modal-content">

              {selected.featured && (

                <span className="featured">

                  Destinasi Unggulan

                </span>

              )}

              <h2>

                {selected.title}

              </h2>

              <h4>

                {selected.subtitle}

              </h4>

              <p className="modal-location">

                📍 {selected.location}

              </p>

              <p className="modal-desc">

                {selected.desc}

              </p>

              <div className="modal-action">

                {selected.maps !== "" ? (

                  <a
                    href={selected.maps}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <button>

                      Buka Google Maps

                    </button>

                  </a>

                ) : (

                  <button disabled>

                    Lokasi Belum Tersedia

                  </button>

                )}

              </div>

            </div>

          </div>

        </div>

      )}
    </div>

  );

}

export default Potential;