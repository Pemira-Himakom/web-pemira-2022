import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAdmin } from "../store/authSlice";


const Layout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
