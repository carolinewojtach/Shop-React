import React, { Component } from "react";
import RadioInput from "../RadioInput/RadioInput";
import ProductsService from "../../services/products.service";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.manufacturers = ["All", ...ProductsService.getManufacturers()];
  }

  handleSearchInput = event => {
    console.log(this.manufacturers);
    this.props.filterSearched(event.target.value);
  };

  render() {
    return (
      <div className="column-left">
        <div className="filter">
          <div className="filter-header">
            <h4>Search</h4>
            {/* 
            <a href="#" className="clear">
              Clear
            </a> */}
          </div>
          <div>
            <input
              type="text"
              placeholder="search..."
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
                onCheck={e => this.props.onCheck(e.target.value)}
              />
            ))}

            {/* <div>
              <input
                type="radio"
                name="manufacture"
                id="All"
                value="All"
                defaultChecked
                onClick={e => this.props.onCheck(e.target.value)}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="manufacture"
                id="apple"
                value="Apple"
                onClick={e => this.props.onCheck(e.target.value)}
              />
              <label htmlFor="apple">Apple</label>
            </div>
            <div>
              <input
                type="radio"
                name="manufacture"
                id="dell"
                value="Dell"
                onClick={e => this.props.onCheck(e.target.value)}
              /> */}
            {/* <label htmlFor="dell">Dell</label>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Sidebar;
