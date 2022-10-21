import './App.css';
import Home from './pages/Home';
import About from './pages/About';
// import Faq from './pages/FAQ';
import Timeline from './pages/Timeline';
import Candidates from './pages/Candidates';
import Faq from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Home/>   
      <About/>
      {/* <Faq/> */}
      <Timeline/>
      <Candidates/>
      {/* <Faq/> */}
    </div>
  );
}

export default App;
