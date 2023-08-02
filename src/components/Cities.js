import PropTypes from 'prop-types';
// import arrow from './Assets/arrowRight.svg';

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
  const statusClassName = weatherStatus.toLowerCase().replace(' ', '-');
  return (
    <div className="cities-weather">
      <h2>{city}</h2>
      <div className="air-quality">
        <span className="quality">Quality of air:</span>
        <span className={statusClassName}>{weatherStatus}</span>
      </div>
      <div className="quality-index">
        <span className="quality-index-header">Quality index:</span>
        <span className={statusClassName}>{aqi}</span>
      </div>
    </div>
  );
};
Cities.propTypes = {
  city: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};
export default Cities;
