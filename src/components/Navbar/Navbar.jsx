import React from 'react'
import "./Navbar.css"
import {
    ShoppingCartOutlined,
    SearchOutlined,
    CameraAlt,
    KeyboardArrowDown,
    ArrowRightAlt
} from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <img src='/logo.png' />
            </div>
            <div className='center'>
                
                <div className="Search">
                    <input className="searchContainer" placeholder="Search">
                    </input>
                    <button className = "button">
                        <SearchOutlined style={{ color: 'white' }}  />
                    </button>
                    <button className = "button">
                        <CameraAlt style={{ color: 'white' }} />
                    </button>
                </div>
            </div>

            <div className='right'>
                <button className = "cartButton">
                <ShoppingCartOutlined />
                <span className = "cartCount">0</span>
                </button>
            </div>
        </div>
    )
}
export default Navbar; 