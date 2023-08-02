import React from 'react';
import PropTypes from 'prop-types';
import logo from './Assets/weather-app.png';
import continents from './Assets/continents.png';
import Filter from './Filter';

const Nav = ({ handleFilterChange }) => (
  <>
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>AirVibe</h1>
      <Filter handleFilterChange={handleFilterChange} />
    </nav>
    <header className="map-header">
      <div className="map">
        <img src={continents} alt="Asia Map" />
      </div>
      <h1>Air Quality in Global Cities</h1>
    </header>
  </>
);

Nav.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Nav;
