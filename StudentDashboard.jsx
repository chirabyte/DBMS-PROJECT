
import { useState } from "react";

function StudentDashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const courses = [
    { name: "DBMS", lecturer: "Mr. Kumar" },
    { name: "Java Programming", lecturer: "Ms. Priya" },
    { name: "Operating Systems", lecturer: "Mr. Rahul" },
    { name: "Computer Networks", lecturer: "Mr. Anil" },
    { name: "Web Development", lecturer: "Ms. Sneha" }
  ];

  const [course, setCourse] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a star rating!");
      return;
    }

    const selectedCourse = courses.find(
      item => item.name === course
    );

    const feedbackList = JSON.parse(
      localStorage.getItem("feedbackList") || "[]"
    );

    const newFeedback = {
      id: Date.now(),
      student: user?.name || "Student",
      email: user?.email || "",
      course: selectedCourse.name,
      lecturer: selectedCourse.lecturer,
      rating: rating,
      review: review,
      date: new Date().toLocaleDateString()
    };

    feedbackList.push(newFeedback);

    localStorage.setItem(
      "feedbackList",
      JSON.stringify(feedbackList)
    );

    setMessage("Your feedback has been submitted successfully!");

    setCourse("");
    setRating(0);
    setReview("");
  }

  return (
    <div className="page-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Course Feedback</h2>

        <p>
          Welcome, {user?.name || "Student"}!
        </p>

        {message && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {message}
          </p>
        )}

        <label>Select Course</label>

        <select
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
        >
          <option value="">Choose Course</option>

          {courses.map(item => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {course && (
          <p>
            Lecturer: {
              courses.find(item => item.name === course).lecturer
            }
          </p>
        )}

        <label>Rate Your Course</label>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: "pointer",
                fontSize: "35px",
                color: star <= rating ? "#f5a623" : "#ccc"
              }}
            >
              ★
            </span>
          ))}
        </div>

        <p>
          {rating === 0
            ? "Select your rating"
            : `You selected ${rating} out of 5 stars`}
        </p>

        <label>Write Your Feedback</label>

        <textarea
          placeholder="Write your experience about the course and lecturer..."
          value={review}
          onChange={e => setReview(e.target.value)}
          rows="5"
          required
        />

        <button type="submit" className="btn full-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default StudentDashboard;
