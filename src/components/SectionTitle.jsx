import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{props.heading}</p>
      <div className={classes.seeMoreContainer}>
        <p className={classes.text}>See more</p>

        <img
          className={classes.image}
          src="./src/assets/Chevron-right.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SectionTitle;
