import React from "react";
import { Link, Outlet } from "react-router-dom";
const AppLayout = () => {

  return (
    <div>

      <h1>Employee Dashboard</h1>
      <nav>
        <Link to="/">All Employees</Link>
        <Link to="/add">Add Employee</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
