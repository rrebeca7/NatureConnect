import classes from "./VisitorHomePage.module.css";
import WelcomePageBody from "./WelcomePageBody";
import MainFooter from "./MainFooter";
import MainHeader from "./mainHeader";
import ResourcesDropdown from "./ResourcesDropdown";
import VisitorGoalCard from "./VisitorGoalCard";

function VisitorHomePage() {
  return (
    <div className={classes.page}>
      <div>
        <MainHeader />
      </div>
      <div className={classes.content}>
        <WelcomePageBody />
      </div>
      <ResourcesDropdown />
      <VisitorGoalCard
        goalType="Daily"
        name="Eat a local fruit or vegetable"
        shortDesc="Find a plant,  fruit, or vegetable that is in season and/or grown locally! Try to incorporate it into a meal or eat as is. Brownie points if you buy it from a local grower!"
        endDate="9/4/2024 10:59:59 PM"
      />

      <MainFooter />
    </div>
  );
}

export default VisitorHomePage;
