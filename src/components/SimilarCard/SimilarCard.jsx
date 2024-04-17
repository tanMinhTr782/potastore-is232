import React from "react";
import "./SimilarCard.css";

import { Stack } from "@mui/material";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SimilarCard = ({ props }) => {
  return (
    <Stack className="SimilarCard">
      <div className="ImageContainer">
        <button className="heartButton"><FavoriteBorderIcon fontSize="small" /></button>
        <img className="CardImage" src={props.imgUrl} alt={props.productName} />
      </div>
      <Stack sx={{ padding: "15px" }} gap={1}>
        <div style={{ color: "#667085", fontWeight: "bold" }}>
          {props.productName}
        </div>
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          $ {props.price}.00
        </div>
        <div style={{ color: "#98A2B3", fontSize: "14px" }}>
          {props.stock} packs available
        </div>
        <Stack direction="row" gap={1} alignItems="center">
          <Rating value={props.likes} precision={0.5} readOnly size="small" />
          <div style={{ color: "#98A2B3", fontSize: "14px" }}>
            ({props.reviews})
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SimilarCard;
