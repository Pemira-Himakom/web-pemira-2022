import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage/Home";

// Admin page
import AdminHome from "./pages/Admin/AdminHome";
import Summary from "./pages/Admin/Summary";
import Login from "./pages/Admin/Login";
import TokenAssignment from "./pages/Admin/TokenAssignment";
import Candidate1 from "./pages/CandidateProfile/Candidate1";
import Candidate2 from "./pages/CandidateProfile/Candidate2";
import Candidate3 from "./pages/CandidateProfile/Candidate3";
import { Vote } from "./pages/Vote";
import Voting from './pages/Vote/VotingPage'

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/candid1' element={<Candidate1/>} />
          <Route exact path='/candid2' element={<Candidate2/>} />
          <Route exact path='/candid3' element={<Candidate3/>} />
          {/* <Route exact path='/vote' element={<Vote/>} />
          <Route exact path='/voting' element={<Voting/>} /> */}          
          <Route path="/admin">
            <Route index element={<AdminHome />} />
            <Route path="summary" element={<Summary />} />
            <Route path="login" element={<Login />} />
            <Route path="assign" element={<TokenAssignment />} />
          </Route>
        </Routes>
      </Router>
      {/* <Home/> */}
    </div>

  );
}

export default App;