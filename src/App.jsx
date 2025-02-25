import { useState } from "react";
import { SiAmazongames } from "react-icons/si";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-black">
        <div className="container mx-auto px-4 py-3 font-small ">
          <ul className="flex justify-center space-x-6 text-white text-2xl">
            <List title="About" link="#" />
            <List title="Let us Play" link="/letusplay" />
            <List title="Contact" link="#" />
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <p className="text-white text-7xl text-center font-roboto">
          welcome to
          <span className="font-doto font-bold text-amber-200"> REACT </span>
          using
          <span className="font-orbitron"> TailwindCSS</span>
        </p>
      </div>
    </>
  );
}

export default App;
