import React from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Landpage = () =>{
    useGSAP(()=>{
        gsap.from(".land-first",{y:+100,opacity:0,duration:1})
        gsap.from(".land-sec",{y:+100,opacity:0,duration:1})
    })
    return(
        <section id="Home" className='flex flex-col items-center justify-center w-screen h-screen gap-5 py-28 adjuster color-selector'>
            <h1 className='text-3xl text-center land-first md:text-5xl'>Together let's <span className='text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>Design</span> & Develop</h1>
            <p className='text-lg opacity-50 land-sec md:text-xl'>
              Turning imagination into reality
            </p>
          
         </section>
    )
}

export default Landpage