import React from "react";
import "./ProductReview.css";
import Stack from "@mui/material/Stack";
import { ReviewCard } from "./ReviewCard";

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
  return (
    <Stack sx={{padding: "20px"}}>
      <Stack direction="row" alignItems="center" sx={{ padding: "20px 0" }}>
        <div style={{ fontSize: "18px", fontWeight: "500" }}>All Reviews </div>
        <div style={{ fontSize: "12px", opacity: "0.8" }}>
          ({review.quantity})
        </div>
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
