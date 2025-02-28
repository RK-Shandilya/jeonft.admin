import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* Redirect to dashboard/users if someone just goes to /dashboard */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/users" replace />} />
      </Routes>
    </Router>
  );
};

export default App;