import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);
    return (
      <div key={name}>
        <span>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
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
