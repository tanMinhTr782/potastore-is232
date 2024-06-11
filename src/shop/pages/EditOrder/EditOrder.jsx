import React, { useState, useEffect, useRef } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Stack,
  Button,
  Modal,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "./EditOrder.css";
import ShopNavbar from "../../components/ShopNavbar/ShopNavbar";

export const EditOrder = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState();
  const [error, setError] = useState(false);
  const [file, setFile] = useState();

  const hiddenFileInput = useRef(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:3001/order/detail?id=${orderId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const order = await response.json();
      setOrder(order);
    };
    fetchOrder();
  }, []);
  console.log(order);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch("http://localhost:3001/order/update/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          id: order.id,
          status: data.get("status"),
        }),
      });
      console.log(JSON.stringify({
        id: order.id,
        status: data.get("status"),
      }));
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        window.location.href = "../orders";
      } else {
        const errorData = await response.json();
        setError(true);
      }
    } catch (error) {}
  };

  return (
    <Stack direction="row">
      <ShopNavbar />
      <Stack className="EditOrderContainer" gap={4}>
        <NavLink to="/shop/orders" className="backLink">
          <ArrowBackIosIcon fontSize="small" />
          Back
        </NavLink>
        <form onSubmit={handleSubmit}>
          <Stack>
            <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
              Order Details
            </h1>
            {order ? (
              <Stack gap={4}>
                <Stack direction="row" gap={15}>
                  <TextField
                    label="Customer Name"
                    variant="outlined"
                    sx={{ width: "35%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={order.customer.name}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    sx={{ width: "35%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={order.customer.phoneNumber}
                  />
                </Stack>
                <Stack direction="row" gap={10}>
                  <TextField
                    label="Order Number"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={order.orderCode}
                  />
                  <Select
                    label="Status"  
                    id="status"  
                    name="status"  
                    sx={{ width: "20%" }}
                    defaultValue={order.status}
                  >
                    <MenuItem value={"NOTDELIVER"}>NOTDELIVER</MenuItem>
                    <MenuItem value={"DELIVERING"}>DELIVERING</MenuItem>
                    <MenuItem value={"DONE"}>DONE</MenuItem>
                    <MenuItem value={"CANCEL"}>CANCEL</MenuItem>
                  </Select>
                  <TextField
                    label="Order Date"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={order.orderDate.slice(0,10)}
                  />
                </Stack>
                <TextField
                    label="Delivery Address"
                    required
                    variant="outlined"
                    sx={{ width: "70%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={order.customer.address}
                  />
                <Stack direction="row" gap={10}>
                  <TextField
                    label="Name on Card"
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value="LOREM IPSUM"
                  />
                  <TextField
                    label="Credit Card Number"
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value="111111111111"
                  />
                </Stack>
                <TextField
                  label="Total"
                  required
                  variant="outlined"
                  sx={{ width: "60%" }}
                  value={order.total}
                />
                <Stack gap={1}>
                  <div style={{ fontWeight: "500" }}>Product List</div>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold" }}>PRODUCT NAME</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>QUANTITY</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>PRICE PER UNIT</TableCell>
                            <TableCell style={{ fontWeight: "bold" }}>TOTAL PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.productOrders.map((item) => (
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>{item.price} VND</TableCell>
                            <TableCell>{item.total} VND</TableCell>
                        </TableRow>                            
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </Stack>
              </Stack>
            ) : (
              <></>
            )}
            <Stack
              direction="row"
              gap={6}
              justifyContent="center"
              style={{ marginTop: "50px" }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/shop/orders")}
                sx={{ width: "10%" }}
              >
                Cancel
              </Button>
              <Button
                color="error"
                variant="contained"
                type="submit"
                value="submit"
                sx={{ width: "10%" }}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
