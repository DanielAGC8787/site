import React from 'react';
import Collapsible from 'react-collapsible';

//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const PositionInfo = (props) => {
    return (
        <details>
            <summary>
                {props.title}
            </summary>
            <ul>
                {props.info.map((task) => (
                    <li className='info'>
                        {task}
                    </li>
                ))}
            </ul>
        </details>
    )
}

export default PositionInfo;