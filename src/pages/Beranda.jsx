import React from 'react';

export default function Beranda({ setPage }) {
  const latestRecipes = [
    { id: 1, title: "Spaghetti Carbonara", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=200" },
    { id: 2, title: "Rotisserie Chicken", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200" },
    { id: 3, title: "Sate Ayam", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9583b5?w=200" }
  ];

  return (
    <div className="pb-8">
      {/* Navbar */}
      <div className="bg-[#B4603B] text-white text-[10px] py-2.5 px-6 flex justify-center gap-6 font-medium">
        <button onClick={() => setPage('beranda')} className="underline font-bold">beranda</button>
        <button onClick={() => setPage('kategori-grid')} className="opacity-80 hover:opacity-100">kategori</button>
        <button className="opacity-80">resep populer</button>
        <button className="opacity-80">mulai memasak</button>
      </div>

      {/* Profile Header */}
      <div className="flex items-center justify-between bg-[#FCF0E4] p-3 px-6 rounded-full my-4 mx-4 shadow-sm border border-pink-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
          <div>
            <span className="text-[11px] font-bold text-gray-700 block">Fina</span>
            <span className="text-[9px] bg-yellow-400 px-1.5 rounded text-white font-bold">Kategori 01</span>
            <span className="text-[9px] font-bold text-orange-400 ml-1">⭐ 100</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-7 h-7 bg-white rounded text-red-400 shadow-sm">❤️</button>
          <button className="w-7 h-7 bg-white rounded text-gray-400 shadow-sm">🔔</button>
          <button className="w-7 h-7 bg-[#B4603B] rounded text-white shadow-sm">☰</button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="flex gap-2">
          <input type="text" placeholder="Cari resep favoritmu"
            className="flex-1 bg-white border-2 border-orange-200 rounded-full px-4 py-2 text-xs focus:outline-none" />
          <button className="bg-[#3A9AD4] text-white px-4 rounded-full text-xs">🔍</button>
        </div>
      </div>

      {/* Kategori Chips */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto">
        {['Sarapan', 'Makan Siang', 'Makan Malam', 'Minuman'].map(k => (
          <button key={k} className="bg-white border border-orange-200 text-[10px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap text-[#B4603B]">{k}</button>
        ))}
      </div>

      {/* Konten */}
      <div className="px-4 grid grid-cols-3 gap-3 mb-4">
        {/* Resep Terbaru */}
        <div className="col-span-2">
          <h3 className="font-bold text-sm mb-3 text-[#B4603B]">Resep Terbaru</h3>
          <div className="space-y-3">
            {latestRecipes.map(r => (
              <div key={r.id} className="bg-white border border-orange-100 p-2 rounded-2xl flex gap-3 items-center shadow-sm">
                <img src={r.img} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" alt={r.title} />
                <div>
                  <h4 className="text-xs font-bold">{r.title}</h4>
                  <button className="mt-1 bg-[#7CD555] text-white text-[9px] font-bold py-1 px-3 rounded-lg">
                    Jelajahi Resep ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setPage('kategori-grid')}
            className="mt-4 w-full bg-[#7CD555] text-white text-xs font-bold py-2 rounded-full shadow">
            Jelajahi Resep ✨
          </button>
        </div>

        {/* Sidebar */}
        <div className="bg-white border border-orange-100 rounded-2xl p-3 shadow-sm">
          <p className="text-[9px] font-black text-[#B4603B] mb-3">Rekomendasi</p>
          {['🥧 Pie', '🍞 Toast', '🎂 Cake'].map((s, i) => (
            <div key={i} className="flex flex-col items-center mb-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl mb-1">{s.split(' ')[0]}</div>
              <span className="text-[8px] font-bold text-center">{s.split(' ')[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="mx-4 bg-[#FFE57F] p-4 rounded-2xl flex justify-between items-center">
        <p className="text-xs font-bold text-[#B4603B]">Butuh inspirasi masakan anak kost? 🍳</p>
        <button onClick={() => setPage('kategori-grid')}
          className="bg-[#7CD555] text-white text-[9px] font-bold py-2 px-4 rounded-lg whitespace-nowrap">
          Lihat kategori ➔
        </button>
      </div>
    </div>
  );
}