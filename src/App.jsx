import { useState } from "react";
import { SiAmazongames } from "react-icons/si";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <p className="text-white text-7xl text-center font-roboto">
          welcome to
          <span className="font-doto font-bold text-amber-200"> REACT </span>
          using
          <span className="font-orbitron"> TailwindCSS*</span>
        </p>
      </div>
    </>
  );
}

export default App;
