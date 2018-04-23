import 'whatwg-fetch';

const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?&q=${city}&type=accurate&appid=${API_KEY}&cnt=5`);
  const request = await response.json();
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
