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
                <div className="box b1" data-aos = "fade-left" data-aos-delay = "0">
                    <Code id='about_img'/>
                    <p>Ui/Ux Designing</p>
                </div>
                <div className="box b2" data-aos = "fade-left" data-aos-delay = "100">
                    <Analysis id='about_img'/>
                     <p>FreeLancing</p>
                </div>
                <div className="box b3" data-aos = "fade-left" data-aos-delay = "200">
                    <Team id='about_img'/>      
                    <p>Mern Stack Developer</p>
                </div>
                <div className="box b4" data-aos = "fade-left" data-aos-delay = "300">
                    <a href="https://github.com/Kavin-kumar10">
                    <div className="tag t1" data-aos = "zoom-in" data-aos-delay = "400">
                        <p>GitHub</p>
                        <AiFillGithub  id="icon"/>
                    </div>      
                    </a>              
                    <a href="https://www.linkedin.com/in/kavin-kumar-m-aaba5520a/">
                    <div className="tag t2" data-aos = "zoom-in" data-aos-delay = "500">
                        <p>LinkedIn</p>
                        <AiFillLinkedin  id="icon"/>
                    </div>
                    </a>
                    <a href="https://leetcode.com/user8949p/">
                    <div className="tag t3" data-aos = "zoom-in" data-aos-delay = "600">
                        <p>Leetcode</p>
                        <SiLeetcode id="icon"/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;