function Service() {
  const services = [
    {
      title: "Website Resmi Desa",
      icon: "🌐",
      desc: "Akses website resmi Desa Donowarih untuk memperoleh informasi dan pelayanan terbaru.",
      button: "Kunjungi Website",
      link: "https://donowarih-malang.desa.id",
    },
    {
      title: "Administrasi Desa",
      icon: "📄",
      desc: "Informasi mengenai pelayanan administrasi kependudukan dan surat-menyurat.",
      button: "Lihat Informasi",
      link: "https://donowarih-malang.desa.id",
    },
    {
      title: "Kontak Pemerintah Desa",
      icon: "☎️",
      desc: "Hubungi Pemerintah Desa Donowarih apabila membutuhkan informasi lebih lanjut.",
      button: "Hubungi",
      link: "https://donowarih-malang.desa.id",
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
          📑 Pelayanan Desa
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "15px",
            lineHeight: "30px",
          }}
        >
          Halaman ini menyediakan akses menuju layanan resmi Pemerintah
          Desa Donowarih. SIDORA berfungsi sebagai media informasi,
          sedangkan pelayanan administrasi tetap dilakukan melalui
          website resmi desa.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "25px",
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
                color: "#22c55e",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "28px",
                marginBottom: "25px",
              }}
            >
              {item.desc}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#22c55e",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                {item.button}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;