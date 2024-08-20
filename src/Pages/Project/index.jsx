import React, { useEffect, useState } from "react";
import { Auction, Ecommerce, FakeUtube, Hospital, Matrimony, Notes } from "../../Assets/ProjectAssets";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { DiReact } from "react-icons/di";

const Project  = ({Theme}) =>{
    const data = [
        {
            image:Notes,
            projectName : "Sticky",
            highlight : "notes",
            techs :[
                "React js"
            ],
            date:"Nov 2021",
            description:"Basic Sticky notes using React js."
        },
        {
            image:FakeUtube,
            projectName : "Fake",
            highlight : "UTube",
            techs :[
                "React js"
            ],
            date:"March 2022",
            description:"Basic UI clone of Youtube."
        },
        {
            image:Hospital,
            projectName : "Hospital",
            highlight : "Dashboard",
            techs :[
                "React Js","Expressjs","MongoDb"
            ],
            date:"Feb 2023",
            description:"Full Stack Hospital Managment system Dashboard using MERN stack"
        },
        {
            image:Ecommerce,
            projectName : "",
            highlight : "Ecommerce",
            techs :[
                "React Js","Expressjs","MongoDb","Cloudinary","Redux-toolkit"
            ],
            date:"August 2023",
            description:"Full Stack Ecommerce site with Redux"
        },
        {
            image:Auction,
            projectName : "Auction",
            highlight : "Platform",
            techs :[
                "React Js","Expressjs","MongoDb","Redux-toolkit","Cloudinary"
            ],
            date:"August 2023",
            description:"hackathon Project Auction platform using MERN stack"
        },
        {
            image:Matrimony,
            projectName : "Matrimony",
            highlight : "Site",
            techs :[
                "React Js","Dotnet entity","Mysql","Redux-toolkit","azure blob","c#",
                "Github ci cd","azure app service"
            ],
            date:"August 2024",
            description:"Capstone Project at Presidio Full stack"
        }
    ]
    const [primary,setPrimary] = useState("#f1f5f9")
    const [secondary,setSecondary] = useState("#1e293b")
    // const tertiary = "#2563eb"
    useEffect(()=>{
        if(Theme === 'dark'){
            setPrimary("#1e293b")
            setSecondary("#f1f5f9")
        }else{
            setPrimary("#f1f5f9")
            setSecondary("#1e293b")
        }
    },[Theme])
    return(
        <section id="Project" className='flex flex-col w-screen min-h-screen gap-20 py-24 color-selector Project adjuster'>
            <h1 className="text-5xl md:text-8xl"><span className="text-tertiary">Pro</span>jects</h1>
            <div className="h-fit">                
                <VerticalTimeline>
                    {
                        data.map((elem)=>                        
                            <VerticalTimelineElement key={elem.projectName}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: secondary, color: secondary }}
                                contentArrowStyle={{ borderRight: `7px solid ${secondary} ` }}
                                date={elem.date}
                                iconStyle={{ background: secondary, color: primary }}
                                icon={<DiReact/>}
                            >
                                <img className="mb-5" src={elem.image} alt="" />
                                <h4 className="text-xl sm:text-2xl md:text-4xl text-primary dark:text-secondary opacity-80">{elem.projectName} <span className="text-tertiary">{elem.highlight}</span></h4>
                                <p className="pb-5 text-primary dark:text-secondary">
                                    {elem.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-3">          
                                    {
                                        elem.techs.map((tech)=>
                                            <div key={tech} className="px-3 py-1 text-xs rounded-md md:text-sm text-primary bg-slate-500 w-fit">{tech}</div>
                                        )
                                    }
                                </div>
                            </VerticalTimelineElement>
                        )
                    }
                
                    </VerticalTimeline>
            </div>
        </section>
    )
}

export default Project