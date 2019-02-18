import React, { Component } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products">
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            manufacture={product.manufacture}
            price={product.amount}
            category={product.category}
          />
        ))}
      </div>
    );
  }
}
export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array
};
