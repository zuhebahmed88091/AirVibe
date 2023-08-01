import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import AqiDetails from './AqiDetails';
import AqiDetailed from './AqiDetailed';

const WeatherDetails = () => {
  const cityData = useSelector((state) => state.weather.dataOfCities);
  const { id } = useParams();
  const Aqi = AqiDetails(id, cityData);
  return (
    <article className="air-details">
      <nav className="air-details-nav">
        <Link to="/">
          <button className="back" type="button">Back</button>
        </Link>
      </nav>
      <header className="city-name">
        <h2>{cityData[0].city}</h2>
      </header>
      <header className="intro">
        <h2>Air components concentrations</h2>
      </header>
      <section className="conc-header">Concentration in μg/m3</section>
      <section className="conc-data">
        {Aqi.map((component) => (
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
