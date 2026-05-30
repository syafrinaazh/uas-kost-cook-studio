import React, { useState } from 'react';

export default function App() {
  // Navigasi halaman: 'beranda', 'login', 'kategori-grid', 'kategori-filter', 'detail'
  const [page, setPage] = useState('beranda');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // ---- AMBIL INPUT USERNAME & PASSWORD ----
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ---- FUNGSI LOGIN REAL HUBUNG KE BACKEND PORT 8080 ----
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login sukses! Selamat datang kembali Admin.");
        setPage('kategori-grid'); // Pindah otomatis ke halaman dalam jika sukses
      } else {
        alert("Gagal Login: " + data.message); // Muncul jika salah password/username
      }
    } catch (error) {
      console.error(error);
      alert("Gagal terhubung ke server backend. Pastikan server port 8080 sudah dinyalakan!");
    }
  };

  // Data Dummy untuk List Resep Terbaru
  const latestRecipes = [
    { id: 1, title: "Spaghetti Carbonara", desc: "Creamy dan lezat, cukup pakai susu dan keju.", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=200" },
    { id: 2, title: "Rotisserie Chicken", desc: "Ayam panggang bumbu minimalis ala anak kost.", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200" },
    { id: 3, title: "Sate Ayam", desc: "Sate praktis, bisa dipanggang pakai teflon.", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9583b5?w=200" }
  ];
  
  // Header Komponen (Profile Bar) - Muncul di halaman dalam
  const ProfileHeader = () => (
    <div className="flex items-center justify-between bg-[#FCF0E4] p-3 px-6 rounded-full mb-4 mx-4 shadow-sm border border-pink-200">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white shadow-sm"></div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-gray-700">Fina</span>
          <div className="flex items-center gap-1">
            <span className="text-[9px] bg-yellow-400 px-1.5 rounded text-white font-bold">Kategori 01</span>
            <span className="text-[9px] font-bold text-orange-400">⭐ 100</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-7 h-7 bg-white rounded flex items-center justify-center text-red-400 shadow-sm">❤️</button>
        <button className="w-7 h-7 bg-white rounded flex items-center justify-center text-gray-400 shadow-sm">🔔</button>
        <button className="w-7 h-7 bg-[#B4603B] rounded flex items-center justify-center text-white shadow-sm">☰</button>
      </div>
    </div>
  );

  // Navbar Tengah (Kuning)
  const MainNavbar = () => (
    <div className="bg-[#B4603B] text-white text-[10px] md:text-xs py-2.5 px-6 flex justify-center gap-4 md:gap-8 font-medium tracking-wide">
      <button onClick={() => setPage('beranda')} className="hover:underline opacity-80 hover:opacity-100">beranda</button>
      <button onClick={() => setPage('kategori-grid')} className="hover:underline opacity-80 hover:opacity-100">kategori</button>
      <button className="hover:underline opacity-80 hover:opacity-100">resep populer</button>
      <button className="hover:underline opacity-80 hover:opacity-100">mulai memasak</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F99192] to-[#FFE099] flex items-center justify-center p-4 font-sans text-[#6B3B24]">
      <div className="w-full max-w-4xl bg-[#FFFDF9] rounded-3xl shadow-2xl overflow-hidden border-[6px] border-gray-800 relative min-h-[600px]">
        
        {/* ================= 1. PAGE BERANDA ================= */}
        {page === 'beranda' && (
          <div className="flex flex-col items-center py-12 px-6 text-center">
             <div className="bg-white px-10 py-6 rounded-2xl shadow-sm mb-6">
                <span className="text-5xl font-black flex items-center gap-1">
                  <span className="text-[#3A9AD4]">K</span>
                  <span className="text-[#F1BA2E] text-4xl">🍳</span>
                  <span className="text-[#E9526F]">S</span>
                  <span className="text-[#7CB743]">T</span>
                </span>
                <p className="text-[10px] font-bold tracking-widest text-gray-400">COOK STUDIO</p>
             </div>
             <h1 className="text-2xl font-bold text-[#B4603B] mb-2">Masak simpel hidup lebih hemat</h1>
             <p className="text-sm text-[#B4603B]/80 max-w-md mb-8">Temukan resep praktis, murah dan cepat khusus anak kost!</p>
             <button onClick={() => setPage('kategori-grid')} className="bg-[#7CD555] text-white font-bold py-3 px-10 rounded-full shadow-lg hover:scale-105 transition">Jelajahi Resep ✨</button>
             <button onClick={() => setPage('login')} className="mt-4 text-xs font-bold text-[#B4603B]/60 hover:underline">Login Admin</button>
          </div>
        )}

        {/* ================= 2. PAGE KATEGORI GRID ================= */}
        {page === 'kategori-grid' && (
          <div className="pb-8">
            <MainNavbar />
            <div className="p-6">
              <div className="bg-[#FCD8A3] rounded-2xl p-6 text-center shadow-inner">
                <h2 className="text-xl font-bold mb-1">Kategori resep</h2>
                <p className="text-xs font-medium mb-6">Pilih resep favoritmu!</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {['Sarapan', 'Makan siang', 'Makan malam', 'Minuman', 'Hidangan cepat', 'Hidangan hemat'].map((kat, i) => (
                    <div key={i} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mb-3 overflow-hidden border-2 border-orange-100">
                        <img src={`https://source.unsplash.com/featured/?food,${kat}`} alt="food" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-bold mb-3">{kat}</span>
                      <button onClick={() => setPage('kategori-filter')} className="bg-[#7CD555] text-white text-[9px] font-bold py-1.5 px-4 rounded-full">Jelajahi Resep</button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 bg-[#FFE57F] p-5 rounded-2xl flex justify-between items-center">
                <p className="text-xs font-bold">Butuh inspirasi masakan enak anak kost?</p>
                <button className="bg-[#7CD555] text-white text-[10px] font-bold py-2 px-4 rounded-lg">Lihat kategori resep ➔</button>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. PAGE KATEGORI FILTER (LIST & SIDEBAR) ================= */}
        {page === 'kategori-filter' && (
          <div className="pb-8">
            <ProfileHeader />
            <MainNavbar />
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Kolom Kiri: Search & Resep Terbaru */}
              <div className="md:col-span-2">
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="Cari resep favoritmu" className="flex-1 bg-white border-2 border-orange-200 rounded-lg px-4 py-1.5 text-xs focus:outline-none" />
                  <button className="bg-[#3A9AD4] text-white px-3 rounded-lg text-xs">🔍</button>
                </div>
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {['Sarapan', 'Makan siang', 'Makan malam', 'Minuman'].map(b => (
                    <button key={b} className="bg-[#FCD8A3] text-[10px] font-bold px-4 py-1.5 rounded-lg whitespace-nowrap">{b}</button>
                  ))}
                </div>
                <h3 className="font-bold text-sm mb-4">Resep Terbaru</h3>
                <div className="space-y-4">
                  {latestRecipes.map(r => (
                    <div key={r.id} className="bg-[#F99192]/20 border border-orange-200 p-3 rounded-2xl flex gap-4 items-center">
                      <img src={r.img} className="w-16 h-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold">{r.title}</h4>
                        <p className="text-[10px] text-gray-600 mb-2">{r.desc}</p>
                        <button className="bg-[#7CD555] text-white text-[9px] font-bold py-1 px-4 rounded-lg">Jelajahi Resep ➔</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Sidebar Simpanan */}
              <div className="bg-[#FFF8E1] border border-orange-200 rounded-2xl p-4 h-fit">
                <p className="text-[10px] font-black text-gray-500 mb-4 tracking-tighter uppercase">Halaman Simpan</p>
                <div className="flex flex-col items-center gap-4">
                  {['Pie Strawberry', 'Toast Bread', 'Cake Strawberry'].map((s, i) => (
                    <div key={i} className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full border-2 border-red-300 overflow-hidden mb-1">
                         <img src={`https://source.unsplash.com/featured/?dessert,${i}`} className="w-full h-full object-cover" />
                       </div>
                       <span className="text-[8px] font-bold text-center">{s}</span>
                    </div>
                  ))}
                  <button className="mt-4 bg-[#7CD555] text-white text-[9px] font-bold py-1.5 px-5 rounded-full">Lihat semua ➔</button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= 4. PAGE LOGIN ADMIN ================= */}
        {page === 'login' && (
          <div className="p-12 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-3xl shadow-sm">
                <div className="flex flex-col items-center">
                   <span className="text-7xl font-black">K🍳ST</span>
                   <p className="text-xs font-bold text-gray-400">COOK STUDIO</p>
                </div>
                <form onSubmit={handleLogin} className="text-center">
                   <h2 className="text-[#B4603B] font-bold mb-1">selamat datang kembali</h2>
                   <p className="text-xs mb-6 text-gray-400">silahkan login untuk memulai</p>
                   
                   <input 
                     type="text" 
                     placeholder="username" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     className="w-full bg-[#FCFBE3] p-2 rounded-lg mb-2 text-xs border border-orange-100" 
                     required
                   />
                   <input 
                     type="password" 
                     placeholder="password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full bg-[#FCFBE3] p-2 rounded-lg mb-4 text-xs border border-orange-100" 
                     required
                   />
                   
                   <button type="submit" className="bg-[#B4603B] text-white w-full py-2 rounded-lg text-xs font-bold">masuk</button>
                </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}