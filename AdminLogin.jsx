
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "admin@college.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Admin",
          email,
          role: "admin"
        })
      );

      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin email or password!");
    }
  }

  return (
    <div className="page-container">
      <form className="form-card" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <p>Login to manage the feedback system.</p>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn full-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
