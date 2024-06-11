import { useState} from 'react';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import "./Cart.css";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const productList = [
//   {
//     id: '1',
//     name: "Mocchau Strawberry",
//     imgUrl: "https://cdn11.bigcommerce.com/s-i7i23daso6/images/stencil/1280x1280/products/10739/15772/Strawberry_Florence_Late_0005016__40227.1623343614.jpg?c=1",
//     price: 499,
//     quantity: 2,
//   },
//   {
//     id: '2',
//     name: "Mocchau Strawberry",
//     imgUrl: "https://cdn11.bigcommerce.com/s-i7i23daso6/images/stencil/1280x1280/products/10739/15772/Strawberry_Florence_Late_0005016__40227.1623343614.jpg?c=1",
//     price: 499,
//     quantity: 2,
//   },
// ]

const Cart = () => {
  const navigate = useNavigate();
  if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', '[]');
  }
  const productList = JSON.parse(localStorage.getItem('cart'));

  const [products, setProducts] = useState(productList);


  const subTotal = products.reduce((total, product) => total + product.quantity * product.price, 0);
  const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
  const shippingfee = 25000;

  const totalPrice = {
    total: subTotal + shippingfee, 
    totalQuantity: totalQuantity,
    subTotal: subTotal,
    shippingfee: shippingfee,
    voucherDiscount: 0,
  };


  const handleQuantityChange = (value, productId) => {
    console.log({value})
    const updatedProducts = products.map((product) => {
      if (product.id === productId && value !== undefined) {
        return { ...product, quantity: value };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const increaseQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      const index = cart.findIndex(ele => ele.id === productId);
      cart[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const decreaseQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      const index = cart.findIndex(ele => ele.id === productId);
      if(cart[index].quantity === 1) {
        cart = cart.filter(item => item.id !== productId)
      }
      else{
        cart[index].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart = cart.filter(item => item.id !== productId)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Stack gap={4} className="CartPage">
      <h1>YOUR CART</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell style={{ fontWeight: "bold" }}>PRODUCT</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                PRICE
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                QUANTITY
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                UNIT PRICE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => deleteProduct(item.id)}>
                    <ClearIcon color="error" fontSize="small"/>
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Stack direction="row" alignItems="center">
                    <img src={item.image} className="productImg"></img>
                    {item.name}
                  </Stack>
                </TableCell>
                <TableCell align="center">{item.quantity * item.price} VND</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => decreaseQuantity(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    id="outlined-basic"
                    hiddenLabel
                    variant="outlined"
                    size="small"
                    value={item.quantity}
                    sx={{width: '80px'}}
                    onChange={(event) => handleQuantityChange(event.target.value, item.id)}
                  />
                  <IconButton color="primary" onClick={() =>increaseQuantity(item.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{item.price} VND</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack alignItems="flex-end" sx={{width: '100%'}}>
        <Stack gap={1} sx={{width: '30%'}} >
          <Stack direction="row" justifyContent="space-between">
            <p>Subtotal</p>
            <p>{totalPrice.subTotal} VND</p>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p>Shipping fee</p>
            <p>{totalPrice.shippingfee} VND</p>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>total</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>{totalPrice.total} VND</p>
          </Stack>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: "#23A6F0",
            }}
            onClick={() => navigate("/checkout", { state: totalPrice })}
          >
            Check out
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
