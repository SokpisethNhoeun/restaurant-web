import React from "react";
import "./Catagory.css";
import Input from "../../components/input";
function Catagory({handleChange}) {
 
  return (
    <>
      <h2 className="text">Catagory</h2>
      <div className="cata">
        <Input
          handleChange={handleChange}
          value="Fried"
          name="catagory"
          catagory="Fried"
          
        />
        <Input
          handleChange={handleChange}
          value="Deep-Fried"
          name="catagory"
          catagory="Deep-Fried"
        />
        <Input
          handleChange={handleChange}
          value="soup"
          name="catagory"
          catagory="Soup"
        />
        <Input
          handleChange={handleChange}
          value="Boiled"
          name="catagory"
          catagory="Boiled"
        />

      
      
      </div>
       
      
    </>
  );
}

export default Catagory;
