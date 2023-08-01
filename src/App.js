import { Route, Routes } from 'react-router-dom';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Weather />} />
      <Route
        path="/city/:id"
        element={<WeatherDetails />}
      />
    </Routes>

  );
}

export default App;
