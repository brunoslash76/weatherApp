import React from 'react';
import {getHours} from 'date-fns';

import IconForecast from '../IconForecast';
import { kelvinToCelcius } from '../../common/util';

import { Container, Text, Small, Icon } from './styles';

export default function ForecastItem({temperature, icon, hour}) {

  const _getHours = () => {
    const formatedHour = getHours(new Date(hour * 1000));
     return formatedHour < 10 ? `0${formatedHour}` : formatedHour;
  }
  return (
    <Container>
      <Small>{_getHours()}</Small>
      <Icon>
        <IconForecast
          icon={icon}
          size={25}
        />
      </Icon>
      <Text>{kelvinToCelcius(temperature)}°</Text>
    </Container>
  );
}
