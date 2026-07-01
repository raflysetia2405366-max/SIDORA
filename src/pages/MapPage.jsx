import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import "./MapPage.css";

function MapPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="map-page">

      <h1 className="page-title">
        🗺 Peta Interaktif Desa Donowarih
      </h1>

      <div className="map-layout">

        {showSidebar && (
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
        )}

        <div className="map-content">

          <button
            className="floating-layer-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "☰" : "☰"}
          </button>

          <MapView />

        </div>

      </div>

    </div>
  );
}

export default MapPage;