import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';

import {
  Container,
  Title,
  SelectButtom,
  CardContainer,
  Name,
  Item,
} from './styles';
import Background from '../../Background';
import api from '../../../services/api';

const ChangeAddress = ({ visible, closeModal }) => {
  const [adressess, setAdressess] = useState([]);
  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    async function load() {
      const response = await api.get(`/addresses/client/${profile.client.id}`);
      setAdressess(response.data);
    }
    load();
  }, []);
  return (
    <Container visible={visible} animated="slide">
      <Background>
        <Title>Escolha seu enderço</Title>
        <SelectButtom>
          {adressess.map((a) => (
            <CardContainer>
              <Name>{a.name}</Name>
              <Item>{`Rua: ${a.street}`}</Item>
              <Item>{`Bairro: ${a.neighborhood}`}</Item>
              <Item>{`Cidade: ${a.city} - ${a.state}`}</Item>
              <Item>{`CEP: ${a.cep}`}</Item>
              <Item>{`Complemento: ${a.complement}`}</Item>
            </CardContainer>
          ))}
        </SelectButtom>
      </Background>
      <Button title="Fechar" onPress={() => closeModal(!true)} />
    </Container>
  );
};

export default ChangeAddress;
