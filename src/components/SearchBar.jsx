import { COLORS } from "../data"; // Pastikan path import benar

export default function SearchBar({ value, onChange, placeholder = "Cari resep..." }) {
  return (
    <div style={{
      margin: "20px",
      position: "relative"
    }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 15px 12px 45px", // Padding kiri lebih besar untuk space icon
          borderRadius: "12px",
          border: `1px solid ${COLORS.salmonLight}`,
          backgroundColor: COLORS.white,
          fontSize: "14px",
          color: COLORS.textDark,
          outline: "none",
          boxSizing: "border-box", // Supaya lebar 100% tidak terpotong padding
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
        }}
      />
      {/* Icon Pencarian (bisa diganti dengan icon dari library seperti react-icons) */}
      <span style={{
        position: "absolute",
        left: "15px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "18px"
      }}>
        🔍
      </span>
    </div>
  );
}