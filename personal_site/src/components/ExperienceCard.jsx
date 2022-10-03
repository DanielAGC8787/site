import React from 'react';
import Collapsible from 'react-collapsible';
import PositionInfo from './PositionInfo';
import RubberBand from 'react-reveal/RubberBand';
const info1 =[
    "Supervised the proctoring of practice tests for 20+ students at a time at the center, which allowed for students to have a more realistic testing experience and identify their weaknesses on national tests",
    "Maintained the database by recording student information and activity to provide a personalized service for each student",
    "Answered 30+ phone calls a day by directing customers to the correct department or providing them with the service requested to deliver an effortless customer experience "
]

const info2 =[
    "Trained new student workers on company policies and procedures and guided them through customer interactions to always keep the front desk fully staffed and operational",
    " Assigned tasks to 3-4 student workers at a time and coordinated the completion of daily responsibilities to maintain an organized and efficient working environment",
]

const info3 =[
    "Processed students’ web request information through the database to ensure they would have access to the Student Portal",
    "Monitored class attendance through Zoom and Excel to verify that students were properly receiving credit for online lessons",
    " Clarified questions students may have via email regarding their lessons in a timely manner to ensure a high class attendance"
]
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const ExperienceCard = (props) => {
    return (
        <RubberBand>
            <div>
                <div className='title_outline' style={{'background-color': props.experience.Color}}>
                    <br/>
                    <h2 style={{'color': props.experience.Text_color}}>{props.experience.Title}</h2>
                    <br/>
                </div>
                
                <div className='project_card'>
                <br/>
                    <img className='experience_img' src={props.experience.Pic} alt={props.experience.Title}/>
                    <br/>
                    <PositionInfo title={props.experience.Position3} info={info3}/>
                    <img className='up' src='/images/up.svg' alt='up'/>
                    <PositionInfo title={props.experience.Position2} info={info2}/>
                    <img className='up' src='/images/up.svg' alt='up'/>
                    <PositionInfo title={props.experience.Position1} info={info1}/>
                    <br/>
                </div>
            </div>
        </RubberBand>
        
    )
}

export default ExperienceCard;