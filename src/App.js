import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home page
import Home from "./pages/Homepage/Home";

// Admin page
import AdminHome from "./pages/Admin/AdminHome";
import Summary from "./pages/Admin/Summary";
import Login from "./pages/Admin/Login";
import TokenAssignment from "./pages/Admin/TokenAssignment";
import { Navigate } from "react-router-dom";
import { Vote } from "./pages/Vote";
import Detect from "./pages/Admin/Detect";
import { useEffect } from "react";
import Protected from "./components/Protected";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/vote' element={<Vote />} />
          <Route path='/admin' element={<Protected/>}>
            <Route path='login' element={<Login />} />
            <Route index element={<AdminHome />} />
            <Route path='/admin/assign' element={<TokenAssignment />} />
            <Route path='/admin/detect' element={<Detect/>} />
            <Route path='/admin/summary' element={<Summary />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </Router>
  );
}

export default App;
