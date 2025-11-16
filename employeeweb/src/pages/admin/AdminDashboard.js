import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard(){
  return (
    <div>
      <h3>Admin Dashboard</h3>
      <Link to="/add-employee" className="btn btn-success me-2">Add Employee</Link>
      <Link to="/employee-list" className="btn btn-primary">View Employees</Link>
    </div>
  );
}

export default AdminDashboard;
