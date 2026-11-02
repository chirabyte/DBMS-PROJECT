
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LecturerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "lecturer@college.com" &&
      password === "123456"
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Lecturer",
          email,
          role: "lecturer"
        })
      );

      navigate("/lecturer-dashboard");
    } else {
      alert("Invalid lecturer email or password!");
    }
  }

  return (
    <div className="page-container">
      <form className="form-card" onSubmit={handleLogin}>
        <h2>Lecturer Login</h2>
        <p>Login to view student feedback.</p>

        <input
          type="email"
          placeholder="Lecturer Email"
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

export default LecturerLogin;
