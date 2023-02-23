import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {IoCubeOutline,IoMailOutline} from 'react-icons/io5'
import {RiOpenArmLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import {GiCloverSpiked} from 'react-icons/gi'
import { Link } from 'react-scroll'
// import { OverlayTrigger } from 'react-bootstrap'
// import {Tooltip} from 'react-bootstrap'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import {followCursor} from 'tippy.js';


const Nav = () =>{
    const [navon,setNavon] = useState(false);
    return(
        <div className="Nav">

        {
            navon?
                <ul>

                    <Link
                    // activeClass="NavActive"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}>
                    <Tippy content={<span className='tip'>Home</span>} placement='right' id = "tip">
                            <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="100">
                                <AiOutlineHome/>
                            </li>
                    </Tippy>
                    </Link>

                    <Link
                        // activeClass="NavActive"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}>
                            <Tippy content={<span className='tip'>About</span>} placement='right' id = "tip">
                                <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="100"><AiOutlineUser/></li>
                            </Tippy>
                    </Link>    

                    <Link
                        // activeClass="NavActive"
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={300}>
                            <Tippy content={<span className='tip'>Skillset</span>} placement='right' id = "tip">
                                <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="100"><RiOpenArmLine/></li>
                            </Tippy>
                    </Link>    

                    <Link
                    // activeClass="NavActive"
                    to="Project"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}>
                        <Tippy content={<span className='tip'>Projects</span>} placement='right'>
                            <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="100">
                                <IoCubeOutline/>
                            </li>
                        </Tippy>
                    </Link>


                    <Link
                    // activeClass="NavActive"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}>
                        <Tippy content={<span className='tip'>Let's Collabrate</span>} placement='right'>
                            <li data-aos="fade-right" data-aos-delay="800" data-aos-duration="100"><IoMailOutline/></li>
                        </Tippy>
                    </Link>


                    <li onClick={()=>{setNavon(!navon)}} style={{border: "2px solid var(--primary-color)"}}
                    data-aos="fade-right" data-aos-delay="1000" data-aos-duration="100"
                    ><RiArrowUpSLine/></li>
                </ul>:
                <ul>  
                    <Tippy content={<span className='tip'>Explore</span>} placement='right' id = "tip">
                    <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="200"><GiCloverSpiked onClick={()=>{setNavon(!navon)}}/></li>
                    </Tippy>
                </ul>

        }   
        </div>

    )
}

export default Nav