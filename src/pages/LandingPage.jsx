import "./LandingPage.css";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <div className="navbar">

        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>

        <div className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#kategori">Kategori</a>
          <a href="#resep">Resep Populer</a>
          <a href="#mulai">Mulai Memasak</a>
          <Link to="/login">Login</Link>
        </div>

      </div>

      {/* HERO */}
      <div className="hero" id="beranda">

        <div className="hero-text">

          <h1>
            Masak simpel
            <br />
            hidup lebih hemat
          </h1>

          <p>
            Temukan resep praktis, murah dan cepat
            khusus anak kost! Kost Cook Studio adalah
            solusi buat kamu yang ingin tetap makan
            enak tanpa ribet.
          </p>

          <button>
            Mulai Memasak
          </button>

        </div>

      </div>

      {/* FITUR */}
      <div className="section">

        <h2>Fitur Utama</h2>

        <div className="card-container">

          <div className="card brown">
            Praktis
          </div>

          <div className="card yellow">
            Hemat
          </div>

          <div className="card green">
            Cepat
          </div>

        </div>

      </div>

      {/* KATEGORI */}
      <div className="section" id="kategori">

        <h2>Kategori Resep</h2>

        <div className="card-container">

          <div className="card pink">
            Sarapan
          </div>

          <div className="card blue">
            Makan Siang
          </div>

          <div className="card gold">
            Makan Malam
          </div>

          <div className="card orange">
            Minuman
          </div>

        </div>

      </div>

      {/* RESEP */}
      <div className="section" id="resep">

        <h2>Resep Populer</h2>

        <div className="card-container">

          <div className="card softpink">
            Mie
          </div>

          <div className="card white">
            Nasgor
          </div>

          <div className="card cream">
            Ayam Kecap
          </div>

          <div className="card lime">
            Telur Dadar
          </div>

        </div>

      </div>

      {/* BUTTON */}
      <div id="mulai">

        <button className="explore-btn">
          Jelajahi Resep 
        </button>

      </div>

      {/* TEXT BAWAH */}
      <h1 className="bottom-text">
        Mulai masak sekarang dan
        hemat pengeluaranmu!
      </h1>

    </div>
  );
}

export default LandingPage;