import React from 'react';

//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const SkillBubble = (skill) => {
    return (
        <li className="skill_li">
            <div className="skill_circle">
                <div className="front" style={{'background-color': skill.back_color}}>
                    <img className='skill_img' src={skill.pic} alt={skill.name}/> <br/>
                </div>
                <div className="back" style={{'background-color': skill.back_color, 'color': skill.color}}>
                    <h2>{skill.name}</h2>
                </div>
            </div>
        </li>
    )
}

export default SkillBubble;