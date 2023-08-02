import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WeatherDetails from '../WeatherDetails';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('renders the WeatherDetails component', () => {
  useSelector.mockReturnValue([]);
  render(
    <Router>
      <WeatherDetails />
    </Router>,
  );
});
