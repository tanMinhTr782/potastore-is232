import React, { useState, useEffect, useRef } from "react";
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
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "./EditProduct.css";
import ShopNavbar from "../../components/ShopNavbar/ShopNavbar";

export const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [error, setError] = useState(false);

  const hiddenFileInput = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `http://localhost:3001/product/detail?id=${productId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const product = await response.json();
      setProduct(product);
    };
    fetchProduct();
  }, []);

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const accessToken = localStorage.getItem("accessToken");

      const response = await fetch("http://localhost:3001/product/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          id: data.get("id"),
          name: data.get("name"),
          code: data.get("code"),
          description: data.get("description"),
          price: parseInt(data.get("price")),
          quantity: parseInt(data.get("quantity")),
          unit: data.get("unit"),
        }),
      });
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        window.location.href = "../products";
      } else {
        const errorData = await response.json();
        setError(true);
      }
    } catch (error) {}
  };
  const handleUploadButton = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
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
            {product ? (
              <Stack gap={4}>
                <Stack direction="row" gap={15}>
                  <TextField
                    label="Product Name"
                    name="name"
                    id="name"
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    defaultValue={product.name}
                  />
                  <TextField
                    label="Product Id"
                    name="id"
                    id="id"
                    required
                    variant="outlined"
                    sx={{ width: "35%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={product.id}
                  />
                </Stack>
                <Stack direction="row" gap={10}>
                  <TextField
                    label="Product Code"
                    name="code"
                    id="code"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    InputProps={{
                      readOnly: true,
                    }}
                    defaultValue={product.code}
                  />
                  <TextField
                    type="number"
                    label="Quantity"
                    name="quantity"
                    id="quantity"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    defaultValue={product.quantity}
                  />
                </Stack>
                <Stack direction="row" gap={10}>
                  <TextField
                    label="Product Type"
                    name="category"
                    id="category"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    defaultValue={product.category.name}
                  />
                  <TextField
                    label="Product Unit"
                    name="unit"
                    id="unit"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    defaultValue={product.unit}
                  />
                  <TextField
                    label="Price per Unit"
                    name="price"
                    id="price"
                    required
                    variant="outlined"
                    sx={{ width: "20%" }}
                    defaultValue={product.price}
                  />
                </Stack>
                <TextField
                  label="Description"
                  name="description"
                  id="description"
                  required
                  variant="outlined"
                  sx={{ width: "60%" }}
                  defaultValue={product.description}
                  multiline
                  rows={4}
                />
                <Stack gap={1}>
                  <div style={{ fontWeight: "500" }}>Product Image</div>
                  <img
                    src={file ? file : product.image}
                    className="productImagePreview"
                  />
                  <Button
                    onClick={handleUploadButton}
                    variant="outlined"
                    sx={{ width: "fit-content" }}
                  >
                    <input
                      ref={hiddenFileInput}
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <Stack direction="row" alignItems="center" gap={1}>
                      <BackupOutlinedIcon />
                      Upload Image
                    </Stack>
                  </Button>
                </Stack>
              </Stack>
            ) : (
              <></>
            )}
            <Stack
              direction="row"
              gap={6}
              justifyContent="center"
              style={{ marginTop: "50px" }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate("/shop/products")}
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
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
