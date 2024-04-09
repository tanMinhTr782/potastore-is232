import React from "react";
import "./Tag.css";
import Stack from "@mui/material/Stack";

const Tag = ({ bgColor, color, icon, text }) => {
  return (
    <Stack
      direction="row"
      gap={text ? 1 : 0}
      alignItems="center"
      sx={{
        color: color ?? "#3A4980",
        backgroundColor: bgColor ?? "#EDF0F8",
        borderRadius: "10px",
        padding: "5px 6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>{icon}</div>
      <div style={{ fontSize: "14px" }}>{text}</div>
    </Stack>
  );
};

export default Tag;
