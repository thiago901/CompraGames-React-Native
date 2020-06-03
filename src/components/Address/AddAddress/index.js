import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Form,
  TitleForm,
  InputForm,
  ButtonSave,
  ButtonSaveText,
  ButtonClose,
} from './styles';
import Background from '../../Background';

const AddAddress = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible} animated="slide">
      <Background center>
        <Form>
          <TitleForm>Cadastre seu endereço</TitleForm>
          <InputForm placeholder="Nome do destinatario" />
          <InputForm keyboardType="numeric" placeholder="CEP" />
          <InputForm keyboardType="numeric" placeholder="Número" />
          <InputForm placeholder="Complemento" />
          <InputForm placeholder="Rua" />
          <InputForm placeholder="Bairro" />
          <InputForm placeholder="Cidade" />
          <InputForm placeholder="UF" />
          <ButtonSave>
            <ButtonSaveText>Salvar</ButtonSaveText>
          </ButtonSave>
        </Form>
        <ButtonClose onPress={() => closeModal(!true)}>
          <Icon name="close" size={30} color="#fff" />
        </ButtonClose>
      </Background>
    </Modal>
  );
};

export default AddAddress;
