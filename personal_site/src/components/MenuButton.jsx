import React from 'react';

//good practice to make fileName and component name the same
// by adding curly braces movie1 on this line, we are destructuring the props and making easier to call
const MenuButton = ({title}) => {
    return (
        <button className='menu-button'>{title}</button>
    )
}

export default MenuButton;