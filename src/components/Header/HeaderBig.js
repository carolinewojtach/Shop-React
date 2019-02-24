import React from "react";

import style from "./Header.module.css";

import PropTypes from "prop-types";

const HeaderBig = props => {
  return <h1 className={style.HeaderBig}>{props.children}</h1>;
};
export default HeaderBig;

HeaderBig.propTypes = {
  children: PropTypes.node.isRequired
};
