const AqiDetails = (cityId, cityData) => {
  const cityArr = cityData.filter((city) => city.id === cityId);
  if (cityArr.length > 0) {
    const components = Object.values(cityArr[0].data.components);
    const newComponents = [
      { dataname: 'CO', data: '' },
      { dataname: 'NO', data: '' },
      { dataname: 'NO<sub>2</sub>', data: '' },
      { dataname: 'O<sub>3</sub>', data: '' },
      { dataname: 'SO<sub>2</sub>', data: '' },
      { dataname: 'PM<sub>2.5</sub>', data: '' },
      { dataname: 'PM<sub>10</sub>', data: '' },
      { dataname: 'NH<sub>3</sub>', data: '' },
    ];
    const updatedComponents = newComponents.map((component, index) => ({
      ...component,
      data: components[index],
    }));
    return updatedComponents;
  }
  return [];
};

export default AqiDetails;
