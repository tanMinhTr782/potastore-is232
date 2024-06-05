import { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";

import {
  TextField,
  Stack,
  Button,
  Modal,
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "./EditAccount.css";
import ShopNavbar from "../../components/ShopNavbar/ShopNavbar";

export const EditAccount = () => {
  const { accountId } = useParams();
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const accessToken = localStorage.getItem("accessToken");
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
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event });
    // setOrderInfo(event.target.value)
  };

  return (
    <Stack direction="row">
      <ShopNavbar />
      <Stack className="EditAccountContainer" gap={4}>
        <NavLink to="/shop/accounts" className="backLink">
          <ArrowBackIosIcon fontSize="small" />
          Back
        </NavLink>
        <form onSubmit={handleSubmit}>
          <Stack>
            <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
              Checkout
            </h1>
            {user ? (
              <div>
                <Stack gap={4}>
                  <Stack direction="row" gap={15}>
                    <TextField
                      label="User Name"
                      id="name"
                      name="name"
                      required
                      variant="outlined"
                      sx={{ width: "35%" }}
                      defaultValue={user.name}
                    />
                    <TextField
                      label="User Id"
                      required
                      variant="outlined"
                      sx={{ width: "35%" }}
                      InputProps={{
                        readOnly: true,
                      }}
                      value={user.id}
                    />
                  </Stack>
                  <Stack direction="row" gap={15}>
                    <TextField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      required
                      variant="outlined"
                      sx={{ width: "35%" }}
                      defaultValue={user.email}
                    />

                    <Select
                      label="Gender"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ width: "35%" }}
                      defaultValue={user.gender}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                  </Stack>
                  <TextField
                    label="Birthdate"
                    id="dayOfBirth"
                    name="dayOfBirth"
                    required
                    variant="outlined"
                    sx={{ width: "60%" }}
                    defaultValue={user.dayOfBirth}
                  />
                  <TextField
                    label="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    variant="outlined"
                    sx={{ width: "60%" }}
                    type="tel"
                    defaultValue={user.phoneNumber}
                  />
                  <TextField
                    label="Delivery Address"
                    id="address"
                    name="address"
                    required
                    variant="outlined"
                    fullWidth
                    defaultValue={user.address}
                  />
                </Stack>
                <Stack
                  direction="row"
                  gap={6}
                  justifyContent="center"
                  style={{ marginTop: "50px" }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={() => navigate("/shop/accounts")}
                    sx={{ width: "10%" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    type="submit"
                    sx={{ width: "10%" }}
                  >
                    Update
                  </Button>
                </Stack>
              </div>
            ) : (
              <></>
            )}
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
