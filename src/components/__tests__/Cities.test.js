import React from 'react';
import { render } from '@testing-library/react';
import Cities from '../Cities';

describe('statusClassName', () => {
  it('should return "good" class for AQI 1', () => {
    const { getByText } = render(<Cities city="London" aqi={1} />);
    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;

    expect(qualityClass.className).toContain('good');
  });

  it('should return "fair" class for AQI 2', () => {
    const { getByText } = render(<Cities city="New York" aqi={2} />);
    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;

    expect(qualityClass.className).toContain('fair');
  });

  it('should return "moderate" class for AQI 3', () => {
    const { getByText } = render(<Cities city="Tokyo" aqi={3} />);
    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;

    expect(qualityClass.className).toContain('moderate');
  });

  it('should return "poor" class for AQI 4', () => {
    const { getByText } = render(<Cities city="Prague" aqi={4} />);
    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;

    expect(qualityClass.className).toContain('poor');
  });

  it('should return "very-poor" class for AQI 5', () => {
    const { getByText } = render(<Cities city="Berlin" aqi={5} />);
    const weatherStatus = getByText(/Quality of air/i);
    const qualityClass = weatherStatus.nextSibling;

    expect(qualityClass.className).toContain('very-poor');
  });
});
