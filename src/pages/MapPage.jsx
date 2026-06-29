import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";

function MapPage() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "25px",
        background: "#071019",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}

      <div
        style={{
          width: "320px",
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </div>

      {/* Map */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Header */}

        <div
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "18px",
            padding: "22px 28px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "white",
              fontSize: "32px",
            }}
          >
            🗺 Peta Interaktif Desa Donowarih
          </h1>

          <p
            style={{
              color: "#9ca3af",
              marginTop: "12px",
              lineHeight: "28px",
            }}
          >
            Menampilkan informasi spasial Desa Donowarih
            berbasis WebGIS. Layer peta dapat
            diaktifkan melalui panel sebelah kiri.
          </p>
        </div>

        {/* Map */}

        <div
          style={{
            background: "#111827",
            borderRadius: "18px",
            border: "1px solid #1f2937",
            overflow: "hidden",
          }}
        >
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default MapPage;