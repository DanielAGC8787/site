import React from 'react';
import Zoom from 'react-reveal/Zoom';
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const InterestsCard = () => {
    return (
        <Zoom right>
            <center>
                <div className='college'>
                    <div className='college_info'>
                        <p>My interests lie in web development, data science, and business analytics</p>
                        <p>I enjoy spending my free time building websites, learning algorithms, and listening to indie rock music</p>
                    </div>
                    <div>
                        <img className='computer' src='/images/computer.png' alt='Computer'/>
                    </div>
                </div>
            </center>
        </Zoom>
    )
}

export default InterestsCard;