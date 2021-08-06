import React, { Component } from "react";
import Geolocation from "./Geolocation";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  handleSubmit(event) {
    // preventing from refreshing the page
    event.preventDefault();

    this.props.onFormSubmit();
  }

  render() {
    const searchValue = this.props.searchValue;

    return (
      <div className="location-and-date">
        <div>
          {searchValue !== undefined ? (
            <>
              <h1 className="location-and-date__location">{searchValue}</h1>
              <div>{new Date() + ""}</div>
            </>
          ) : (
            <Geolocation />
          )}
        </div>
        <div>
          <form className="form__group field" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form__field"
              placeholder="Search"
              name="searchBox"
              id="searchBox"
              value={searchValue}
              onChange={this.handleChange}
            />
            <label for="search" className="form__label">
              Search
            </label>

            <button type="submit" className="searchBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
