import { COLORS } from "../data"; // Pastikan path import ini benar sesuai folder kamu

export default function GreenBtn({ children, onClick, style, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: COLORS.green,
        color: COLORS.white,
        padding: "12px 20px",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background 0.2s, transform 0.1s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: "100%", // Default lebar penuh, bisa di-override via props style
        ...style, // Memungkinkan kustomisasi gaya tambahan dari luar
      }}
      // Efek tombol saat ditekan (opsional bisa ditambah hover di CSS)
      onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}
      onMouseUp={(e) => e.target.style.transform = "scale(1)"}
    >
      {children}
    </button>
  );
}