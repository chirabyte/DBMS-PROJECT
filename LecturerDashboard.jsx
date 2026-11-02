
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function LecturerDashboard() {
  const feedbackList = JSON.parse(
    localStorage.getItem("feedbackList") || "[]"
  );

  const averageRating =
    feedbackList.length > 0
      ? (
          feedbackList.reduce(
            (total, item) => total + Number(item.rating),
            0
          ) / feedbackList.length
        ).toFixed(1)
      : "0.0";

  const fiveStarCount = feedbackList.filter(
    item => Number(item.rating) === 5
  ).length;

  const ratingData = [5, 4, 3, 2, 1].map(star => ({
    rating: `${star} Stars`,
    count: feedbackList.filter(
      item => Number(item.rating) === star
    ).length
  }));

  return (
    <div className="dashboard-container">
      <h2>Lecturer Dashboard</h2>
      <p>View student feedback and course performance.</p>

      <div className="cards">
        <div className="card">
          <h3>Total Feedback</h3>
          <h2>{feedbackList.length}</h2>
        </div>

        <div className="card">
          <h3>Average Rating</h3>
          <h2>⭐ {averageRating} / 5</h2>
        </div>

        <div className="card">
          <h3>5 Star Reviews</h3>
          <h2>{fiveStarCount}</h2>
        </div>
      </div>

      <div className="chart-card">
        <h3>Student Rating Analysis</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h3>Student Feedback Details</h3>

      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <div className="feedback-list">
          {feedbackList.map(item => (
            <div className="card" key={item.id}>
              <h3>{item.course}</h3>

              <p>
                <strong>Student:</strong> {item.student}
              </p>

              <p>
                <strong>Lecturer:</strong> {item.lecturer}
              </p>

              <p>
                <strong>Rating:</strong>{" "}
                {"⭐".repeat(Number(item.rating))}
              </p>

              <p>
                <strong>Feedback:</strong> {item.review}
              </p>

              <p>
                <strong>Date:</strong> {item.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LecturerDashboard;
