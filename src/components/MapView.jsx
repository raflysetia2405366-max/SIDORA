import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

import "./MapView.css";

/* ==========================================
   CENTER MAP
========================================== */

const center = {
  lat: -7.8847,
  lng: 112.5746,
};

/* ==========================================
   MAP OPTIONS
========================================== */

const mapOptions = {
  streetViewControl: false,
  fullscreenControl: true,
  mapTypeControl: true,
  zoomControl: true,
  clickableIcons: false,
  gestureHandling: "greedy",
};

/* ==========================================
   LAYER CONFIG (key -> file)
   Tambahkan/hapus layer cukup di sini
========================================== */

const LAYER_FILES = {
  desa: "/geojson/desa.geojson",
  borogragal: "/geojson/borogragal.geojson",
  jaraan: "/geojson/jaraan.geojson",
  karangan: "/geojson/karangan.geojson",
  karangjuwet: "/geojson/karangjuwet.geojson",
};

/* ==========================================
   HELPER FIT BOUNDS
========================================== */

function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof window.google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof window.google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach((g) => {
      processPoints(g, callback, thisArg);
    });
  }
}

/* ==========================================
   MAP VIEW
========================================== */

function MapView({ layers }) {
  const mapRef = useRef(null);

  const featureRefs = useRef({
    desa: [],
    borogragal: [],
    jaraan: [],
    karangan: [],
    karangjuwet: [],
  });

  // Selalu menyimpan nilai `layers` TERBARU, supaya callback yang
  // di-memo (seperti onLoad) tidak membaca state lama (stale closure).
  const layersRef = useRef(layers);
  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const options = useMemo(() => mapOptions, []);

  /* ==========================================
     CLEAR LAYER
  ========================================== */

  const clearLayer = (key) => {
    if (!mapRef.current) return;

    featureRefs.current[key].forEach((feature) => {
      mapRef.current.data.remove(feature);
    });

    featureRefs.current[key] = [];
  };

  /* ==========================================
     LOAD LAYER
  ========================================== */

  const loadLayer = async (key, file) => {
    if (!mapRef.current) return;

    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(
        `Gagal memuat ${file} (status ${response.status})`
      );
    }

    const geojson = await response.json();

    const features = mapRef.current.data.addGeoJson(geojson);
    featureRefs.current[key] = features;
  };

  /* ==========================================
     STYLE MAP
  ========================================== */

  const applyStyle = () => {
    if (!mapRef.current) return;

    mapRef.current.data.setStyle((feature) => {
      const dusun = feature.getProperty("Dusun");
      const desa = feature.getProperty("WADMKD");

      if (desa) {
        return {
          fillOpacity: 0,
          strokeColor: "#22c55e",
          strokeWeight: 4,
        };
      }

      if (dusun === "Borogragal") {
        return {
          fillColor: "#ef4444",
          fillOpacity: 0.35,
          strokeColor: "#ef4444",
          strokeWeight: 2,
        };
      }

      if (dusun === "Jaraan") {
        return {
          fillColor: "#3b82f6",
          fillOpacity: 0.35,
          strokeColor: "#3b82f6",
          strokeWeight: 2,
        };
      }

      if (dusun === "Karangan") {
        return {
          fillColor: "#f59e0b",
          fillOpacity: 0.35,
          strokeColor: "#f59e0b",
          strokeWeight: 2,
        };
      }

      if (dusun === "Karangjuwet") {
        return {
          fillColor: "#8b5cf6",
          fillOpacity: 0.35,
          strokeColor: "#8b5cf6",
          strokeWeight: 2,
        };
      }

      return {
        fillColor: "#22c55e",
        fillOpacity: 0.25,
        strokeColor: "#22c55e",
        strokeWeight: 2,
      };
    });
  };

  /* ==========================================
     FIT MAP
  ========================================== */

  const fitMap = () => {
    if (!mapRef.current) return;

    const bounds = new window.google.maps.LatLngBounds();

    mapRef.current.data.forEach((feature) => {
      processPoints(feature.getGeometry(), bounds.extend, bounds);
    });

    if (!bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds);
    }
  };

  /* ==========================================
     SYNC LAYERS
     Satu fungsi tunggal yang dipakai baik saat
     peta pertama kali load, maupun saat checkbox
     berubah. Selalu membaca `layersRef.current`
     supaya tidak pernah pakai data basi (stale),
     dan setiap layer dibungkus try/catch supaya
     satu layer gagal fetch tidak menghentikan
     proses sync layer lainnya.
  ========================================== */

  const syncLayers = useCallback(async () => {
    if (!mapRef.current) return;

    const currentLayers = layersRef.current;

    await Promise.all(
      Object.keys(LAYER_FILES).map(async (key) => {
        try {
          if (currentLayers[key]) {
            if (featureRefs.current[key].length === 0) {
              await loadLayer(key, LAYER_FILES[key]);
            }
          } else {
            clearLayer(key);
          }
        } catch (err) {
          console.error(`Gagal sinkronisasi layer "${key}":`, err);
        }
      })
    );

    applyStyle();
    fitMap();
  }, []);

  /* ==========================================
     ON LOAD
  ========================================== */

  const onLoad = useCallback(
    async (map) => {
      mapRef.current = map;
      await syncLayers();
    },
    [syncLayers]
  );

  /* ==========================================
     ON UNMOUNT
     Penting untuk React StrictMode: di development,
     StrictMode sengaja mount → unmount → mount lagi
     untuk mendeteksi efek samping yang tidak bersih.
     Tanpa ini, `mapRef` bisa menunjuk ke instance peta
     yang sudah tidak tampil, sehingga load/clear layer
     terjadi di peta yang salah (tidak terlihat user).
  ========================================== */

  const onUnmount = useCallback(() => {
    mapRef.current = null;
    featureRefs.current = {
      desa: [],
      borogragal: [],
      jaraan: [],
      karangan: [],
      karangjuwet: [],
    };
  }, []);

  /* ==========================================
     UPDATE LAYER (CHECKBOX)
  ========================================== */

  useEffect(() => {
    syncLayers();
  }, [layers, syncLayers]);

  if (!isLoaded) {
    return (
      <div className="map-wrapper">
        <div className="loading-map">Memuat Google Maps...</div>
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
        onUnmount={onUnmount}
      />
    </div>
  );
}

export default MapView;
// test