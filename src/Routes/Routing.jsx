import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Loading from "../components/Loading";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
const Login = lazy(() => import("../Pages/Login"));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
