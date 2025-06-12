import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Loading from "../components/Loading";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Products";
import CreateProducts from "../Pages/CreateProducts";
import LoginProtected from "./LoginProtected";
import ProtectedRoutes from "./ProtectedRoutes";
const Login = lazy(() => import("../Pages/Login"));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<LoginProtected />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create-products" element={<CreateProducts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
