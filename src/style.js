import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  background-color: #222;
`;

export const Text = styled.Text`
  color: white;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;