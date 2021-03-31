
import React from 'react';
import bongo from './image/bongo.png';

const Header = () => {
    return(
        <>

        <div className="header">
           <img src={bongo} alt="logo" width="60" height="50"/> 
           <h1> Hunter Keep </h1> 
        </div>

        </>

    );
}

export default Header;