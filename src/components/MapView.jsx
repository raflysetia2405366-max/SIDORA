import { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./MapView.css";

const center = {
  lat: -7.8847,
  lng: 112.5746,
};

function MapView() {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = (map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (mapRef.current && window.google) {
      setTimeout(() => {
        window.google.maps.event.trigger(mapRef.current, "resize");
        mapRef.current.setCenter(center);
      }, 300);
    }
  });

  if (!isLoaded) {
    return (
      <div className="map-wrapper">
        <div className="loading-map">
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
        onLoad={onLoad}
        mapTypeId="hybrid"
        options={{
          streetViewControl: false,
          fullscreenControl: true,
          mapTypeControl: true,
          zoomControl: true,
        }}
      />

    </div>
  );
}

export default MapView;