import "./DetectList.css";
import React, { useState, useEffect } from "react";

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
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const DetectList = () => {
  const [searchText, setSearchText] = useState("");
  const [allResult, setAllResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;



  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchResults= async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://localhost:3001/predict-result/forDataScientist",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const results = await response.json();
      setAllResult(results.items);
    };
    fetchResults();
  }, []);
  return (
    <Stack className="OrderListContainer" gap={2}>
      <div className="TrackingList--Title">
        <h3>Prediction Result Tracking</h3>
      </div>
      <Stack direction="row">
        <FormControl size="small" style={{ width: "25%" }}>
          <TextField
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} 
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow> 
              <TableCell style={{ fontWeight: "bold", fontSize: '20px' }}>ID </TableCell>
              <TableCell style={{ fontWeight: "bold", fontSize: '20px'}}>Image</TableCell>
              <TableCell style={{ fontWeight: "bold", fontSize: '20px'}}>Result</TableCell>
              <TableCell style={{ fontWeight: "bold", fontSize: '20px'}}>
              UPLOAD DATE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allResult.filter((row) =>
                // note that I've incorporated the searchedVal length check here
                !searchText.length || row.orderDate
                  .toString()
                  .toLowerCase()
                  .includes(searchText.toString().toLowerCase()) 
              )
              .map((item) => (
              <TableRow
                key={item?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontSize: '20px'}}>{item?.id.slice(0,8)}</TableCell>
                <TableCell>
                  <img src = {item?.image} alt = "" style = {{width: "200px", height: '180px', objectFit: 'contain'}}></img>
                </TableCell>
                { item?.result === 'Not Found' ? (
                  <TableCell style = {{fontWeight: "bold", fontSize: '20px'}}>
                    <span style = {{color: 'red'}}> Can't Detect</span>
                  </TableCell>
                )
                : (
                  <TableCell style = {{fontWeight: "bold", fontSize: '20px'}}> {item?.result} </TableCell>
                )
                }
                <TableCell  style={{ fontSize: '20px'}}>{item?.dateUpload}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="space-between">
      <Pagination
          count={Math.floor(allResult.length / 10) + 1}
          color="primary"
          onChange={handleChange}
        />

      </Stack>
    </Stack>
  );
};

export default DetectList;
