import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/styles';
import { WeatherDetails } from '../types';

interface WeatherInfoProps {
  weatherDetails: WeatherDetails;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherDetails }) => (
  <>
    <Text style={styles.temperature}>{weatherDetails.temp}°</Text>
    <Text style={styles.title}>{weatherDetails.wea.toUpperCase()}</Text>
    <Text style={styles.city}>{weatherDetails.city}</Text>
  </>
);

export default WeatherInfo;