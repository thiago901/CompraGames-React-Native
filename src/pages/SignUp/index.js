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
FormSpecify,
InputSpecify,
TextSignIn,
TextAlready,
Link,
} from './styles';

const SignUp = ({navigation}) => {
  return(
    <Background color="#22272a" center>
      <SignInContainer>
        <Form>
          <TextTitle>CompreGames.com</TextTitle>
          <Input placeholder="Informe o seu nome"/>
          <Input placeholder="Informe o seu cpf"/>
          <FormSpecify>
            <InputSpecify placeholder="CEP"/>
            <InputSpecify placeholder="Número"/>
            <InputSpecify placeholder="Complemento"/>
          </FormSpecify>
          <FormSpecify>
            <InputSpecify placeholder="Rua"/>
            <InputSpecify placeholder="Bairro"/>
            <InputSpecify placeholder="UF"/>
            <InputSpecify placeholder="Cidade"/>
          </FormSpecify>
          <Input placeholder="Informe o seu email"/>
          <Input placeholder="Digite sua senha"/>
          <Button>
            <TextButton>CREATE</TextButton>
          </Button>
          <TextAlready>Already registered?</TextAlready>
          <Link onPress={() => navigation.navigate('SignIn')}>
            <TextSignIn>Sign in</TextSignIn>
          </Link>
        </Form>
      </SignInContainer>
    </Background>
  );
}

export default SignUp;
