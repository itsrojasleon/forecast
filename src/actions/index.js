import 'whatwg-fetch';

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const BASE_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city) => {
  const url = `${BASE_URL}&q=${city},us`;
  const request = await fetch(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
