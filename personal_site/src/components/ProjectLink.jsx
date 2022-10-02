import React from 'react';


//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const ProjectLink = (props) => {
    return (
        <a href={props.link}>
            <button className='project_link'>
                {props.type}
            </button>
        </a>
    )
}

export default ProjectLink;