import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  border-bottom-color: #444;
  border-bottom-width: 1;
`;

export const ForecastList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {padding: 10},
})`



`;
