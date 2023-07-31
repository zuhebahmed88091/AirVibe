import PropTypes from 'prop-types';

const Cities = ({ city, aqi }) => {
  let weatherStatus = '';

  if (aqi === 1) {
    weatherStatus = 'Good';
  } else if (aqi === 2) {
    weatherStatus = 'Fair';
  } else if (aqi === 3) {
    weatherStatus = 'Moderate';
  } else if (aqi === 4) {
    weatherStatus = 'Poor';
  } else if (aqi === 5) {
    weatherStatus = 'Very Poor';
  }

  return (
    <div className="cities-weather">
      <h2>{city}</h2>
      <div className="air-quality">
        <span>Quality of air:</span>
        <span>{weatherStatus}</span>
      </div>
      <div className="quality-index">
        <span>Quality index:</span>
        <span>{aqi}</span>
      </div>
    </div>
  );
};
Cities.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};
export default Cities;
