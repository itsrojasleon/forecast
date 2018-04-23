import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const { name } = cityData.city;
    return (
      <div key={name}>{name}</div>
    );
  }
  render() {
    console.log(this.props.weather);
    return (
      <div>
        <div>
          <span>City</span>
          <span>Temperature</span>
          <span>Pressure</span>
          <span>Humidity</span>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ weather }) {
  return {
    weather,
  };
}
export default connect(mapStateToProps)(WeatherList);
