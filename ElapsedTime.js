import React from "react";

const ElapsedTime = ({ cycles, elapsedTime }) => {
  const hours = Math.floor(elapsedTime / 60);
  const minutes = elapsedTime % 60;

  return (
    <div className="elapsed-time">
      {cycles === 0 ? (
        <p>
          Total Elapsed Time: {hours} hour(s) {minutes} minute(s)
        </p>
      ) : (
        <p>Total Elapsed Time: 0 hour(s) 0 minute(s)</p>
      )}
    </div>
  );
};

export default ElapsedTime;
