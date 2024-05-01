import "./OrderList.css";
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
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const data = [];
const status = [
  "New order",
  "Inproduction",
  "Shipped",
  "Cancelled",
  "Rejected",
];
for (let i = 1; i <= 10; i++) {
  const statusRandomIndex = Math.floor(Math.random() * 5);
  const order = {
    key: `${i}`,
    trackingNumber: 1000000 + i,
    customerName: `Customer ${i}`,
    quantity: Math.floor(Math.random() * 20) + 1,
    orderDate: `2023-12-${i < 10 ? "0" + i : i}`,
    total: Math.floor(Math.random() * 200) + 50,
    status: status[statusRandomIndex],
  };

  data.push(order);
}

const OrderList = () => {
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
            <MenuItem value={20}>OrderId</MenuItem>
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
              <TableCell style={{ fontWeight: "bold" }}>ORDER NUMBER</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>STATUS</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ITEM</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                CUSTOMER NAME
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                ORDER DATE
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>TOTAL PRICE</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.trackingNumber}</TableCell>
                <TableCell>
                  <Chip
                    label={item.status}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.customerName}</TableCell>
                <TableCell align="center">{item.orderDate}</TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>
                  <Stack direction="row" gap={1}>
                    <RemoveRedEyeIcon />
                    <DeleteIcon />
                    <BorderColorOutlinedIcon />
                  </Stack>
                </TableCell>
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

export default OrderList;
