import VisitorGoalCard from "./VisitorGoalCard";
import SmallGoalCard from "./SmallGoalCard";

import classes from "./VisitorGoalsPage.module.css";

function VisitorGoalsPage() {
  return (
    <div className={classes.goalsPageBody}>
      <div className={classes.spacer}></div>
      <div className={classes.largeGoalCard}>
        <VisitorGoalCard
          goalType="Today's Daily"
          name="Eat a local fruit or vegetable"
          shortDesc="Find a plant,  fruit, or vegetable that is in season and/or grown locally! Try to incorporate it into a meal or eat as is. Brownie points if you buy it from a local grower!"
          endDate="9/4/2024 10:59:59 PM"
        />
      </div>

      <div className={classes.smallGoalCards}>
        <SmallGoalCard
          goalType="Weekly"
          name="Grow a mini garden of native plants to help your local pollinators!"
        />
        <SmallGoalCard
          goalType="Monthly"
          name="Volunteer at a local nature reserve, sanctuary, or conservation org"
        />
        <SmallGoalCard
          goalType="Yearly"
          name="Take a few days to immerse yourself in nature by taking a camping trip!"
        />
      </div>
      <div className={classes.spacerTwo}></div>
    </div>
  );
}

export default VisitorGoalsPage;
