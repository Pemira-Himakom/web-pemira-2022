import { useContext, useRef } from "react";
import { AuthContext } from "../context/authcontext";
import { UIContext } from "../context/uicontext";
import StarLeft from "../img/vote/StarLeft.svg";
import StarRight from "../img/vote/StarRight.svg";

function Form(props) {
  const { title, identification, password, submit } = props;

  const authCtx = useContext(AuthContext);
  const UICtx = useContext(UIContext);
  const userRef = useRef();
  const passRef = useRef();

  // function handleSubmit(e) {
  //   // sends back username & password
  //   e.preventDefault();

  //   props.handleForm({
  //     username: userRef.current.value,
  //     password: passRef.current.value,
  //   });
  // }

  const handleLogin = (e) => {
    const inputNIM = userRef.current.value;
    const inputToken = passRef.current.value;
    const input = { inputNIM, inputToken };

    e.preventDefault();
    authCtx.login(input);
  };

  const changeHandler = () => {
    UICtx.resetAuthState();
  };

  return (
    <>
      <div className="bg-vote w-screen h-screen bg-cover pt-10 flex justify-center items-center font-prata">
        <form
          className="border-[15px] bg-[#E6E6E6] flex flex-col border-choco-weak outline outline-4 outline-choco min-w-[40vw] w-fit min-h-[60vh] py-20 px-8 mx-auto"
          onSubmit={handleLogin}
        >
          {UICtx.authSuccess && <></>}
          <h3 className="flex justify-center items-center ">
            <img src={StarLeft} alt="star left" className="inline-block" />
            <span className="text-choco text-4xl">{title}</span>
            <img src={StarRight} alt="star right" className="inline-block" />
          </h3>
          <div className="mt-16 xl:mt-28">
            <input
              placeholder={identification}
              type="text"
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={userRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-12 xl:mt-16">
            <input
              type="text"
              placeholder={password}
              className="w-full text-xl placeholder-choco placeholder-opacity-100 placeholder:text-xl outline-none bg-transparent border-b-4 border-choco"
              ref={passRef}
              onChange={changeHandler}
            />
          </div>
          <div className="mt-14 xl:mt-20 relative flex justify-end">
            <button
              type="submit"
              className="bg-choco text-whiteWeak px-10 py-2"
            >
              {submit}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
