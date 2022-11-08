import { useEffect } from "react";

import EnterToken from "./EnterToken";
import VotingPage from "./VotingPage";

import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../../store/authSlice";
import Status from "./components/Status";
import { resetVote } from "../../store/voteSlice";
import { Navigate} from "react-router-dom";

const Vote = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = localStorage?.getItem("token");

  useEffect(() => {
    dispatch(resetVote());

    if (token) {
      dispatch(setUserLogin());
    }
  }, [token, dispatch]);

  const now = Date.now();
  const voteDate = new Date("2022-11-09");

  if (now < voteDate.getTime()) {
    return <Navigate to="/unavailable"/>;
  }
  
  return (
    <>
      <Status />
      {user ? <VotingPage /> : <EnterToken />}
    </>
  );
};

export default Vote;
