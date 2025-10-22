import React from "react";
import "./Product.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
import Card from "../components/Card";
import data from "../db/Date";
function Product({result}) {
  return (
    <>
      <div className="Product-container">
        <div className="pro-container">
          {/* {
            data.map((item) => 
             <Card key={Math.random()} {...item} />) 
          } */}
          
          {result}
          
        
        
        </div>
      </div>
    </>
  );
}

export default Product;
