import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Background from '../../components/Background';
import {
  SignInContainer,
  Form,
  TextTitle,
  Input,
  Button,
  TextButton,
  FormSpecify,
  TextSignIn,
  TextAlready,
  ButtonBackSignin,
} from './styles';

import { signUpRequest } from '../../store/module/auth/actions';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [cep, setCep] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();
  const [street, setStreet] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  function submit() {
    const data = {
      name,
      cpf,
      cep,
      number,
      complement,
      street,
      neighborhood,
      state,
      city,
      email,
      password,
    };
    dispatch(signUpRequest(data));
  }
  return (
    <Background color="#22272a" center>
      <SignInContainer>
        <Form>
          <TextTitle>CompraGames.com</TextTitle>
          <Input
            placeholder="Informe o seu nome"
            value={name}
            onChangeText={setName}
          />
          <Input
            placeholder="Informe o seu CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />
          <FormSpecify>
            <Input
              widthMax
              spaceMargin={10}
              placeholder="CEP"
              keyboardType="numeric"
              value={cep}
              onChangeText={setCep}
            />
            <Input
              widthMax
              spaceMargin={10}
              placeholder="Número"
              keyboardType="numeric"
              value={number}
              onChangeText={setNumber}
            />
            <Input
              widthMax
              placeholder="Complemento"
              value={complement}
              onChangeText={setComplement}
            />
          </FormSpecify>
          <Input placeholder="Rua" value={street} onChangeText={setStreet} />
          <Input
            placeholder="Bairro"
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
          <FormSpecify>
            <Input
              widthMax
              spaceMargin={10}
              placeholder="state"
              value={state}
              onChangeText={setState}
            />
            <Input
              widthMax
              placeholder="Cidade"
              value={city}
              onChangeText={setCity}
            />
          </FormSpecify>
          <Input
            placeholder="Informe o seu email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={submit}>
            <TextButton>CREATE</TextButton>
          </Button>
          <TextAlready>Already registered?</TextAlready>
          <ButtonBackSignin onPress={() => navigation.navigate('SignIn')}>
            <TextSignIn>Sign in</TextSignIn>
          </ButtonBackSignin>
        </Form>
      </SignInContainer>
    </Background>
  );
};

export default SignUp;
