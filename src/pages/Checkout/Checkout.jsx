import { useState } from "react";

import {
  TextField,
  Stack,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Checkout.css";

const info = {
  fname: "Lorem",
  lname: "Ipsum",
  email: "welcome@example.com",
  phone: "0969123456",
  address: "1234 Abc Street",
  payment: {
    cardName: "LOREM IPSUM",
    cardNumber: "111111111111",
  },
};

const Checkout = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const [fname, setFname] = useState(info.fname);
  const [lname, setLname] = useState(info.lname);
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [address, setAddress] = useState(info.address);
  const [cardName, setCardName] = useState(info.payment.cardName);
  const [cardNumber, setCardNumber] = useState(info.payment.cardNumber);

  const priceData = location.state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event });
    // setOrderInfo(event.target.value)
  };

  return (
    <Stack className="checkoutPage" gap={4}>
      <NavLink to="/cart" className="backLink">
        <ArrowBackIosIcon fontSize="small" />
        Go back to cart
      </NavLink>
      <Stack className="orderSummary">
        <span className="orderSummaryTitle">
          <h2>Order Summary</h2>
        </span>
        <Stack sx={{ padding: "10px 20px", backgroundColor: "#fff" }}>
          <Stack direction="row" justifyContent="space-between">
            <p>Products ({priceData.totalQuantity})</p>
            <p>${priceData.subTotal}</p>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Shipping</p>
            <p>${priceData.shippingfee}</p>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ margin: "20px 0" }}
          >
            <p style={{ fontWeight: "bold" }}>Total amount</p>
            <p style={{ fontWeight: "bold" }}>${priceData.total}</p>
          </Stack>
        </Stack>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Stack gap={4} className="orderForm">
          <Stack>
            <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
              Checkout
            </h1>
            <Stack gap={4}>
              <TextField
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value={fname}
              />
              <TextField
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value={lname}
              />
              <TextField
                label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "60%" }}
                type="email"
                value={email}
              />
              <TextField
                label="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "60%" }}
                type="tel"
                value={phone}
              />
              <TextField
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
                required
                variant="outlined"
                fullWidth
                value={address}
              />
            </Stack>
          </Stack>
          <Stack>
            <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
              Payment
            </h1>
            <Stack direction="row" gap={4}>
              <TextField
                label="Name on Card"
                onChange={(e) => setCardName(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value={cardName}
              />
              <TextField
                label="Credit Card Number"
                onChange={(e) => setCardNumber(e.target.value)}
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value={cardNumber}
              />
            </Stack>
            <p>Full name as display on card</p>
          </Stack>
          <Stack gap={1}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleOpen}
            >
              Continue to checkout
            </Button>
            <NavLink to="/cart" style={{ width: "100%" }}>
              <Button variant="outlined" color="primary" fullWidth>
                Go back to cart
              </Button>
            </NavLink>
          </Stack>
        </Stack>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack className="confirmModal">
          <img
            alt="advertisement"
            src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg?w=400&h=300&c=crop"
            style={{width: '500px'}}

          />
          <Stack gap={4} alignItems="center" sx={{padding: "20px 50px"}}>
            <h2>Order Placed Successfully</h2>
            <p style={{textAlign: "center", fontSize: '14px', padding: "0 50px"}}>Your Order Has Been Placed Successfull We'll Try To Ship It To Your Door Step As Soon We Can. Cheers</p>
            <NavLink to="/home" style={{ width: "80%" }}>
              <Button variant="contained" color="primary" fullWidth>CONTINUE</Button>
            </NavLink>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Checkout;
