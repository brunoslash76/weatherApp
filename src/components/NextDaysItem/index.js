import React, { useEffect } from 'react';
import {format} from 'date-fns';
import {View} from 'react-native';

import {kelvinToCelcius} from '../../common/util';
import IconForecast from '../IconForecast';

import {Container, Weekdays, Temperature, Text} from './styles';

export default function NextDaysItem({day, icon, minMax}) {
  const [min, max] = minMax;

  useEffect(() => {
    // console.tron.log(minMax);
  })

  return (
    <Container>
      <Weekdays>{format(new Date(day), 'iiii')}</Weekdays>
      <IconForecast icon={icon} size={30} />
      <Temperature>
        <Text>{kelvinToCelcius(max)}°</Text>
        <Text>{kelvinToCelcius(min)}°</Text>
      </Temperature>
    </Container>
  );
}
