import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../../services/api';
import { clearCart } from '../../../store/module/cart/actions';
import {
  CreditContainer,
  TextCardData,
  DateCardContainer,
  ButtonCardData,
  ButtonFinalizeSale,
  ButtonSaveCard,
  TextFinalizeSale,
  ButtonClose,
} from './styles';

import Background from '../../Background';

const FormNew = ({ navigation, visible, closeModal, cardSelect }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const cart = useSelector((state) =>
    state.cart.cart.map((product) => ({
      amount: product.amount,
      unit_price: product.price,
      product_id: product.id,
    }))
  );

  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [installments, setInstallments] = useState();
  const [cvv, setCvv] = useState();
  const [cardId, setCardId] = useState();

  function load() {
    setName('');
    setNumber('');
    setMonth('');
    setYear('');
    setCardId(null);
    if (cardSelect) {
      setName(cardSelect.card_owner);
      setNumber(cardSelect.card_number);
      setMonth(cardSelect.month.toString());
      setYear(cardSelect.year.toString());
      setCardId(cardSelect.id);
    }
  }

  const dataCard = {
    card_owner: name,
    card_number: number,
    month: Number(month),
    year: Number(year),
    client_id: profile.client.id,
  };
  const sale = {
    freight: 12,
    total_price: 360,
    installments,
    status: 2,
    card_id: cardId,
    products: cart,
    client_id: profile.client.id,
    payment_id: 1,
    address_id: 63,
    card: {
      ...dataCard,
      name: dataCard.card_owner,
      number_card: dataCard.card_number,
    },
  };
  async function saveCard() {
    try {
      const response = await api.post('/cards', dataCard);
      setCardId(response.id);

      Alert.alert('sucesso');
    } catch (error) {
      Alert.alert('Erro');
    }
  }
  async function createSale() {
    try {
      const response = await api.post('/sales', sale);
      dispatch(clearCart());
      closeModal(!true);
      navigation.popToTop();
      navigation.navigate('ConfirmPayment', { id: response.id });
    } catch (error) {
      Alert.alert('Erro');
    }
  }
  return (
    <Modal visible={visible} animated="slide" onShow={load}>
      <Background center>
        <KeyboardAwareScrollView>
          <CreditContainer>
            <TextCardData
              autoCapitalize="words"
              placeholder="Nome Impresso no cartão"
              value={name}
              onChangeText={setName}
            />
            <TextCardData
              keyboardType="numeric"
              placeholder="Número do cartão"
              value={number}
              onChangeText={setNumber}
            />
            <DateCardContainer>
              <ButtonCardData
                spaceRight
                placeholder="Mês"
                value={month}
                onChangeText={setMonth}
              />
              <ButtonCardData
                placeholder="Ano"
                value={year}
                onChangeText={setYear}
              />
            </DateCardContainer>
            <TextCardData
              keyboardType="numeric"
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
            />
            <TextCardData
              keyboardType="numeric"
              placeholder="Parcelar em"
              value={installments}
              onChangeText={setInstallments}
            />
            {!cardSelect ? (
              <ButtonSaveCard onPress={saveCard}>
                <TextFinalizeSale>
                  Selecione para salvar seu cartão
                </TextFinalizeSale>
              </ButtonSaveCard>
            ) : null}

            <ButtonFinalizeSale onPress={createSale}>
              <TextFinalizeSale>Pagar com cartão</TextFinalizeSale>
            </ButtonFinalizeSale>
          </CreditContainer>
        </KeyboardAwareScrollView>
        <ButtonClose onPress={() => closeModal(!true)}>
          <Icon name="close" size={30} color="#fff" />
        </ButtonClose>
      </Background>
    </Modal>
  );
};

export default FormNew;
