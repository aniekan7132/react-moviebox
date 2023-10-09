import SectionTitle from "./SectionTitle";

import classes from "./ExclusiveVideos.module.css";

const ExclusiveVideos = () => {
  return (
    <>
      <div className={classes.sectionExclusive}>
        <SectionTitle heading="Exclusive Videos" />
        <div className={classes.videoContainer}>
          <img
            className={classes.leftArrow}
            src="./src/assets/Chevron-left.svg"
            alt="arrow left"
          />
          <div className={classes.ImageContainer}>
            <img
              className={classes.videoImage}
              src="./src/assets/Thumbnails.png"
              alt=""
            />
            <img
              className={classes.svgImage}
              src="./src/assets/Play-1.svg"
              alt=""
            />
            <p className={classes.title}>Lamb (2021) Trailer</p>
          </div>
          <div className={classes.ImageContainer}>
            <img
              className={classes.videoImage}
              src="./src/assets/Thumbnails-1.png"
              alt=""
            />
            <img
              className={classes.svgImage}
              src="./src/assets/Play-1.svg"
              alt=""
            />
            <p className={classes.title}>Lamb (2021) Trailer</p>
          </div>
          <div className={classes.ImageContainer}>
            <img
              className={classes.videoImage}
              src="./src/assets/Thumbnails-2.png"
              alt=""
            />
            <img
              className={classes.svgImage}
              src="./src/assets/Play-1.svg"
              alt=""
            />
            <p className={classes.title}>Lamb (2021) Trailer</p>
          </div>
          <img
            className={classes.rightArrow}
            src="./src/assets/Chevron-right(1).png"
            alt="arrow right logo"
          />
        </div>
      </div>
    </>
  );
};

export default ExclusiveVideos;
