import {React,useState,useEffect} from 'react';
import './App.scss';
import Landpage from './Components/Landpage';
import Nav from './Components/Nav';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import TimeLine from './Components/TimeLine';
import Preloader from './Components/Preloader';

function App() {
  const [isLoading,setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[])
  return (
    <div>
      {
        isLoading?(<Preloader/>)
        :
        (<div className='App'>
          <Nav/>
          <Landpage/>
          <About/>
          <Skills/>
          <Project/>
          <TimeLine/>
        </div>)
      }
    </div>
  );
}

export default App;