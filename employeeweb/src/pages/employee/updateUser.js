import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', department:'' });

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/employees/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  },[id]);

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const submit = e => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/employees/${id}`, formData)
      .then(()=> { alert("Updated"); navigate('/employee-list'); })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h3>Edit Employee</h3>
      <form className="card p-3 mt-2" onSubmit={submit} style={{ maxWidth:600 }}>
        <div className="mb-2"><input className="form-control" name="name" value={formData.name||''} onChange={handleChange} required/></div>
        <div className="mb-2"><input className="form-control" name="email" value={formData.email||''} onChange={handleChange} required/></div>
        <div className="mb-2"><input className="form-control" name="department" value={formData.department||''} onChange={handleChange} required/></div>
        <div className="mb-2"><input className="form-control" name="phone" value={formData.phone||''} onChange={handleChange} required/></div>
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
