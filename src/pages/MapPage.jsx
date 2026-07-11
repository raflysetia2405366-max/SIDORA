import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import "./MapPage.css";

function MapPage() {

  const [showSidebar, setShowSidebar] = useState(true);

  const [layers, setLayers] = useState({
    desa: true,
    borogragal: true,
    jaraan: true,
    karangan: true,
    karangjuwet: true,
  });

  const handleLayerChange = (layer) => {
    setLayers((prev) => ({
      ...prev,
      [layer]: !prev[layer],
    }));
  };

  return (

    <div className="map-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <h1>🗺 Peta Interaktif Desa Donowarih</h1>

      </div>

      {/* ================= BUTTON ================= */}

      {!showSidebar && (

        <div className="toolbar">

          <button
            className="show-sidebar"
            onClick={() => setShowSidebar(true)}
          >

            ☰ Layer Peta

          </button>

        </div>

      )}

      {/* ================= CONTENT ================= */}

      <div
        className={`map-layout ${
          showSidebar ? "sidebar-open" : "sidebar-close"
        }`}
      >

        <aside className="sidebar-container">

          <Sidebar
            onClose={() => setShowSidebar(false)}
            layers={layers}
            onLayerChange={handleLayerChange}
          />

        </aside>

        <section className="map-container">

          <MapView layers={layers} />

        </section>

      </div>

    </div>

  );

}

export default MapPage;