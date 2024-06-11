import "./ProductDetail.css";
import Tag from "../Tag/Tag";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShareIcon from "@mui/icons-material/Share";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ItemDetail = {
  productId: "1",
  name: "Mocchau Strawberry",
  available: true,
  unit: "pack",
  weight: "400g",
  maxQuantity: 10,
  description:
    "Strawberries are small, heart-shaped fruits known for their sweet and tangy flavor. Packed with vitamin C and antioxidants, they are a delicious and nutritious addition to a variety of dishes.",
  price: 71.56,
  salePrice: 71.56,
  category: "Fruits",
  likes: 109,
  expire: "Printed on boxes",
  reservation:"Printed on boxes",
  image: [
    "https://cdn11.bigcommerce.com/s-i7i23daso6/images/stencil/1280x1280/products/10739/15772/Strawberry_Florence_Late_0005016__40227.1623343614.jpg?c=1",
    "https://trungtamphantichchungnhanhanoi.gov.vn/wp-content/uploads/2023/03/dau-tay-moc-chau-3.jpeg",
    "https://static.kinhtedothi.vn/w960/images/upload/2023/02/24/3.jpg",
    "https://bizweb.dktcdn.net/100/435/530/products/hoa-moc-chau-farm-599455-471ec281-d0ac-4904-8b23-979acad16eff.jpg?v=1639988875703",
  ],
};
const rating = {
  productId: "1",
  reviews: 67,
  star: 4,
};
export const ProductDetail = ({productId}) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();

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
  console.log(product)

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = (quantity) => {
    if(quantity > 0){
      if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.findIndex(ele => ele.id === product.id);
        if(index !== -1){
          cart[index].quantity = quantity;
        }
        else{
          const cartItem = {
            id: product.id,
            name: product.name,
            image: product.image, 
            price: product.price,
            quantity: quantity,
          }
          cart.push(cartItem);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
    else {
      if(localStorage.getItem('cart')){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart = cart.filter(item => item.id !== productId)
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }
  
  return (
    <Stack sx={{ paddingBottom: "60px" }}>
      <Stack
        direction="row"
        gap={1}
        sx={{ padding: "20px 60px", backgroundColor: "#FAFAFA" }}
        alignItems="center"
      >
        <div style={{ fontWeight: "500" }}>Postastore</div>
        <KeyboardArrowRightIcon sx={{ color: "#BDBDBD" }} />
        <div>{product?.type}</div>
        <KeyboardArrowRightIcon sx={{ color: "#BDBDBD" }} />
        <div>{product?.name}</div>
      </Stack>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: "20px 60px" }}
      >
        <Grid className="ProductImage" item xs={6}>
            <img
              className="ProductImage--MainImage"
              src={product?.image}
              alt="ProductImage"
            />
        </Grid>
        <Grid className="ProductInfo" item xs={6} direction="column">
          <Stack direction="column" gap={1}>
            <Stack justifyContent="space-between" direction="row">
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                {product?.name}
              </span>
              <Stack direction="row" spacing={1}>
                <Tag
                  bgColor="#FFF0F0"
                  color="#D46F77"
                  icon={<FavoriteBorderIcon fontSize="small" />}
                />
                <Tag icon={<TurnedInNotIcon fontSize="small" />} />
                <Tag icon={<ShareIcon fontSize="small" />} />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              gap={2}
              style={{ fontWeight: "bold", color: "#737373", fontSize: "14px" }}
            >
              Availability:
              <div style={{ fontWeight: "bold", color: "#23A6F0" }}>
                {product?.quantity > 0 ? "In stock" : "Out Stock"}
              </div>
            </Stack>
          </Stack>
          <Divider flexItem style={{ padding: "10px 0" }} />
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={4}
            style={{ paddingTop: "10px" }}
          >
            <Stack direction="column">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  color: "#3a4980",
                }}
              >
                {product?.price} VND/pack
              </div>  
            </Stack>
            <Stack>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#737373",
                  fontSize: "14px",
                }}
              >
                Unit: 1 x {product?.unit}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#737373",
                  fontSize: "14px",
                }}
              >
                Quantity: {product?.quantity}
              </div>
            </Stack>
          </Stack>
          <Divider flexItem style={{ padding: "10px 0" }} />
          <Stack justifyContent="center" style={{ paddingTop: "10px" }}>
            <div
              style={{ fontWeight: "bold", color: "#737373", fontSize: "14px" }}
            >
              Expiry date: Printed on boxes
            </div>
            <div
              style={{ fontWeight: "bold", color: "#737373", fontSize: "14px" }}
            >
              Reservation: "Keep cool on fridge",
            </div>
          </Stack>
          <Divider flexItem style={{ padding: "10px 0" }} />
          <div
            style={{
              padding: "10px 50px 0 0",
              fonSize: "10px",
              color: "#737373",
            }}
          >
            {product?.description}
          </div>
          <Divider flexItem style={{ padding: "10px 0" }} />
          <Stack direction="row" gap={3} style={{ paddingTop: "10px" }}>
            <div className="quantityButton">
              <button onClick={handleDecrease} className="DecreaseButton">
                <RemoveIcon />
              </button>
              {quantity}
              <button onClick={handleIncrease} className="IncreaseButton">
                <AddIcon />
              </button>
            </div>
            <Button
              startIcon={<AddShoppingCartIcon />}
              style={{
                backgroundColor: "#3a4980",
                color: "#fff",
                width: "300px",
                height: "50px",
                borderRadius: "50px",
              }}
              className="AddCartButton"
              onClick={() => handleAddToCart(quantity)}
            >
              Add To Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
