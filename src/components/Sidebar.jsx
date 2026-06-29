function Sidebar() {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "18px",
        padding: "25px",
        color: "white",
        position: "sticky",
        top: "95px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "8px",
          fontSize: "28px",
        }}
      >
        SIDORA
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "30px",
        }}
      >
        Layer WebGIS
      </p>

      <hr
        style={{
          border: "1px solid #1f2937",
          marginBottom: "25px",
        }}
      />

      <h3
        style={{
          marginBottom: "18px",
          color: "#22c55e",
        }}
      >
        📂 Layer Peta
      </h3>

      <Check text="Batas Desa" checked />
      <Check text="Dusun" checked />
      <Check text="Jalan" />
      <Check text="Sungai" />
      <Check text="Fasilitas Umum" />

      <hr
        style={{
          border: "1px solid #1f2937",
          margin: "30px 0",
        }}
      />

      <h3
        style={{
          color: "#22c55e",
          marginBottom: "20px",
        }}
      >
        📊 Statistik
      </h3>

      <Item title="Dusun" value="4" />
      <Item title="RT" value="52" />
      <Item title="RW" value="12" />
      <Item title="Luas" value="1298 Ha" />

      <hr
        style={{
          border: "1px solid #1f2937",
          margin: "30px 0",
        }}
      />

      <div
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          lineHeight: "24px",
        }}
      >
        Layer aktif akan ditampilkan pada peta setelah data
        hasil digitasi QGIS selesai diintegrasikan.
      </div>
    </div>
  );
}

function Check({ text, checked = false }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "16px",
        cursor: "pointer",
      }}
    >
      <input type="checkbox" defaultChecked={checked} />
      <span>{text}</span>
    </label>
  );
}

function Item({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "18px",
      }}
    >
      <span>{title}</span>

      <span
        style={{
          color: "#22c55e",
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default Sidebar;