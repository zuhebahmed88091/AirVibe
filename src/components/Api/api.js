import axios from 'axios';

const apiUniqueKey = '1d53f523936611daa637d368b71f28ca';
const getCities = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiUniqueKey}`);
  return response.data;
};

const getWeather = async (lat, lon) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiUniqueKey}`);
  return response.data;
};

export { getCities, getWeather };
