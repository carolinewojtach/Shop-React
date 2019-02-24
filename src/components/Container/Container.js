import React from "react";

import style from "./Container.module.css";

import PropTypes from "prop-types";

const Container = props => {
  return <div className={style.Container}>{props.children}</div>;
};
export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired
};
