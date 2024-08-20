import React from "react";
// import { DiReact } from "react-icons/di";
import { mypic, skillDark,skillLight } from "../../Assets";



const Skills = ({Theme}) =>{
    return(
        <div className="container w-[400vw] h-screen hidden md:flex flex-nowrap min-w-screen color-selector">
            <section className='flex flex-col items-center justify-center h-screen min-w-full gap-5 panel color-selector'>
              <h1 className='text-5xl font-bold md:text-9xl'>More about <span className='text-tertiary'>me ...</span></h1>
            </section>
            <section className='flex flex-col items-center justify-between min-w-full gap-10 py-24 adjuster panel'>
              <img className="w-auto h-2/3" src={mypic} alt="" />
              <div className="flex flex-col items-center justify-center gap-5 text-center w-fit">
                <h1 className='text-2xl font-bold text-tertiary'>Full Stack Developer</h1>
                <p className='opacity-50 md:text-lg'>React js major with experience of more <br /> than 30+ projects. Responsive and interactive <br /> design and development</p>
              </div>
            </section>
            <section className='flex items-center justify-center min-w-full panel'>
              {
                Theme === "dark"?
                <img className="w-auto h-1/2 " src={skillLight} alt="" />:
                <img className="w-auto h-1/2 " src={skillDark} alt="" />
              }
            </section>
            <section className='flex items-center justify-center min-w-full panel'>
              <h1 className='text-xl font-bold md:text-9xl'>Dive into <span className='text-tertiary'>Pro</span>jects</h1>
            </section>
        </div>
    )
}

export default Skills