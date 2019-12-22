import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import geolocation from '@react-native-community/geolocation';

import Background from '../../components/Background';
import CurrentForecast from '../../components/CurrentForecast';
import {Container} from './styles';
import {getCityRequest} from '../../store/modules/city/actions';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

export default Forecast = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    const getGeolocation = async () => {
      await Geolocation.getCurrentPosition(
        success => dispatch(getCityRequest(success.coords)),
        error => Alert.alert('Opps, Huston we\'ve got a problem!'),
        {enableHighAccuracy: true}
      );
    };

    const interval = setInterval(() => {
      getGeolocation();
      console.tron.log('banana')
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <Container>
        <CurrentForecast />
      </Container>
    </Background>
  );
};
