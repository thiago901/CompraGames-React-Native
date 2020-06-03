import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  overflow: hidden;
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
  background: #fff;
  border-radius: 4px;
  flex: 1;
`;
export const CardContainer = styled.View`
  padding: 10px;
  width: ${Dimensions.get('window').width - 15};
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

export const ButtonAddCreditCart = styled(RectButton)`
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: #999;
  border-radius: 4px;
  width: ${Dimensions.get('window').width - 50};
  margin-top: 10px;
`;
export const ButtonAddCreditCartText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
