import React from "react";

const Buttons = ({
  onStart,
  onPause,
  onReset,
  onIncreaseWorkTime,
  onDecreaseWorkTime,
}) => {
  return (
    <div className="button-group">
      <div>
        <button className="button" onClick={onStart}>
          Start
        </button>
        <button className="button" onClick={onPause}>
          Pause
        </button>
        <button className="button" onClick={onReset}>
          Reset
        </button>
      </div>

      <div className="button-timer">
        <button className="button" onClick={onIncreaseWorkTime}>
          Forward time
        </button>
        <button className="button" onClick={onDecreaseWorkTime}>
          Backward time
        </button>
      </div>
    </div>
  );
};

export default Buttons;
