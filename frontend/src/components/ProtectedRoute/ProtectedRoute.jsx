import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Outlet /> : <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;
