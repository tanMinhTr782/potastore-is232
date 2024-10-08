import React from "react";
import {useNavigate} from 'react-router-dom'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AccountCircle, BlindsClosed, Key, Logout } from "@mui/icons-material";
import styles from "./UserMenu.module.css";
export default function UserMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("username");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <div className={styles.container}>
      <img src="\img\ppap.png" className={styles.avatar} />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.username}
      >
       Lorem ipsum
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => { navigate('/user/info')}} className={styles.menuItem}>
          {" "}
          <AccountCircle /> My Profile
        </MenuItem>
        <MenuItem onClick={() => { navigate('/user/orders')}}  className={styles.menuItem}>
          {" "}
          <BlindsClosed /> My Orders
        </MenuItem>
        <MenuItem onClick={handleLogout} className={styles.menuItem}>
          {" "}
          <Logout /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
