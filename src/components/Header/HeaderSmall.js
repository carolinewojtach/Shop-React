import React from "react";

import style from "./Header.module.css";

import PropTypes from "prop-types";

const HeaderSmall = props => {
  return <h2 className={style.HeaderSmall}>{props.children}</h2>;
};
export default HeaderSmall;

HeaderSmall.propTypes = {
  children: PropTypes.node.isRequired
};
