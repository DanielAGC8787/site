import React from 'react';
import Fade from 'react-reveal/Fade';
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const GreetCard = () => {
    return (
        <Fade left>
            <div className='greet'>
                <h1>Hi there! I'm</h1>
                <h1 className='my_name'>Daniel Garcia</h1>
            </div>
        </Fade>
        
    )
}

export default GreetCard;