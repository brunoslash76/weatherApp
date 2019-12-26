import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const Weekdays = styled.Text`
  width: 110px;
  font-size: 20px;
`;

export const Temperature = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75px;
`;

export const Text = styled.Text`
  font-size: 20px;
`;
