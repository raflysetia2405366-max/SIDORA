import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>SIDORA</h2>

      <p className="sidebar-subtitle">
        Layer WebGIS
      </p>

      <hr />

      <h3>📂 Layer Peta</h3>

      <Check text="Batas Desa" checked />
      <Check text="Dusun" checked />
      <Check text="Jalan" />
      <Check text="Sungai" />
      <Check text="Fasilitas Umum" />

      <hr />

      <h3>📊 Statistik</h3>

      <Item title="Dusun" value="4" />
      <Item title="RT" value="52" />
      <Item title="RW" value="12" />
      <Item title="Luas" value="1298 Ha" />

      <hr />

      <p className="sidebar-note">
        Layer hasil digitasi QGIS akan
        muncul setelah proses integrasi selesai.
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
      {text}
    </label>
  );
}

function Item({ title, value }) {
  return (
    <div className="item">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}

export default Sidebar;