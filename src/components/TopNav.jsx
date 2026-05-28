import { COLORS } from "../data";

export default function TopNav({ title }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      backgroundColor: COLORS.white,
      position: "sticky",
      top: 0,
      zIndex: 50,
      borderBottom: `1px solid ${COLORS.salmonBg}`
    }}>
      {/* Bagian Kiri: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img 
          src="/logo.jpeg" 
          alt="Logo" 
          style={{ width: "35px", height: "35px", borderRadius: "8px", objectFit: "cover" }} 
        />
        {title && (
          <h2 style={{ fontSize: "18px", color: COLORS.textDark, margin: 0 }}>
            {title}
          </h2>
        )}
      </div>

      {/* Bagian Kanan: Foto Profil / Menu */}
      <div style={{
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        backgroundColor: COLORS.salmonBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        cursor: "pointer",
        border: `2px solid ${COLORS.salmonLight}`
      }}>
        👤
      </div>
    </div>
  );
}