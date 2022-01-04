import React from "react";
import "./Product.css";
import ProductContent from "./ProductContent";
import { Link } from "react-router-dom";
import ProductList from "../../ProductList.json";

const Product = () => {
  return (
    <div className="product">
      <div className="product_header">
        <h1>Products Application</h1>
        <div className="product_header_link">
          <div className="product_header_search">
            <p>search</p>
            <input type="text" />
          </div>
          <h2>
            <Link to="/checkoutPage" className="innerSidebar_bottom_tab">
              <span>Go to shopping cart</span>
            </Link>
          </h2>
        </div>
      </div>
      <div className="product_body">
        {ProductList.arrayOfProducts.map((item, index) =>
          <ProductContent
            key={index}
            id={index}
            image={item.imgUrl}
            name={item.name}
            price={item.price}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
