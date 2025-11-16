import React from "react";
import { Link } from "react-router-dom";

function EmployeeDashboard(){
  return (
    <div>
      <h3>Employee Dashboard</h3>
      <Link to="/employee-list" className="btn btn-info">View Employees</Link>
    </div>
  );
}

export default EmployeeDashboard;
