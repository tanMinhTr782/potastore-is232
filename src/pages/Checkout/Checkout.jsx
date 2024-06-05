import { useState, useEffect } from "react";

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

const Checkout = () => {
  const location = useLocation();
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const priceData = location.state;

  const accessToken = localStorage.getItem("accessToken");
  const accountId = localStorage.getItem("accountId");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `http://localhost:3001/account/detail?id=${accountId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const account = await response.json();
      setUser(account);
    };
    fetchUser();
  }, []);
  console.log(user)
  const cart = JSON.parse(localStorage.getItem('cart'));
  const productOrders = cart.map((item) => ({
    productId: item.id,
    quantity: item.quantity
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const orderCode = Math.floor(Math.random() * 10000).toString();
      console.log(orderCode);
      const response = await fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          customerId: accountId,
          orderCode: orderCode,
          total: priceData.total,
          productOrders: productOrders
        }),
      });
      console.log(JSON.stringify({
        customerId: accountId,
        orderCode: orderCode,
        total: priceData.total,
        productOrders: productOrders
      }))
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // window.location.href = "../";
      } else {
        const errorData = await response.json();
        setError(true);
      }
    } catch (error) {}
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
            <p>{priceData.subTotal} VND</p>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Shipping</p>
            <p>{priceData.shippingfee} VND</p>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ margin: "20px 0" }}
          >
            <p style={{ fontWeight: "bold" }}>Total amount</p>
            <p style={{ fontWeight: "bold" }}>{priceData.total} VND</p>
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
              <Stack gap={4} direction="row">
                <TextField
                  label="Username"
                  name="name"
                  id="name"
                  variant="outlined"
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: "30%" }}
                  value={user ? user.name : "Lorem Ipsum"}
                />
                <TextField
                  label="Email Address"
                  name="email"
                  id="email"
                  variant="outlined"
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: "30%" }}
                  value={user ? user.email : "abc@gmail.com"}
                />
              </Stack>
              <Stack gap={4} direction="row">
                <TextField
                  label="Phone Number"
                  name="phone"
                  id="phone"
                  variant="outlined"
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: "30%" }}
                  value={user?.phoneNumber ? user.phoneNumber : "0123456789"}
                />
                <TextField
                  label="Address"
                  name="address"
                  id="address"
                  variant="outlined"
                  required
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: "30%" }}
                  value={user?.address ? user.address : "KTX Khu A, Di An, Binh Duong"}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
              Payment
            </h1>
            <Stack direction="row" gap={4}>
              <TextField
                label="Name on Card"
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value="LOREM IPSUM"
              />
              <TextField
                label="Credit Card Number"
                required
                variant="outlined"
                sx={{ width: "30%" }}
                value="111111111111"
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
            <NavLink to="/" style={{ width: "80%" }}>
              <Button variant="contained" color="primary" fullWidth>CONTINUE</Button>
            </NavLink>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Checkout;
