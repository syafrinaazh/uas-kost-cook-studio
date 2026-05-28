import { useNavigate } from "react-router-dom";
import { COLORS } from "../data";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export default function Kategori() {
  const navigate = useNavigate();

  // Daftar kategori (bisa juga diambil dari API Laravel nantinya)
  const categories = [
    { name: "Sarapan", icon: "🍳" },
    { name: "Makan Siang", icon: "🍛" },
    { name: "Makan Malam", icon: "🌙" },
    { name: "Cemilan", icon: "🍿" },
    { name: "Minuman", icon: "🍹" },
    { name: "Dessert", icon: "🍰" },
  ];

  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh", paddingBottom: "80px" }}>
      <TopNav title="Kategori Resep" />

      <div style={{ 
        padding: "20px", 
        display: "grid", 
        gridTemplateColumns: "1fr 1fr", // Membuat tampilan 2 kolom
        gap: "15px" 
      }}>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => navigate(`/kategori/${cat.name.toLowerCase()}`)}
            style={{
              backgroundColor: COLORS.white,
              padding: "20px",
              borderRadius: "15px",
              border: `1px solid ${COLORS.salmonBg}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
          >
            <span style={{ fontSize: "40px" }}>{cat.icon}</span>
            <span style={{ color: COLORS.textDark, fontWeight: "600" }}>{cat.name}</span>
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}