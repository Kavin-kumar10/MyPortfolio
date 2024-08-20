import React from "react";
import { skillDark,skillLight } from "../../Assets";
import { mypic } from "../../Assets";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Skillmob = ({Theme}) =>{
    useGSAP(()=>{
        gsap.fromTo(".fullstack",{opacity:0,scale:0,duration:100,y:+500},{
            opacity:1,
            scale:1,
            y:0,
            scrollTrigger:{
                trigger:".Skillmob",
                start:"top bottom",
                end:"+=800",
                scrub:true
            }
        })
        gsap.fromTo(".skillpng",{opacity:0,duration:100,y:+500,scale:0},{
            opacity:1,
            y:0,
            scale:1,
            scrollTrigger:{
                trigger:".fullstack",
                start:"top bottom",
                end:"+=500",
                scrub:true
            }
        })
    })
    return(
        <div className="flex flex-col items-center justify-center gap-20 text-center md:hidden Skillmob color-selector adjuster">
            <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-center fullstack">
                <img className="" src={mypic} alt="" />
                <div className="flex flex-col gap-5 w-fit">
                    <h1 className='text-2xl font-bold text-tertiary'>Full Stack Developer</h1>
                    <p className='opacity-50 md:text-lg'>React js major with experience of more <br /> than 30+ projects. Responsive and interactive <br /> design and development</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-[50vh] gap-10 text-center skillpng ">         
                <div className="flex items-center justify-center w-full">        
                    {
                        Theme === "dark"?
                        <img className="self-center w-auto h-2/3" src={skillLight} alt="" />:
                        <img className="self-center w-auto h-2/3" src={skillDark} alt="" />
                    }
                </div>
            </div>

        </div>
    )
}

export default Skillmob