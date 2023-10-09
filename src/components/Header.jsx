import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerNavigation}>
        <div className="header-logo">
          <img src="../src/assets/Logo.png" alt="logo" />
        </div>
        <div>
          <input
            value={props.searchValue}
            onChange={(event) => props.setSearchValue(event.target.value)}
            type="text"
            placeholder="What do you want to watch"
          />
        </div>
        <div className={classes.headerSignIn}>
          <p className={classes.signin}>Sign in</p>
          <p className={classes.signinBackground}>
            <img
              className={classes.menuImage}
              src="./src/assets/Menu.svg"
              alt=""
            />
          </p>
        </div>
      </div>
      <div className={classes.headerText}>
        <p>John Wick 3:</p>
        <p>Parabellum</p>
      </div>
      <div className={classes.headerDescription}>
        <img
          src="./src/assets/IMDb.png"
          alt="logo"
          className={classes.imageYellow}
        />

        <p>86.0 / 100</p>

        <img
          src="./src/assets/PngItem.png"
          alt=""
          className={classes.imageRed}
        />
        <p>97%</p>
      </div>
      <div className={classes.headerDetails}>
        <p>
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
      </div>
      <button className={classes.headerButton}>
        <img src="Play(2).svg" alt="" />
        WATCH LATER
      </button>
    </div>
  );
};

export default Header;
