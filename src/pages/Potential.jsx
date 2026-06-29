function Potential() {
  const data = [
    {
      icon: "🌾",
      title: "Pertanian",
      desc: "Pengembangan tanaman pangan, hortikultura, dan perkebunan sebagai sektor utama masyarakat.",
    },
    {
      icon: "🐄",
      title: "Peternakan",
      desc: "Potensi peternakan sapi, kambing, dan unggas yang menjadi mata pencaharian warga.",
    },
    {
      icon: "🏞️",
      title: "Pariwisata",
      desc: "Wisata alam, perbukitan, dan potensi agrowisata yang dapat dikembangkan.",
    },
    {
      icon: "🏪",
      title: "UMKM",
      desc: "Produk olahan pangan, kerajinan, dan usaha kecil masyarakat Desa Donowarih.",
    },
    {
      icon: "🎓",
      title: "Pendidikan",
      desc: "Fasilitas pendidikan yang mendukung peningkatan kualitas sumber daya manusia.",
    },
    {
      icon: "🕌",
      title: "Sarana Umum",
      desc: "Fasilitas ibadah, kesehatan, olahraga, dan pelayanan masyarakat.",
    },
  ];

  return (
    <div
      style={{
        background: "#071019",
        minHeight: "100vh",
        padding: "35px",
        color: "white",
      }}
    >
      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "18px",
          padding: "30px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#22c55e",
          }}
        >
          🌱 Potensi Desa Donowarih
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "15px",
            lineHeight: "30px",
          }}
        >
          Desa Donowarih memiliki berbagai potensi yang dapat
          dikembangkan untuk meningkatkan kesejahteraan masyarakat
          dan mendukung pembangunan desa berbasis teknologi.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "25px",
              transition: ".3s",
            }}
          >
            <div
              style={{
                fontSize: "45px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                margin: "0 0 10px 0",
                color: "#22c55e",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "28px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potential;