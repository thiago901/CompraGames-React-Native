import React from 'react';
import {logo} from '../../assets/logo.png';
import Background from '../../components/Background';
import {
Container,
SignInContainer,
TitleImageContainer,
Form,
TextTitle,
Input,
Button,
TextButton,
} from './styles';

const SignIn = ({navigation}) => {
  return(
    <Background color="#22272a" center>
      <SignInContainer>
        <Form>
          <TextTitle>CompreGames.com</TextTitle>
          <Input placeholder="Informe o email"/>
          <Input placeholder="Informe sua senha"/>
          <Button onPress={() => navigation.navigate('Home')}>
            <TextButton>LOGIN</TextButton>
          </Button>

          <Button color="#666" onPress={() => navigation.navigate('SignUp')}>
            <TextButton>SIGN UP</TextButton>
          </Button>
        </Form>
      </SignInContainer>
    </Background>
  );
}

export default SignIn;
