import React, { Component } from 'react';
import SearchBar from './search-bar';
import WeatherList from './weather-list';
import Title from '../components/title';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Title />
        <WeatherList />
      </div>
    );
  }
}
export default App;
