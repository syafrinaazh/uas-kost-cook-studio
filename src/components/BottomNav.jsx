import { useNavigate, useLocation } from "react-router-dom";
// Sesuaikan path import COLORS berdasarkan letak file data.js kamu
import { COLORS } from "../data"; 

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Daftar menu yang sesuai dengan file aslimu
  const navItems = [
    { path: "/beranda", emoji: "🏠", label: "Beranda" },
    { path: "/kategori", emoji: "📂", label: "Kategori" },
    { path: "/tambah", emoji: "➕", label: "Tambah" },
    { path: "/simpan", emoji: "🔖", label: "Simpan" },
    { path: "/profil", emoji: "👤", label: "Profil" },
  ];

  return (
    <div style={{ 
      position: "fixed", 
      bottom: 0, 
      left: "50%", 
      transform: "translateX(-50%)", 
      width: "100%", 
      maxWidth: 480, 
      background: COLORS.navBg, 
      display: "flex", 
      justifyContent: "space-around", 
      padding: "8px 0 10px", 
      zIndex: 100,
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)"
    }}>
      {navItems.map((n) => {
        const isActive = currentPath === n.path;
        
        return (
          <button 
            key={n.path} 
            onClick={() => navigate(n.path)} 
            style={{
              background: "none", 
              border: "none", 
              cursor: "pointer", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: 2,
              color: isActive ? COLORS.yellow : COLORS.white, 
              opacity: isActive ? 1 : 0.75, 
              transition: "all 0.2s"
            }}
          >
            <span style={{ 
              fontSize: n.path === "/tambah" ? 24 : 20, 
              background: n.path === "/tambah" ? COLORS.green : "transparent", 
              borderRadius: "50%", 
              width: n.path === "/tambah" ? 36 : "auto", 
              height: n.path === "/tambah" ? 36 : "auto", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              {n.emoji}
            </span>
            <span style={{ fontSize: 10, fontWeight: isActive ? "bold" : "normal" }}>
              {n.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}