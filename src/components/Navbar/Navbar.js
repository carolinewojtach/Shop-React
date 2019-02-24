import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container/Container";

import style from "./Navbar.module.css";

const Navbar = () => (
  <nav className={style.Navbar}>
    <Container>
      <ul className={style.Nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Container>
  </nav>
);
export default Navbar;
