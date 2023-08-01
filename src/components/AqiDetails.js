const AqiDetails = (cityId, cityData) => {
  const cityArr = cityData.filter((city) => city.id === cityId);
  if (cityArr.length > 0) {
    const components = Object.values(cityArr[0].data.components);
    const newComponents = [
      { dataname: 'Carbon monoxide(CO)', data: '' },
      { dataname: 'Nitrogen monoxide(NO)', data: '' },
      { dataname: 'Nitrogen dioxide(NO₂)', data: '' },
      { dataname: 'Ozone(O₃)', data: '' },
      { dataname: 'Sulphur dioxide(SO₂)', data: '' },
      { dataname: 'Fine particles matter(PM₂.₅)', data: '' },
      { dataname: 'Coarse particulate matter(PM₁₀)', data: '' },
      { dataname: 'Ammonia(NH₃)', data: '' },
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
