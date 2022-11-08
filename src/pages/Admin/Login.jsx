import Form from "./components/Form";
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
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        width: "60%",
        border: "5px solid #FFFF00",
        padding: "10px",
        backgroundColor: "#F000FF",
      }}
    >
      <Form
        title="SLAVE"
        identification="Codename"
        password="Secret Key"
        handleForm={handleForm}
      />
    </div>
  );
}

export default Login;
