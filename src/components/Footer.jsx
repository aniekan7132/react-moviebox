import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerIcons}>
        <img
          src="./src/assets/fa-brands_facebook-square.svg"
          alt="footer logo"
        />
        <img src="./src/assets/fa-brands_instagram.svg" alt="footer logo" />
        <img src="./src/assets/fa-brands_twitter.svg" alt="footer logo" />
        <img src="./src/assets/fa-brands_youtube.svg" alt="footer logo" />
      </div>
      <div className={classes.policyContainer}>
        <p className={classes.policyItem}>Conditions of Use</p>
        <p className={classes.policyItem}>Privacy & Policy</p>
        <p className={classes.policyItem}>Press Room</p>
      </div>
      <div className={classes.copyRightContainer}>
        <p className={classes.copyRightText}>
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
