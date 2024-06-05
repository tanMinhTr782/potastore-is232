import "./Navbar.css";

import {MenuList, MenuItem, ListItemIcon ,Typography  } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { useNavigate, NavLink } from "react-router-dom"; 

const ShopNavbar = () => {
    const navigate = useNavigate(); 

  return (
    <div className="ShopNavbar">
        <h2 style={{marginBottom: '10px'}}>Potastore</h2>
        <MenuList >
            <MenuItem>
                <NavLink to="./" className="navLink">
                    <ListItemIcon>
                        <ListAltOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Prediction Result</Typography>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to="/SignIn" className="navLink">
                    <ListItemIcon>
                        <LogoutOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit" noWrap>
                        Log out
                    </Typography>
                </NavLink>
            </MenuItem>
        </MenuList>

    </div>
  )
};

export default ShopNavbar;
