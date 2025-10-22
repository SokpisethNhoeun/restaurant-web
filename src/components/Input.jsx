import React from "react";

function Input({ handleChange, name, catagory, value }) {
  return (
    <div>
      <label className="label">
        <input
          type="radio"
          name={name}
          value={value}
      
          onChange={handleChange}
        />
        {catagory}
      </label>
    </div>
  );
}

export default Input;
