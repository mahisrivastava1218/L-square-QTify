import React,{useEffect} from "react";
import axios from "axios";
import styles from "./Card.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import TabComponent from "./TabComponent";
import Albums from "./AlbumCard";
import { useState } from "react";
// react component named start with capital letter
//make react component call api store in setProdutcs,setFilteredProducts using hook useState call api using useEffect hook empty dependency arr
export default function MyCard(){
    // api calling
      const [topAlbums,setTopAlbums]=useState([]);
      const [newAlbums,setNewAlbums]=useState([]);
      const[song,setSong] = useState([]);
      const[songdata,setSongData] = useState([]);
      const fetchTopAlbums=async()=>{
         try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            setTopAlbums(response.data);
            // console.log(response.data,"setTopAlbum",setTopAlbums,"topAlbums",topAlbums);
        }catch(e){
          console.log(e);
        }
      }
        const fetchNewAlbums=async()=>{
         try{
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
            setNewAlbums(response.data);
            // console.log(response.data,"setNewAlbums",setNewAlbums,"newAlbums",newAlbums);
        }catch(e){
          console.log(e);
        }
      }
      const fetchSongs = async()=>{
        try{
          const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
          setSong(response.data);
          // console.log(response.data,"fetchSongs");
        }catch(e){
          console.log(e);
        }
      }
      const fetchSongsData = async()=>{
        try{
          const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
          setSongData(response.data);
          // console.log(response.data,"fetchSongsData");
        }catch(e){
          console.log(e);
        }
      }
      
useEffect(()=>{
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchSongsData();
},[]);

const Section =({productProp,albums,data,readOnly})=>{
    // console.log(albums.length);
    // console.log(albums,productProp,readOnly);
        // console.log(albums,productProp);
  return(
   <div style={readOnly ? {"borderTop":"1px solid #34C94B","borderBottom":"1px solid #34C94B","padding":"40px 0px"} : {}} className={styles.myCardContainer}>
    <div className={styles.albumHeader}>
        <span className={styles.albumtitle}>{productProp} Albums</span>
         {!readOnly && <span className={styles.collapse}>Show all</span>}
    </div>
    {readOnly ? (
     <TabComponent productProp={albums} data={data}/>
      ): null}
      {!readOnly &&  <Albums albums={albums}/>}
    </div>
  )
}
  return (
    <div className={styles.container}>
    <Section productProp="Top" albums={topAlbums}/>
    <Section productProp="New" albums={newAlbums}/>
    <Section productProp="Song" albums={song} data={songdata} readOnly/>
    </div>
  );
}
//song -> key is data.key if data.key === songs.key then show jazz key ,that key