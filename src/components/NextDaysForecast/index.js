import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {isSameDay} from 'date-fns/fp';

import NextDaysItem from '../NextDaysItem';

import {Container, NextDaysList} from './styles';

export default function NextDaysForecast() {

  const hourlyForecastList = useSelector(
    state => state.hourlyForecast.hourlyForecast
  );

  const [daysArray, setDaysArray] = useState([]);

  const filterTemperature = (starterTemperature, minOrMax) => {
    let aux = starterTemperature;
    let arrayAux = [];

    for (let i = 0, length = hourlyForecastList.length; i < length - 1; i++) {
      let dateNow = new Date(hourlyForecastList[i].dt * 1000);
      let dateThen = new Date(hourlyForecastList[i + 1].dt * 1000);

      if (isSameDay(dateNow, dateThen)) {

        if (minOrMax === 'min') {
          if (hourlyForecastList[i].main.temp_min < aux) {
            aux = hourlyForecastList[i].main.temp_min;
          }
        } else if (minOrMax === 'max') {
          if (hourlyForecastList[i].main.temp_max > aux) {
            aux = hourlyForecastList[i].main.temp_max;
          }
        }
      } else {
        arrayAux.push(aux);
      }
    }

    return arrayAux;

  };

  const filterDayFromHourlyForecastList = () => {

    let arrayAux = [];
    for (let i = 0, length = hourlyForecastList.length - 1; i < length; i++) {
      let dateNow = new Date(hourlyForecastList[i].dt * 1000);
      let dateThen = new Date(hourlyForecastList[i + 1].dt * 1000);

      if (!isSameDay(dateNow, dateThen)) {
        arrayAux.push(hourlyForecastList[i]);
      }
    }

    return arrayAux;
  };

  const normalizeMinMaxTemperature = () => {
    let filteredDays = filterDayFromHourlyForecastList();
    const daysMinTemp = filterTemperature(hourlyForecastList[0].main.temp_min, 'min');
    const daysMaxTemp = filterTemperature(hourlyForecastList[0].main.temp_max, 'max');

    for (let i = 0, length = filteredDays.length; i < length; i++) {

      filteredDays[i].main.temp_min = daysMinTemp[i];
      filteredDays[i].main.temp_max = daysMaxTemp[i];

    }

    setDaysArray(filteredDays);

  }

  useEffect(() => {

    normalizeMinMaxTemperature();

  }, [0]);

  return (
    <Container>
      <NextDaysList
        data={daysArray || []}
        keyExtractor={item => String(item.dt)}
        renderItem={({item}) => {
          return (
            <NextDaysItem
              day={item.dt * 1000}
              icon={item.weather[0].icon}
              minMax={[item.main.temp_min, item.main.temp_max]}
            />
          );
        }}
      />
    </Container>
  );
}
