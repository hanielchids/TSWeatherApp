import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { WeatherDetails, Temperature, ForecastItem } from '../types';

const api = {
  key: process.env.REACT_WEATHER_KEY,
  base: process.env.REACT_BASE_URL,
};

const useWeather = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<Temperature>({
    min: null,
    max: null,
  });
  const [isLoading, setLoading] = useState(true);
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>({
    temp: 0,
    wea: 'NIL',
    city: 'NIL',
    country: 'NIL',
  });
  const [forecast, setForecast] = useState<ForecastItem[]>([
    { key: '1', temp: 0, wea: 'NIL' },
    { key: '2', temp: 0, wea: 'NIL' },
    { key: '3', temp: 0, wea: 'NIL' },
    { key: '4', temp: 0, wea: 'NIL' },
    { key: '5', temp: 0, wea: 'NIL' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const isConnected = await NetInfo.fetch().then(state => state.isConnected);

        if (!isConnected) {
          const storedWeatherData = await AsyncStorage.getItem('weatherData');

          if (storedWeatherData) {
            const parsedData = JSON.parse(storedWeatherData);
            setWeatherDetails(parsedData.weatherDetails);
            setTemperature(parsedData.temperature);
            setForecast(parsedData.forecast);
            setLoading(false);
            return;
          }
        }

        Geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const weatherResponse = await fetch(
              `${api.base}onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
            );

            const { main, weather, name, sys } = await weatherResponse.json();

            if (name !== null) {
              const newWeatherDetails = {
                temp: Math.round(main.temp),
                wea: weather[0].main,
                city: name,
                country: sys.country,
              };

              setWeatherDetails(newWeatherDetails);

              const newTemperature = {
                min: Math.round(main.temp_min),
                max: Math.round(main.temp_max),
              };

              setTemperature(newTemperature);

              const weatherDataToStore = {
                weatherDetails: newWeatherDetails,
                temperature: newTemperature,
                forecast,
              };

              await AsyncStorage.setItem(
                'weatherData',
                JSON.stringify(weatherDataToStore)
              );

              setLoading(false);

              const forecastResponse = await fetch(
                `${api.base}onecall/timemachine?lat=${latitude}&lon=${longitude}&dt={1586468027}&units=metric&appid=${api.key}`
              );

              const { cnt, list } = await forecastResponse.json();

              let forecast_: ForecastItem[] = [];
              for (let index = 7, k = 1; index < cnt; index += 8, k++) {
                let data = {
                  key: k.toString(),
                  temp: Math.round(list[index].main.temp),
                  wea: list[index].weather[0].main,
                };
                forecast_.push(data);
              }
              setForecast(forecast_);
            }
          },
          (error) => setErrorMsg(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error fetching data:', errorMsg);
      }
    };

    fetchData();
  }, []);

  return { isLoading, weatherDetails, temperature, forecast };
};

export default useWeather;
