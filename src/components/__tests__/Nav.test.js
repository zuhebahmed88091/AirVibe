import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Nav from '../Nav';

const customRender = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Nav', () => {
  it('render Nav Components', () => {
    customRender(<Nav />);
    expect(Nav).toMatchSnapshot();
  });
});
