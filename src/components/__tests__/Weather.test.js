import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Weather from '../Weather';

const customRender = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Weather', () => {
  it('render Weather Components', () => {
    customRender(<Weather />);
    expect(Weather).toMatchSnapshot();
  });
});
