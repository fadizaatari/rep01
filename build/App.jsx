import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import BootStrapAccordion from "./BootStrapAccordion.jsx";
import BootStrapAlert from "./BootStrapAlerts.jsx";
import BootStrapDropDown from "./BootStrapDropDown.jsx";
import BootStrapModals from "./BootStrapModals.jsx";
import MyComponent from "./test1.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React. Now testing==</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary{" "}
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark button yess
      </button>
      <BootStrapAccordion />
      <BootStrapAlert />
      <BootStrapDropDown />
      <BootStrapModals />
      <MyComponent />
    </>
  );
}

export default App;
