import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard({ onLogout }){
  return (
    <div className="container mt-4">
      <h3>Admin Dashboard</h3>
      <div className="mt-3">
        <Link className="btn btn-success me-2" to="/add-employee">Add Employee</Link>
        <Link className="btn btn-primary me-2" to="/employee-list">View Employees</Link>
        <button className="btn btn-danger" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
