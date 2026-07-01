import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import "./MapPage.css";

function MapPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="map-page">

      {/* Header */}
      <div className="page-header">
        <h1>🗺 Peta Interaktif Desa Donowarih</h1>
      </div>

      {/* Layout */}
      <div
        className={`map-layout ${
          showSidebar ? "sidebar-open" : "sidebar-close"
        }`}
      >

        {/* Sidebar */}
        <aside className="sidebar-container">

          <Sidebar
            onClose={() => setShowSidebar(false)}
          />

        </aside>

        {/* Map */}
        <section className="map-container">

          {!showSidebar && (
            <button
              className="show-sidebar"
              onClick={() => setShowSidebar(true)}
            >
              ☰
            </button>
          )}

          <MapView />

        </section>

      </div>

    </div>
  );
}

export default MapPage;