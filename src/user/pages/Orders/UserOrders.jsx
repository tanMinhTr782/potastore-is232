import "./UserOrders.css";
import Tag from "../../../components/Tag/Tag";
import React, { useState } from "react";

import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Pagination,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
const data = [];
const status = [
  "Received",
  "Delivering",
  "Cancelled",
];
const product = [
  "Apple", "Banana", "Carrot", "Corn", "Orange", "Strawberry", "Tomato"
];
for (let i = 1; i <= 10; i++) {
  const statusRandomIndex = Math.floor(Math.random() * 3);
  const productRandomIndex= Math.floor(Math.random() * 7);
  const order = {
    key: `${i}`,
    productID: 100 + i,
    productName: product[productRandomIndex],
    quantity: Math.floor(Math.random() * 20) + 1,
    orderDate: `2024-04-${i < 10 ? "0" + i : i}`,
    totalPrice: Math.floor(Math.random() * 200) + 50,
    status: status[statusRandomIndex],
  };

  data.push(order);
}

const UserOrders = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Thực hiện xử lý tìm kiếm tại đây
  };
  return (
    <Stack className="OrderListContainer" gap={2}>
      <div className="OrderList--Title">
        <h3>Order</h3>
      </div>
      <Stack direction="row">
        <FormControl size="small" style={{ width: "25%" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Status"
          >
            <MenuItem value={10}>Status</MenuItem>
            <MenuItem value={20}>Product Name</MenuItem>
          </Select>
          {/* <TextField
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          /> */}
        </FormControl>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Product ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                ORDER DATE
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>TOTAL PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.productID}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell align="center">{item.orderDate}</TableCell>
                <TableCell align="center">{item.totalPrice}$</TableCell>
                <TableCell>{item.total}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="space-between">
        <p>Showing 1 to 10 of 97 results</p>
        <Pagination count={10} color="primary" />
      </Stack>
    </Stack>
  );
};

export default UserOrders;
