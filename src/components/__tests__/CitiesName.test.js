import React from 'react';
import { render } from '@testing-library/react';
import Cities from '../Cities';

describe('Cities - City Name', () => {
  it('should display the correct city name', () => {
    const cityName = 'Madrid';
    const { getByText } = render(<Cities city={cityName} aqi={1} />);
    const cityElement = getByText(cityName);

    expect(cityElement).toBeTruthy();
  });

  it('should display null for invalid city', () => {
    const invalidCityName = 'Dhaka';
    const { queryByText } = render(<Cities city={invalidCityName} aqi={1} />);
    const notFoundMessage = queryByText(/City not found/i);

    expect(notFoundMessage).toBeNull();
  });
});
