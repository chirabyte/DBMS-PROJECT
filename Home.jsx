
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">
            BETTER LEARNING STARTS WITH YOUR VOICE
          </p>

          <h1>Course Feedback & Rating System</h1>

          <p>
            Share your feedback, rate your courses and help
            improve the quality of education.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn">
              Student Registration
            </Link>

            <Link to="/student-login" className="btn outline">
              Student Login
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Our Features</h2>
        <div className="cards">
          <div className="card">
            <h3>Course Rating</h3>
            <p>Rate your courses from 1 to 5 stars.</p>
          </div>

          <div className="card">
            <h3>Student Feedback</h3>
            <p>Share your opinions and suggestions.</p>
          </div>

          <div className="card">
            <h3>Review Analysis</h3>
            <p>View ratings and feedback through graphs.</p>
          </div>
        </div>
      </section>

      <section className="section role-section">
        <h2>Login Portals</h2>
        <div className="cards">
          <div className="card">
            <h3>Student</h3>
            <p>Register and submit course feedback.</p>
            <Link to="/register">Register Now</Link>
            <br />
            <Link to="/student-login">Student Login</Link>
          </div>

          <div className="card">
            <h3>Lecturer</h3>
            <p>View student reviews and ratings.</p>
            <Link to="/lecturer-login">Lecturer Login</Link>
          </div>

          <div className="card">
            <h3>Admin</h3>
            <p>Manage students and feedback.</p>
            <Link to="/admin-login">Admin Login</Link>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 CourseReview. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;
