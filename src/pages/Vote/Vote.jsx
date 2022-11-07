import { useState, useContext } from "react";
import { AuthContext } from "../../context/authcontext";
import EnterToken from "./EnterToken";
import VotingPage from "./VotingPage";

const Vote = () => {
  const authCtx = useContext(AuthContext);
  
  return (
    <>
      {!authCtx.isLoggedIn && <EnterToken />}
      {authCtx.isLoggedIn && <VotingPage />}
    </>
  );
};

export default Vote;
