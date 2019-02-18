import React, { Component } from "react";
import Container from "../Container/Container";
import ProductsList from "../ProductsList/ProductsList";
import ProductsService from "../../services/products.service";

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
        <h1 className="header-big">Welcome to our store</h1>

        <h2 className="header-small">Desktops</h2>
        <ProductsList products={desktopsFeatured} />

        <h2 className="header-small">Tablets</h2>
        <ProductsList products={tabletsFeatured} />
      </Container>
    );
  }
}
export default Homepage;
