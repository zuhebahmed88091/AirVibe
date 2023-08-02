import AqiDetails from '../AqiDetails';

describe('AqiDetails', () => {
  it('should return updated components for valid cityId', () => {
    const cityId = '54ae52b2-122f-4f43-9a30-1cee1f4b0867';
    const cityData = [
      {
        id: '54ae52b2-122f-4f43-9a30-1cee1f4b0867',
        data: {
          components: {
            CO: '1',
            NO: '2',
            NO2: '3',
            O3: '4',
            SO2: '5',
            'PM2.5': '6',
            PM10: '7',
            NH3: '8',
          },
        },
      },
    ];

    const updatedComponents = AqiDetails(cityId, cityData);

    const expectedComponents = [
      { dataname: 'CO', data: '1' },
      { dataname: 'NO', data: '2' },
      { dataname: 'NO<sub>2</sub>', data: '3' },
      { dataname: 'O<sub>3</sub>', data: '4' },
      { dataname: 'SO<sub>2</sub>', data: '5' },
      { dataname: 'PM<sub>2.5</sub>', data: '6' },
      { dataname: 'PM<sub>10</sub>', data: '7' },
      { dataname: 'NH<sub>3</sub>', data: '8' },
    ];

    expect(updatedComponents).toEqual(expectedComponents);
  });

  it('should return an empty array for invalid cityId', () => {
    const cityId = 'invalidCityId';
    const cityData = [
      {
        id: 'exampleCityId',
        data: {
          components: {
            CO: '1',
            NO: '2',
          },
        },
      },
    ];

    const updatedComponents = AqiDetails(cityId, cityData);
    expect(updatedComponents).toEqual([]);
  });
});
