import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timer = null;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="timer">
      <h1 className="timer__title">Match as Fast as You Can</h1>
      <div className="timer__buttons">
      {isRunning ? (
        <button
          className="timer__button-stop"
          onClick={() => setIsRunning(false)}
        >
          Quit
        </button>
      ) : (
        <button
          className="timer__button-start"
          onClick={() => setIsRunning(true)}
        >
          Start Match
        </button>
      )}

      <h1 className="timer__counter">{seconds}</h1>
      </div>
    </div>
  );
}

export default Timer;
