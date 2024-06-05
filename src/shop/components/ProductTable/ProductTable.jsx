import "./ProductTable.css";
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

  const [allProduct, setAllProduct] = useState([]);
  const [filter, setFilter] = useState("ProductId");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText.toLowerCase())
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };  
  useEffect(() => {
    const fetchProducts = async ()=>{
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch("http://localhost:3000/product/forCustomer", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const products = (await response.json());
        setAllProduct(products.items)
    }
    fetchProducts();
  }, []);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;

  const filteredData = allProduct.filter((item) => {
    if (filter === "ProductId") {
      return item.id.toString().includes(searchText.toLowerCase());
    } else if (filter === "ProductName") {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }
  }).slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  console.log({allProduct})

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
              <TableCell style={{ fontWeight: "bold" }}>
                PRICE / UNIT
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                QUANTITY
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow
                key={item.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.id.slice(0,8)}</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" gap="8px">
                    <img src={item.image} alt="product image" style={{width: '40px', aspectRatio: '1/1'}}/>
                    <span>{item.name}</span>
                  </Stack>
                </TableCell>
                <TableCell>{item.price} VND</TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>{item.quantity}</TableCell>
                <TableCell>
                  <Stack direction="row" gap={1}>
                    <IconButton onClick={()=> navigate(`/shop/products/${item.id}`)}>
                      <RemoveRedEyeIcon sx={{color: "#000"}}/>
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{color: "#000"}}/>
                    </IconButton>
                    <IconButton onClick={()=> navigate(`/shop/products/${item.id}`)}>
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
        <Pagination count={Math.floor(allProduct.length/10)+1} color="primary" onChange={handleChange}/>
      </Stack>
    </Stack>
  );
};

export default ProductTable;
