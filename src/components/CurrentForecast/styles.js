import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  padding: 80px 20px 10px 20px;
  border-bottom-color: #444;
  border-bottom-width: 1;

`;

export const InnerContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
  width: 100%;
`;

export const Heading = styled.Text`
  font-size: 50px;
  font-weight: 200;
  margin-top: 20px;
  color: #444;
`;

export const Text = styled.Text`
  font-size: 22px;
  font-weight: 300;
  color: #444;
`;

export const Small = styled.Text`
  font-size: 18px;
  color: #444;
`;

export const Button = styled.Button`

`;
