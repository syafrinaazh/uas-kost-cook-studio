import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard");
    } else if (username === "user" && password === "user123") {
      navigate("/dashboard");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-left">
          <img src="/logo.jpeg" alt="Kost Cook Studio" />
        </div>

        <div className="login-right">
          <p className="login-greeting">
            selamat datang kembali<br />
            silahkan login untuk memulai
          </p>

          <input
            type="text"
            placeholder="email / username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <p className="login-links">
            forgot password / create new account
          </p>

          <button className="login-btn" onClick={handleLogin}>
            masuk
          </button>
        </div>

      </div>
      <div className="login-footer"></div>
    </div>
  );
}

export default Login;