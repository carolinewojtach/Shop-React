import React from "react";

const RadioInput = ({ value }) => {
  return (
    <div>
      <input
        type="radio"
        name="manufacture"
        id={value}
        value={value}
        onClick={e => this.props.onCheck(e.target.value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default RadioInput;
