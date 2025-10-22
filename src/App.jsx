import React from "react";
import Navigation from "./navigation/Nav.jsx";
import Product from "./product/Product.jsx";
import Recommend from "./recommend/Recommend.jsx";
import "./index.css";
import SideBar from "./sildbar/SideBar.jsx";
import { useState } from "react";
import products from "./db/Date.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [SelectCategory, setSelectGatagory] = useState(null);
   const [SelectType, setSelectType] = useState("");
  // input search
  const [Query, setQuery] = useState("");

  

  //filter item ----------- search ----------------------

  const HandleinputQuery = (e) => {
    setQuery(e.target.value);
    setSelectType("");
    setSelectGatagory(null);
    // console.log(e.target.value);
  };
  const filteritem = products.filter((item) =>
    item.name.toLowerCase().includes(Query.toLowerCase())
  );
  //filter radio ----------- search ----------------------

  const handleChange = (e) => {
    setSelectGatagory(e.target.value);
    setSelectType("");
    setQuery("");
    
    // console.log(e.target.value);
  };
    const handleClick = (e) => {
    setSelectType(e.target.value);
    setQuery("");
    // console.log(e.target.value);
  };

  //filter button ----------- search ----------------------
  function filterdata(products, selected, query,btns) {
    let filterproduct = products;
    //filter input filterproduct
    if (query) {
      filterproduct = filteritem;
    }
    //select filter
    if (selected || btns ) {
      filterproduct = filterproduct.filter(
        ({ catagory, catprice , type}) => {if (btns==="") return catagory === selected || catprice === selected; 
         else { return btns === type}}
      );
    }
    // if (btns){
    //   filterproduct=filterproduct.filter ((item)=> item.type === btns)
    // }
    if (btns==="all"){
        return products.map(({ img, name, price, alt }) => (
      <Card
        key={Math.random}
        img={img}
        alt={alt}
        name={name}
        price={price}
      />
    ));
    
    }
    return filterproduct.map(({ img, name, price, alt }) => (
      <Card
        key={Math.random}
        img={img}
        alt={alt}
        name={name}
        price={price}
      />
    ));
    
  }
  const result = filterdata(products, SelectCategory, Query,SelectType);
  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation value={Query} input={HandleinputQuery} />
      <Recommend handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
