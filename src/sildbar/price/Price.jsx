import React from "react";
import "./Price.css";
import Input from "../../components/input";
function Price({ handleChange }) {
  return (
    <>
      <h2 className="text">Price</h2>
      <div className="price1">
        <Input
          handleChange={handleChange}
          value="-3"
          name="catagory"
          catagory="$0.00 - $3"
        />
        <Input
          handleChange={handleChange}
          value="3+"
          name="catagory"
          catagory="$3-$6"
        />
        <Input
          handleChange={handleChange}
          value="6+"
          name="catagory"
          catagory="$6++"
        />
      </div>
    </>
  );
}

export default Price;
