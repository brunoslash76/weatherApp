import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import CurrentForecast from '../../components/CurrentForecast';
import HourlyForecast from '../../components/HourlyForecast';
import Background from '../../components/Background';

import {getCityRequest} from '../../store/modules/city/actions';
import {getHourlyForecastRequest} from '../../store/modules/hourlyForecast/actions';

import {Container} from './styles';
import IconForecast from '../../components/IconForecast';

export default Forecast = () => {
  const dispatch = useDispatch();

  async function getGeolocation(getRequestFunc) {
    await Geolocation.getCurrentPosition(
      success => dispatch(getRequestFunc(success.coords)),
      error => Alert.alert("Opps, Huston we've got a problem!"),
      {enableHighAccuracy: true}
    );
  }

  useEffect(() => {

    getGeolocation(getCityRequest);
    getGeolocation(getHourlyForecastRequest);

    const interval = setInterval(() => {
      getGeolocation(getCityRequest);
      getGeolocation(getHourlyForecastRequest);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <Container>
        <CurrentForecast />
        <HourlyForecast />
      </Container>
    </Background>
  );
};
