import React, { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(()=>{ fetchEmployees(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  const handleEdit = (id) => navigate(`/edit-employee/${id}`);

  return (
    <div>
      <h3>Employee List</h3>
      <button className="btn btn-success mb-3" onClick={() => navigate("/add-employee")}>Add Employee</button>
      <table className="table table-bordered">
        <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Phone</th><th>Actions</th></tr></thead>
        <tbody>
          {employees.map(e=>(
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>{e.phone}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={()=>handleEdit(e.id)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
