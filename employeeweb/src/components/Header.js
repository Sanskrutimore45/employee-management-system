import React from "react";
import { Link } from "react-router-dom";

function Header({ onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Employee Management</Link>
        <div>
          <Link to="/" className="nav-link d-inline text-white">Login</Link>
          <Link to="/register" className="nav-link d-inline text-white ms-2">Register</Link>
          <button onClick={onLogout} className="btn btn-sm btn-danger ms-3">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
