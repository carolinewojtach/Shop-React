import React, { Component } from "react";
import RadioInput from "../RadioInput/RadioInput";

import ProductsService from "../../services/products.service";
import PropTypes from "prop-types";
import Search from "../Search/Search";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.manufacturers = ["All", ...ProductsService.getManufacturers()];
  }

  handleSearchInput = event => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div className="column-left">
        <div className="filter">
          <Search
            clearProducts={this.props.clearProducts}
            searchText={this.props.searchText}
            placeholder={this.props.placeholder}
            handleSearchInput={this.handleSearchInput}
          />

          <h4>Manufacturer</h4>
          <div>
            {this.manufacturers.map(manufacturer => (
              <RadioInput
                key={manufacturer}
                id={manufacturer}
                value={manufacturer}
                onManufactureCheck={elemChecked =>
                  this.props.onManufactureCheck(elemChecked)
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;

Sidebar.propTypes = {
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  clearProducts: PropTypes.func,
  onManufactureCheck: PropTypes.func
};
