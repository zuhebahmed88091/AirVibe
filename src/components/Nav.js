import React from 'react';
import logo from './Assets/weather-app.png';
import continents from './Assets/continents.png';

const Nav = () => (
  <>
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <h1>AirVibe</h1>
    </nav>
    <header>
      <div className="map">
        <img src={continents} alt="Asia Map" />
      </div>
      <h1>Air Quality in Global Cities</h1>
    </header>
  </>

);

export default Nav;
