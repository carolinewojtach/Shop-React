import React from "react";

import PropTypes from "prop-types";

import style from "./Product.module.css";

const Product = ({ name, image, price }) => {
  return (
    <div className={style.Product}>
      <img className={style.Image} src={image} alt={name} />
      <p className={style.Price}>${price}</p>
      <h3>{name}</h3>
    </div>
  );
};
export default Product;

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired
};
