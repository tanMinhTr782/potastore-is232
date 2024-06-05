import "./AccountTable.css";
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
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Modal,
  Button
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";


const data = [];
const role = [
  "Customer",
  "Admin",
];
for (let i = 1; i <= 10; i++) {
    const statusRandomIndex = Math.floor(Math.random() * 2);
    const account = {
        key: `${i}`,
        userId: 1000000 + i,
        userName: `User ${i}`,
        role: role[statusRandomIndex],
        registerDate: '03-12-2024',
        email: "admin@example.com",
        billingAddress: "Ho Chi Minh University of Technology, Khu pho6, Dong Hoa, Di an, Binh Duong",
    };

    data.push(account);
}

const AccountTable = () => {
    const MAX_LENGTH = 40; 

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("UserId");
    const [currentPage, setCurrentPage] = useState(1);
  
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // const filteredData = data.filter((item) => 
    //     (item.userId.toString().includes(searchText.toLowerCase()) ||
    //     item.role.toLowerCase().includes(searchText.toLowerCase()))
    // ).slice(startIndex, endIndex);
    const filteredData = (filter === "UserId"
    ? data.filter((item) => item.userId.toString().includes(searchText))
    : data.filter((item) => item.role.toLowerCase().includes(searchText.toLowerCase()))
    ).slice(startIndex, endIndex);


    return (
        <Stack className="AccountTableContainer" gap={2}>
            <div className="AccountTable--Title">
                <h3>Accounts</h3>
            </div>
            <FormControl size="small" style={{ width: "100%" }}>
                <p style={{fontWeight: "500", marginBottom: "5px"}}>Search by</p>
                <Stack direction="row">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue="UserId"
                        onChange={handleFilterChange}
                        sx={{width: "15%"}}
                    >
                        <MenuItem value="UserId">UserId</MenuItem>
                        <MenuItem value="Role">Role</MenuItem>
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
                        <TableCell style={{ fontWeight: "bold" }}>USER ID</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>USER NAME</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>ROLE</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>REGISTER DATE</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>EMAIL</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>BILLING ADDRESS</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((item) => (
                    <TableRow
                        key={item.key}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell>{item.userId}</TableCell>
                        <TableCell>{item.userName}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.registerDate}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                            {!item.billingAddress ? 'NONE' : 
                                item.billingAddress.length > MAX_LENGTH 
                                ? item.billingAddress.slice(0, MAX_LENGTH) + "..." 
                                : item.billingAddress
                            }
                        </TableCell>
                        <TableCell>
                            <Stack direction="row" gap={0}>
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

export default AccountTable;
