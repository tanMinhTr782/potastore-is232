import "./OrderList.css";
import Tag from "../../../components/Tag/Tag";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  IconButton,
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
for (let i = 1; i <= 30; i++) {
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
  const navigate = useNavigate();

  const [allOrder, setAllOrder] = useState([]);
  const [filter, setFilter] = useState("OrderId");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const pageSize = 10;

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText.toLowerCase())
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    const fetchOrders = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const skip=(currentPage-1)*10;
      const response = await fetch(
        `http://localhost:3001/order?take=10&skip=${skip}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const orders = await response.json();
      setAllOrder(orders.items);
    };
    fetchOrders();
  }, [currentPage]);

  const filteredData = (filter === "OrderId"
  ? allOrder.filter((item) => item.id.toLowerCase().includes(searchText.toLowerCase()))
  : allOrder.filter((item) => item.status.toLowerCase().includes(searchText.toLowerCase()))
  );


  return (
    <Stack className="OrderListContainer" gap={2}>
      <div className="OrderList--Title">
        <h3>Orders</h3>
      </div>
        <FormControl size="small" style={{ width: "100%" }}>
        <p style={{fontWeight: "500", marginBottom: "5px"}}>Search by</p>
        <Stack direction="row">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="OrderId"
            onChange={handleFilterChange}
            sx={{width: "15%"}}
          >
            <MenuItem value="OrderId">OrderId</MenuItem>
            <MenuItem value="Status">Status</MenuItem>
          </Select>
          <TextField
            sx={{width: "35%"}}
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
          />
      </Stack>
        </FormControl>
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
            {filteredData.map((item) => (
              <TableRow
                key={item.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.orderCode}</TableCell>
                <TableCell> 
                  <Chip
                    label={item.status}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{item.numItems}</TableCell>
                <TableCell>{item.customerName}</TableCell>
                <TableCell align="center">{item.orderDate.slice(0,10)}</TableCell>
                <TableCell>{item.total} VND</TableCell>
                <TableCell>
                  <Stack direction="row" gap={1}>
                    <IconButton onClick={()=> navigate(`/shop/accounts/${item.userId}`)}>
                      <RemoveRedEyeIcon sx={{color: "#000"}}/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{color: "#000"}}/>
                    </IconButton>
                    <IconButton onClick={()=> navigate(`/shop/accounts/${item.userId}`)}>
                      <BorderColorOutlinedIcon sx={{color: "#000"}}/>
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="center">
        <Pagination
          count={Math.floor(allOrder.length / 10) + 1}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </Stack>
  );
};

export default OrderList;
