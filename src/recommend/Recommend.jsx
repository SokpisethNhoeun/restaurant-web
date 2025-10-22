import React from "react";
import "./Recommend.css";
import product from "../db/Date";
import Card from "../components/Card";
import Button from "../components/Button";

function Recommend({ handleClick }) {
  return (
    <>
      <div className="recomment-container">
        <div className="recomment-btns">
          <h1>recommended</h1>
          <div className="btns-display">
          <Button handleClickhander={handleClick} value="all" title="All product" />
          <Button handleClickhander={handleClick} value="rice" title="Rice" />
          <Button
            handleClickhander={handleClick}
            value="noodle"
            title="Noodle"
          />
          <Button
            handleClickhander={handleClick}
            value="seafood"
            title="Seafood"
          />
          <Button handleClickhander={handleClick} value="soup" title="Soup" />
          <Button
            handleClickhander={handleClick}
            value="vegetable"
            title="Vegetable"
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recommend;
