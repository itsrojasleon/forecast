import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  state = {
    term: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
