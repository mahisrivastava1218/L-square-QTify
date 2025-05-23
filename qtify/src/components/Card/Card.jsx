import React,{useEffect, useState} from "react";
import AlbumCard from "./ProductCard";
import axios from "axios";
import { Grid } from "@mui/material";
import styles from "./Card.module.css";
// react component named start with capital letter
//make react component call api store in setProdutcs,setFilteredProducts using hook useState call api using useEffect hook empty dependency arr
function MyCard(){
    // api calling
      const [products,setProducts]=useState([]);
      const [filteredProducts,setFilteredProducts]=useState([]);
      const performApi=async()=>{
         try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            setProducts(response.data);
            setFilteredProducts(response.data);
            console.log(response.data,"setProducts",setProducts,"setFilteredProducts",setFilteredProducts);
        }catch(e){
          console.log(e);
        }
      }
      
useEffect(()=>{
    performApi();
},[])

const Section =({productProp,filteredProducts})=>{
    console.log(filteredProducts.length);
  return(
   <div className={styles.myCardContainer}>
    <div className={styles.albumHeader}>
        <span className={styles.albumtitle}>{productProp} Albums</span>
         <span className={styles.collapse}>Show all</span>
    </div>
    <Grid container className={styles.myCardGrid}>
    {filteredProducts.length>0 ? (
      filteredProducts.map((product,index)=>(
        <Grid item key={index}>
         <AlbumCard  productProp={product}/>
         </Grid>
      ))
    ):(
        <p>No album available</p>
    )}
    </Grid>
    </div>
  )
}
  return (
    <div className={styles.container}>
    <Section productProp="Top" filteredProducts={filteredProducts}/>
    <Section productProp="New" filteredProducts={filteredProducts}/>
    </div>
  );
}

export default MyCard;