import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesWeather } from '../redux/weatherSlice';

const Weather = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const isDataFetched = useSelector((state) => state.weather.isDataFetched);
  const dispatch = useDispatch();
  console.log(cityData);

  useEffect(() => {
    if (isDataFetched === false) {
      dispatch(getCitiesWeather());
    }
  }, [dispatch, isDataFetched]);

  return (
    <div>
      <h1>Weather Component</h1>
      <p>Check the console for the log message.</p>
    </div>
  );
};

export default Weather;
