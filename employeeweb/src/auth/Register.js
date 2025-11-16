import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", password: "", role: "EMPLOYEE", name:"", email:"", phone:"", department:"" });
  const navigate = useNavigate();

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try {
      // save user
      const userRes = await api.post("/auth/register", {
        username: form.username,
        password: form.password,
        role: form.role
      });

      // if user wants employee record, create employee row and link employee_id
      if (form.name || form.email || form.phone || form.department) {
        const empRes = await api.post("/employees", {
          name: form.name,
          email: form.email,
          phone: form.phone,
          department: form.department
        });
        // optional: patch user with employee_id - requires endpoint (not implemented here) or handle later in DB
      }

      alert("Registered successfully. Please login.");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "20px auto" }}>
      <h3>Register</h3>
      <form onSubmit={submit}>
        <div className="row">
          <div className="col-md-6 mb-2">
            <input name="username" className="form-control" placeholder="Username" required value={form.username} onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-2">
            <input name="password" type="password" className="form-control" placeholder="Password" required value={form.password} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-2">
          <select name="role" className="form-select" value={form.role} onChange={handleChange}>
            <option value="EMPLOYEE">EMPLOYEE</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <h6 className="mt-3">Optional employee info</h6>
        <div className="mb-2">
          <input name="name" className="form-control" placeholder="Full Name" value={form.name} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <input name="email" type="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <input name="phone" className="form-control" placeholder="Phone" value={form.phone} onChange={handleChange} />
        </div>
        <div className="mb-2">
          <input name="department" className="form-control" placeholder="Department" value={form.department} onChange={handleChange} />
        </div>

        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
