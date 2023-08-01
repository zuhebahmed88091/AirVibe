const AqiDetails = (cityId, cityData) => {
  const cityArr = cityData.filter((city) => city.id === cityId);
  if (cityArr.length > 0) {
    const components = Object.values(cityArr[0].data.components);
    const newComponents = [
      { dataname: 'CO', data: '' },
      { dataname: 'NO', data: '' },
      { dataname: 'NO₂', data: '' },
      { dataname: 'O₃', data: '' },
      { dataname: 'SO₂', data: '' },
      { dataname: 'PM₂.₅', data: '' },
      { dataname: 'PM₁₀', data: '' },
      { dataname: 'NH₃', data: '' },
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
