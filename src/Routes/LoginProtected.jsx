import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtected = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default LoginProtected;
