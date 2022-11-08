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
import { Navigate } from "react-router-dom";
import Detect from "./pages/Admin/Detect";
import Protected from "./components/Protected";
import Unavailable from "./pages/Unavailable/Unavailable";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/candid1' element={<Candidate1 />} />
          <Route exact path='/candid2' element={<Candidate2 />} />
          <Route exact path='/candid3' element={<Candidate3 />} />
          <Route exact path='/unavailable' element={<Unavailable />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/admin' element={<Protected />}>
            <Route path='login' element={<Login />} />
            <Route index element={<AdminHome />} />
            <Route path='/admin/assign' element={<TokenAssignment />} />
            <Route path='/admin/detect' element={<Detect />} />
            <Route path='/admin/summary' element={<Summary />} />
          </Route>
          <Route path='*' element={<Navigate to='/unavailable' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
