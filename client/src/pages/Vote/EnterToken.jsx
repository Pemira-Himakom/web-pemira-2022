import { useContext, useRef } from "react";
import StarLeft from "../../img/vote/StarLeft.svg";
import StarRight from "../../img/vote/StarRight.svg";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setSuccess,
  setError,
  resetUIState,
} from "../../store/uiSlice";
import {
  setAdminLogout,
  setUserLogout,
  setUserLogin,
  login,
} from "../../store/authSlice";

const EnterToken = () => {
  const ui = useSelector((state) => {
    return state.ui;
  });

  const dispatch = useDispatch();

  const nimRef = useRef();
  const tokenRef = useRef();

  const handleLogin = (e) => {
    const inputNIM = nimRef.current.value;
    const inputToken = tokenRef.current.value;
    const input = { inputNIM, inputToken };

    dispatch(login(input, "LOGIN_USER"));

    e.preventDefault();
  };

  const changeHandler = () => {
    dispatch(resetUIState());
  };

  const Fail = (
    <div className="bg-red-400 py-1 text-center absolute w-full">
      {ui.error.message}
    </div>
  );
  const Success = (
    <div className="bg-green-400 py-1 text-center absolute w-full">
      Success, Let Vote!
    </div>
  );

  return (
    <>
      {ui.error.status && Fail}
      {ui.success && Success}
      <div className="bg-vote w-screen h-screen bg-cover pt-10 flex justify-center items-center font-prata">
        <form
          className="border-[15px] bg-[#E6E6E6] flex flex-col border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto"
          onSubmit={handleLogin}
        >
          {ui.success && <></>}
          <h3 className="flex justify-center items-center ">
            <img src={StarLeft} alt="star left" className="inline-block" />
            <span className="text-choco text-4xl">Login</span>
            <img src={StarRight} alt="star right" className="inline-block" />
          </h3>
          <div className="mt-16 xl:mt-28">
            <input
              placeholder="NIM"
              type="text"
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={nimRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-12 xl:mt-16">
            <input
              type="text"
              placeholder="Token"
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={tokenRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-14 xl:mt-20 relative flex justify-end">
            <button
              type="submit"
              className="bg-choco text-whiteWeak px-10 py-2"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EnterToken;
