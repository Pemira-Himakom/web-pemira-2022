import { useRef, useState } from "react";
import leftFlower from "../../img/vote/leftFlower.svg";
import rightFlower from "../../img/vote/rightFlower.svg";
import candidate from "../../img/candidates/removal.png";

// redux
import { useDispatch } from "react-redux";
import { setUserLogout } from "../../store/authSlice";
import { resetUIState } from "../../store/uiSlice";

const candidates = [
  { no: "1", name: "Achmad Hadzami Setiawan" },
  { no: "2", name: "Josiah Farrel Suwito" },
  { no: "3", name: "Jonathan Edmund Kusnadi" },
];

const VotingPage = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-overlay w-screen h-screen absolute z-10">
        <div className="bg-white font-prata pt-12 pb-8 px-10">
          <h2 className="text-center text-3xl text-choco">Confirmation</h2>
          <p className="w-60 text-center text-sm p-4 font-inter text-choco my-4">
            Are you sure you want to vote for X Ini nama calon makomji
          </p>
          <div className="flex justify-center gap-8 text-sm mt-4">
            <button className="border-2 py-[2px] px-4 w-24 border-choco text-choco">
              Cancel
            </button>
            <button className="border-2 py-[2px] px-4 w-24 bg-choco text-white border-choco">
              Vote
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#B4B4B4]">
        <img
          src={leftFlower}
          alt="left flower"
          className="absolute top-1/2 -translate-y-1/2 -z-10"
        ></img>
        <img
          src={rightFlower}
          alt="right flower"
          className="absolute right-0 top-1/2 -translate-y-1/2 -z-10"
        ></img>
      </div>

      <div className="w-screen h-screen flex justify-center items-center gap-x-14">
        {candidates.map((item, index) => (
          <Candid key={index} id={item.no} no={item.no} name={item.name} />
        ))}
      </div>
    </>
  );
};

const Candid = (props) => {
  const dispatch = useDispatch();
  const optionRef = useRef();
  const [isUserConfirmed, setIsUserConfirmed] = useState(false);

  const handleVote = async () => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");

    const response = await fetch("/api/vote", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        votedCandidate: optionRef.current.value,
      }),
    });

    response.json().then(async (data) => {
      dispatch(setUserLogout());
      dispatch(resetUIState());
    });
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
          onClick={handleVote}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default VotingPage;
