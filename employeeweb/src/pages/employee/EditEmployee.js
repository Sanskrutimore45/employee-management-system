import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [emp, setEmp] = useState({ name:"", email:"", phone:"", department:"" });

  useEffect(()=>{
    api.get(`/employees/${id}`).then(res => setEmp(res.data)).catch(console.error);
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/employees/${id}`, emp);
      alert("Updated");
      nav("/employee-list");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <h3>Edit Employee</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" name="name" value={emp.name} onChange={e=>setEmp({...emp, name:e.target.value})} required />
        <input className="form-control mb-2" name="email" value={emp.email} onChange={e=>setEmp({...emp, email:e.target.value})} required />
        <input className="form-control mb-2" name="department" value={emp.department} onChange={e=>setEmp({...emp, department:e.target.value})} required />
        <input className="form-control mb-2" name="phone" value={emp.phone} onChange={e=>setEmp({...emp, phone:e.target.value})} required />
        <button className="btn btn-primary me-2">Update</button>
        <button type="button" className="btn btn-secondary" onClick={()=>nav(-1)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditEmployee;
