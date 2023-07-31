import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: weatherReducer,
});

export default store;
