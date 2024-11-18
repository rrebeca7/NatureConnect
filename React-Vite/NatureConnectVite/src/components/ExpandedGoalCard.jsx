import classes from "./ExpandedGoalCard.module.css";
import image from "/src/assets/natureImage.png";

function ExpandedGoalCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.columnOne}>
        <p className={classes.goalImage}>image would go here</p>
        <div className={classes.resourcesTextDiv}>
          <h2 className={classes.resourcesHeading}>External Links/Resources</h2>
          <p className={classes.resourcesLinkTxt}>{props.goalResources}</p>
        </div>
        <p className={classes.endDateTxt}>CLOSES {props.endDate} 11:59.59 PM</p>
      </div>
      <div className={classes.columnTwo}>
        <h1 className={classes.goalHeading}>{props.goalType} Goal:</h1>
        <h3 className={classes.goalName}>{props.name}</h3>
        <p className={classes.goalLongDesc}>{props.longDesc}</p>
        <div className={classes.goalStepsDiv}>{props.steps}</div>
        <button>Mark Complete</button>
      </div>
      <div className={classes.columnThree}>
        <h2>x</h2>
      </div>
    </div>
  );
}
export default ExpandedGoalCard;
