import classes from "./VisitorHomePage.module.css";
import WelcomePageBody from "./WelcomePageBody";
import MainFooter from "./MainFooter";
import MainHeader from "./mainHeader";
import ResourcesDropdown from "./ResourcesDropdown";

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
      <MainFooter />
    </div>
  );
}

export default VisitorHomePage;
