import React, { Component } from "react";

import ProductsService from "../../services/products.service";

import style from "./Catalog.module.css";

import Container from "../Container/Container";
import ProductsList from "../ProductsList/ProductsList";
import Sidebar from "../Sidebar/Sidebar";
import HeaderBig from "../Header/HeaderBig";

class Catalog extends Component {
  state = {
    products: ProductsService.getProducts(),
    searchText: ""
  };

  showByManufacture = manufactureName => {
    if (manufactureName === "All") {
      this.setState({
        products: ProductsService.getProducts()
      });
    } else {
      const productsFiltered = ProductsService.getFilteredProducts(
        "manufacture",
        manufactureName
      );
      this.setState({
        products: productsFiltered
      });
    }
  };

  filterProducts = searchText => {
    searchText = searchText.toLowerCase();
    const products = ProductsService.getProducts().filter(p =>
      p.name.toLowerCase().includes(searchText)
    );

    this.setState({
      products,
      searchText
    });
  };

  clearProducts = () => {
    this.setState({
      products: ProductsService.getProducts(),
      searchText: ""
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <HeaderBig>Catalog</HeaderBig>
        <div className={style.Catalog}>
          <div className={style.ColumnLeft}>
            <Sidebar
              onManufactureCheck={this.showByManufacture}
              onSearch={this.filterProducts}
              clearProducts={this.clearProducts}
              searchText={this.state.searchText}
              placeholder={"search..."}
            />
          </div>

          <div className={style.ColumnRight}>
            <ProductsList products={products} />
          </div>
        </div>
      </Container>
    );
  }
}
export default Catalog;
