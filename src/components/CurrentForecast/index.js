import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {format} from 'date-fns';

import {kelvinToCelcius} from '../../common/util';

import {
  Container,
  InnerContainer,
  InfoContainer,
  Heading,
  Text,
  Small,
  Button,
} from './styles';

export default function CurrentForecast({ currentWeather }) {

  const city = useSelector(state => state.city.city)

  useEffect(() => {

  }, [city])

  return (
    <Container>
      <InnerContainer>
        <Text>{city && city.name}</Text>
        <Small>{city.weather[0].description}</Small>
        <Heading>{city && kelvinToCelcius(city.main.temp)}°</Heading>
      </InnerContainer>
      <InfoContainer>
        <Text>{format(new Date(), 'iiii')} Today</Text>
        <Text>{city ? `${kelvinToCelcius(city.main.temp_max)}°  ${kelvinToCelcius(city.main.temp_min)}°`: '--'}</Text>
      </InfoContainer>
    </Container>
  );
}
