import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./MapView.css";

const center = {
  lat: -7.8847,
  lng: 112.5746,
};

function MapView() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (
      <div className="map-wrapper">
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
          }}
        >
          Memuat Google Maps...
        </div>
      </div>
    );
  }

  return (
    <div className="map-wrapper">
      <GoogleMap
        mapContainerClassName="google-map"
        center={center}
        zoom={15}
        mapTypeId="hybrid"
        options={{
          fullscreenControl: true,
          streetViewControl: false,
          mapTypeControl: true,
          zoomControl: true,
        }}
      />
    </div>
  );
}

export default MapView;