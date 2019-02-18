import React, { Component } from "react";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div className="product">
        <img src={image} alt={name} />
        <p>{price}</p>
        <h3>{name}</h3>
      </div>
    );
  }
}
export default Product;

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
};
