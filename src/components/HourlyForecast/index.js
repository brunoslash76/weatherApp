import React from 'react';
import {useSelector} from 'react-redux';

import ForecastItem from '../ForecastItem';

import {Container, ForecastList} from './styles';

export default function HourlyForecast() {

  const hourlyForecastList = useSelector(state => state.hourlyForecast.hourlyForecast);

  return (
    <Container>
      <ForecastList
        horizontal={true}
        data={hourlyForecastList}
        keyExtractor={item => String(item.dt)}
        renderItem={({item}) => {
          return (
            <ForecastItem
              temperature={item.main.temp}
              icon={item.weather[0].icon}
              hour={item.dt}
            />
          )
        }}
      />
    </Container>
  );
}
