import React from "react";
import "./SideBar.css";
import Category from "./catagory/Catagory";
import Price from "./price/Price";
import { GiFishingBoat } from "react-icons/gi";
import Social from './Social'
function SideBar({handleChange}) {
  
  return (
    <>
      <div className="s-container">
        <div className="sidebar-container">
          <div className="logo">
            <GiFishingBoat style={{ fontSize: "3rem" }} /> <h2>HappyBoat</h2>
          </div>
          <div className="hid">
            {" "}
          <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
          
          </div>
          <br /><br />
          <h3>Contact me: <hr /></h3><br />
          <Social />
        </div>
      </div>
    </>
  );
}

export default SideBar;
