import { useCallback, useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import desaGeojson from "../geojson/desa.geojson";

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

  const onLoad = useCallback((map) => {

    map.data.addGeoJson(desaGeojson);

    map.data.setStyle({

      fillColor: "#22c55e",

      fillOpacity: 0.15,

      strokeColor: "#16a34a",

      strokeWeight: 3,

    });

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