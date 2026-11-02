
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const students = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    const student = students.find(
      s => s.email === email && s.password === password
    );

    if (!student) {
      alert("Invalid email or password. Please register first.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: student.name,
        email: student.email,
        role: "student"
      })
    );

    navigate("/student-dashboard");
  }

  return (
    <div className="page-container">
      <form className="form-card" onSubmit={handleLogin}>
        <h2>Student Login</h2>
        <p>Welcome back! Login to continue.</p>

        <input
          type="email"
          placeholder="Email Address"
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

        <p>
          New student? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default StudentLogin;
