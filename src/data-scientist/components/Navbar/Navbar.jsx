import "./Navbar.css";

import {MenuList, MenuItem, ListItemIcon ,Typography  } from '@mui/material';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { useNavigate, NavLink } from "react-router-dom"; 

const ShopNavbar = () => {
    const navigate = useNavigate(); 
    const handleLogout = () => {
        const accessToken = localStorage.getItem("accessToken");
    
        fetch("http://localhost:3001/sign-out", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => {
            if (response.ok) {
              localStorage.removeItem("username");
              localStorage.removeItem("accessToken");
              localStorage.removeItem("role");
              localStorage.removeItem("accountId");
              localStorage.removeItem("cart");
              window.location.href = "../SignIn";
            } else {
              console.error("Logout failed:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error during logout:", error);
          });
      };
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
                <NavLink className="navLink" onClick = {() => {handleLogout()}}>
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
