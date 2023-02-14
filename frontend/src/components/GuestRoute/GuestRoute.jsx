import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/feed"></Navigate> : <Outlet />;
};

export default GuestRoute;
