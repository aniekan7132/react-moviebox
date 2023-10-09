import SectionTitle from "./SectionTitle";
import classes from "./NewArrival.module.css";

const NewArrival = () => {
  return (
    <>
      <SectionTitle heading="New Arrival" />
      <div className={classes.movieList}>
        <img
          className={classes.leftArrow}
          src="./src/assets/Chevron-left.svg"
          alt="arrow left"
        />
        <div>
          <img
            className={classes.card}
            src="./src/assets/Poster-5.png"
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
            src="./src/assets/Poster-6.png"
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
            src="./src/assets/Poster-7.png"
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
            src="./src/assets/Poster-8.png"
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
    </>
  );
};

export default NewArrival;
