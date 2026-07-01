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
      <div className="map-layout">

        {showSidebar && (
          <div className="sidebar-container">
            <Sidebar
              onClose={() => setShowSidebar(false)}
            />
          </div>
        )}

        <div
          className={`map-container ${
            showSidebar ? "" : "full"
          }`}
        >

          {!showSidebar && (
            <button
              className="show-sidebar"
              onClick={() => setShowSidebar(true)}
            >
              ☰ Layer
            </button>
          )}

          <MapView />

        </div>

      </div>

    </div>
  );
}

export default MapPage;