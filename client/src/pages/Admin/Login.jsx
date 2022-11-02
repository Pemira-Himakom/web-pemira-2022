import Form from "../../components/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleForm(adminForm) {
    // authentication with server
    const { username, password } = adminForm;
    axios
      .post("/api/admin/authenticate", {
        inputUsername: username,
        inputPassword: password,
      })
      .then((response) => {
        const data = response.data;
        if (data.status) {
          navigate("/admin");
        } else {
          // setShowAlert(true);
          console.log(data.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Form
        title="SLAVE"
        identification="Codename"
        password="Secret Key"
        submit="Hace"
        handleForm={handleForm}
      />
    </>
  );
}

export default Login;
