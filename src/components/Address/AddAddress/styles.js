import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  padding: 20px;
  border-radius: 14px;
`;

export const TitleForm = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 20px 0;

  color: #22272a;
`;
export const InputForm = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background: #de4e3a;
  border-radius: 14px;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
`;
export const ButtonSave = styled.TouchableOpacity`
  padding: 10px;
  background: #6fa1cd;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;
export const ButtonSaveText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonClose = styled.TouchableOpacity`
  background: #22272a;
  align-self: center;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
`;
