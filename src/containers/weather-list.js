import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const color = randomColor();
    console.log(temps);
    return (
      <div key={name}>
        <span>
          <Chart temps={temps} color={color} />
        </span>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <span>City</span>
          <span>Temperature</span>
          <span>Pressure</span>
          <span>Humidity</span>
        </div>
        <div>
          {this.props.weather.map(this.renderWeather)}
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
