import {
  MapContainer,
  TileLayer,
  ScaleControl,
  ZoomControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <div
      style={{
        width: "100%",
        height: "78vh",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #1f2937",
      }}
    >
      <MapContainer
        center={[-7.8793, 112.5819]}
        zoom={14}
        zoomControl={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Basemap Dark */}

        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution="SIDORA"
        />

        {/* Zoom */}

        <ZoomControl position="bottomright" />

        {/* Scale */}

        <ScaleControl position="bottomleft" />
      </MapContainer>
    </div>
  );
}

export default MapView;