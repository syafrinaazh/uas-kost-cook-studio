import { COLORS } from "../data"; // Pastikan path import benar

export default function RecipeCard({ recipe, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: COLORS.cardBg,
        borderRadius: "15px",
        padding: "15px",
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.2s"
      }}
      // Efek hover agar terlihat interaktif
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {/* Bagian Gambar / Emoji Resep */}
      <div style={{
        fontSize: "40px",
        backgroundColor: COLORS.salmonBg,
        padding: "10px",
        borderRadius: "12px"
      }}>
        {recipe.img}
      </div>

      {/* Bagian Informasi Resep */}
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 5px 0", color: COLORS.textDark, fontSize: "16px" }}>
          {recipe.name}
        </h3>
        <p style={{ margin: 0, color: COLORS.textLight, fontSize: "13px" }}>
          {recipe.cat} • ⏱️ {recipe.time} mnt
        </p>
        <p style={{ margin: "5px 0 0 0", color: COLORS.salmon, fontWeight: "bold", fontSize: "14px" }}>
          Rp {recipe.cost.toLocaleString()}
        </p>
      </div>

      {/* Ikon Simpan (Bookmark) */}
      <div style={{ fontSize: "20px" }}>
        {recipe.saved ? "🔖" : "🤍"}
      </div>
    </div>
  );
}