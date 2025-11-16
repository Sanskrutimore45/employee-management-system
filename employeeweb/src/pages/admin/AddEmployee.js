import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [emp, setEmp] = useState({ name:"", email:"", phone:"", department:"" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/employees", emp);
    nav("/employee-list");
  };

  return (
    <div style={{ maxWidth:720 }}>
      <h3>Add Employee</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Name" value={emp.name} onChange={e=>setEmp({...emp, name:e.target.value})} required />
        <input className="form-control mb-2" placeholder="Email" value={emp.email} onChange={e=>setEmp({...emp, email:e.target.value})} required />
        <input className="form-control mb-2" placeholder="Department" value={emp.department} onChange={e=>setEmp({...emp, department:e.target.value})} required />
        <input className="form-control mb-2" placeholder="Phone" value={emp.phone} onChange={e=>setEmp({...emp, phone:e.target.value})} required />
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default AddEmployee;
