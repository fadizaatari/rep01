import { useState } from "react";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow-md z-50">
        <div className="container mx-auto px-4 py-3 font-small ">
          <ul className="flex justify-center space-x-6 text-white text-2xl">
            <li>
              <a
                href="#"
                className="font-roboto hover:shadow-white hover:shadow-2xs"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-roboto hover:shadow-white hover:shadow-2xs"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-roboto hover:shadow-white hover:shadow-2xs"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <p className="text-white text-7xl text-center font-roboto">
          welcome to <span className="font-bold text-amber-200">REACT</span>{" "}
          using TailwindCSS
        </p>
      </div>
    </>
  );
}

export default App;
