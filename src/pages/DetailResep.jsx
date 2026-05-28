import { useParams, useNavigate } from "react-router-dom";
import { COLORS, RECIPES } from "../data";

export default function DetailResep() {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate();
  
  // Mencari data resep berdasarkan ID
  const recipe = RECIPES.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div style={{ padding: 20 }}>Resep tidak ditemukan!</div>;
  }

  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh", paddingBottom: "20px" }}>
      {/* Header dengan tombol Back */}
      <div style={{ padding: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>
          ⬅️
        </button>
        <h2 style={{ margin: 0, color: COLORS.textDark }}>Detail Resep</h2>
      </div>

      {/* Gambar / Emoji Resep */}
      <div style={{ textAlign: "center", fontSize: "100px", margin: "20px 0" }}>
        {recipe.img}
      </div>

      {/* Konten Detail */}
      <div style={{ padding: "0 20px" }}>
        <h1 style={{ color: COLORS.textDark, margin: "0 0 10px 0" }}>{recipe.name}</h1>
        
        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <span style={{ backgroundColor: COLORS.salmonBg, padding: "5px 10px", borderRadius: "8px", fontSize: "14px" }}>
            ⏱️ {recipe.time} Menit
          </span>
          <span style={{ backgroundColor: COLORS.greenLight, padding: "5px 10px", borderRadius: "8px", fontSize: "14px" }}>
            💰 Rp {recipe.cost.toLocaleString()}
          </span>
        </div>

        <h3 style={{ color: COLORS.textMed }}>Langkah Memasak</h3>
        <p style={{ color: COLORS.textLight, lineHeight: "1.6" }}>
          {/* Ini nanti bisa kamu ambil dari field 'steps' di data.js */}
          1. Siapkan bahan-bahan yang diperlukan untuk membuat {recipe.name}.<br/>
          2. Masak dengan api sedang hingga matang merata.<br/>
          3. Sajikan selagi hangat untuk hasil terbaik.
        </p>
      </div>

      {/* Tombol Simpan */}
      <div style={{ padding: "20px" }}>
        <button style={{
          width: "100%",
          padding: "15px",
          backgroundColor: recipe.saved ? COLORS.salmon : COLORS.navBg,
          color: COLORS.white,
          border: "none",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          {recipe.saved ? "🔖 Sudah Disimpan" : "🔖 Simpan Resep"}
        </button>
      </div>
    </div>
  );
}