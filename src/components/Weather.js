import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesWeather } from '../redux/weatherSlice';
import Nav from './Nav';
import Cities from './Cities';
import './styles/Weather.css';

const Weather = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const isDataFetched = useSelector((state) => state.weather.isDataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDataFetched === false) {
      dispatch(getCitiesWeather());
    }
  }, [dispatch, isDataFetched]);

  return (
    <div id="main-wrap">
      <Nav />
      <section className="cities">
        {cityData.map((city) => (
          <Link to={`city/${city.id}`} key={city.id}>
            <Cities
              city={city.city}
              aqi={city.data.main.aqi}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Weather;
