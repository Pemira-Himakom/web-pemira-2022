import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import AdminHome from "./pages/Admin/AdminHome";
import Summary from "./pages/Admin/Summary";
import Login from "./pages/Admin/Login";
import TokenAssignment from "./pages/Admin/TokenAssignment";
import Candidate1 from "./pages/CandidateProfile/Candidate1";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/candid1' element={<Candidate1/>} />
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
