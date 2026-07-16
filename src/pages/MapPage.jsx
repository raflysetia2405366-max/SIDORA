import { useState } from "react";
import { Map, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import Legend from "../components/Legend";
import "./MapPage.css";

function MapPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  const [layers, setLayers] = useState({
    desa: true,
    borogragal: true,
    jaraan: true,
    karangan: true,
    karangjuwet: true,
    office: true,
    school: true,
    mosque: true,
    posyandu: true,
    tourism: true,
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
        <h1><Map size={36} /> Peta Interaktif Desa Donowarih</h1>
      </div>

      {/* ================= BUTTON ================= */}
      {!showSidebar && (
        <div className="toolbar">
          <button className="icon-btn show-sidebar" onClick={() => setShowSidebar(true)}>
            <Menu size={20} />
          </button>
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className={`map-layout ${showSidebar ? "sidebar-open" : "sidebar-close"}`}>
        <aside className="sidebar-container">
          <Sidebar
            onClose={() => setShowSidebar(false)}
            layers={layers}
            onLayerChange={handleLayerChange}
          />
        </aside>

        <section className="map-container">
          <MapView layers={layers} />
          <Legend layers={layers} />
        </section>
      </div>
    </div>
  );
}

export default MapPage;