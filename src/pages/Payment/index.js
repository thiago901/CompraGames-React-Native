import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import {
  Container,
  ProcessPayment,
  AddressContainer,
  Street,
  City,
  Cep,
  AddressButtonsContainer,
  AddAddressesButton,
  AddAddressesButtonText,
  UpdateAddressesButton,
  UpdateAddressesButtonText,
} from './styles';

const Payment = () => {
  return (
    <Background>
      <Container>
        <ProcessPayment>
          <AddressContainer>
            <Street>Rua 1, 350</Street>
            <City>São Paulo - SP</City>
            <Cep>05847-120</Cep>
            <AddressButtonsContainer>
              <UpdateAddressesButton>
                <Icon name="home" size={20} color="#000" />
                <UpdateAddressesButtonText>
                  Alterar endereço
                </UpdateAddressesButtonText>
              </UpdateAddressesButton>
              <AddAddressesButton>
                <Icon name="add" size={20} color="#000" />
                <AddAddressesButtonText>Add endereço</AddAddressesButtonText>
              </AddAddressesButton>
            </AddressButtonsContainer>
          </AddressContainer>
          <AddressContainer>
            <Street>Rua 1, 350</Street>
            <City>São Paulo - SP</City>
            <Cep>05847-120</Cep>
            <AddressButtonsContainer>
              <UpdateAddressesButton>
                <Icon name="home" size={20} color="#000" />
                <UpdateAddressesButtonText>
                  Alterar endereço
                </UpdateAddressesButtonText>
              </UpdateAddressesButton>
              <AddAddressesButton>
                <Icon name="add" size={20} color="#000" />
                <AddAddressesButtonText>Add endereço</AddAddressesButtonText>
              </AddAddressesButton>
            </AddressButtonsContainer>
          </AddressContainer>
        </ProcessPayment>
      </Container>
    </Background>
  );
};

export default Payment;
