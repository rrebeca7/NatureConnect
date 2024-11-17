import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import VisitorHomePage from "./components/VisitorHomePage";
import SignUpForm from "./components/SignUpForm";
import VisitorGoalsPage from "./components/VisitorGoalsPage";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
