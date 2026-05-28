import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../data";
import TopNav from "../components/TopNav";
import GreenBtn from "../components/GreenBtn";
import BottomNav from "../components/BottomNav";

export default function TambahResep() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cat: "",
    time: "",
    cost: "",
    desc: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini nanti kamu panggil API Laravel untuk kirim data resep baru
    console.log("Data resep baru:", formData);
    alert("Resep berhasil ditambahkan!");
    navigate("/beranda");
  };

  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh", paddingBottom: "80px" }}>
      <TopNav title="Tambah Resep" />

      <form onSubmit={handleSubmit} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="name" placeholder="Nama Resep" onChange={handleChange} style={inputStyle} required />
        <input name="cat" placeholder="Kategori (misal: Sarapan)" onChange={handleChange} style={inputStyle} required />
        
        <div style={{ display: "flex", gap: "10px" }}>
          <input name="time" type="number" placeholder="Waktu (mnt)" onChange={handleChange} style={inputStyle} required />
          <input name="cost" type="number" placeholder="Biaya (Rp)" onChange={handleChange} style={inputStyle} required />
        </div>

        <textarea name="desc" placeholder="Langkah-langkah memasak..." onChange={handleChange} style={{ ...inputStyle, height: "100px" }} required />

        <GreenBtn type="submit" style={{ marginTop: "10px" }}>
          Simpan Resep
        </GreenBtn>
      </form>

      <BottomNav />
    </div>
  );
}

// Style untuk input agar seragam
const inputStyle = {
  padding: "15px",
  borderRadius: "12px",
  border: `1px solid ${COLORS.salmonLight}`,
  backgroundColor: COLORS.white,
  fontSize: "14px",
  outline: "none"
};