import { useSelector } from "react-redux";
import { selectedUI } from "../../../store/uiSlice";
import close from "../../../img/close.svg";
import { resetUIState } from "../../../store/uiSlice";
import { useDispatch } from "react-redux";

const Status = () => {
  const ui = useSelector(selectedUI);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetUIState());
  };

  const Fail = (
    <div className="flex justify-center z-0 bg-red-400 py-1 text-center absolute w-full">
      <span className="">{ui.error.message}</span>
      <button className="absolute right-4" onClick={handleClose}>
        <img src={close} className="w-6 cursor-pointer z-20" alt="close" />
      </button>
    </div>
  );

  const Success = (
    <div className="bg-green-400 py-1 text-center absolute w-full">
      <span className="">{ui.success.message}</span>
      <button className="absolute right-4" onClick={handleClose}>
        <img src={close} className="w-6 cursor-pointer z-20" alt="close" />
      </button>
    </div>
  );

  return (
    <>
      {ui.error.status && Fail}
      {ui.success.status && Success}
    </>
  );
};

export default Status;
