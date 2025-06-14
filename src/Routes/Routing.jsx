import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Loading from "../components/Loading";
const Signup = lazy(() => import("../Pages/Signup"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Products = lazy(() => import("../Pages/Products"));
const UpdateProduct = lazy(() => import("../Pages/UpdateProduct"));
const SingleProduct = lazy(() => import("../Pages/SingleProduct"));
const Login = lazy(() => import("../Pages/Login"));
import LoginProtected from "./LoginProtected";
import ProtectedRoutes from "./ProtectedRoutes";

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
          <Route path="/update_product/:id" element={<UpdateProduct />} />
          <Route path="/single_product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
