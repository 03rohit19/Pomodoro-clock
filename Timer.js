import React, { useEffect } from "react";

const Timer = ({ workMin, workSec, breakMin, breakSec }) => {
  useEffect(() => {
    if (workMin === 0 && workSec === 0) {
      let timer = setInterval(() => {}, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [workMin, workSec]);

  return (
    <div className="timer">
      <div className="circle">
        <h2 className="work">
          {workMin}:{workSec < 10 ? "0" + workSec : workSec}
        </h2>
      </div>
      <div className="rectangle">
        <h2 className="break">
          {breakMin}:{breakSec < 10 ? "0" + breakSec : breakSec}
        </h2>
      </div>
    </div>
  );
};

export default Timer;
