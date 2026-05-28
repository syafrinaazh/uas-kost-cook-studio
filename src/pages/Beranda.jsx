import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = ["Beranda", "Kategori", "Resep Populer", "Mulai Memasak"];

const KATEGORI = [
  { label: "Sarapan", color: "#D4C5B0", textColor: "#5a4030" },
  { label: "Makan Siang", color: "#3D3D2E", textColor: "#fff" },
  { label: "Makan Malam", color: "#8B7340", textColor: "#fff" },
  { label: "Minuman", color: "#C85A3A", textColor: "#fff" },
];

const RESEP_TERBARU = [
  {
    nama: "Spaghetti Carbonara",
    color: "#C85A3A",
    emoji: "🍝",
  },
  {
    nama: "Rotisserie Chicken",
    color: "#C85A3A",
    emoji: "🍗",
  },
  {
    nama: "Sate Ayam",
    color: "#C85A3A",
    emoji: "🍢",
  },
];

const REKOMENDASI = [
  { nama: "Pie Strawberry", emoji: "🍓" },
  { nama: "Toast Bread", emoji: "🍞" },
  { nama: "Cake Strawberry", emoji: "🍰" },
];

export default function Beranda() {
  const [activeNav, setActiveNav] = useState("Beranda");
  const [search, setSearch] = useState("");
  const [activeKategori, setActiveKategori] = useState(null);
  const navigate = useNavigate();

  const handleNav = (item) => {
    setActiveNav(item);
    if (item === "Mulai Memasak") navigate("/login");
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.bg} />
      <div style={styles.page}>

        {/* Header */}
        <div style={styles.header}>
          <img src="/logo.jpeg" alt="Kost Cook Studio" style={styles.logoImg} />
        </div>

        {/* Navbar */}
        <nav style={styles.navbar}>
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              style={{
                ...styles.navBtn,
                fontWeight: activeNav === item ? 800 : 500,
                textDecoration: activeNav === item ? "underline" : "none",
              }}
              onClick={() => handleNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <div style={styles.main}>
          {/* Left Column */}
          <div style={styles.leftCol}>

            {/* Search Bar */}
            <div style={styles.searchRow}>
              <input
                type="text"
                placeholder="Cari resep favoritmu"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchInput}
              />
              <button style={styles.searchBtn}>🔍</button>
            </div>

            {/* Kategori */}
            <div style={styles.chipRow}>
              {KATEGORI.map((k) => (
                <button
                  key={k.label}
                  style={{
                    ...styles.chip,
                    background: activeKategori === k.label ? k.color : "#fff",
                    color: activeKategori === k.label ? k.textColor : "#7B4F2E",
                    border: `2px solid ${k.color}`,
                  }}
                  onClick={() => setActiveKategori(activeKategori === k.label ? null : k.label)}
                >
                  {k.label}
                </button>
              ))}
            </div>

            {/* Resep Terbaru */}
            <p style={styles.sectionTitle}>Resep Terbaru</p>
            <div style={styles.resepList}>
              {RESEP_TERBARU.map((r) => (
                <div key={r.nama} style={styles.resepCard}>
                  <div style={styles.resepImg}>
                    <span style={styles.resepEmoji}>{r.emoji}</span>
                  </div>
                  <div style={styles.resepInfo}>
                    <p style={styles.resepNama}>{r.nama}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={styles.ctaRow}>
              <button style={styles.ctaBtn} onClick={() => navigate("/login")}>
                Jelajahi Resep ➕
              </button>
            </div>

            {/* Banner */}
            <div style={styles.banner}>
              <div style={styles.bannerLeft}>
                <p style={styles.bannerTitle}>Butuh inspirasi masakan enak anak kost?</p>
                <button style={styles.bannerBtn}>Lihat kategori resep ➕</button>
              </div>
              <div style={styles.bannerRight}>
                <span style={{ fontSize: "3rem" }}>🥐</span>
              </div>
            </div>
          </div>

          {/* Right Column - Rekomendasi */}
          <div style={styles.rightCol}>
            <div style={styles.rekomenCard}>
              <p style={styles.rekomenTitle}>Makanan Simpan</p>
              <div style={styles.rekomenGrid}>
                {REKOMENDASI.map((r) => (
                  <div key={r.nama} style={styles.rekomenItem}>
                    <div style={styles.rekomenImg}>
                      <span style={{ fontSize: "2rem" }}>{r.emoji}</span>
                    </div>
                    <p style={styles.rekomenNama}>{r.nama}</p>
                  </div>
                ))}
              </div>
              <button style={styles.rekomenBtn}>Lihat semua ➜</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Nunito', 'Poppins', sans-serif",
    position: "relative",
    padding: "32px 20px",
  },
  bg: {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(150deg, #f5b8a8 0%, #f7d6a0 55%, #fce8c0 100%)",
    zIndex: 0,
  },
  page: {
    width: "100%",
    maxWidth: 960,
    background: "linear-gradient(150deg, #f5b8a8 0%, #f7d6a0 55%, #fce8c0 100%)",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(180,100,60,0.18)",
    position: "relative",
    zIndex: 1,
  },
  header: {
    background: "#fff",
    padding: "18px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    height: 80,
    width: "auto",
    objectFit: "contain",
  },
  navbar: {
    background: "#7B4F2E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
  },
  navBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "0.88rem",
    padding: "11px 24px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.15s",
  },
  main: {
    display: "flex",
    gap: 24,
    padding: "28px 40px 32px",
  },
  leftCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  searchRow: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: "10px 16px",
    borderRadius: 20,
    border: "2px solid #ddd",
    background: "#fffde8",
    fontSize: "0.85rem",
    fontFamily: "inherit",
    outline: "none",
    color: "#5a3e20",
  },
  searchBtn: {
    background: "#7DBF6E",
    border: "none",
    borderRadius: 20,
    padding: "10px 16px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    borderRadius: 20,
    padding: "7px 16px",
    fontSize: "0.8rem",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.15s",
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: 900,
    color: "#C85A1A",
    margin: "4px 0 8px",
  },
  resepList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  resepCard: {
    display: "flex",
    alignItems: "center",
    background: "#C85A3A",
    borderRadius: 12,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.12s",
    boxShadow: "0 3px 10px rgba(200,90,58,0.2)",
  },
  resepImg: {
    width: 72,
    height: 64,
    background: "rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  resepEmoji: {
    fontSize: "2rem",
  },
  resepInfo: {
    padding: "10px 16px",
    flex: 1,
  },
  resepNama: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "0.9rem",
    margin: 0,
  },
  ctaRow: {
    display: "flex",
    justifyContent: "center",
  },
  ctaBtn: {
    background: "#7DBF6E",
    color: "#fff",
    border: "none",
    borderRadius: 20,
    padding: "10px 28px",
    fontSize: "0.88rem",
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "inherit",
    boxShadow: "0 4px 12px rgba(100,180,80,0.3)",
  },
  banner: {
    background: "#fdf5e0",
    borderRadius: 14,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #f0d8b0",
  },
  bannerLeft: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: "0.88rem",
    fontWeight: 800,
    color: "#C85A1A",
    margin: "0 0 10px",
    lineHeight: 1.4,
  },
  bannerBtn: {
    background: "#7DBF6E",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    padding: "7px 16px",
    fontSize: "0.78rem",
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  bannerRight: {
    fontSize: "3rem",
    marginLeft: 16,
  },
  rightCol: {
    width: 220,
    flexShrink: 0,
  },
  rekomenCard: {
    background: "rgba(255,255,255,0.6)",
    borderRadius: 14,
    padding: "16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  rekomenTitle: {
    fontSize: "0.82rem",
    fontWeight: 800,
    color: "#7B4F2E",
    margin: 0,
  },
  rekomenGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  rekomenItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "rgba(255,255,255,0.7)",
    borderRadius: 10,
    padding: "8px 10px",
    cursor: "pointer",
  },
  rekomenImg: {
    width: 44,
    height: 44,
    background: "#fce8d0",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  rekomenNama: {
    fontSize: "0.78rem",
    fontWeight: 700,
    color: "#7B4F2E",
    margin: 0,
  },
  rekomenBtn: {
    background: "#7DBF6E",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    padding: "8px 0",
    width: "100%",
    fontSize: "0.8rem",
    fontWeight: 800,
    cursor: "pointer",
    fontFamily: "inherit",
  },
};