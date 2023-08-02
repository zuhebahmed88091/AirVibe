import React from 'react';
import PropTypes from 'prop-types';
import logo from './Assets/weather-app.png';
import continents from './Assets/continents.png';
import Filter from './Filter';

const Nav = ({ handleFilterChange }) => (
  <header>
    <nav className="navbar flex">
      <img className="logo" src={logo} alt="logo" />
      <h1>AirVibe</h1>
      <Filter handleFilterChange={handleFilterChange} />
    </nav>
    <div className="map-header flex">
      <div className="map">
        <img src={continents} alt="Asia Map" />
      </div>
      <h2>Air Quality in Global Cities</h2>
    </div>
  </header>
);

Nav.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Nav;
