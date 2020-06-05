import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

const FormNew = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible} animated="slide">
      <Background center>
        <KeyboardAwareScrollView>
          <CreditContainer>
            <TextCardData
              autoCapitalize="words"
              placeholder="Nome Impresso no cartão"
            />
            <TextCardData
              keyboardType="numeric"
              placeholder="Número do cartão"
            />
            <DateCardContainer>
              <ButtonCardData spaceRight placeholder="Mês" />
              <ButtonCardData placeholder="Ano" />
            </DateCardContainer>
            <TextCardData keyboardType="numeric" placeholder="CVV" />
            <TextCardData keyboardType="numeric" placeholder="Parcelar em" />
            <ButtonSaveCard>
              <TextFinalizeSale>
                Selecione para salvar seu cartão
              </TextFinalizeSale>
            </ButtonSaveCard>
            <ButtonFinalizeSale>
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
