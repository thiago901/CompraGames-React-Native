import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../services/api';
import {
  Container,
  SelectButtom,
  CardContainer,
  Name,
  Item,
  ButtonAddCreditCart,
  ButtonAddCreditCartText,
} from './styles';

const ListCards = ({ setOpenAddCart, setCardSelect }) => {
  const [listCards, setListCards] = useState([]);
  const { profile } = useSelector((state) => state.user);
  useEffect(() => {
    async function load() {
      const response = await api.get(`/cards/${profile.client.id}`);
      setListCards(response.data);
    }
    load();
  }, []);

  function selectCard(id) {
    setOpenAddCart(true);
    setCardSelect(id);
  }
  function handleNewCard() {
    setOpenAddCart(true);
    setCardSelect(null);
  }
  return (
    <Container>
      {listCards.map((c) => (
        <SelectButtom key={c.id} onPress={() => selectCard(c)}>
          <CardContainer>
            <Name>{c.card_owner}</Name>
            <Item>{`Número: ${c.card_number}`} </Item>
            <Item>{`Mês: ${c.month}`}</Item>
            <Item>{`Ano: ${c.year}`}</Item>
          </CardContainer>
        </SelectButtom>
      ))}

      <ButtonAddCreditCart onPress={handleNewCard}>
        <ButtonAddCreditCartText>Novo Cartão</ButtonAddCreditCartText>
      </ButtonAddCreditCart>
    </Container>
  );
};

export default ListCards;
