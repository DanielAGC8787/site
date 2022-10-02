import React from 'react';
import ProjectLink from './ProjectLink';
import Roll from 'react-reveal/Roll';
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const ProjectCard1 = (props) => {
    return (
        <Roll left>
            <li>
                <div className='title_outline' style={{'background-color': props.project.Color}}>
                    <br/>
                    <h2 style={{'color': props.project.Text_color}}>{props.project.Title}</h2>
                    <br/>
                </div>
                
                <div className='project_card'>
                <br/>
                    <img className='project_img' src={props.project.Pic} alt={props.project.Title}/>
                    <div className='project_row'>
                        <ProjectLink type="Demo" link={props.project.Demo}/>
                        <ProjectLink type="Repo" link={props.project.Github}/>
                    </div>
                    <div className='project_description'>
                        {props.project.Description}
                    </div>
                    
                </div>
            </li>
        </Roll>
    )
}

export default ProjectCard1;