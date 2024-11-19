import classes from "./WelcomePageBody.module.css";
import image from "/src/assets/NC_WelcomeImage4.jpg";

function WelcomePageBody() {
  return (
    <div>
      <div
        className={classes.pageBody}
        style={{
          backgroundImage: `url(${image})`,
          width: "100vw",
          height: "140vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={classes.spacer}></div>
        <div className={classes.welcomeTop}>
          {/* <div className={classes.spacer}></div> */}
          {/* <img className={classes.ncImage} src={image} alt="Forest Image" /> */}

          <div className={classes.textContainer}>
            <h1 className={classes.welcomeText}>Welcome</h1>
            <h3 className={classes.descriptionText}>
              Goal setting to help you reconnect with nature
            </h3>
            <button className={classes.joinButton}>Join now</button>
          </div>
        </div>
      </div>

      <div className={classes.textBody}>
        <h2 className={classes.textHeading}>Our Mission</h2>
        <p className={classes.text}>
          Our mission is to inspire and empower individuals to reconnect with
          nature, improve their mental well-being, and strengthen their local
          communities. By providing personalized goals, practical guidance, and
          opportunities to engage with the environment, we aim to foster
          meaningful outdoor experiences that benefit both people and the
          planet. Through this initiative, we strive to create a healthier, more
          connected world—one step, one discovery, and one goal at a time.
        </p>
      </div>
      <div className={classes.textBody}>
        <h2 className={classes.textHeading}></h2>
        <p className={classes.text}></p>
      </div>
    </div>
  );
}

export default WelcomePageBody;
