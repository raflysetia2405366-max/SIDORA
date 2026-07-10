import "./Sidebar.css";

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
          ☰
        </button>

        <div className="sidebar-title">

          <h2>SIDORA</h2>

          <p className="sidebar-subtitle">
            Layer WebGIS
          </p>

        </div>

      </div>

      <hr />

      <h3>📂 Layer Peta</h3>

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

      <p className="sidebar-note">
        Centang atau hilangkan layer untuk mengatur tampilan peta.
      </p>

    </aside>

  );

}

function Check({

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

      <span>{text}</span>

    </label>

  );

}

export default Sidebar;