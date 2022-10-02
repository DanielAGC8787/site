import React from 'react';
import Zoom from 'react-reveal/Zoom';
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const CollegeCard = () => {
    return (
        <Zoom left>
            <center>
                <div className='college'>
                    <div>
                        <img className='mccombs' src='/images/mccombs.png' alt='McCombs School of Business Logo'/>
                    </div>
                    <div className='college_info'>
                        <p>I am a freshmen at UT McCombs School of Business in Austin</p>
                        <p>I plan on majoring in either Management Info Systems or Business Analytics</p>
                    </div>
                </div>
            </center>
        </Zoom>
    )
}

export default CollegeCard;