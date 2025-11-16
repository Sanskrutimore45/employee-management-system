import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    phone: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/employees", employee)
      .then(() => navigate("/"))
      .catch(error => console.error("Error adding employee:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input type="text" name="department" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input type="text" name="phone" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Add Employee</button>
      </form>
    </div>
  );
}

export default AddUser;
