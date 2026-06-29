import { useState } from "react";

function Sidebar() {

  const [layer, setLayer] = useState({
    batas: true,
    dusun: true,
    jalan: false,
    sungai: false,
    fasilitas: false,
  });

  const toggleLayer = (name) => {
    setLayer({
      ...layer,
      [name]: !layer[name],
    });
  };

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "18px",
        padding: "22px",
        color: "white",
        height: "100%",
      }}
    >
      {/* Header */}

      <h2
        style={{
          marginTop: 0,
          marginBottom: "5px",
        }}
      >
        SIDORA
      </h2>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "14px",
          marginBottom: "25px",
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

      {/* Layer */}

      <h3>🗂 Layer Peta</h3>

      <LayerItem
        text="Batas Desa"
        checked={layer.batas}
        onClick={() => toggleLayer("batas")}
      />

      <LayerItem
        text="Dusun"
        checked={layer.dusun}
        onClick={() => toggleLayer("dusun")}
      />

      <LayerItem
        text="Jalan"
        checked={layer.jalan}
        onClick={() => toggleLayer("jalan")}
      />

      <LayerItem
        text="Sungai"
        checked={layer.sungai}
        onClick={() => toggleLayer("sungai")}
      />

      <LayerItem
        text="Fasilitas Umum"
        checked={layer.fasilitas}
        onClick={() => toggleLayer("fasilitas")}
      />

      <hr
        style={{
          border: "1px solid #1f2937",
          margin: "30px 0",
        }}
      />

      {/* Statistik */}

      <h3>📊 Statistik</h3>

      <Stat title="Dusun" value="4" />

      <Stat title="RT" value="52" />

      <Stat title="RW" value="12" />

      <Stat title="Luas" value="1298 Ha" />

    </div>
  );
}

function LayerItem({ text, checked, onClick }) {
  return (
    <div
      style={{
        marginBottom: "12px",
      }}
    >
      <label
        style={{
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onClick}
        />

        {" "}

        {text}

      </label>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <span>{title}</span>

      <strong
        style={{
          color: "#22c55e",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          width: "18px",
          height: "18px",
          background: color,
          borderRadius: "4px",
          marginRight: "12px",
        }}
      />

      {text}
    </div>
  );
}

export default Sidebar;