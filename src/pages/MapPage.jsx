import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";

function MapPage() {
  return (
    <div
      style={{
        background: "#071019",
        minHeight: "100vh",
        padding: "30px 20px",
      }}
    >
      <div className="map-layout">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div>
          {/* Header */}
          <div
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "30px",
              marginBottom: "20px",
            }}
          >
            <h1
              style={{
                color: "white",
                margin: 0,
                fontSize: "clamp(28px,4vw,48px)",
              }}
            >
              🗺 Peta Interaktif Desa Donowarih
            </h1>

            <p
              style={{
                marginTop: "15px",
                color: "#9ca3af",
                lineHeight: "30px",
                fontSize: "clamp(14px,2vw,18px)",
              }}
            >
              Sistem Informasi Geografis Desa Donowarih berbasis WebGIS.
              Nantinya seluruh informasi spasial seperti batas desa,
              batas dusun, jaringan jalan, sungai, dan fasilitas umum
              dapat ditampilkan secara interaktif.
            </p>
          </div>

          {/* Map */}
          <MapView />

          {/* Keterangan */}
          <div
            style={{
              marginTop: "20px",
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <h2
              style={{
                color: "#22c55e",
                marginTop: 0,
              }}
            >
              Informasi
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "30px",
                marginBottom: 0,
              }}
            >
              Saat ini peta masih menggunakan basemap sebagai tampilan awal.
              Setelah proses digitasi selesai, layer batas desa,
              dusun, fasilitas umum, jalan, dan informasi spasial lainnya
              akan ditampilkan langsung pada halaman ini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;