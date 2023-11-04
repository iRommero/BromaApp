import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BromaApp from "./components/BromaApp.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countByTwo, setCountByTwo] = useState(0);
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <div className="App">
        <BromaApp />
      </div>
    </>
  );
}

export default App;
