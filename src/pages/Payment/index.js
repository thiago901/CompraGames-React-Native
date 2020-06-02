import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import {
  Container,
  ProcessPayment,
  ItemScrollContainer,
  Street,
  City,
  Cep,
  AddressButtonsContainer,
  AddAddressesButton,
  AddAddressesButtonText,
  UpdateAddressesButton,
  UpdateAddressesButtonText,
  TitleCartContainer,
  TitleCartValidation,
  CartContainer,
  DataCartContainer,
  ItemCartName,
  PriceProductsCart,
  TotalPriceSale,
  ButtonSelectPayment,
  ButtonContainer,
  PaymentsContainer,
  CreditContainer,
  TextCardData,
  DateCardContainer,
  ButtonCardData,
  ButtonFinalizeSale,
  ButtonSaveCard,
  TextFinalizeSale,
  TextCardTitle,
  TextIconName,
  TextSelectPayment,
  TitlePaymentContainer,
  ButtonSelectCard,
  BankSlipContainer,
  PrinterContainer,
  IconContainer,
  TextBankSlipDescription,
} from './styles';

const Payment = () => {
  return (
    <Background>
      <Container>
        <ProcessPayment>
          <ItemScrollContainer>
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
          </ItemScrollContainer>

          <ItemScrollContainer>
            <TitleCartContainer>
              <TitleCartValidation>Resumo do pedido</TitleCartValidation>
            </TitleCartContainer>
            <CartContainer>
              <DataCartContainer>
                <ItemCartName>1 Produto visualizar</ItemCartName>
                <PriceProductsCart>R$85,10</PriceProductsCart>
              </DataCartContainer>
              <DataCartContainer>
                <ItemCartName>Frete</ItemCartName>
                <PriceProductsCart>R$0,10</PriceProductsCart>
              </DataCartContainer>
            </CartContainer>
            <TotalPriceSale>R$85,20</TotalPriceSale>
          </ItemScrollContainer>

          <ItemScrollContainer>
            <ButtonContainer>
              <ButtonSelectPayment>
                <Icon name="credit-card" size={80} color="#000" />
              </ButtonSelectPayment>
              <ButtonSelectPayment>
                <Icon name="attach-money" size={80} color="#000" />
              </ButtonSelectPayment>
            </ButtonContainer>

            <TextSelectPayment>
              <TextIconName>Cartão de crédito</TextIconName>
              <TextIconName>Boleto</TextIconName>
            </TextSelectPayment>

            <PaymentsContainer>
              <CreditContainer>
                <TitlePaymentContainer>
                  <TextCardTitle>Escolher cartão</TextCardTitle>
                  <ButtonSelectCard>
                    <Icon name="open-in-new" size={20} color="#000" />
                  </ButtonSelectCard>
                </TitlePaymentContainer>
                <TextCardData>Nome Impresso no cartão</TextCardData>
                <TextCardData>Número do cartão</TextCardData>
                <DateCardContainer>
                  <ButtonCardData>Mês</ButtonCardData>
                  <ButtonCardData>Ano</ButtonCardData>
                </DateCardContainer>
                <TextCardData>CVV</TextCardData>
                <TextCardData>Parcelar em</TextCardData>
                <ButtonSaveCard>
                  <TextFinalizeSale>Selecione para salvar seu cartão</TextFinalizeSale>
                </ButtonSaveCard>
                <ButtonFinalizeSale>
                  <TextFinalizeSale>Pagar com cartão</TextFinalizeSale>
                </ButtonFinalizeSale>
              </CreditContainer>

              <BankSlipContainer>
                <PrinterContainer>
                  <IconContainer>
                    <Icon name="print" size={50} color="#000"/>
                    <TextBankSlipDescription>Imprima o Boleto e pague no banco</TextBankSlipDescription>
                  </IconContainer>
                  <IconContainer>
                    <Icon name="computer" size={50} color="#000"/>
                    <TextBankSlipDescription>ou pague pela internet utilizando
                        o código de barras do boleto.</TextBankSlipDescription>
                  </IconContainer>
                  <IconContainer>
                    <Icon name="event" size={50} color="#000"/>
                    <TextBankSlipDescription>O prazo de validade do boleto é de um dia útil.</TextBankSlipDescription>
                  </IconContainer>
                </PrinterContainer>
              </BankSlipContainer>
            </PaymentsContainer>
          </ItemScrollContainer>
        </ProcessPayment>
      </Container>
    </Background>
  );
};

export default Payment;
