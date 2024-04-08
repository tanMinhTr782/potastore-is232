import React from "react";
import "./ProductReview.css";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ReviewCard = ({ props }) => {
  return (
    <Stack
      gap={1}
      sx={{
        width: "45%",
        border: "1px solid #e4e4e4",
        borderRadius: "15px",
        padding: "10px",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Rating value={props.rating} readOnly precision={0.5} size="small" />
        <MoreHorizIcon />
      </Stack>
      <Stack direction="row" gap={1}>
        <div style={{ fontWeight: "500" }}>{props.customer}</div>
        <CheckCircleIcon color="success" fontSize="small" />
      </Stack>
      <div style={{ fontSize: "14px", opcaity: "0.6" }}>"{props.comment}"</div>
      <div style={{ fontSize: "14px", opcaity: "0.6" }}>
        Posted on {props.postedDay}
      </div>
    </Stack>
  );
};
