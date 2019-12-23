import React from 'react';

import { Container, Image } from './styles';

export default function IconForecast({code, size}) {
  return (
    <Container>
      <Image
        source={require(`../../assets/png/${code}.png`)}
        style={{width: size, height: size}}
      />
    </Container>
  );
}
