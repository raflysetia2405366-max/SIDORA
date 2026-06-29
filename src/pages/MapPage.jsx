import "./MapPage.css";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";

function MapPage() {
  return (
    <div className="map-page">

      <div className="map-layout">

        <Sidebar />

        <div className="map-content">

          <div className="map-header">

            <h1>
              🗺 Peta Interaktif Desa Donowarih
            </h1>

            <p>
              Sistem Informasi Geografis Desa Donowarih berbasis WebGIS.
              Nantinya seluruh informasi spasial seperti batas desa,
              batas dusun, jalan, sungai dan fasilitas umum
              akan ditampilkan secara interaktif.
            </p>

          </div>

          <MapView />

          <div className="map-info">

            <h2>Informasi</h2>

            <p>
              Saat ini peta masih menggunakan basemap.
              Setelah proses digitasi selesai,
              seluruh layer hasil QGIS akan ditampilkan
              langsung pada halaman ini.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MapPage;