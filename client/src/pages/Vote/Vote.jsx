import { useState, useContext } from "react";
import {useSelector} from "react-redux"
import EnterToken from "./EnterToken";
import VotingPage from "./VotingPage";


const Vote = () => {
  const auth = useSelector(state => state.auth)  
  console.log(auth)
  return (
    <>
      {!auth.user && <EnterToken />}
      {auth.user && <VotingPage />}
    </>
  );
};

export default Vote;
