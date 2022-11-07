import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// components
import StarLeft from "../../img/vote/StarLeft.svg";
import StarRight from "../../img/vote/StarRight.svg";

// redux state
import { useSelector, useDispatch } from "react-redux";
import { adminLogin } from "../../store/authSlice";
import { resetUIState } from "../../store/uiSlice";
import Status from "../Vote/components/Status";

const Login = () => {
  const navigate = useNavigate();
  const ui = useSelector((state) => {
    return state.ui;
  });
  const admin = useSelector((state) => {
    return state.auth.admin;
  });

  useEffect(() => {
    console.log(admin);
    if (admin) {
      navigate("/admin/");
    }
  }, [admin, navigate]);

  const dispatch = useDispatch();

  const nameRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    const inputUsername = nameRef.current.value;
    const inputPassword = passwordRef.current.value;
    const input = { inputUsername, inputPassword };

    // dispatch(login(input, "LOGIN_ADMIN"));
    dispatch(adminLogin(input));

    e.preventDefault();
  };

  const changeHandler = () => {
    dispatch(resetUIState());
  };

  return (
    <>
      <Status />
      <div className="bg-vote w-screen h-screen bg-cover pt-10 flex justify-center items-center font-prata">
        <form
          className="border-[15px] bg-[#E6E6E6] flex flex-col border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto"
          onSubmit={handleLogin}
        >
          {ui.success && <></>}
          <h3 className="flex justify-center items-center ">
            <img src={StarLeft} alt="star left" className="inline-block" />
            <span className="text-choco text-4xl">SLAVE</span>
            <img src={StarRight} alt="star right" className="inline-block" />
          </h3>
          <div className="mt-16 xl:mt-28">
            <input
              placeholder="Codename"
              type="text"
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={nameRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-12 xl:mt-16">
            <input
              type="text"
              placeholder="Secret Key"
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={passwordRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-14 xl:mt-20 relative flex justify-end">
            <button
              type="submit"
              className="bg-choco text-whiteWeak px-10 py-2"
            >
              Hace
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
