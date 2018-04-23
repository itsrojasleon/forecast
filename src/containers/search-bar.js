import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form className="form">
        <input
          className="input-search"
          type="text"
          placeholder="City"
        />
        <button
          type="submit"
          className="button-submit"
        >Submit
        </button>
      </form>
    );
  }
}
export default SearchBar;
