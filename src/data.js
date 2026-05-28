// 1. Skema Warna (Bisa kamu ubah di sini, otomatis berubah di seluruh aplikasi)
export const COLORS = {
  cream: "#FFF9F0",
  white: "#FFFFFF",
  navBg: "#3A5A40",       // Warna Hijau Tua (untuk navbar)
  green: "#588157",       // Warna Hijau (untuk tombol)
  greenDark: "#2d4a2c",
  greenLight: "#d7e0d6",
  salmon: "#E07A5F",      // Warna aksen
  salmonBg: "#F4F1DE",
  salmonLight: "#fcefe9",
  textDark: "#264653",
  textMed: "#4a5d66",
  textLight: "#87989f",
};

// 2. Data Resep
// Kamu bisa menambah atau mengubah data di sini. 
// Field 'saved' nanti bisa diubah oleh user saat klik tombol bookmark.
export const RECIPES = [
  {
    id: 1,
    name: "Nasi Goreng Kost",
    cat: "Sarapan",
    time: 15,
    cost: 12000,
    img: "🍳",
    saved: false,
    desc: "Nasi goreng praktis dengan bumbu dapur sederhana."
  },
  {
    id: 2,
    name: "Mie Rebus Spesial",
    cat: "Makan Malam",
    time: 10,
    cost: 8000,
    img: "🍜",
    saved: true,
    desc: "Mie instan dengan tambahan telur dan sawi segar."
  },
  {
    id: 3,
    name: "Tempe Orek Manis",
    cat: "Makan Siang",
    time: 20,
    cost: 10000,
    img: "🍱",
    saved: false,
    desc: "Tempe kering dengan kecap manis dan cabai."
  },
  {
    id: 4,
    name: "Omelet Keju",
    cat: "Sarapan",
    time: 5,
    cost: 7000,
    img: "🧀",
    saved: false,
    desc: "Telur dadar praktis dengan keju lumer di dalam."
  }
];