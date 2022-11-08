import { useDispatch } from "react-redux";
import { useRef } from "react";

import candidate from "../../../img/candidates/removal.png";
import { setSelect } from "../../../store/voteSlice";

const Candid = (props) => {
  const dispatch = useDispatch();
  const optionRef = useRef();

  const handleClick = () => {
    const name = props.name;
    const number = optionRef.current.value;
    console.log(name, number);
    
    dispatch(setSelect({ name, number }));
  };

  return (
    <div className="w-64 h-[400px] border-4 border-choco-border p-4 pt-9 flex flex-col">
      <div className="bg-choco border-4 border-choco-border h-[272px]">
        <div className="relative -translate-y-5">
          <img src={candidate} alt="candidate" className="h-54" />
        </div>
        <div className="flex bg-choco-border relative -translate-y-5">
          <div className="h-16 w-12 bg-choco flex justify-center items-center font-prata text-[28px] text-choco-border">
            {props.no}
          </div>
          <div className="text-choco font-prata flex justify-center mx-auto items-center text-base">
            <span className="text-center px-2">{props.name}</span>
          </div>
        </div>
      </div>
      <div className="justify-self-end">
        <button
          className="bg-choco text-whiteWeak py-3 font-prata text-xl w-full mt-5"
          value={props.no}
          ref={optionRef}
          onClick={handleClick}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default Candid;
