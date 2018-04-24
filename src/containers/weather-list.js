import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <div className="weather" key={name}>
        <GoogleMap lon={lon} lat={lat} />
        <Chart temps={temps} color="orange" units="K" />
        <Chart temps={pressures} color="green" units="hPa" />
        <Chart temps={humidities} color="purple" units="%" />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="weather-list">
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
