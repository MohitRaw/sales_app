import React from "react";

const CartContent = ({image, price, name ,count}) => {
  return (
    <div className="productContent">
      <div className="productContent_row">
        <div className="productContent_image">
          <img src={image} alt="ProductImage" className="prodImage" />
        </div>
        <div className="productContent_details">
          <h3>
            name: {name}
          </h3>
          <h3>
            price: {price}
          </h3>
          <h4>no. of items :{count}</h4>
        </div>
      </div>

      {/* <div>
          <h4>
              total cost : {}
          </h4>
      </div> */}
    </div>
  );
}; 

export default CartContent;
