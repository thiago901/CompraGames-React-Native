import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.Modal`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  align-self: center;
`;
export const SelectButtom = styled(RectButton)`
  background: blue;
  margin: 5px 10px;
  background: #fff;
  border-radius: 4px;
`;
export const CardContainer = styled.View`
  padding: 10px;
`;
export const Name = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const Item = styled.Text`
  margin: 1px 0;
  font-size: 16px;
`;

export const ModalContainer = styled.Modal``;
