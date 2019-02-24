import React from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import style from "./ProductList.module.css";

const ProductsList = ({ products }) => {
  return (
    <div className={style.Products}>
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
};
export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
};
