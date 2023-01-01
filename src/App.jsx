import './App.scss';
import Landpage from './Components/Landpage';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import TimeLine from './Components/TimeLine';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landpage/>
      <About/>
      <Skills/>
      <Project/>
      <TimeLine/>
    </div>
  );
}

export default App;