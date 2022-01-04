import React from "react";
import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import ProductList from "../../ProductList.json";
import axios from "axios";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  let cartData = JSON.parse(window.localStorage.getItem("jsonData"));
  let totalPrice = 0;
  for (let key in cartData.prod) {
    totalPrice +=
      ProductList.arrayOfProducts[key]["price"] * cartData.prod[key];
  }
  let final_list = [];
  for(let key in cartData.prod){
    let obj = {}
    obj["name"] = ProductList.arrayOfProducts[key]["name"]
    obj["quantity"] = cartData.prod[key]
    obj["price"] = cartData.prod[key]*ProductList.arrayOfProducts[key]["price"]
    final_list.push(obj)
  }
  const submitCartHandler = (totalPrice) => {
    axios({
      method: "post",
      url: "https://janam.free.beeceptor.com",
      data: {
        "totalPrice": { totalPrice },
        "products": final_list
      }
    });
  };

  return (
    <div>
      <div>
        <h1>Checkout Page</h1>
        <div>
          <h2>
            <Link to="/" className="">
              <span>go back</span>
            </Link>
          </h2>
        </div>
      </div>
      <div>
        <div className="product_body">
          {Object.keys(cartData.prod).map((key, index) =>
            <CartContent
              key={index}
              image={ProductList.arrayOfProducts[key]["imgUrl"]}
              name={ProductList.arrayOfProducts[key]["name"]}
              price={ProductList.arrayOfProducts[key]["price"]}
              count={cartData.prod[key]}
            />
          )}
        </div>
        <h1>
          Total : {totalPrice}
        </h1>
        <button className="checkout_button" onClick={() => submitCartHandler(totalPrice)}>
          Checkout cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
