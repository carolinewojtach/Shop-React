import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ id, value, onManufactureCheck }) => {
  return (
    <div>
      <input
        type="radio"
        name="manufacture"
        id={id}
        value={value}
        onClick={e => onManufactureCheck(e.target.value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

export default RadioInput;

RadioInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onManufactureCheck: PropTypes.func
};
