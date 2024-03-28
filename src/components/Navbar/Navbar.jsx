import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <div className = 'logo'>
                Potastore
            </div>
              <SearchIcon />
        </div>
    )
}

export default Navbar; 