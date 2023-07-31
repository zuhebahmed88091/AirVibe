import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import { getCities, getWeather } from '../components/Api/api';

const initialState = {
  cityList: [
    'London',
    'New York',
    'Tokyo',
    'Prague',
    'Berlin',
    'Copenhagen',
    'Madrid',
    'Buenos Aires',
    'Dubai',
    'Rome',
    'Marrakesh',
    'Glasgow',
    'Las Vegas',
    'Beijing',
    'Helsinki',
    'Paris',
  ],
  dataOfCities: [],
};

const getCitiesWeather = createAsyncThunk(
  'airvibe/getweather',
  async (_, { getState }) => {
    const { cityList } = getState();
    const dataWeatherWithCities = await Promise.all(
      cityList.map(async (city) => {
        const cityData = await getCities(city);
        if (cityData.length > 0) {
          const { lat, lon } = cityData[0];
          const weatherData = await getWeather(lat, lon);
          console.log(weatherData);
        }
      }),
    );
    return dataWeatherWithCities;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCitiesWeather.fulfilled, (state, action) => {
      state.dataOfCities = action.payload;
    });
  },
});

export default weatherSlice.reducer;
export { getCitiesWeather };
