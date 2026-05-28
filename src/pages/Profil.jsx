import { useNavigate } from "react-router-dom";
import { COLORS } from "../data";
import BottomNav from "../components/BottomNav";
import GreenBtn from "../components/GreenBtn";

export default function Profil() {
  const navigate = useNavigate();

  // Data profil (ini nanti bisa kamu ambil dari API Laravel)
  const user = {
    name: "Anak Kost Kreatif",
    email: "user@kostcook.com",
    avatar: "👤"
  };

  const handleLogout = () => {
    // Tambahkan logic hapus token di sini
    console.log("Logout berhasil");
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Header Profil */}
      <div style={{ 
        padding: "40px 20px", 
        textAlign: "center", 
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px"
      }}>
        <div style={{ fontSize: "60px", marginBottom: "10px" }}>{user.avatar}</div>
        <h2 style={{ color: COLORS.textDark, margin: "0" }}>{user.name}</h2>
        <p style={{ color: COLORS.textLight, fontSize: "14px" }}>{user.email}</p>
      </div>

      {/* Menu Pengaturan */}
      <div style={{ padding: "20px" }}>
        <h3 style={{ color: COLORS.textDark }}>Akun Saya</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button style={menuStyle}>Edit Profil</button>
          <button style={menuStyle}>Resep Saya</button>
          <button style={menuStyle}>Pengaturan</button>
        </div>

        {/* Tombol Logout */}
        <div style={{ marginTop: "30px" }}>
          <GreenBtn onClick={handleLogout} style={{ backgroundColor: COLORS.salmon }}>
            Keluar (Logout)
          </GreenBtn>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

// Style sederhana untuk menu button
const menuStyle = {
  backgroundColor: COLORS.white,
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  textAlign: "left",
  fontSize: "16px",
  color: COLORS.textDark,
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
};