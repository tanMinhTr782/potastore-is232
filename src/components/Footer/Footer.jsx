import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./Footer.css";

const Footer = () => {
  return (
    <Stack className="Footer" gap={8}>
      <Stack direction="row" justifyContent="space-between">
        <Stack gap={1}>
          <div style={{ fontWeight: "bold", fontSize: "22px" }}>Potastore</div>
          <div style={{ fontSize: "14px" }}>Sell fresh products with love</div>
        </Stack>
        <Button
          color="primary"
          variant="contained"
          style={{ fontSize: "12px", fontWeight: "bold", backgroundColor: "#23A6F0" }}
        >
          Contact Us
        </Button>
      </Stack>
      <Stack direction="row" gap={8}>
        <Stack gap={1}>
          <div className="InfoTitle">Company Info</div>
          <div className="InfoContent">About Us</div>
        </Stack>
        <Stack gap={1}>
          <div className="InfoTitle">Our Products</div>
          <div className="InfoContent">Fruits</div>
          <div className="InfoContent">Vegetables</div>
        </Stack>
        <Stack gap={1}>
          <div className="InfoTitle">Our Policies</div>
          <div className="InfoContent">Term of Service</div>
        </Stack>
        <Stack gap={1}>
          <div className="InfoTitle">Get In Touch</div>
          <Stack
            className="InfoContent"
            direction="row"
            alignItems="center"
            gap={1}
          >
            <LocalPhoneOutlinedIcon fontSize="small" />
            (480) 555-0103
          </Stack>
          <Stack
            className="InfoContent"
            direction="row"
            alignItems="center"
            gap={1}
          >
            <PlaceOutlinedIcon fontSize="small" />
            4517 Washington Ave.
          </Stack>
          <Stack
            className="InfoContent"
            direction="row"
            alignItems="center"
            gap={1}
          >
            <EmailOutlinedIcon fontSize="small" />
            debra.holt@example.com
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <div className="InfoTitle">
            Copyright 2024 Potastore. All Right Reversed.
        </div>
        <Stack direction="row" gap={1}>
            <FacebookOutlinedIcon sx={{color: "#23A6F0"}}/>
            <InstagramIcon sx={{color: "#23A6F0"}}/>
            <TwitterIcon sx={{color: "#23A6F0"}}/>
        </Stack>
      </Stack> 
    </Stack>
  );
};

export default Footer;
