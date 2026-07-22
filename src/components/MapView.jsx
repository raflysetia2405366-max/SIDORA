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

/* ================= LAYER BATAS (polygon/garis) ================= */
const BOUNDARY_FILES = {
  desa: "/geojson/desa.geojson",
  borogragal: "/geojson/borogragal.geojson",
  jaraan: "/geojson/jaraan.geojson",
  karangan: "/geojson/karangan.geojson",
  karangjuwet: "/geojson/karangjuwet.geojson",
};

/* ================= LAYER FASILITAS (titik) =================
   Sesuaikan nama file persis dengan yang ada di public/geojson/fasilitas/
   (spasi pada nama file otomatis di-encode lewat encodeURI di fetch) */
const FACILITY_FILES = {
  office: "/geojson/fasilitas/Balai Desa Point.geojson",
  school: "/geojson/fasilitas/Sekolah point.geojson",
  mosque: "/geojson/fasilitas/Masjid point.geojson",
  posyandu: "/geojson/fasilitas/Posyandu point.geojson",
  tourism: "/geojson/fasilitas/Potensi Wisata point.geojson",
};

/* Gabungan semua layer, dipakai untuk sinkronisasi & simpan referensi feature */
const LAYER_FILES = { ...BOUNDARY_FILES, ...FACILITY_FILES };

/* Warna & simbol SVG per jenis fasilitas — path persis dari lucide-react,
   warna dipilih agar selaras dengan tema web dan TIDAK bentrok dengan
   warna batas dusun (merah/biru/oranye/ungu sudah dipakai di sana) */
const FACILITY_STYLES = {
  office: {
    color: "#1F3D2B", // hijau tua — sama seperti warna primary web
    // Building2 (lucide)
    symbol: `<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`,
  },
  school: {
    color: "#0E7490", // teal gelap
    // School (lucide)
    symbol: `<path d="m4 6 8-4 8 4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v-4a2 2 0 0 0-4 0v4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M18 5v17M6 5v17" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="9" r="2" stroke="#fff" stroke-width="1.8" fill="none"/>`,
  },
  mosque: {
    color: "#15803D", // hijau daun
    // Church (lucide)
    symbol: `<path d="M10 9h4M12 7v5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><path d="M14 22v-4a2 2 0 0 0-4 0v4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2h-1" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m6 7-3.447 1.724A1 1 0 0 0 2 9.618V20a2 2 0 0 0 2 2h1" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  posyandu: {
    color: "#BE185D", // pink tua — senada aksen pink web
    // HeartPulse (lucide)
    symbol: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.22 8.5h2.038a1 1 0 0 1 .921.61l1.7 3.9a.5.5 0 0 0 .921-.06l2.442-7.152a1 1 0 0 1 1.842-.078L14.87 8.5H21.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  tourism: {
    color: "#B45309", // gold kecoklatan
    // MapPinned (lucide) — sama seperti ikon "Tempat Wisata" di sidebar
    symbol: `<path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="8" r="2" stroke="#fff" stroke-width="1.8" fill="none"/><path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.5.2.9.7.9h18.4c.5 0 .8-.5.7-1l-2-6a1 1 0 0 0-.9-.7h-3.835" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
};

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

/* Bikin ikon marker SVG (pin + simbol putih di tengah) */
function buildFacilityIcon(color, symbol) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.7 17 27 17 27s17-14.3 17-27C34 7.6 26.4 0 17 0z" fill="${color}"/>
      <g transform="translate(9, 6) scale(0.65)">
        ${symbol}
      </g>
    </svg>
  `;

  return {
    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
    scaledSize: new window.google.maps.Size(34, 44),
    anchor: new window.google.maps.Point(17, 44),
  };
}

function MapView({ layers }) {
  const mapRef = useRef(null);

  const featureRefs = useRef(
    Object.fromEntries(Object.keys(LAYER_FILES).map((key) => [key, []]))
  );

  const layersRef = useRef(layers);
  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const options = useMemo(() => mapOptions, []);

  const clearLayer = (key) => {
    if (!mapRef.current) return;

    featureRefs.current[key].forEach((feature) => {
      mapRef.current.data.remove(feature);
    });

    featureRefs.current[key] = [];
  };

  const loadLayer = async (key, file) => {
    if (!mapRef.current) return;

    const response = await fetch(encodeURI(file));

    if (!response.ok) {
      throw new Error(
        `Gagal memuat ${file} (status ${response.status})`
      );
    }

    const geojson = await response.json();

    const features = mapRef.current.data.addGeoJson(geojson);

    // tandai tiap feature dengan layer key-nya, supaya setStyle tahu
    // ini feature batas atau fasilitas apa
    features.forEach((feature) => {
      feature.setProperty("_layerKey", key);
    });

    featureRefs.current[key] = features;
  };

  const applyStyle = () => {
    if (!mapRef.current) return;

    mapRef.current.data.setStyle((feature) => {
      const layerKey = feature.getProperty("_layerKey");

      // ================= STYLE FASILITAS (titik) =================
      if (FACILITY_STYLES[layerKey]) {
        return {
          icon: buildFacilityIcon(
            FACILITY_STYLES[layerKey].color,
            FACILITY_STYLES[layerKey].symbol
          ),
        };
      }

      // ================= STYLE BATAS DESA / DUSUN =================
      const dusun = feature.getProperty("Dusun");
      const desa = feature.getProperty("WADMKD");

      if (desa) {
        return {
          fillOpacity: 0,
          strokeColor: "#ffffff",
          strokeOpacity: 3,
          strokeWeight: 3,
        };
      }

      if (dusun === "Borogragal") {
        return { fillOpacity: 0, strokeColor: "#ef4444", strokeWeight: 2 };
      }
      if (dusun === "Jaraan") {
        return { fillOpacity: 0, strokeColor: "#3b82f6", strokeWeight: 2 };
      }
      if (dusun === "Karangan") {
        return { fillOpacity: 0, strokeColor: "#f59e0b", strokeWeight: 2 };
      }
      if (dusun === "Karangjuwet") {
        return { fillOpacity: 0, strokeColor: "#8b5cf6", strokeWeight: 2 };
      }

      return {
        fillColor: "#22c55e",
        fillOpacity: 0.25,
        strokeColor: "#22c55e",
        strokeWeight: 2,
      };
    });
  };

  const fitMap = () => {
    if (!mapRef.current) return;

    const bounds = new window.google.maps.LatLngBounds();

    mapRef.current.data.forEach((feature) => {
      // Layer batas desa dikecualikan dari perhitungan bounds, supaya
      // toggle checklist "Batas Desa" tidak memicu zoom in/out.
      // Layer lain (dusun, fasilitas) tetap dihitung seperti biasa.
      if (feature.getProperty("_layerKey") === "desa") return;

      processPoints(feature.getGeometry(), bounds.extend, bounds);
    });

    if (!bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds);
    }
  };

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

  const onLoad = useCallback(
    async (map) => {
      mapRef.current = map;
      await syncLayers();
    },
    [syncLayers]
  );

  const onUnmount = useCallback(() => {
    mapRef.current = null;
    featureRefs.current = Object.fromEntries(
      Object.keys(LAYER_FILES).map((key) => [key, []])
    );
  }, []);

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