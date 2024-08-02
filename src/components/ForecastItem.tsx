import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';
import { weatherConditionMap } from '../utils/weatherUtils';
import dayBuilder from '../utils/dayBuilder';
import { ForecastItem as ForecastItemType } from '../types';

interface ForecastItemProps {
  item: ForecastItemType;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ item }) => {
  const { source } = weatherConditionMap[item.wea] || weatherConditionMap.Clear;

  return (
    <View style={styles.itemcontainer}>
      <View style={{ width: '30%' }}>
        <Text style={styles.itemtext}>{dayBuilder(new Date(), parseInt(item.key))}</Text>
      </View>
      <View>
        <Image style={{ marginBottom: 20 }} source={source} />
      </View>
      <View style={{ width: '30%' }}>
        <Text style={styles.itemtemp}>{item.temp}°</Text>
      </View>
    </View>
  );
};

export default ForecastItem;