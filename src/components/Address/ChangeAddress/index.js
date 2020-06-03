import React from 'react';
import { Button } from 'react-native';

import {
  Container,
  Title,
  SelectButtom,
  CardContainer,
  Name,
  Item,
} from './styles';
import Background from '../../Background';

const ChangeAddress = ({ visible, closeModal }) => {
  return (
    <Container visible={visible} animated="slide">
      <Background>
        <Title>Escolha seu enderço</Title>
        <SelectButtom>
          <CardContainer>
            <Name>Thiago</Name>
            <Item>Rua: abcd, 12</Item>
            <Item>Bairro: Jd Jacira</Item>
            <Item>Cidade: São Paulo - SP</Item>
            <Item>CEP: 05847-600</Item>
            <Item>Complemento: Proximo ao atacado</Item>
          </CardContainer>
        </SelectButtom>
      </Background>
      <Button title="Fechar" onPress={() => closeModal(!true)} />
    </Container>
  );
};

export default ChangeAddress;
