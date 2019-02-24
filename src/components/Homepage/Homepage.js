import React, { Component } from "react";

import ProductsService from "../../services/products.service";

import Container from "../Container/Container";
import ProductsList from "../ProductsList/ProductsList";
import HeaderBig from "../Header/HeaderBig";
import HeaderSmall from "../Header/HeaderBig";

class Homepage extends Component {
  render() {
    const desktopsFeatured = ProductsService.getFilteredProducts(
      "category",
      "desktop"
    ).filter(product => product.featured === true);

    const tabletsFeatured = ProductsService.getFilteredProducts(
      "category",
      "tablet"
    ).filter(product => product.featured === true);

    return (
      <Container>
        <HeaderBig>Welcome to our store</HeaderBig>

        <HeaderSmall>Desktops</HeaderSmall>
        <ProductsList products={desktopsFeatured} />

        <HeaderSmall>Tablets</HeaderSmall>
        <ProductsList products={tabletsFeatured} />
      </Container>
    );
  }
}
export default Homepage;
