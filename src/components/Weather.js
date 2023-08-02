import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesWeather } from '../redux/weatherSlice';
import Nav from './Nav';
import Cities from './Cities';
import './styles/Weather.css';
import arrow from './Assets/arrowRight.svg';

const Weather = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const isDataFetched = useSelector((state) => state.weather.isDataFetched);
  const dispatch = useDispatch();

  const [filteredCities, setFilteredCities] = useState(cityData);
  /* eslint-disable max-len */
  const handleFilterChange = (filterText) => {
    const filtered = cityData.filter((city) => city.city.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredCities(filtered);
  };

  useEffect(() => {
    if (isDataFetched === false) {
      dispatch(getCitiesWeather());
    }
  }, [dispatch, isDataFetched]);

  useEffect(() => {
    setFilteredCities(cityData);
  }, [cityData]);

  return (
    <div id="main-wrap">
      <Nav handleFilterChange={handleFilterChange} />
      <section className="cities">
        {filteredCities.map((city) => (
          <Link to={`city/${city.id}`} key={city.id}>
            <div className="arrow-img"><img className="arrow" src={arrow} alt="arrow" /></div>
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
