import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    return (
      <div key={name}>
        <span>
          <Chart temps={temps} color="orange" units="K" />
          <Chart temps={pressures} color="green" units="hPa" />
          <Chart temps={humidities} color="purple" units="%" />
        </span>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <span>City</span>
          <span>Temperature (K)</span>
          <span>Pressure (hPa)</span>
          <span>Humidity (%)</span>
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
