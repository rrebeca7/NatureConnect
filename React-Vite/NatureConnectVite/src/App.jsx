import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import VisitorHomePage from "./components/VisitorHomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VisitorHomePage />
    </>
  );
}

export default App;
