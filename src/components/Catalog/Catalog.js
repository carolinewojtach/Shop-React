import React, { Component } from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import ProductsService from "../../services/products.service";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsService.getProducts()
    };
  }

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

  filterSearched = value => {
    console.log(value);
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h1 className="header-big">Catalog</h1>
        <div className="catalog">
          <Sidebar
            onCheck={this.showByManufacture}
            onSearch={this.filterSearched}
          />

          <div className="column-right">
            <div className="products">
              {products.map(product => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  manufacture={product.manufacture}
                  price={product.amount}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Catalog;
