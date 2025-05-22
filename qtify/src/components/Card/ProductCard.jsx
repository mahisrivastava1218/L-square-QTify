import React from "react";
import {Card, CardMedia, Typography, Chip, Box} from "@mui/material";
import styles from "./Product.module.css";
// card componetn -> ALbum image,number of follows,album name
const dummyData={
    "id":"1",
    "title":"Bad",
    "artists":"[Luz]",
    "genre":"pop",
    "likes":"8965",
    "image": "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "durationInMs":"3450"
}

function ProductCard() {
  return (
    <Card className={styles.container}>
      <Box className={styles.cardContainer}>
        <CardMedia
          className={styles.image}
          src={dummyData.image}
          component="img"
          title={dummyData.title}
        />
        <Chip label={dummyData.durationInMs} className={styles.followers} />
      </Box>
        <Typography className={styles.title}>{dummyData.title}</Typography>
    </Card>
  );
}

export default ProductCard;