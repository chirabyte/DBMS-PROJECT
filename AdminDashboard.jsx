
function AdminDashboard() {
  const students = JSON.parse(
    localStorage.getItem("students") || "[]"
  );

  const feedbackList = JSON.parse(
    localStorage.getItem("feedbackList") || "[]"
  );

  const courses = [
    "DBMS",
    "Java Programming",
    "Operating Systems",
    "Computer Networks",
    "Web Development"
  ];

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Manage students, courses and feedback.</p>

      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div className="card">
          <h3>Total Courses</h3>
          <h2>{courses.length}</h2>
        </div>

        <div className="card">
          <h3>Total Feedback</h3>
          <h2>{feedbackList.length}</h2>
        </div>
      </div>

      <h3>Registered Students</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>USN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.usn}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>All Course Feedback</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Rating</th>
              <th>Feedback</th>
            </tr>
          </thead>

          <tbody>
            {feedbackList.map(item => (
              <tr key={item.id}>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.rating} / 5</td>
                <td>{item.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
