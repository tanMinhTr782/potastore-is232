import "./ShopNavbar.css";

import { MenuList, MenuItem, ListItemIcon, Typography } from "@mui/material";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

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
      <h2 style={{ marginBottom: "10px" }}>Potastore</h2>
      <MenuList>
        <NavLink to="/shop/orders" className="navLink">
          <MenuItem style={{ width: "100%" }}>
            <ListItemIcon>
              <ListAltOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Order</Typography>
          </MenuItem>
        </NavLink>

        <NavLink to="/shop/products" className="navLink">
          <MenuItem style={{ width: "100%" }}>
            <ListItemIcon>
              <StorefrontOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Product</Typography>
          </MenuItem>
        </NavLink>

        <NavLink to="/shop/accounts" className="navLink">
          <MenuItem style={{ width: "100%" }}>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Accounts
            </Typography>
          </MenuItem>
        </NavLink>

        <NavLink onClick={handleLogout} className="navLink">
          <MenuItem style={{ width: "100%" }}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Log out
            </Typography>
          </MenuItem>
        </NavLink>
      </MenuList>
    </div>
  );
};

export default ShopNavbar;
