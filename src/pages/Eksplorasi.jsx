import { useState } from "react";

const categories = [
  { id: 1, name: "Sarapan", img: "/images/sarapan.png" },
  { id: 2, name: "Makan siang", img: "/images/makan-siang.png" },
  { id: 3, name: "Makan malam", img: "/images/makan-malam.png" },
  { id: 4, name: "Minuman", img: "/images/minuman.png" },
  { id: 5, name: "Hidangan cepat", img: "/images/hidangan-cepat.png" },
  { id: 6, name: "Hidangan hemat", img: "/images/hidangan-hemat.png" },
];

const navItems = ["beranda", "kategori", "resep populer", "mulai memasak"];

export default function EksplorasiPage() {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("kategori");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }

        .eksplorasi-page {
          min-height: 100vh;
          background: linear-gradient(160deg, #f5a3a3 0%, #f9c880 50%, #fbe8a6 100%);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          font-family: 'Nunito', sans-serif;
          padding: 28px 0 60px;
        }

        /* ── MOBILE: phone frame ── */
        .phone {
          width: 360px;
          background: #fdf6f0;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 16px 60px rgba(180,90,40,0.28);
        }

        /* TOP BAR */
        .top-bar {
          background: linear-gradient(110deg, #f5a3a3 0%, #f9c880 100%);
        }

        .status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px 6px;
        }

        .user-side {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #e0d0f0;
          border: 2px solid #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          overflow: hidden;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .username { font-size: 13px; font-weight: 800; color: #333; }
        .slash { font-size: 11px; color: #aaa; }

        .kategori-chip {
          background: #f5c35a;
          color: #7a4200;
          font-size: 10px;
          font-weight: 800;
          border-radius: 8px;
          padding: 2px 8px;
        }

        .right-side {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .score { font-size: 12px; font-weight: 800; color: #c03a00; margin-right: 2px; }

        .icon-btn {
          background: rgba(255,255,255,0.55);
          border-radius: 7px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          cursor: pointer;
          border: none;
        }

        /* LOGO CARD */
        .logo-card {
          background: linear-gradient(135deg, #fff9e6 55%, #fde8a8 100%);
          border-radius: 18px;
          margin: 4px 12px 0;
          padding: 10px 0 8px;
          text-align: center;
        }

        .logo-card img {
          width: 130px;
          height: auto;
        }

        /* NAV */
        .nav-row {
          display: flex;
          justify-content: space-around;
          padding: 8px 6px 0;
        }

        .nav-btn {
          background: none;
          border: none;
          border-bottom: 2.5px solid transparent;
          font-size: 10.5px;
          font-weight: 600;
          color: #7a5530;
          padding-bottom: 5px;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          transition: all 0.2s;
        }

        .nav-btn.active {
          color: #c0392b;
          border-bottom: 2.5px solid #c0392b;
          font-weight: 800;
        }

        /* CONTENT */
        .content {
          background: #fdf6f0;
          padding: 14px 13px 0;
        }

        /* SEARCH ROW */
        .search-row {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          align-items: stretch;
        }

        .kategori-label {
          background: #f5c35a;
          border-radius: 14px;
          padding: 9px 13px;
          min-width: 112px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .kategori-label-title {
          font-size: 12px;
          font-weight: 800;
          color: #7a4200;
        }

        .kategori-label-sub {
          font-size: 9.5px;
          color: #b07830;
          margin-top: 2px;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #f5c35a;
          border-radius: 11px;
          padding: 5px 7px;
          gap: 5px;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 10.5px;
          color: #777;
          background: transparent;
          font-family: 'Nunito', sans-serif;
        }

        .search-box input::placeholder { color: #bbb; }

        .search-btn {
          background: #4caf50;
          border: none;
          border-radius: 8px;
          padding: 4px 8px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }

        /* GRID */
        .grid-wrapper {
          background: #fffde7;
          border: 2px solid #4fc3f7;
          border-radius: 16px;
          padding: 10px 8px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 12px;
        }

        .cat-card {
          background: #fff;
          border-radius: 13px;
          padding: 10px 4px 8px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(245,195,90,0.18);
          transition: transform 0.15s;
        }

        .cat-card:hover { transform: scale(1.05); }

        .cat-img-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #f5f5f5;
          margin: 0 auto 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cat-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cat-name {
          font-size: 10px;
          font-weight: 700;
          color: #555;
          margin-bottom: 5px;
          line-height: 1.25;
        }

        .jelajahi-btn {
          background: #4caf50;
          border: none;
          border-radius: 7px;
          color: #fff;
          font-size: 8.5px;
          font-weight: 800;
          padding: 3px 8px;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          letter-spacing: 0.3px;
        }

        /* BANNER */
        .banner {
          background: #fff8e1;
          border: 1.5px solid #f5c35a;
          border-radius: 14px;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .banner-text {
          font-size: 12px;
          font-weight: 800;
          color: #d04a00;
          line-height: 1.35;
          max-width: 168px;
          margin-bottom: 7px;
        }

        .lihat-btn {
          background: #4caf50;
          border: none;
          border-radius: 9px;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 5px 12px;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .banner-emoji { font-size: 52px; line-height: 1; flex-shrink: 0; }

        /* ── DESKTOP ≥768px ── */
        @media (min-width: 768px) {
          .eksplorasi-page {
            padding: 0;
            align-items: stretch;
          }

          .phone {
            width: 100%;
            border-radius: 0;
            box-shadow: none;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .top-bar { flex-shrink: 0; }

          .status-row { padding: 14px 32px 8px; }

          .avatar { width: 36px; height: 36px; font-size: 18px; }
          .username { font-size: 15px; }
          .kategori-chip { font-size: 12px; padding: 3px 10px; }
          .score { font-size: 14px; }
          .icon-btn { width: 30px; height: 30px; font-size: 15px; }

          .logo-card {
            margin: 6px 24px 0;
            padding: 14px 0 10px;
            border-radius: 22px;
          }
          .logo-card img { width: 180px; }

          .nav-row { padding: 10px 24px 0; }
          .nav-btn { font-size: 14px; padding-bottom: 7px; }

          .content {
            flex: 1;
            padding: 24px 32px 0;
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            align-self: center;
          }

          .search-row { margin-bottom: 20px; gap: 12px; }

          .kategori-label {
            min-width: 160px;
            padding: 12px 18px;
            border-radius: 18px;
          }
          .kategori-label-title { font-size: 16px; }
          .kategori-label-sub { font-size: 12px; margin-top: 4px; }

          .search-box {
            border-radius: 14px;
            padding: 8px 12px;
          }
          .search-box input { font-size: 14px; }
          .search-btn { font-size: 16px; padding: 6px 12px; }

          .grid-wrapper {
            padding: 16px 14px;
            gap: 14px;
            margin-bottom: 20px;
            border-radius: 20px;
          }

          .cat-card { padding: 16px 8px 12px; border-radius: 16px; }
          .cat-img-wrap { width: 80px; height: 80px; margin-bottom: 10px; }
          .cat-name { font-size: 13px; margin-bottom: 8px; }
          .jelajahi-btn { font-size: 11px; padding: 5px 12px; border-radius: 9px; }

          .banner {
            padding: 18px 24px;
            border-radius: 18px;
            margin-bottom: 24px;
          }
          .banner-text { font-size: 16px; max-width: 280px; margin-bottom: 12px; }
          .lihat-btn { font-size: 13px; padding: 8px 18px; border-radius: 12px; }
          .banner-emoji { font-size: 72px; }
        }
      `}</style>

      <div className="eksplorasi-page">
        <div className="phone">

          {/* TOP BAR */}
          <div className="top-bar">
            <div className="status-row">
              <div className="user-side">
                <div className="avatar">😊</div>
                <span className="username">Fina</span>
                <span className="slash">/</span>
                <span className="kategori-chip">Kategori 01</span>
              </div>
              <div className="right-side">
                <span className="score">⭐ 100</span>
                {["❤️","🔖","⬆️","☰"].map((ic, i) => (
                  <button key={i} className="icon-btn">{ic}</button>
                ))}
              </div>
            </div>

            {/* LOGO */}
            <div className="logo-card">
              {/* taruh logo.jpeg di public/ lalu src="/logo.jpeg" */}
              {/* atau import logo from "./logo.jpeg" lalu src={logo} */}
              <img src="/logo.jpeg" alt="Kost Cook Studio" />
            </div>

            {/* NAV */}
            <div className="nav-row">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`nav-btn ${activeNav === item ? "active" : ""}`}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="content">

            {/* SEARCH ROW */}
            <div className="search-row">
              <div className="kategori-label">
                <div className="kategori-label-title">Kategori resep</div>
                <div className="kategori-label-sub">Pilih resep favoritmu!</div>
              </div>
              <div className="search-box">
                <input
                  placeholder="Cari resep favoritmu..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-btn">🔍</button>
              </div>
            </div>

            {/* GRID */}
            <div className="grid-wrapper">
              {categories.map((cat) => (
                <div key={cat.id} className="cat-card">
                  <div className="cat-img-wrap">
                    {/* ganti img src dengan foto makanan kamu */}
                    <img src={cat.img} alt={cat.name} />
                  </div>
                  <div className="cat-name">{cat.name}</div>
                  <button className="jelajahi-btn">Jelajahi Resep</button>
                </div>
              ))}
            </div>

            {/* BANNER */}
            <div className="banner">
              <div>
                <div className="banner-text">Butuh inspirasi masakan anak anak kost?</div>
                <button className="lihat-btn">Lihat kategori resep ➕</button>
              </div>
              <div className="banner-emoji">🥐</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}