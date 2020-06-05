import styled from 'styled-components/native';

export const CreditContainer = styled.View`
  margin: 0 10px;
`;
export const TextCardData = styled.TextInput`
  font-size: 16px;
  background-color: #e6e6e6;
  margin: 5px 0;
  padding: 10px;
`;
export const DateCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;
export const ButtonCardData = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  flex: 1;
  background-color: #e6e6e6;
  margin-right: ${(props) => (props.spaceRight ? '10px' : '0')};
`;

export const ButtonSaveCard = styled.TouchableOpacity`
  margin-top: 20px;
  background: #222;
  border-radius: 4px;
  padding: 15px;
`;
export const ButtonFinalizeSale = styled.TouchableOpacity`
  margin-top: 10px;
  background: #de4e3a;
  border-radius: 4px;
  padding: 15px;
`;
export const TextFinalizeSale = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
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
