import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { signInRequest } from '../../store/module/auth/actions';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function submit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background color="#22272a" center>
      <SignInContainer>
        <Form>
          <TextTitle>CompreGames.com</TextTitle>
          <Input
            placeholder="Informe o email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Informe sua senha"
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={submit}>
            <TextButton>LOGIN</TextButton>
          </Button>

          <Button color="#666" onPress={() => navigation.navigate('SignUp')}>
            <TextButton>SIGN UP</TextButton>
          </Button>
        </Form>
      </SignInContainer>
    </Background>
  );
};

export default SignIn;
