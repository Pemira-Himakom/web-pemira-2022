import { useSelector } from "react-redux";
import { selectedUI } from "../../../store/uiSlice";

const Status = () => {
  const ui = useSelector(selectedUI);
  const Fail = (
    <div className="flex bg-red-400 py-1 text-center absolute w-full">
      {/* {ui.error.message} */}
      <span className="justify-self-center">Error</span>
      <span className="justify-self-center">X</span>
    </div>
  );
  const Success = (
    <div className="bg-green-400 py-1 text-center absolute w-full">
      {ui.success.message}
    </div>
  );

  return (
    <>
      {Fail}
      {ui.success.status && Success}
    </>
  );
};

export default Status;
