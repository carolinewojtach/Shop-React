import React from "react";
import PropTypes from "prop-types";

const Search = props => {
  return (
    <div>
      <div className="filter-header">
        <h4>Search</h4>
        <div onClick={props.clearProducts} className="clear">
          Clear
        </div>
      </div>
      <div>
        <input
          type="text"
          value={props.searchText}
          placeholder={props.placeholder}
          onChange={props.handleSearchInput}
        />
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  searchText: PropTypes.string,
  onClear: PropTypes.func,
  handleSearchInput: PropTypes.func
};
