import React, { Component } from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";
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
        <div className="products">
          {desktopsFeatured.map(product => (
            <Product
              id={product.id}
              name={product.name}
              image={product.image}
              manufacture={product.manufacture}
              price={product.amount}
              category={product.category}
            />
          ))}
        </div>

        <h2 className="header-small">Tablets</h2>
        <div className="products">
          {tabletsFeatured.map(product => (
            <Product
              id={product.id}
              name={product.name}
              image={product.image}
              manufacture={product.manufacture}
              price={product.amount}
              category={product.category}
            />
          ))}
        </div>
      </Container>
    );
  }
}
export default Homepage;
