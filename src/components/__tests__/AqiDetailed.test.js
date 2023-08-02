import React from 'react';
import { render } from '@testing-library/react';
import AqiDetailed from '../AqiDetailed';

describe('AqiDetailed', () => {
  it('should render AqiDetailed component', () => {
    const dataname = 'CO';
    const data = '1';
    render(<AqiDetailed dataname={dataname} data={data} />);
    expect(AqiDetailed).toMatchSnapshot();
  });
});
