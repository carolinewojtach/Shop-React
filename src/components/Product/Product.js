import React, { Component } from "react";

class Product extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div className="product">
        <img src={image} alt="Apple iMac 27 Retina" />
        <p>{price}</p>
        <h3>{name}</h3>
      </div>
    );
  }
}
export default Product;
