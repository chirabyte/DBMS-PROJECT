
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import StudentRegister from "./pages/StudentRegister";
import StudentLogin from "./pages/StudentLogin";
import LecturerLogin from "./pages/LecturerLogin";
import AdminLogin from "./pages/AdminLogin";

import StudentDashboard from "./pages/StudentDashboard";
import LecturerDashboard from "./pages/LecturerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function ProtectedRoute({ role, children }) {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  if (!user || user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* STUDENT REGISTRATION */}
        <Route
          path="/register"
          element={<StudentRegister />}
        />

        {/* LOGIN ROUTES */}
        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

        <Route
          path="/lecturer-login"
          element={<LecturerLogin />}
        />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* DASHBOARD ROUTES */}
        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lecturer-dashboard"
          element={
            <ProtectedRoute role="lecturer">
              <LecturerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* INVALID URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
