import React from 'react';
import { render } from '@testing-library/react';
import AqiDetailed from '../AqiDetailed';

describe('AqiDetailed', () => {
  it('render AqiDetailed Components', () => {
    const dummyData = {
      dataname: 'CO',
      data: '10',
    };
    render(<AqiDetailed {...dummyData} />);
    expect(AqiDetailed).toMatchSnapshot();
  });
});
