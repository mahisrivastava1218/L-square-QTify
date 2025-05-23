import React,{useEffect, useState} from "react";
import AlbumCard from "./ProductCard";
import axios from "axios";
import { Grid } from "@mui/material";
import styles from "./Card.module.css";
// react component named start with capital letter
//make react component call api store in setProdutcs,setFilteredProducts using hook useState call api using useEffect hook empty dependency arr
export default function MyCard(){
    // api calling
      const [topAlbums,setTopAlbums]=useState([]);
      const [newAlbums,setNewAlbums]=useState([]);

      const fetchTopAlbums=async()=>{
         try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            setTopAlbums(response.data);
            console.log(response.data,"setTopAlbum",setTopAlbums,"topAlbums",topAlbums);
        }catch(e){
          console.log(e);
        }
      }
        const fetchNewAlbums=async()=>{
         try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
            setNewAlbums(response.data);
            console.log(response.data,"setNewAlbums",setNewAlbums,"newAlbums",newAlbums);
        }catch(e){
          console.log(e);
        }
      }
      
useEffect(()=>{
    fetchTopAlbums();
    fetchNewAlbums();
},[])

const Section =({productProp,albums})=>{
    console.log(albums.length);
  return(
   <div className={styles.myCardContainer}>
    <div className={styles.albumHeader}>
        <span className={styles.albumtitle}>{productProp} Albums</span>
         <span className={styles.collapse}>Show all</span>
    </div>
    <Grid container className={styles.myCardGrid}>
    {albums.length>0 ? (
      albums.map((product,index)=>(
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
    <Section productProp="Top" albums={topAlbums}/>
    <Section productProp="New" albums={newAlbums}/>
    </div>
  );
}
