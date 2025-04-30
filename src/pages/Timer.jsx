import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current); // Cleanup on unmount or re-render
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 h-screen">
        <div className="flex-row bg-amber-300 text-white font-bold text-4xl h-40">
          <div>Time: {formatTime(seconds)}</div>
          <div>
            {!isActive && seconds === 0 && (
              <button
                className="text-white font-bold text-4xl"
                onClick={handleStart}
              >
                Start
              </button>
            )}
          </div>
          <div>
            {isActive && (
              <button className="mr-10 rounded-2xl" onClick={handlePause}>
                Pause
              </button>
            )}
            {(!isActive && seconds !== 0) || isActive ? (
              <button
                className="text-green-500 rounded-2xl bg-amber-600 font-bold text-4xl"
                onClick={handleReset}
              >
                <p>Reset</p>
              </button>
            ) : null}
            {!isActive && seconds !== 0 && (
              <button
                className="text-white font-bold text-4xl"
                onClick={handleStart}
              >
                Resume
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
