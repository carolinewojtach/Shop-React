import React from "react";

import styles from "./Footer.module.css";

import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <p>
          Shop © 2020 <br /> Designed by K.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
