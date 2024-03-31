import React from 'react'
import "./Navbar.css"
import {ShoppingCartOutlined, 
        SearchOutlined, 
        CameraAlt, 
        KeyboardArrowDown,
        ArrowRightAlt 
    } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className= 'navbar'>
            <div className='wrapper'>
        <div className = 'left'>
            <img src = '/logo.png' />
        </div>
        <div className = 'center'></div>
        <SearchOutlined/>
        <div className = 'right'>
            <ShoppingCartOutlined/>
        </div>

        </div>
        </div>
    )
}
export default Navbar; 