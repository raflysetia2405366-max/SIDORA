import "./Sidebar.css";
import {
  Menu,
  Layers,
  Building2,
  School,
  Church,
  HeartPulse,
  MapPinned,
} from "lucide-react";

function Sidebar({
  onClose,
  layers,
  onLayerChange,
}) {

  return (

    <aside className="sidebar">

      {/* ================= HEADER ================= */}

      <div className="sidebar-header">

        <button
          className="sidebar-toggle"
          onClick={onClose}
        >
          <Menu size={20} />
        </button>

        <div className="sidebar-title">

          <h2>SIDORA</h2>

          <p className="sidebar-subtitle">
            Layer WebGIS
          </p>

        </div>

      </div>

      <hr />

      {/* ================= LAYER PETA ================= */}

      <h3>
        <Layers size={18} />
        Layer Peta
      </h3>

      <Check
        text="Batas Desa"
        checked={layers.desa}
        onChange={() => onLayerChange("desa")}
      />

      <Check
        text="Dusun Borogragal"
        checked={layers.borogragal}
        onChange={() => onLayerChange("borogragal")}
      />

      <Check
        text="Dusun Jaraan"
        checked={layers.jaraan}
        onChange={() => onLayerChange("jaraan")}
      />

      <Check
        text="Dusun Karangan"
        checked={layers.karangan}
        onChange={() => onLayerChange("karangan")}
      />

      <Check
        text="Dusun Karangjuwet"
        checked={layers.karangjuwet}
        onChange={() => onLayerChange("karangjuwet")}
      />

      <hr />

      {/* ================= FASILITAS UMUM ================= */}

      <h3>
        <MapPinned size={18} />
        Fasilitas Umum
      </h3>

      <Check
        icon={<Building2 size={18} />}
        text="Kantor Desa"
        checked={layers.office}
        onChange={() => onLayerChange("office")}
      />

      <Check
        icon={<School size={18} />}
        text="Sekolah"
        checked={layers.school}
        onChange={() => onLayerChange("school")}
      />

      <Check
        icon={<Church size={18} />}
        text="Masjid"
        checked={layers.mosque}
        onChange={() => onLayerChange("mosque")}
      />

      <Check
        icon={<HeartPulse size={18} />}
        text="Posyandu"
        checked={layers.posyandu}
        onChange={() => onLayerChange("posyandu")}
      />

      <Check
        icon={<MapPinned size={18} />}
        text="Tempat Wisata"
        checked={layers.tourism}
        onChange={() => onLayerChange("tourism")}
      />

      <hr />

      <p className="sidebar-note">
        Centang atau hilangkan layer untuk mengatur tampilan peta.
      </p>

    </aside>

  );

}

function Check({

  icon,

  text,

  checked,

  onChange,

}) {

  return (

    <label className="check-item">

      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      {icon && (

        <div className="check-icon">

          {icon}

        </div>

      )}

      <span className="check-text">

        {text}

      </span>

    </label>

  );

}

export default Sidebar;