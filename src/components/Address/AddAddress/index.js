import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import api from '../../../services/api';

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
  const [name, setName] = useState();
  const [cep, setCep] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();
  const [street, setStreet] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const { profile } = useSelector((state) => state.user);

  async function submit() {
    const data = {
      name,
      cep,
      number,
      complement,
      street,
      neighborhood,
      state,
      city,
      client_id: profile.client.id,
    };
    console.tron.warn('ola');

    try {
      await api.post('/addresses', data);
      Alert.alert('Cadastrado com sucesso');
    } catch (error) {
      Alert.alert('Erro');
    }
  }
  return (
    <Modal visible={visible} animated="slide">
      <Background center>
        <Form>
          <TitleForm>Cadastre seu endereço</TitleForm>
          <InputForm
            placeholder="Nome do destinatario"
            value={name}
            onChangeText={setName}
          />
          <InputForm
            keyboardType="numeric"
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
          />
          <InputForm
            keyboardType="numeric"
            placeholder="Número"
            value={number}
            onChangeText={setNumber}
          />
          <InputForm
            placeholder="Complemento"
            value={complement}
            onChangeText={setComplement}
          />
          <InputForm
            placeholder="Rua"
            value={street}
            onChangeText={setStreet}
          />
          <InputForm
            placeholder="Bairro"
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
          <InputForm placeholder="Cidade" value={city} onChangeText={setCity} />
          <InputForm placeholder="UF" value={state} onChangeText={setState} />
          <ButtonSave onPress={submit}>
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
