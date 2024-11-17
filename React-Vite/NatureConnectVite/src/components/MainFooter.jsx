import classes from "./MainFooter.module.css";

function MainFooter() {
  return (
    <div className={classes.footerDiv}>
      <div>
        <h1>Nature Connect</h1>
        <p>A Girls Who Code Project</p>
      </div>
      <a className={classes.attribute} href="https://storyset.com/people">
        People illustrations by Storyset
      </a>
      <a className={classes.attribute} href="https://storyset.com/nature">
        Nature illustrations by Storyset
      </a>
    </div>
  );
}

export default MainFooter;
