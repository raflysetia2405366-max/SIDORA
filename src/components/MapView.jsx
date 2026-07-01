import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: -7.8875,
  lng: 112.6025,
};

const containerStyle = {
  width: "100%",
  height: "70vh",
  borderRadius: "20px",
};

function MapView() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Memuat Google Maps...
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={{
        streetViewControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default MapView;