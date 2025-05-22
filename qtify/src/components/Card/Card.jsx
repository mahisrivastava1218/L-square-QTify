import React,{useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Grid } from "@mui/material";
import styles from "./Product.module.css";
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


  return (
    <div className={styles.myCardContainer}>
    <div>
        <span className={styles.album}>Top Albums</span>
         <span className={styles.collapse}>Collapse</span>
    </div>
    <Grid container style={{display:'grid',gridTemplateColumns:'repeat(7,1Fr)'}} className={styles.myCardGrid}>
    {filteredProducts.map((product,index)=>(
        <Grid item key={index}>
         <ProductCard  productProp={product}/>
         </Grid>
    ))}
    </Grid>
    </div>
  );
}

export default MyCard;