import React from 'react'
import "./Navbar.css"
import {
    ShoppingCartOutlined,
    SearchOutlined,
    CameraAlt,
    KeyboardArrowDown,
    ArrowRightAlt, 
    ArrowForward
} from '@mui/icons-material';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <div className = "item">
                <Link to="/" className = 'logo'> <img src='/logo.png' /></Link>
                </div> 
                <div className="Search">
                    <input className="searchContainer" placeholder="Search">
                    </input>
                    <button className = "button">
                        <SearchOutlined style={{ color: 'white' }}  />
                    </button>
                    <button className = "button">
                        <CameraAlt style={{ color: 'white' }} />
                    </button>
                    <div className='section'> 
                        <Link to="/" className='link'> Customer Service </Link>
                        <Link to="/" className='link'> About Us </Link>
                    </div>
                </div>
            </div>


            <div className='right'>
                <button className = "cartBtn">
                <ShoppingCartOutlined className='cart'/>
                <span className = "cartCount">0</span>
                </button>
                <button className = "signinBtn">
                <span className = "cartCount">Sign in</span>
                <ArrowForward className = "arrow"/>
                </button>
            </div>
        </div>
    )
}
export default Navbar; 