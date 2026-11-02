
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CourseReview
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {!user && (
          <>
            <Link to="/student-login">Student</Link>
            <Link to="/lecturer-login">Lecturer</Link>
            <Link to="/admin-login">Admin</Link>
          </>
        )}

        {user && (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
