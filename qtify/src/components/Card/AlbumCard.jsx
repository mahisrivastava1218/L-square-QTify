
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

  // Determine what data to display
  const dataToShow = !readOnly
    ? albums
    : (filteredSongs && filteredSongs.length > 0 ? filteredSongs : songs);

  const hasData = dataToShow && dataToShow.length > 0;

  return (
    <Grid container className={styles.myCardGrid}>
      {hasData ? (
        <>
          <div className={styles.customprev}>
            <img src={leftArrow} alt="Left Arrow" />
          </div>
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              nextEl: `.${styles.customnext}`,
              prevEl: `.${styles.customprev}`,
            }}
            slidesPerView={7}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {dataToShow.map((item, index) => (
              <SwiperSlide key={index}>
                <AlbumCard productProp={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.customnext}>
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        </>
      ) : (
        <p>No album available</p>
      )}
    </Grid>
  );
}
