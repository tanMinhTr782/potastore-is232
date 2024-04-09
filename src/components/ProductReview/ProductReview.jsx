import React from "react";

import "./ProductReview.css";
import { ReviewCard } from "./ReviewCard";
import Tag from "../Tag/Tag";

import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import TuneIcon from "@mui/icons-material/Tune";

const review = {
  quantity: 67,
  reviewCard: [
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
    {
      rating: 4.5,
      customer: "Samantha D.",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      postedDay: "August 14, 2023",
    },
  ],
};
export const ProductReview = ({ productId }) => {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Stack sx={{ padding: "20px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" sx={{ padding: "20px 0" }}>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            All Reviews{" "}
          </div>
          <div style={{ fontSize: "12px", opacity: "0.8" }}>
            ({review.quantity})
          </div>
        </Stack>
        <Stack direction="row" alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 120, color: "red" }} size="small">
            <InputLabel id="demo-select-small-label">Sort by</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={filter}
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value={1}>Latest</MenuItem>
              <MenuItem value={2}>Newest</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            style={{ backgroundColor: "#000", fontSize: "14px" }}
          >
            Write a review
          </Button>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="space-between"
        sx={{ width: "100%" }}
        gap={4}
      >
        {review.reviewCard.map((card) => {
          return <ReviewCard props={card} />;
        })}
      </Stack>
    </Stack>
  );
};
