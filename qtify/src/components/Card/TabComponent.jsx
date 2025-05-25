import React, { useState } from "react";
import {Tab,Tabs,Box} from "@mui/material";
import { Swiper,SwiperSlide } from "swiper/react";
import AlbumCard from "./ProductCard";
import styles from "./Card.module.css";
import {Navigation} from "swiper/modules"
import 'swiper/css/navigation';
import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";
import {Grid} from "@mui/material";
export default function TabComponent({productProp,data}){
    const songs = productProp;
    console.log(productProp,data);
    const[value,setValue]=React.useState(0);
    const[filteredSongs,setFilteredSongs] = useState(songs);
     const handleChange = (event,newValue) => {
       setValue(newValue);
       console.log(newValue);
       if(newValue===0){
        setFilteredSongs(songs);
       }else{
        let genreKey;
        switch(newValue){
            case 1:
                genreKey="rock";
                break;
            case 2:
                genreKey="pop";
                break;
            case 3:
                genreKey="jazz";
                break;
            case 4:
                genreKey="blues";
                break;
            default:
                 genreKey=null;

        }
        if(genreKey){
              console.log(genreKey);
              const filtered = songs.filter(song=>song.genre?.key === genreKey);
              setFilteredSongs(filtered);
        }
        
       }
    };

    return(
        <Box sx={{width:"100%"}} value={value}>
            <Tabs value={value} onChange={handleChange} aria-label="Tabs Where each tab needs to be selected manually"
            TabIndicatorProps={{
                style:{backgroundColor:"green"}
            }} >
                <Tab label="All"  sx={{color:"white"}}></Tab>
                <Tab label="Rock"  sx={{color:"white"}}></Tab>
                <Tab label="Pop"  sx={{color:"white"}}></Tab>
                <Tab label="Jazz"  sx={{color:"white"}}></Tab>
                <Tab label="Blues"  sx={{color:"white"}}></Tab>
            </Tabs>
                <Grid container className={styles.myCardGrid}>
            {songs.length>0 ? (
                  <>
                    <div className={styles.customprev}><img src={leftArrow} alt="Left Arrow"/></div>
            <Swiper  modules={[Navigation]}
                  navigation={{
                    nextEl: `${styles.customnext}`,
                    prevEl: `${styles.customprev}`
                  }}
                  // spaceBetween={32}
                  slidesPerView={7}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  >
           {(filteredSongs && filteredSongs.length > 0 ? filteredSongs : songs).map((song, index) => (
        <SwiperSlide key={index}>
         <AlbumCard productProp={song} />
        </SwiperSlide>
         ))}
        </Swiper>
             <div className={styles.customnext}><img src={rightArrow} alt="right Arrow"/></div>
             </>
            ):(
                    <p>No album available</p>
                )}
                </Grid>
        </Box>
    )
}