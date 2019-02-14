import React, { Component } from "react";
import RadioInput from "../RadioInput/RadioInput";
import ProductsService from "../../services/products.service";

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
          <div className="filter-header">
            <h4>Search</h4>
            <div onClick={this.props.clearProducts} className="clear">
              Clear
            </div>
          </div>
          <div>
            <input
              type="text"
              value={this.props.searchText}
              placeholder={this.props.placeholder}
              onChange={this.handleSearchInput}
            />
          </div>
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
