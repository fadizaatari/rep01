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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

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
