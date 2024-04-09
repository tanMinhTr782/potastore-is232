import "./ProductDetail.css";
import Tag from "../Tag/Tag";
import { useState } from "react";
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
  productName: "Mocchau Strawberry",
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
  reservation: "Keep cool on fridge",
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
export const ProductDetail = ({ productId }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleClick = () => {
    console.info("You saved products");
  };

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
        <div>{ItemDetail.category}</div>
        <KeyboardArrowRightIcon sx={{ color: "#BDBDBD" }} />
        <div>{ItemDetail.productName}</div>
      </Stack>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: "20px 60px" }}
      >
        <Grid className="ProductImage" item xs={6}>
          <Stack alignItems="center">
            <img
              className="ProductImage--MainImage"
              src={ItemDetail.image[imageIdx]}
              alt="ProductImage"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "70%" }}
              gap={1}
            >
              {ItemDetail.image.map((item, index) => {
                return (
                  <img
                    className={`ProductImage--SmallImage${
                      index === imageIdx ? "__selected" : ""
                    }`}
                    src={item}
                    alt="ProductImage"
                    onClick={() => setImageIdx(index)}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Grid>
        <Grid className="ProductInfo" item xs={6} direction="column">
          <Stack direction="column" gap={1}>
            <Stack justifyContent="space-between" direction="row">
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                {ItemDetail.productName}
              </span>
              <Stack direction="row" spacing={1}>
                <Tag
                  bgColor="#FFF0F0"
                  color="#D46F77"
                  icon={<FavoriteBorderIcon fontSize="small" />}
                  text={ItemDetail.likes}
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
                {ItemDetail.available ? "In stock" : "Out Stock"}
              </div>
            </Stack>
            <Stack spacing={1} direction="row">
              <Rating value={rating.star} precision={0.5} readOnly />
              <Tag
                icon={<MessageOutlinedIcon fontSize="small" />}
                text={`${rating.reviews} Reviews`}
              />
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
                $ {ItemDetail.salePrice}/pack
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  color: "#737373",
                  textDecoration: "line-through",
                }}
              >
                $ {ItemDetail.price}
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
                Pack size: 1 x {ItemDetail.weight}
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#737373",
                  fontSize: "14px",
                }}
              >
                Full case Quantity: {ItemDetail.maxQuantity}
              </div>
            </Stack>
          </Stack>
          <Divider flexItem style={{ padding: "10px 0" }} />
          <Stack justifyContent="center" style={{ paddingTop: "10px" }}>
            <div
              style={{ fontWeight: "bold", color: "#737373", fontSize: "14px" }}
            >
              Expiry date: {ItemDetail.expire}
            </div>
            <div
              style={{ fontWeight: "bold", color: "#737373", fontSize: "14px" }}
            >
              Reservation: {ItemDetail.reservation}
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
            {ItemDetail.description}
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
            >
              Add To Cart
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
