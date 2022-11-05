import EnterToken from "./EnterToken";
import VotingPage from "./VotingPage";

import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../../store/authSlice";
import { resetUIState } from "../../store/uiSlice";

const Vote = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);

  const token = localStorage?.getItem("token");

  if (token) {
    dispatch(setUserLogin());
  }

  return (
    <>
      {/* {!user && <EnterToken />}
      {user && <VotingPage />} */}

      {user ? <VotingPage /> : <EnterToken />}
    </>
  );
};

export default Vote;
