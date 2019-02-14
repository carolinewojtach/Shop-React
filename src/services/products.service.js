import products from "../products";
import _ from "lodash";

class ProductsService {
  static getProducts() {
    return products;
  }
  static getManufacturers() {
    const manufacturers = products.map(product => product.manufacture);
    return _.uniq(manufacturers);
  }

  static getFilteredProducts(property, value) {
    return products.filter(product => product[property] === value);
  }
}
export default ProductsService;
