
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleRegister(e) {
    e.preventDefault();

    const students = JSON.parse(
      localStorage.getItem("students") || "[]"
    );

    const exists = students.some(
      student => student.email === form.email
    );

    if (exists) {
      alert("Email already registered!");
      return;
    }

    students.push(form);

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

    alert("Registration successful!");
    navigate("/student-login");
  }

  return (
    <div className="page-container">
      <form className="form-card" onSubmit={handleRegister}>
        <h2>Student Registration</h2>
        <p>Create your student account</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (minimum 6 characters)"
          value={form.password}
          onChange={handleChange}
          minLength="6"
          required
        />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Science">Information Science</option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <button type="submit" className="btn full-btn">
          Register
        </button>

        <p>
          Already registered?{" "}
          <Link to="/student-login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default StudentRegister;
