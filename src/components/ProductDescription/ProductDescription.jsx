import React from "react";
import "./ProductDescription.css";
import Stack from "@mui/material/Stack";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const description =
{
    info: "When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge",
    benefit: [
        "Durable leather is easily cleanable so you can keep your look fresh.",
        "Water-repellent finish and internal membrane help keep your feet dry.",
        "Toe piece with star pattern adds durability.",
        "Synthetic insulation helps keep you warm.",
        "Originally designed for performance hoops, the Air unit delivers lightweight cushioning.",
        "Plush tongue wraps over the ankle to help keep out the moisture and cold.",
        "Rubber outsole with aggressive traction pattern adds durable grip.",
        "Durable leather is easily cleanable so you can keep your look fresh.",
    ],
    details: [
        "Not intended for use as Personal Protective Equipment (PPE)",
        "Water-repellent finish and internal membrane help keep your feet dry.",
    ],
    moreDetails: [
        "Lunarlon midsole delivers ultra-plush responsiveness",
        "Encapsulated Air-Sole heel unit for lightweight cushioning",
        "Colour Shown: Ale Brown/Black/Goldtone/Ale Brown",
        "Style: 805899-202"
    ]

}
export const ProductDescription = ({ productId }) => {
  return (
    <Stack gap={6} className="ProductDescription">
        <Stack gap={2}>
            <div style={{paddingTop: "20px"}}>
                Product Description
            </div>
            <div className="DescriptionContent">{description.info}</div>
        </Stack>
        <Stack gap={2}>
            <div> Benefits </div>
            {description.benefit.map((item) => {
            return(
                <Stack direction="row" gap={1} alignItems="center" className="DescriptionContent">
                    <CheckCircleOutlineIcon sx={{color: "#3a4980"}} fontSize="small"/>
                    {item}
                </Stack>
            );
            })}
        </Stack>
        <Stack gap={2}>
            <div> Product Details </div>
            {description.details.map((item) => {
            return(
                <Stack direction="row" gap={1} alignItems="center" className="DescriptionContent">
                    <CheckCircleOutlineIcon sx={{color: "#3a4980"}} fontSize="small"/>
                    {item}
                </Stack>
            );
            })}
        </Stack>
        <Stack gap={2}>
            <div> More Details </div>
            {description.moreDetails.map((item) => {
            return(
                <Stack direction="row" gap={1} alignItems="center" className="DescriptionContent">
                    <CheckCircleOutlineIcon sx={{color: "#3a4980"}} fontSize="small"/>
                    {item}
                </Stack>
            );
            })}
        </Stack>
    </Stack>
  );
};
