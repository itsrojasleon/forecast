import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState(() => ({ term }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          onChange={this.onInputChange}
          className="input-search"
          type="text"
          placeholder="Get a five-day forecast in your favorite cities."
          value={this.state.term}
        />
        <button
          type="submit"
          className="button-submit">
          Submit
        </button>
      </form>
    );
  }
}
export default SearchBar;