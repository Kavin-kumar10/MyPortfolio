import React from 'react';
import {ReactComponent as Analysis} from '../../Assets/Analysis.svg';
import {ReactComponent as Team} from '../../Assets/Team.svg';
import {ReactComponent as Code} from '../../Assets/Code.svg';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si';
import './About.scss'

const About = () =>{
    return(
        <div className="About" id='About'>
            <div className="col_1">
                <h2>Wanna <span>Know</span> me</h2>
                <h1>Hey there...! <span>It'z kavin</span>..._</h1>
                <p>As UI UX designer & Front End Developer looking for a Challenging role in a reputable organization
                to use my technical and management skills to the fullest for the organization's growth and to
                enhance my knowledge about new and emerging trends in the IT Sector.</p>
            </div>
            <div className="col_2">
                <div className="box b1" data-aos = "fade-left" data-aos-delay = "300">
                    <Code id='about_img'/>
                    <p>Ui/Ux Designing</p>
                </div>
                <div className="box b2" data-aos = "fade-left" data-aos-delay = "500">
                    <Analysis id='about_img'/>
                     <p>FreeLancing</p>
                </div>
                <div className="box b3" data-aos = "fade-left" data-aos-delay = "700">
                    <Team id='about_img'/>      
                    <p>Mern Stack Developer</p>
                </div>
                <div className="box b4" data-aos = "fade-left" data-aos-delay = "900">
                    <div className="tag t1" data-aos = "zoom-in" data-aos-delay = "1000">
                        <p><a href="https://github.com/Kavin-kumar10">GitHub</a></p>
                        <AiFillGithub  id="icon"/>
                    </div>                    

                    <div className="tag t2" data-aos = "zoom-in" data-aos-delay = "1200">
                        <p><a href="https://www.linkedin.com/in/kavin-kumar-m-aaba5520a/">LinkedIn</a></p>
                        <AiFillLinkedin  id="icon"/>
                    </div>
                    <div className="tag t3" data-aos = "zoom-in" data-aos-delay = "1400">
                        <p><a href="https://leetcode.com/user8949p/">Leetcode</a></p>
                        <SiLeetcode id="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;