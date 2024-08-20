import React from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Contact = () =>{
    useGSAP(()=>{
        gsap.fromTo('.Contact',{
            opacity:0,
            scale:0,
            y:+200,
        },{
            opacity:1,
            scale:1,
            y:0,
            scrollTrigger:{
                trigger:".Project",
                start:"bottom +200",
                end:"+=100",
                scrub:true,
            }
            
        }) 
    })
    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-5 md:gap-10 color-selector Contact">
            <h1 className="text-5xl tracking-wide md:text-9xl">Get in <span className="text-tertiary">Touch</span></h1>
            <a className="px-5 py-2 text-sm duration-500 border rounded-lg md:text-lg py hover:bg-secondary hover:text-primary dark:hover:bg-primary dark:hover:text-secondary border-secondary dark:border-primary" href="mailto:kavinkumar.prof@gmail.com">kavinkumar.prof@gmail.com</a>
        </div>
    )
}

export default Contact