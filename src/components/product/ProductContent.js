import React from "react";
import "./ProductContent.css";

window.localStorage.setItem("jsonData", JSON.stringify({"count":0,"prod":{}}));

const ProductContent = ({image, price, name ,id}) => {


  const addToCartHandler = (id) => {
    let dt = JSON.parse(window.localStorage.getItem("jsonData"));
    console.log(id)
    dt["count"]++;
    if (dt["prod"][id]===undefined){
      dt["prod"][id] = 1;
    }
    else {
      dt["prod"][id]++;
    }
    window.localStorage.setItem("jsonData", JSON.stringify(dt));
  }

  return (
    <div className="productContent">
      <div className="productContent_row">
        <div className="productContent_image">
          <img src={image} alt="ProductImage" className="prodImage" />
        </div>
        <div  className="productContent_details">
          <h3>name: {name}</h3>
          <h3>price: {price}</h3>
          <button className="addButton" onClick={() => addToCartHandler(id)}>+add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;