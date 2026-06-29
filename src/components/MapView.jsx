import {
  MapContainer,
  TileLayer,
  ZoomControl,
  ScaleControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <div
      style={{
        width: "100%",
        height: "75vh",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #1f2937",
        boxShadow: "0 0 20px rgba(0,0,0,.35)",
      }}
    >
      <MapContainer
        center={[-7.8554, 112.6133]}
        zoom={14}
        zoomControl={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Basemap Dark GRATIS (tidak perlu API Key) */}
        <TileLayer
          attribution='&copy; OpenStreetMap &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Zoom */}
        <ZoomControl position="bottomright" />

        {/* Skala */}
        <ScaleControl position="bottomleft" />
      </MapContainer>
    </div>
  );
}

export default MapView;