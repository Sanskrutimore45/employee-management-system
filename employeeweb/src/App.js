import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import EmployeeList from "./pages/employee/EmployeeList";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddEmployee from "./pages/admin/AddEmployee";
import EditEmployee from "./pages/employee/EditEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [userRole, setUserRole] = useState(() => localStorage.getItem("userRole"));

  const handleLogin = (role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);
  };

  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  const isAdmin = userRole === "ADMIN";
  const isEmployee = userRole === "EMPLOYEE";

  return (
    <>
      <Header onLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          <Route path="/employee-dashboard" element={isEmployee ? <EmployeeDashboard onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/employee-list" element={(isEmployee || isAdmin) ? <EmployeeList /> : <Navigate to="/" />} />
          <Route path="/edit-employee/:id" element={(isAdmin || isEmployee) ? <EditEmployee /> : <Navigate to="/" />} />

          <Route path="/admin-dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
          <Route path="/add-employee" element={isAdmin ? <AddEmployee /> : <Navigate to="/" />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
