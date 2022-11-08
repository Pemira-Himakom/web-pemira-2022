import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdmin } from "../store/authSlice";


const Layout = ({ children }) => {
  const location = useLocation();
  const adminroute = location.pathname.startsWith("/admin");
  const admin = useSelector(selectAdmin);

  return (
    <>
      {adminroute && admin && <Navigation />}
      {children}
    </>
  );
};

export default Layout;
