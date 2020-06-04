import styled from 'styled-components/native';


export const SignInContainer = styled.View`
  margin: 0px 15px;
`;
export const TitleImageContainer = styled.View`

`;
export const TextTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;
export const Form = styled.View`

`;
export const Input = styled.TextInput`
  background: white;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
  background: ${props => props.color || "#de4e3a"};
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
`;
export const FormSpecify = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const InputSpecify = styled.TextInput`
  background: white;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 4px;
  width: 90px;
`;
export const TextSignIn = styled.Text`
  font-size: 16px;
  text-align: right;
  color: #00afff;
`;

export const TextAlready = styled.Text`
  font-size: 16px;
  text-align: right;
  color: white;
`;
export const Link = styled.TouchableOpacity`

`;
