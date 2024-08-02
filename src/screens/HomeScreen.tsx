import React from 'react';
import { View, ImageBackground, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from '../styles/styles';
import { weatherConditionMap } from '../utils/weatherUtils';
import useWeather from '../hooks/useWeather';
import WeatherInfo from '../components/WeatherInfo';
import ForecastItem from '../components/ForecastItem';
import { WeatherDetails, ForecastItem as ForecastItemType } from '../types';

const HomeScreen: React.FC = () => {
  const { isLoading, weatherDetails, temperature, forecast } = useWeather();

  const { bgsource, bgcolor } = weatherConditionMap[weatherDetails.wea] || weatherConditionMap.Clear;

  const renderItem = ({ item }: { item: ForecastItemType }) => <ForecastItem item={item} />;

  return (
    <>
      {isLoading ? (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>Getting Weather Information</Text>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.container}>
          <ImageBackground
            style={styles.background}
            source={bgsource}
            resizeMode="cover"
          >
            <WeatherInfo weatherDetails={weatherDetails} />
          </ImageBackground>
          <View style={[styles.row, { backgroundColor: bgcolor }]}>
            <View style={styles.daytemp}>
              <Text style={styles.avtemp}>{temperature.min}° {'\n'}min</Text>
              <Text style={styles.avtemp}>{weatherDetails.temp}° {'\n'}Current</Text>
              <Text style={styles.avtemp}>{temperature.max}° {'\n'}max</Text>
            </View>
            <View style={styles.hr} />
            <View style={styles.forecastContainer}>
              <FlatList
                style={styles.flatList}
                data={forecast}
                renderItem={renderItem}
                keyExtractor={(item) => item.key.toString()}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;