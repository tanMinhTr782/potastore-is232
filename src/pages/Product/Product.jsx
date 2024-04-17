import React from "react";
import { useState } from "react";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { ProductReview } from "../../components/ProductReview/ProductReview";
import Stack from "@mui/material/Stack";
import SimilarCard from "../../components/SimilarCard/SimilarCard";

import "./Product.css";
const releventItem = [
  {
    productId: "2",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
  },
  {
    productId: "3",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
  },
  {
    productId: "4",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
  },
  {
    productId: "5",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
  },
  {
    productId: "6",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
  },
  {
    productId: "7",
    productName: "Kiwi",
    price: 675,
    stock: 5,
    likes: 4.5,
    reviews: 121,
    imgUrl:
      "https://lh3.googleusercontent.com/proxy/NDHBDBzsWRVNRpE3ZEAI4quGNIS8Yr6Rg_fXai7k4au57qfMD0uIXUV0xVieF6N3Gp94Vp2R2p_RpcuhaT_cwpmTzy1yN8H-jNED89dkwPL6_XDGOJ7mvnat4o13mQ",
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
        <div
          style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "20px" }}
        >
          Similar Items You Might Also Like
        </div>
        <Stack
          direction="row"
          justifyContent="space-between"
          useFlexGap
          flexWrap="wrap"
          sx={{ width: "100%" }}
        >
          {releventItem.map((item) => (
            <SimilarCard props={item} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

export default Product;
