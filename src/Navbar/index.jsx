import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { profile } from "../Assets";
import { RiInstagramFill,RiLinkedinBoxFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { ImBehance2 } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
// import { BsArrowDown } from "react-icons/bs";



const Navbar = ({Theme,ToggleTheme}) =>{
    const [Nav,setNav] = useState(false);
    return(
        <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-screen h-24 adjuster color-selector">
            {
                Nav?
                <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-opacity-50 bg-slate-500">
                    <div className="absolute flex flex-col gap-3 p-5 rounded-md md:p-10 sm:w-1/2 md:w-1/4 color-selector top-20 right-5 sm:right-10 md:right-20 h-fit">
                        <div className="flex justify-end">
                            <MdOutlineClose className="cursor-pointer hover:font-Bold" size={20} onClick={()=>setNav(false)}/>
                        </div>
                        <div className="flex flex-col justify-between w-full gap-10">            
                            <div className="flex items-center justify-center w-full gap-5 ">
                                <img className="object-cover rounded-full h-14" src={profile} alt="" />
                                <div className="flex flex-col justify-between">
                                    <h1 className="text-sm md:text-lg">Kavin Kumar M</h1>
                                    <p className="text-xs opacity-50 md:text-sm">kavinkumar.prof@gmail.com</p>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                <li className="text-xl font-bold">Kavin Kumar M</li>
                                <a onClick={()=>setNav(false)} href="#Home" className="cursor-pointer text-md hover:translate-x-1 hover:duration-100">Home</a>
                                <a onClick={()=>setNav(false)} href="#About" className="cursor-pointer text-md hover:translate-x-1 hover:duration-100">About</a>
                                <a onClick={()=>setNav(false)} href="#Project" className="cursor-pointer text-md hover:translate-x-1 hover:duration-100">Project</a>
                                <a onClick={()=>setNav(false)} href="#Techstack" className="cursor-pointer text-md hover:translate-x-1 hover:duration-100">Techstack</a>
                            </ul>
                            <div className="[&>*]:cursor-pointer flex gap-5 rounded-md w-fit shadow-secondary dark:shadow-primary">
                                <a target="blank" href="https://github.com/Kavin-kumar10">
                                    <FaSquareGithub size={20}/>
                                </a>
                                <a target="blank" href="https://www.behance.net/kavinkumarm">
                                    <ImBehance2 size={20}/>
                                </a>
                                <a target="blank" href="https://www.instagram.com/optimus_soul_">
                                    <RiInstagramFill size={20}/>
                                </a>
                                <a target="blank" href="https://www.linkedin.com/in/kavin-kumar-m-aaba5520a/">
                                    <RiLinkedinBoxFill size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                :<></>
            }
            <div className="flex flex-col">
                <h4 className="text-lg">Kavin Kumar M</h4>
                <p className="text-sm opacity-50 ">Full Stack Developer</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
                <div onClick={ToggleTheme} className="flex items-center justify-center gap-2 p-2 text-sm border rounded cursor-pointer border-secondary dark:border-primary">
                    Mode
                    {
                        Theme === 'light'?
                        <IoSunnyOutline size={18} />:
                        <LuMoonStar size={18}/>
                    }
                </div>
                <div className="p-2 bg-transparent border rounded cursor-pointer border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 dark:border-slate-300">
                    <RxHamburgerMenu onClick={()=>setNav(true)} size={20}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar