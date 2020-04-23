import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {format} from 'date-fns'
import DetailItem from '../DetailItem';

import { Container, Column } from './styles';

export default function CurrenteForecastDetails() {
  const cityForecast = useSelector(state => state.city.city);

  useEffect(() => {
    console.tron.log(cityForecast);
  });

  return (
    <Container>
      <Column>
        <DetailItem title={'Sunrise'} value={String(format(new Date((cityForecast.sys.sunrise - cityForecast.timezone) * 1000), 'HH:mm'))} />
        <DetailItem title={'Fells Like'} value={String(cityForecast.main.feels_like)} />
        <DetailItem title={'Wind speed'} value={String(cityForecast.wind.speed)} />
        <DetailItem title={'Pressure'} value={String(cityForecast.main.pressure)} />

      </Column>
      <Column>
        <DetailItem title={'Sunset'} value={String(format(new Date((cityForecast.sys.sunset - cityForecast.timezone) * 1000), 'HH:mm'))} />
        <DetailItem title={'Humidity'} value={String(cityForecast.main.humidity)} />
        <DetailItem title={'Degree'} value={String(cityForecast.wind.deg)} />
        <DetailItem title={'Visibility'} value={String(cityForecast.visibility)} />
      </Column>
    </Container>
  );
}
