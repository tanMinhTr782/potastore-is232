import "./AccountTable.css";
import React, { useState,useEffect } from "react";
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
    const navigate = useNavigate();

    const [allAccount, setAllAccount] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("UserId");
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);

  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };
    const handleChange = (event, value) => {
      setCurrentPage(value);
    };
    useEffect(() => {
        const fetchAccounts = async () => {
          const accessToken = localStorage.getItem("accessToken");
          const skip=(currentPage-1)*10;
          const response = await fetch(
            `http://localhost:3001/account?take=${10}&skip=${skip}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          const accounts = await response.json();
          setAllAccount(accounts.items);
        };
        fetchAccounts();
      }, [currentPage]);
    console.log(allAccount)
    const filteredData = (filter === "UserId"
    ? allAccount.filter((item) => item.id.toLowerCase().includes(searchText.toLowerCase()))
    : allAccount.filter((item) => item.role.toLowerCase().includes(searchText.toLowerCase()))
    );
    
    const handleRemove = async (accountId) => {
        try {
          const accessToken = localStorage.getItem("accessToken");
    
          const response = await fetch("http://localhost:3001/account/delete", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              id: accountId,
            }),
          });
          // Check if the request was successful (status code 2xx)
          if (response.ok) {
            // window.location.href = "../shop/accounts";
          } else {
            const errorData = await response.json();
            setError(true);
          }
        } catch (error) {}
      };

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
                        <TableCell style={{ fontWeight: "bold" }}>EMAIL</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>PHONE</TableCell>
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
                        <TableCell>{item.id.slice(0, 8)}</TableCell>
                        <TableCell>{item.role === "Customer" ? item.name : item.shopOwner.name}</TableCell>
                        <TableCell>{item.role}</TableCell>
                        <TableCell>{item.role === "Customer" ? item.email : item.shopOwner.email}</TableCell>
                        <TableCell>{item.role === "Customer" ? item.customer.phoneNumber : item.shopOwner.phoneNumber}</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>
                            {(item.role === "Customer" ? item.customer.address : item.shopOwner.address)?.slice(0, 40) + "..." }
                        </TableCell>
                        <TableCell>
                            <Stack direction="row" gap={0}>
                                <IconButton onClick={()=> navigate(`/shop/accounts/${item.id}`)}>
                                    <RemoveRedEyeIcon sx={{color: "#000"}}/>
                                </IconButton>
                                <IconButton onClick={() => handleRemove(item.id)}>
                                    <DeleteIcon sx={{color: "#000"}}/>
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
                count={Math.floor(allAccount.length / 10) + 1}
                color="primary"
                onChange={handleChange}
              />
            </Stack>
        </Stack>
    );
};

export default AccountTable;
