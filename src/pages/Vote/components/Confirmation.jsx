import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { selectedUI } from "../../../store/uiSlice";

import { setUserLogout } from "../../../store/authSlice";
import {
  selectedNo,
  selectedName,
  postVote,
  resetVote,
} from "../../../store/voteSlice";

export const Confirmation = () => {
  const dispatch = useDispatch();
  const candidateName = useSelector(selectedName);
  const candidateNumber = useSelector(selectedNo);
  const ui = useSelector(selectedUI);

  const handleVote = async () => {
    dispatch(postVote(candidateNumber));
  };

  const handleCancel = () => {
    dispatch(resetVote());
  };

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      handleCancel();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <>
      <div
        className="flex justify-center items-center bg-gray-overlay w-screen h-screen absolute z-10"
        onClick={handleCancel}
      ></div>
      <div className="bg-white font-prata pt-12 pb-8 px-10 absolute z-10 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
        <h2 className="text-center text-3xl text-choco">Confirmation</h2>
        <p className="w-60 text-center text-sm p-4 font-inter text-choco my-4">
          Are you sure you want to vote for candidate{" "}
          <span className="font-bold">{candidateName}</span> with number{" "}
          <span className="font-bold">{candidateNumber}</span>
        </p>
        <div className="flex justify-center gap-8 text-sm mt-4">
          <button
            className="border-2 py-[2px] px-4 w-24 border-choco text-choco"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="border-2 py-[2px] px-4 w-24 bg-choco text-white border-choco"
            onClick={handleVote}
          >
            Vote
          </button>
        </div>
      </div>
    </>
  );
};
