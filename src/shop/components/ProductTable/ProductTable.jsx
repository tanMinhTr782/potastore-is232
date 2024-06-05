import "./ProductTable.css";
import Tag from "../../../components/Tag/Tag";
import React, { useState } from "react";
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
const type = [
  "Vegetable",
  "Fruit",
];
for (let i = 1; i <= 10; i++) {
  const statusRandomIndex = Math.floor(Math.random() * 2);
  const product = {
    key: `${i}`,
    productId: 1000000 + i,
    productName: `Product ${i}`,
    category: type[statusRandomIndex],
    price: 120,
    unit: "PACK",
    discountRate: 0,
  };

  data.push(product);
}

const ProductTable = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("ProductId");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText.toLowerCase())
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredData = data.filter((item) => {
    if (filter === "ProductId") {
      return item.productId.toString().includes(searchText.toLowerCase());
    } else if (filter === "ProductName") {
      return item.productName.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return item.category.toLowerCase().includes(searchText.toLowerCase());
    }
  }).slice(startIndex, endIndex);
  // const filteredData = data.filter((item) => 
  //     (item.productId.toString().includes(searchText.toLowerCase()) ||
  //     item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
  //     item.category.toLowerCase().includes(searchText.toLowerCase()))
  // ).slice(startIndex, endIndex);

  return (
    <Stack className="ProductTableContainer" gap={2}>
      <div className="ProductTable--Title">
        <h3>Products</h3>
      </div>
      <FormControl size="small" style={{ width: "100%" }}>
        <p style={{fontWeight: "500", marginBottom: "5px"}}>Search by</p>
        <Stack direction="row">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue="ProductId"
                onChange={handleFilterChange}
                sx={{width: "15%"}}
            >
                <MenuItem value="ProductId">ProductId</MenuItem>
                <MenuItem value="ProductName">ProductName</MenuItem>
                <MenuItem value="Category">Category</MenuItem>
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
              <TableCell style={{ fontWeight: "bold" }}>PRODUCT ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>PRODUCT NAME</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>TYPE</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                PRICE / UNIT
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                UNIT TYPE
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>DISCOUNT RATE</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow
                key={item.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.productId}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>
                  <Chip
                    label={item.category}
                    color="primary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>$ {item.price}</TableCell>
                <TableCell align="center">PER {item.unit}</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>{item.discountRate || 'NONE'}</TableCell>
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
      <Stack direction="row" justifyContent="space-between">
        <p>Showing 1 to 10 of {filteredData.length} results</p>
        <Pagination count={10} color="primary" />
      </Stack>
    </Stack>
  );
};

export default ProductTable;
