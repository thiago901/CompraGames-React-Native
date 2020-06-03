import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextFeedback = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonHome = styled(RectButton)`
  background: #222;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
`;
export const ButtonHomeText = styled.Text`
  color: #fff;
`;
