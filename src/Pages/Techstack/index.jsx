import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StackIcon from "tech-stack-icons";

const Techstack = () =>{
    const stacksoften = [
        "html5",
        "tailwindcss",
        "css3",
        "sass",
        "reactjs",
        "nodejs",
        "redux",
        "csharp",
        "figma",
        "docker",
        "git",
        "github",
        "gsap",
        "mysql",
        "mongodb",
        "postman"
    ]
    const stacksBeginner =[
        "prisma",
        "java",
        "vim",
        "azure",
        "aws",
    ]
    useGSAP(()=>{
      gsap.fromTo('.stack',{y:100,opacity:0},{
        y:0,
        opacity:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:".Techstack",
            start:"top 30%",
            end:"+=500",
            scrub:true,
        }
      })  
      gsap.fromTo('.worked-header',{opacity:0},{
        opacity:1,
        scrollTrigger:{
            trigger:".Techstack",
            start:"top center",
            end:"+=100",     
            scrub:true,   
        }
      }
      )
    })
    return(
        <div id="Techstack" className="min-h-screen py-24 adjuster Techstack color-">
         <h1 className="mb-20 text-5xl leading-relaxed worked-header sm:text-5xl md:text-9xl">Worked <span className="text-tertiary">with ..... !</span></h1>
         <h3 className="text-2xl font-bold md:text-3xl opacity-80 worked-header">Major stacks</h3>
         <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-6 md:grid-cols-8">
            {
                stacksoften.map((elem)=>
                    <div key={elem} className="flex flex-col items-center justify-center gap-3 p-5 rounded-md cursor-pointer hover:shadow hover:shadow-slate-700 stack bg-slate-200 border-secondary ">
                        <StackIcon className="size-10" name={elem} />
                        <p className="text-lg font-semibold text-secondary ">{elem}</p>
                    </div>                    
                )
            }
         </div>
         <h3 className="text-2xl font-bold md:text-3xl opacity-80 worked-header">Also work with</h3>
         <div className="grid grid-cols-2 gap-3 py-10 sm:grid-cols-6 md:grid-cols-8">
            {
                stacksBeginner.map((elem)=>
                    <div key={elem} className="flex flex-col items-center justify-center gap-3 p-5 rounded-md cursor-pointer hover:shadow hover:shadow-slate-700 stack bg-slate-200 border-secondary ">
                        <StackIcon className="size-10" name={elem} />
                        <p className="text-lg font-semibold text-secondary ">{elem}</p>
                    </div>                    
                )
            }
         </div>
         
        </div>
    )
}

export default Techstack