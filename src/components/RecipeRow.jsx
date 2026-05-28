import { COLORS } from "../data"; // Pastikan path import benar

export default function RecipeRow({ recipe, onClick }) {
  return (
    <div 
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: COLORS.white,
        borderRadius: "12px",
        marginBottom: "10px",
        cursor: "pointer",
        border: `1px solid ${COLORS.salmonBg}`,
        transition: "background 0.2s"
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = COLORS.cream}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = COLORS.white}
    >
      {/* Gambar Emoji */}
      <div style={{ fontSize: "24px", marginRight: "12px" }}>
        {recipe.img}
      </div>

      {/* Info Utama */}
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0, color: COLORS.textDark, fontSize: "14px" }}>
          {recipe.name}
        </h4>
        <span style={{ fontSize: "12px", color: COLORS.textLight }}>
          {recipe.time} menit
        </span>
      </div>

      {/* Harga */}
      <div style={{ fontWeight: "bold", color: COLORS.greenDark, fontSize: "13px" }}>
        Rp {recipe.cost.toLocaleString()}
      </div>
    </div>
  );
}