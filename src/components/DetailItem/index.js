import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Container, Title, Value } from './styles';

export default function DetailItem({title, value}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Container>
  );
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
