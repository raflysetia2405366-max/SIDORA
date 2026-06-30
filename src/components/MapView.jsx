import {
  MapContainer,
  TileLayer,
  ZoomControl,
  ScaleControl,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./MapView.css";

function MapView() {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[-7.8554, 112.6133]}
        zoom={14}
        zoomControl={false}
        className="leaflet-map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <ZoomControl position="bottomright" />

        <ScaleControl position="bottomleft" />
      </MapContainer>
    </div>
  );
}

export default MapView;