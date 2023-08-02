import React from 'react';
import { render } from '@testing-library/react';
import Cities from '../Cities';

describe('Cities', () => {
  it('render Cities Components', () => {
    const dummyData = {
      city: 'London',
      aqi: 1,
    };
    render(<Cities {...dummyData} />);
    expect(Cities).toMatchSnapshot();
  });
});
