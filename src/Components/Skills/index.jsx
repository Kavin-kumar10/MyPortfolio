import React from 'react'
import './Skills.scss'
import { skill_img } from '../../Assets';
import  ProgressBar  from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () =>{
    return(
        <div className="Skills" id='Skills'>
            <img src={skill_img} alt="mine" data-aos = "fade-right" data-aos-delay ="100" data-aos-duration ="500"/>
            <div className="Skillset">
                <ul>
                    <li data-aos = "fade-left"><p>Html Css</p><ProgressBar id='progress' now={80} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "100"><p>React Js</p><ProgressBar id='progress' now={80} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "200"><p>Git & GitHub</p><ProgressBar id='progress' now={70} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "300"><p>Express -  Node Js</p><ProgressBar id='progress' now={80} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "400"><p>MongoDb Database</p><ProgressBar id='progress' now={80} variant="dark"/></li>
                    <li data-aos = "fade-left" data-aos-delay = "500"><p>Problem Solving</p><ProgressBar id='progress' now={50} variant="dark"/></li>

                </ul>
            </div>
        </div>
    )
}

export default Skills