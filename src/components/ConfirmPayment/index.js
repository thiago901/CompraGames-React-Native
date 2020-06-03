import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TextFeedback, ButtonHome, ButtonHomeText } from './styles';
import Background from '../Background';

const ConfirmPayment = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Icon name="done-all" color="#fff" size={80} />
        <TextFeedback>Compra Efetuada</TextFeedback>
        <TextFeedback>Pedido nº 35</TextFeedback>
        <ButtonHome onPress={() => navigation.navigate('Home')}>
          <ButtonHomeText>Voltar para tela principal</ButtonHomeText>
        </ButtonHome>
      </Container>
    </Background>
  );
};

export default ConfirmPayment;
