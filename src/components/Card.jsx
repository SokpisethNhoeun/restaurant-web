import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";
function Card(props) {
  const {img,alt,name,price,} = props;
  return (
    <div>
       <div className="card-container">
                  <img
                    src={img}
                    alt={alt}
                  />
                  <h2>{name}</h2>
                  <div className="reviews">
                    <div className="star container">
                      <MdOutlineStarPurple500 style={{ color: "gold" }} />
                      <MdOutlineStarPurple500 style={{ color: "gold" }} />
                      <MdOutlineStarPurple500 style={{ color: "gold" }} />
                      <MdOutlineStarPurple500 style={{ color: "gold" }} />
                      <MdOutlineStarOutline style={{ color: "black" }} />
                    </div>
                    <p>Total Reviews (0)</p>
                  </div>
                  <div className="price">
                    <p>Price : {price}$</p>
                    <button className="btns">    <RiShoppingCartFill /></button>
                  </div>
                </div>
    </div>
  )
}

export default Card
