import React from "react";

const Label = ({ cycles, onChange }) => {
  return (
    <div className="label">
      <label>
        Cycle Limit:{" "}
        <input type="number" value={cycles} min="1" onChange={onChange} />
      </label>
    </div>
  );
};

export default Label;
