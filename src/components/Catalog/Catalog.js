import React, { Component } from "react";
import Container from "../Container/Container";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import ProductsService from "../../services/products.service";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsService.getProducts(),
      placeholder: "search...",
      searchText: ""
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

  filterProducts = searchText => {
    searchText = searchText.toLowerCase();
    const products = ProductsService.getProducts().filter(p =>
      p.name.toLowerCase().includes(searchText)
    );

    this.setState({
      products,
      searchText
    });
    console.log("searchText: " + this.state.searchText);
  };

  clearProducts = () => {
    this.setState({
      products: ProductsService.getProducts(),
      placeholder: "search...",
      searchText: ""
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <h1 className="header-big">Catalog</h1>
        <div className="catalog">
          <Sidebar
            onManufactureCheck={elemChecked =>
              this.showByManufacture(elemChecked)
            }
            onSearch={this.filterProducts}
            clearProducts={this.clearProducts}
            searchText={this.state.searchText}
            placeholder={this.state.placeholder}
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
