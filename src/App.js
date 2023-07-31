import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getCitiesWeather } from './redux/weatherSlice';

function App() {
  useEffect(() => {
    store.dispatch(getCitiesWeather());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
