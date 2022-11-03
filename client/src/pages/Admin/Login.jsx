import Form from "../../components/Form";
import axios from "axios";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import {login} from "../../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleForm(adminForm) {
    // authentication with server
    const { username, password } = adminForm;
    const input = {username, password};

    dispatch(login(login, "LOGIN_ADMIN"))    
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
