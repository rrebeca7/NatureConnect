import classes from "./MainHeader.module.css";

import { FaChevronDown } from "react-icons/fa"; // Example: Font Awesome icon

function MainHeader() {
  return (
    <header className={classes.headBar}>
      <button className={classes.resourcesButton}>
        Resources
        <FaChevronDown className={classes.icon} />
      </button>

      <div className={classes.spacerOne}></div>
      <h1 className={classes.logo}>Logo</h1>
      <div className={classes.spacerTwo}></div>
      <div className={classes.buttonHolder}>
        <button className={classes.logInButton}>Log in</button>
        <button className={classes.signUpButton}>Sign up</button>
      </div>
    </header>
  );
}

export default MainHeader;
