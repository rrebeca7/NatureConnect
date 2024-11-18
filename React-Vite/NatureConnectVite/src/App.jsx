import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import VisitorHomePage from "./components/VisitorHomePage";
import SignUpForm from "./components/SignUpForm";
import VisitorGoalsPage from "./components/VisitorGoalsPage";
import ExpandedGoalCard from "./components/ExpandedGoalCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <MainHeader />
        <div className="appBody">
          <Routes>
            <Route path="/" element={<VisitorHomePage />} />
            <Route
              path="/SignUpForm"
              element={
                <>
                  <SignUpForm />
                  <MainFooter />
                </>
              }
            />
            <Route
              path="/VisitorGoalsPage"
              element={
                <>
                  <VisitorGoalsPage />
                  <MainFooter />
                </>
              }
            />
            <Route
              path="/ExpandedGoalCard"
              element={
                <ExpandedGoalCard
                  goalResources="resource1"
                  endDate="7/25/24"
                  goalType="Daily"
                  name="Spot a local plant"
                  longDesc="Research a native  plant that is in your area and see if you can spot it while outside in nature, or even on your daily commute. Be sure to be respectful of nature and the community around you while doing so and to stick to designated public trails while on your search!"
                  steps="Find a local plant"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
