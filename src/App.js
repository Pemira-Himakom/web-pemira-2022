import './App.css';
import Home from './pages/Home';
import About from './pages/About';
// import Faq from './pages/FAQ';
import Timeline from './pages/Timeline';
import Candidates from './pages/Candidates';

function App() {
  return (
    <div className="App">
      <Home/>   
      <About/>
      {/* <Faq/> */}
      <Timeline/>
      <Candidates/>
    </div>
  );
}

export default App;
