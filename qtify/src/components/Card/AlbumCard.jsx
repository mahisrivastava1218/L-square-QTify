import {useRef, useId} from "react";
import { Grid } from "@mui/material";
import styles from "./Card.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";
import AlbumCard from "./ProductCard";

export default function Albums({ albums, songs, filteredSongs, readOnly }) {
  console.log(albums, songs, filteredSongs, readOnly);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  // Generate unique ID for this component instance
  const uniqueId = useId();
  const prevClass = `customprev-${uniqueId}`;
  const nextClass = `customnext-${uniqueId}`;
  
  // Determine what data to display
  const dataToShow = !readOnly
    ? albums
    : (filteredSongs && filteredSongs.length > 0 ? filteredSongs : songs);

  const hasData = dataToShow && dataToShow.length > 0;

  return (
    <Grid container className={styles.myCardGrid}>
      {hasData ? (
        <>
          <div className={`${styles.customprev} ${prevClass}`} ref={prevRef}>
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              nextEl: `.${nextClass}`,
              prevEl: `.${prevClass}`,
            }}
            slidesPerView={7}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {
              console.log(swiper);
              // bind navigation elements after Swiper is initialized
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {dataToShow.map((item, index) => (
              <SwiperSlide key={index}>
                <AlbumCard productProp={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`${styles.customnext} ${nextClass}`} ref={nextRef}>
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </>
      ) : (
        <p>No album available</p>
      )}
    </Grid>
  );
}
// useId is a React hook that generates a unique, stable ID string for each component instance.
//  It's particularly useful for creating unique identifiers that won't conflict across different components or renders.