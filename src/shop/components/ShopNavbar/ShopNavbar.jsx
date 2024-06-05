import "./ShopNavbar.css";

import { MenuList, MenuItem, ListItemIcon, Typography } from "@mui/material";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useNavigate, NavLink } from "react-router-dom";

const ShopNavbar = () => {
  const navigate = useNavigate();

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

        <NavLink to="/SignIn" className="navLink">
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
