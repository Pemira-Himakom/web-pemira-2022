import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
  
function AdminHome() {
  const admin = useSelector((state) => state.auth.admin);
  return (
    <>
      {admin ? (
        <>
          <h1>AdminHome</h1>
          <Link to="/admin/assign">assign token</Link>
        </>
      ) : (
        <Navigate to="/admin/login" />
      )}
    </>
  );
}

export default AdminHome;
