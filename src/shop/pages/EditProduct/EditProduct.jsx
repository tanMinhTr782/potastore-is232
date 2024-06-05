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

import './EditProduct.css'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar';


export const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async ()=>{
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(`http://localhost:3000/product/detail?id=${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const product = (await response.json());
        setProduct(product)
    }
    fetchProduct();
  }, []);
  console.log({product})
  const info = {
    id: productId,
    productName: 'Lorem Ipsum',
    role: "CUSTOMER",
    gender: "Male",
    birthDate: "2003-04-17",
    email: "welcome@example.com",
    phone: "0969123456",
    address: "1234 Abc Street",
  }

  const [id, setId] = useState(info.id);
  const [productName, setProductName] = useState(info.productName);
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [address, setAddress] = useState(info.address);
  const [birthDate, setBirthDate] = useState(info.birthDate);
  const [gender, setGender] = useState(info.gender);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event });
    // setOrderInfo(event.target.value)
  };

  return (
    <Stack direction="row">
        <ShopNavbar />
        <Stack className="EditProductContainer" gap={4}>
          <NavLink to="/shop/products" className="backLink">
            <ArrowBackIosIcon fontSize="small" />
              Back
          </NavLink>
          <form onSubmit={handleSubmit}>
            <Stack>
              <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>
                Product Details
              </h1>
              <Stack gap={4}>
                <Stack direction="row" gap={15}>
                  <TextField
                    label="Product Name"
                    onChange={(e) => setProductName(e.target.value)}
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    value={productName}
                  />
                  <TextField
                    label="Product Id"
                    onChange={(e) => setId(e.target.value)}
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    value={id}
                  />
                </Stack>
                <Stack direction="row"  gap={15}>
                  <TextField
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    type="email"
                    value={email}
                  />
                  
                  <Select
                    label="Gender"    
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={(e) => setGender(e.target.value)}
                    sx={{ width: "35%" }}
                    value={gender}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </Stack>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Birthday"
                      value={`dayjs('${birthDate}')`}
                      onChange={(newValue) => setBirthDate(newValue)}
                      sx={{ width: "60%" }}
                    />
                  </LocalizationProvider> */}
                <TextField
                  label="Birthdate"
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  variant="outlined"
                  sx={{ width: "60%" }}
                  value={birthDate}
                />
                <TextField
                  label="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  variant="outlined"
                  sx={{ width: "60%" }}
                  type="tel"
                  value={phone}
                />
                <TextField
                  label="Delivery Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  variant="outlined"
                  fullWidth
                  value={address}
                />
              </Stack>
              <Stack direction="row" gap={6} justifyContent="center" style={{marginTop: "50px"}}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={()=> navigate("/shop/products")}
                  sx={{width: "10%"}}
                >
                  Cancel
                </Button>
                  <Button 
                    color="error"
                    variant="contained"
                    type="submit"
                    onClick={()=> navigate("/shop/products")}
                    sx={{width: "10%"}}
                  >
                    Update
                  </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
    </Stack>
  )
};
