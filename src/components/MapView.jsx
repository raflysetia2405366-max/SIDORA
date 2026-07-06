import { useCallback, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./MapView.css";

const center = {
  lat: -7.8847,
  lng: 112.5746,
};

const mapOptions = {
  streetViewControl: false,
  fullscreenControl: true,
  mapTypeControl: true,
  zoomControl: true,
  clickableIcons: false,
  gestureHandling: "greedy",
};

function MapView() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const options = useMemo(() => mapOptions, []);

  const onLoad = useCallback(async (map) => {

    try {

      const response = await fetch("/geojson/desa.geojson");

      const geojson = await response.json();

      console.log(geojson);

      map.data.addGeoJson(geojson);

      map.data.setStyle({

        fillColor: "#22c55e",

        fillOpacity: 0.2,

        strokeColor: "#16a34a",

        strokeWeight: 3,

      });

    } catch (err) {

      console.error(err);

    }

  }, []);

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

        zoom={14}

        options={options}

        mapTypeId="hybrid"

        onLoad={onLoad}

      />

    </div>

  );

}

export default MapView;