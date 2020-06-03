import React from 'react';

import {
  Container,
  SelectButtom,
  CardContainer,
  Name,
  Item,
  ButtonAddCreditCart,
  ButtonAddCreditCartText,
} from './styles';

const ListCards = ({ setOpenAddCart }) => {
  return (
    <Container>
      <SelectButtom>
        <CardContainer>
          <Name>Thiago</Name>
          <Item>Número: 123456789123</Item>
          <Item>Mês: 06</Item>
          <Item>Ano: 2039</Item>
        </CardContainer>
      </SelectButtom>
      <ButtonAddCreditCart onPress={() => setOpenAddCart(true)}>
        <ButtonAddCreditCartText>Novo Cartão</ButtonAddCreditCartText>
      </ButtonAddCreditCart>
    </Container>
  );
};

export default ListCards;
