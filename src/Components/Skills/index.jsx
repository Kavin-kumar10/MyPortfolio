import React from 'react'
import './Skills.scss'
import { skill_img } from '../../Assets';
import  ProgressBar  from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () =>{
    return(
        <div className="Skills">
            <img src={skill_img} alt="mine" data-aos = "fade-right" data-aos-delay ="100" data-aos-duration ="1000"/>
            <div className="Skillset">
                <ul>
                    <li data-aos = "fade-left"><p>Html Css</p><ProgressBar id='progress' now={80} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "200"><p>React Js</p><ProgressBar id='progress' now={60} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "400"><p>Git & GitHub</p><ProgressBar id='progress' now={60} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "600"><p>Express -  Node Js</p><ProgressBar id='progress' now={20} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "800"><p>MongoDb Database</p><ProgressBar id='progress' now={20} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "1000"><p>Problem Solving</p><ProgressBar id='progress' now={50} variant="dark"/></li>

                </ul>
            </div>
        </div>
    )
}

export default Skills