import leftFlower from "../../img/vote/leftFlower.svg";
import rightFlower from "../../img/vote/rightFlower.svg";

// components
import Candid from "./components/Candid";
import { Confirmation } from "./components/Confirmation";
import { useSelector } from "react-redux";
import { selectedName } from "../../store/voteSlice";
import Status from "./components/Status";

const candidates = [
  { no: "1", name: "Achmad Hadzami Setiawan" },
  { no: "2", name: "Josiah Farrel Suwito" },
  { no: "3", name: "Jonathan Edmund Kusnadi" },
];

const VotingPage = () => {
  const isVoted = useSelector(selectedName);

  return (
    <>
      <Status />
      {isVoted && <Confirmation />}
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

export default VotingPage;
