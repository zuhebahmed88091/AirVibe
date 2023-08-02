import React from 'react';
import { render } from '@testing-library/react';
import Cities from '../Cities';

describe('Cities', () => {
  it('should render Cities component', () => {
    const city = 'London';
    const aqi = 1;
    render(<Cities city={city} aqi={aqi} />);
    expect(Cities).toMatchSnapshot();
  });
});
