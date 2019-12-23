import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {icons} from '../../common/util';

import { Container, Image } from './styles';

// import * as Images from '../../assets/png';

export default function IconForecast({icon, size}) {

  useEffect(() => {
    console.tron.log(icons[icon])
  }, [])

  return (
    <Container>
      <Image
        source={icons[icon]}
        style={{width: size, height: size}}
      />
    </Container>
  );
}

IconForecast.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
};
IconForecast.defaultValue = {
  icon: '01d',
  size: 25,
}
