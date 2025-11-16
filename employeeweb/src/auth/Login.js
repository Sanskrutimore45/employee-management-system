import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { username, password });
      const user = res.data;
      onLogin(user.role);
      if (user.role === "ADMIN") navigate("/admin-dashboard");
      else navigate("/employee-dashboard");
    } catch (error) {
      setErr("Invalid credentials or server error");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <div className="mb-2">
          <input className="form-control" required placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className="mb-2">
          <input type="password" className="form-control" required placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary w-100">Login</button>
        {err && <div className="text-danger mt-2">{err}</div>}
      </form>
    </div>
  );
}

export default Login;
