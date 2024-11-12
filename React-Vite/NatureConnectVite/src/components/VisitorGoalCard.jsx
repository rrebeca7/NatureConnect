import classes from "./VisitorGoalCard.module.css";

function VisitorGoalCard({ goalType, name, shortDesc, endDate }) {
  return (
    <div className={classes.card}>
      <div className={classes.textContainer}>
        <h1 className={classes.goalTypeHeading}>Today's {goalType} Goal:</h1>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.shortDesc}>{shortDesc}</p>
        <p className={classes.date}>CLOSES {endDate}</p>
      </div>
      <button className={classes.showMoreButton}>Show More</button>
    </div>
  );
}
export default VisitorGoalCard;
