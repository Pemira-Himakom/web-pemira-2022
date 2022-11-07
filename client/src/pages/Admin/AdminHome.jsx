import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        //navigate to login later
        <Link to="/admin/login">login</Link>
      )}
    </>
  );
}

export default AdminHome;
