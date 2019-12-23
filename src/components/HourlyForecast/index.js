import React from 'react';
import {useSelector} from 'react-redux';

import {Container} from './styles';

export default function HourlyForecast() {

  const hourlyForecastList = useSelector(state => state.hourlyForecast.hourlyForecast);

  return (
    <></>
  );
}
