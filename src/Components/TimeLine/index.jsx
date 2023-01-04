import React from "react";
import {fakeUtube_2 ,NotesImg_2} from "../../Assets";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import "./TimeLine.scss"
import Typography from '@mui/material/Typography';


const TimeLine = () =>{
    return(
        <div className="TimeLine">
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in" >STICKY <span>NOTES</span></p>
                <code>NOVEMBER - 2021</code>
                <a href="https://kavin-kumar10.github.io/sticky-notes/">Live Demo</a>
            </div>    

            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column"}}>
                    {/* <img src={NotesImg_1} alt="img" data-aos = "fade-left" data-aos-delay = "500"/> */}
                    <img src={NotesImg_2} alt="img" data-aos = "fade-left" data-aos-delay = "1000"/>

                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in">Fake <span>Utube</span></p>
                <code>March - 2022</code>
                <a href="https://kavin-kumar10.github.io/fake-utube/">Live Demo</a>
            </div>    
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
                <div className="timeLineContain" style={{display:"flex",flexDirection:"column",float:"right"}}>
                        {/* <img src={fakeUtube_1} alt="img"  data-aos = "fade-right" data-aos-delay = "800" data-aos-offset = "200"/> */}
                        <img src={fakeUtube_2} alt="img"  data-aos = "fade-right" data-aos-delay = "1200"/>
                </div>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            >
            <div id="font">                        
                <p data-aos = "zoom-in">E <span>Commerce</span></p>
                <code>Dec - 2022</code>
                {/* <a href="#">Live Demo</a> */}
            </div>    
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
            {/* color = "primary" -> blue color */}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '80px', px: 2 }}>
            <Typography variant="h6" component="span">
                WORKING
            </Typography>
            </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
            <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
                Repeat
            </Typography>
            </TimelineContent>
        </TimelineItem> */}
        </Timeline>
        </div>

    )
}

export default TimeLine