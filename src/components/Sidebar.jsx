import "./Sidebar.css";

function Sidebar({ onClose }) {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">

        <button
          className="sidebar-toggle"
          onClick={onClose}
        >
          ☰
        </button>

        <div>
          <h2>SIDORA</h2>
          <p className="sidebar-subtitle">
            Layer WebGIS
          </p>
        </div>

      </div>

      <hr />

      <h3>📂 Layer Peta</h3>

      <Check text="Batas Desa" checked />
      <Check text="Dusun Karangan" checked />
      <Check text="Dusun Karangjuwet" checked />
      <Check text="Dusun Jaraan" checked />
      <Check text="Dusun Borogragal" checked />

      <hr />

      <p className="sidebar-note">
        Centang atau hilangkan layer untuk mengatur tampilan peta.
      </p>

    </aside>
  );
}

function Check({ text, checked }) {
  return (
    <label className="check-item">
      <input
        type="checkbox"
        defaultChecked={checked}
      />
      <span>{text}</span>
    </label>
  );
}

export default Sidebar;