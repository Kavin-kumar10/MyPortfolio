import './App.css';
// import { mypic } from './Assets';
// import { RiInstagramFill,RiLinkedinBoxFill } from "react-icons/ri";
// import { FaSquareGithub } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import { ImBehance2 } from "react-icons/im";
// import { BsArrowDown } from "react-icons/bs";
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import gsap from 'gsap'
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Techstack from './Pages/Techstack';
import About from './Pages/About';
import Landpage from './Pages/Landpage';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Skillmob from './Pages/Skillmob';
import ScrollToPlugin from 'gsap-trial/ScrollToPlugin';


function App() {
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
  const [Theme,setTheme] = useState('light');
  const ToggleTheme = () =>{
    (Theme === 'light')?setTheme('dark'):setTheme('light')
  }

  
  // const smoother = ScrollSmoother.create({
  //   content:".App",
  //   smooth:1,
  //   effects:true
  // })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useGSAP(()=>{
    gsap.fromTo(".Wanna",{xPercent:-200},{xPercent:0,
      scrollTrigger:{
        trigger:".land-sec",
        scrub:true
      }
    })
    gsap.fromTo('.zoomer',{scale:0},{
      scale:1,
      scrollTrigger:{
        trigger:".about",
        start:"top top",
        end:"+=1000",
        scrub:true
      }
    })
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    });
  })
  return (
    <div className={`${Theme === 'dark'?"dark bg-secondary text-primary":"bg-primary text-secondary"} font-play overflow-x-hidden App`}>
        <Navbar Theme={Theme} ToggleTheme={ToggleTheme}/>
         <Landpage/>
         <section className='flex items-center justify-center text-center color-selector'>
            <h1 className="text-4xl sm:text-9xl color-selector Wanna">Wanna <span className="text-tertiary">know me</span> .. ?</h1>
         </section>
          <About/>
          <Techstack/>
          <Skillmob Theme={Theme}/>
          <Skills Theme={Theme}/>
          <Project Theme={Theme}/>
          <Contact Theme={Theme}/>
    </div>
  );
}

export default App;