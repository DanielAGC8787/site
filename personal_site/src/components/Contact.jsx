import React from 'react';
import Fade from 'react-reveal/Fade';
//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const ContactCard = () => {
    return (
        <Fade right>
            <div className='contact'>
                <img className="profile_pic" src='/images/danielg_profile.jpg' alt='Daniel Garcia Profile'/>
                <br/>
                <a href='https://www.facebook.com/profile.php?id=100048257564774' target="_blank" rel="noopener noreferrer"><img className='social_main' src='/images/facebook.png' alt='Facebook Icon'/></a>
                <a href='https://www.linkedin.com/in/daniel-garcia-6ba890197/' target="_blank" rel="noopener noreferrer"><img className='social_main' src='/images/linkedIn.png' alt='LinkedIn Icon'/></a>
                <a href='https://www.instagram.com/daniel_garciacan/?hl=en' target="_blank" rel="noopener noreferrer"><img className='social_main' src='/images/insta.png' alt='Instagram Icon'/></a>
                <a href='https://github.com/DanielAGC8787' target="_blank" rel="noopener noreferrer"><img className='social_main' src='/images/github.png' alt='Github Icon'/></a>
                <a href='mailto:danielagarciac02@gmail.com' target="_blank" rel="noopener noreferrer"><img className='social_main' src='/images/email.png' alt='Email Icon'/></a>
            </div>
        </Fade>
    )
}

export default ContactCard;