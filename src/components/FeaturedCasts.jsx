import classes from "./FeaturedCasts.module.css";
import SectionTitle from "./SectionTitle";

const FeaturedCasts = () => {
  return (
    <div className={classes.sectionFeaturedCasts}>
      <SectionTitle heading="Featured Casts"/>
      <div className={classes.classListContainer}>
        <img
          className={classes.leftArrow}
          src="./src/assets/Chevron-left.svg"
          alt="arrow left"
        />
        <div className={classes.castList}>
          <div>
            <img
              className={classes.card}
              src="./src/assets/Poster-9.png"
              alt=""
            />
            <p className={classes.castName}>Keanu Reeves</p>
          </div>
          <div>
            <img
              className={classes.card}
              src="./src/assets/Poster-10.png"
              alt=""
            />
            <p className={classes.castName}>Keanu Reeves</p>
          </div>
          <div>
            <img
              className={classes.card}
              src="./src/assets/Poster-9.png"
              alt=""
            />
            <p className={classes.castName}>Keanu Reeves</p>
          </div>
          <div>
            <img
              className={classes.card}
              src="./src/assets/Poster-11.png"
              alt=""
            />
            <p className={classes.castName}>Keanu Reeves</p>
          </div>
          <img
            className={classes.rightArrow}
            src="./src/assets/Chevron-right(1).png"
            alt="arrow right logo"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCasts;
