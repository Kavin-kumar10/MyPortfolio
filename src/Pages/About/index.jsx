import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const About = () =>{
    useGSAP(()=>{
        gsap.fromTo(".hello",{y:+500,opacity:0,scale:0},{
            y:0,
            scale:1,
            opacity:1,
            scrollTrigger:{
              trigger:'.land-sec',
              start:"top top",
              end:"+=400",
              scrub:true
            }
          })
    })
    return(
        <section id="About" className='flex flex-col items-center justify-center h-screen gap-10 text-center sm:gap-20 about color-selector adjuster'>
          <h1 className='text-4xl leading-relaxed sm:text-5xl md:text-6xl hello'>Hey there...! It'z <span className="text-tertiary">kavin</span>..._</h1>
          <p className="w-3/4 leading-8 text-center sm:w-2/3 hello md:w-1/2 opacity-70">
          Are you looking for perfect the UI developer then you are in the right place . Get the professional result you are looking for. your work would be done on time as you require. just reach out and let me know your needs.
          </p>
        </section>
    )
}

export default About