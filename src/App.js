import { Route, Routes } from 'react-router-dom';
import Weather from './components/Weather';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Weather />} />
      <Route
        path="/city/:id"
      />
    </Routes>

  );
}

export default App;
