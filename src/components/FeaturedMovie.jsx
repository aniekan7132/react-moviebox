import classes from "./FeaturedMovie.module.css";

import SectionTitle from "./SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const FeaturedMovie = (props) => {
  const movieList = props.movies.map((movie, index) => (
    <SwiperSlide>
      <div className={classes.movieList}>
        <div>
          <img className={classes.card} src={movie.Poster} alt="movie poster" />
          <p className={classes.country}>USA, 2016 - Current</p>
          <p className={classes.title}>{movie.Title}</p>
          <div className={classes.rating}>
            <img src="./src/assets/IMDb.png" alt="IMDb image" />
            <p className={classes.figure}>86.0 / 100</p>
            <img src="./src/assets/PngItem.png" alt="" />
            <p className={classes.figure}>97%</p>
          </div>
          <p className={classes.description}>Action, Adventure, Horror</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className={classes.sectionFeature}>
        <SectionTitle heading="Featured Movie" />
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movieList}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedMovie;

{
  /* <div className={classes.sectionFeature}>
  <SectionTitle heading="Featured Movie" />
  <div className={classes.movieList}>
    <img
      className={classes.leftArrow}
      src="./src/assets/Chevron-left.svg"
      alt="arrow left"
    />
    <div>
      <img
        className={classes.card}
        src="./src/assets/Poster.png"
        alt="movie image"
      />
      <p className={classes.country}>USA, 2016 - Current</p>
      <p className={classes.title}>Stranger Things</p>
      <div className={classes.rating}>
        <img src="./src/assets/IMDb.png" alt="image" />
        <p className={classes.figure}>86.0 / 100</p>
        <img src="./src/assets/PngItem.png" alt="" />
        <p className={classes.figure}>97%</p>
      </div>
      <p className={classes.description}>Action, Adventure, Horror</p>
    </div>
    <div>
      <img
        className={classes.card}
        src="./src/assets/Poster-2.png"
        alt="movie image"
      />
      <p className={classes.country}>USA, 2016 - Current</p>
      <p className={classes.title}>Stranger Things</p>
      <div className={classes.rating}>
        <img src="./src/assets/IMDb.png" alt="image" />
        <p className={classes.figure}>86.0 / 100</p>
        <img src="./src/assets/PngItem.png" alt="" />
        <p className={classes.figure}>97%</p>
      </div>
      <p className={classes.description}>Action, Adventure, Horror</p>
    </div>
    <div>
      <img
        className={classes.card}
        src="./src/assets/Poster-3.png"
        alt="movie image"
      />
      <p className={classes.country}>USA, 2016 - Current</p>
      <p className={classes.title}>Stranger Things</p>
      <div className={classes.rating}>
        <img src="./src/assets/IMDb.png" alt="image" />
        <p className={classes.figure}>86.0 / 100</p>
        <img src="./src/assets/PngItem.png" alt="" />
        <p className={classes.figure}>97%</p>
      </div>
      <p className={classes.description}>Action, Adventure, Horror</p>
    </div>
    <div>
      <img
        className={classes.card}
        src="./src/assets/Poster-4.png"
        alt="movie image"
      />
      <p className={classes.country}>USA, 2016 - Current</p>
      <p className={classes.title}>Stranger Things</p>
      <div className={classes.rating}>
        <img src="./src/assets/IMDb.png" alt="image" />
        <p className={classes.figure}>86.0 / 100</p>
        <img src="./src/assets/PngItem.png" alt="" />
        <p className={classes.figure}>97%</p>
      </div>
      <p className={classes.description}>Action, Adventure, Horror</p>
    </div>
    <img
      className={classes.rightArrow}
      src="./src/assets/Chevron-right(1).png"
      alt="arrow right logo"
    />
  </div>
  <NewArrival />
</div>; */
}

// <div className={classes.movieList}>
//   <div>
//     <img className={classes.card} src={movie.Poster} alt="movie poster" />
//     <p className={classes.country}>USA, 2016 - Current</p>
//     <p className={classes.title}>Stranger Things</p>
//     <div className={classes.rating}>
//       <img src="./src/assets/IMDb.png" alt="IMDb image" />
//       <p className={classes.figure}>86.0 / 100</p>
//       <img src="./src/assets/PngItem.png" alt="" />
//       <p className={classes.figure}>97%</p>
//     </div>
//     <p className={classes.description}>Action, Adventure, Horror</p>
//   </div>
// </div>;
