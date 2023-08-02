import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import aqiDetails from './AqiDetails';
import AqiDetailed from './AqiDetailed';
import './styles/WeatherDetails.css';

const WeatherDetails = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const { id } = useParams();
  const selectedCityData = cityData.find((city) => city.id === id);
  const cityName = selectedCityData ? selectedCityData.city : '';
  const aqi = aqiDetails(id, cityData);
  return (
    <article className="air-details">
      <nav className="air-details-nav">
        <Link to="/">
          <h1 className="back">&#60;</h1>
        </Link>
        <h2>{cityName}</h2>
      </nav>
      <header className="intro">
        <h2>Air components concentrations</h2>
      </header>
      <section className="conc-header">Concentration in μg/m3</section>
      <section className="conc-data">
        {aqi.map((component) => (
          <AqiDetailed
            key={component.dataname}
            dataname={component.dataname}
            data={component.data}
          />
        ))}
      </section>
    </article>
  );
};

export default WeatherDetails;
