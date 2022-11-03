import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import AdminHome from "./pages/Admin/AdminHome";
import Summary from "./pages/Admin/Summary";
import Login from "./pages/Admin/Login";
import TokenAssignment from "./pages/Admin/TokenAssignment";
import Candidate1 from "./pages/CandidateProfile/Candidate1";
import Candidate2 from "./pages/CandidateProfile/Candidate2";

const route = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'candid1',
    path: '/candid1'
  },
  {
    name: 'candid2',
    path: '/candid2'
  },

];

const routes = route.map(({name, path}) => (
  <Route key={name} path={path}>
    
  </Route>
))

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/candid1' element={<Candidate1/>} />
          <Route exact path='/candid2' element={<Candidate2/>} />
          {/* <Navbar routes = {routes}/>
          <Routes>{route}</Routes> */}
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

function Navbar(props) {
  const links = props.route.map(({name, path}) => (
    <Link key={name} to={path}>{name}</Link>
  ))
  return (
    <div>{links}</div>
  )
}
