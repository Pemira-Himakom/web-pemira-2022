import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdmin } from "../store/authSlice";
import Navigation from "./Navigation";

const Protected = ({ children }) => {
  const admin = useSelector(selectAdmin);
  const location = useLocation();
  const isAdminLoginRoute = location.pathname === "/admin/login";

  console.log(isAdminLoginRoute);
  if (!admin && !isAdminLoginRoute) {
    return <Navigate to='/admin/login' replace />;
  }

  return (
    <>
      {!isAdminLoginRoute && <Navigation />}
      {children}
      {!children && <Outlet />}
    </>
  );
};

export default Protected;
