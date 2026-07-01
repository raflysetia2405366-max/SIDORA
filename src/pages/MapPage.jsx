import { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import "./MapPage.css";

function MapPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="map-page">

      <div className="map-header">

        <div>
          <h1>🗺 Peta Interaktif Desa Donowarih</h1>
        </div>

        <button
          className="toggle-sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? "☰ Sembunyikan Layer" : "☰ Tampilkan Layer"}
        </button>

      </div>

      <div className="map-layout">

        {showSidebar && <Sidebar />}

        <div className="map-content">
          <MapView />
        </div>

      </div>

    </div>
  );
}

export default MapPage;