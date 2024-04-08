import React from "react";
import { useState } from "react";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { ProductReview } from "../../components/ProductReview/ProductReview";
import Stack from "@mui/material/Stack";
import ProductCard from "../../components/productCard/ProductCard";

import "./Product.css";
const products = [
  {
    name: "Mocchau Strawberry",
    price: "6.48",
    rating: "4.9",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: "/img/MocchauStrawberry.jpg",
    soldFigure: "14",
  },
  {
    name: "Dalat Potato",
    price: "5.99",
    rating: "3.5",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: "/img/potato.jpg",
    soldFigure: "268",
  },
  {
    name: "Pineapple",
    price: "3.99",
    rating: "5.0",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: "/img/ppap.png",
    soldFigure: "1957",
  },
];
const Product = ({ productId }) => {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <div className="ProductPage">
      <ProductDetail productId={productId} />
      <Stack className="description">
        <Stack direction="row" gap={2} className="descriptionTitle">
          <div
            className={`title${showDescription ? "__selected" : ""}`}
            onClick={() => setShowDescription(true)}
          >
            Description
          </div>
          <div
            className={`title${!showDescription ? "__selected" : ""}`}
            onClick={() => setShowDescription(false)}
          >
            Reviews
          </div>
        </Stack>
        {showDescription ? (
          <ProductDescription productId={productId} />
        ) : (
          <ProductReview productId={productId} />
        )}
      </Stack>
      <Stack className="releventItem">
        <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "20px" }}>
          Similar Items You Might Also Like
        </div>
        <Stack direction="row">
          {products.map((product) => (
            <ProductCard {...product} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default Product;
