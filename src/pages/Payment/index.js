import React, { useRef, useState } from 'react';

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
  ButtonsNextBack,
  ButtonController,
} from './styles';

const Payment = () => {
  let flatListPayment = useRef();
  let flatMenuList = useRef();
  const [proxItem, setProxItem] = useState(1);
  const [lengthMenu] = useState(2);

  function banckSlip() {
    flatListPayment.scrollToEnd({ animated: true });
  }
  function creditCard() {
    flatListPayment.scrollTo({ animated: true, x: 0, y: 0 });
  }

  function next() {
    if (proxItem <= lengthMenu) {
      flatMenuList.scrollToIndex({ animated: true, index: proxItem });
      if (proxItem === lengthMenu) {
        setProxItem(lengthMenu);
      } else {
        setProxItem(proxItem + 1);
      }
    }
  }
  function back() {
    if (proxItem > 0) {
      flatMenuList.scrollToIndex({ animated: true, index: proxItem - 1 });
      setProxItem(proxItem - 1);
    }
    if (proxItem === 0) {
      setProxItem(1);
    }
  }

  const processPayment = [
    {
      id: 1,
      component: (
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
      ),
    },
    {
      id: 2,
      component: (
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
      ),
    },
    {
      id: 3,
      component: (
        <ItemScrollContainer>
          <ButtonContainer>
            <ButtonSelectPayment onPress={creditCard}>
              <Icon name="credit-card" size={80} color="#000" />
            </ButtonSelectPayment>
            <ButtonSelectPayment onPress={banckSlip}>
              <Icon name="attach-money" size={80} color="#000" />
            </ButtonSelectPayment>
          </ButtonContainer>

          <TextSelectPayment>
            <TextIconName>Cartão de crédito</TextIconName>
            <TextIconName>Boleto</TextIconName>
          </TextSelectPayment>

          <PaymentsContainer
            ref={(ref) => {
              flatListPayment = ref;
            }}
          >
            <CreditContainer>
              <TitlePaymentContainer>
                <TextCardTitle>Escolher cartão</TextCardTitle>
                <ButtonSelectCard>
                  <Icon name="open-in-new" size={20} color="#000" />
                </ButtonSelectCard>
              </TitlePaymentContainer>
              <TextCardData
                autoCapitalize="words"
                placeholder="Nome Impresso no cartão"
              />
              <TextCardData
                keyboardType="numeric"
                placeholder="Número do cartão"
              />
              <DateCardContainer>
                <ButtonCardData placeholder="Mês" />
                <ButtonCardData placeholder="Ano" />
              </DateCardContainer>
              <TextCardData keyboardType="numeric" placeholder="CVV" />
              <TextCardData keyboardType="numeric" placeholder="Parcelar em" />
              <ButtonSaveCard>
                <TextFinalizeSale>
                  Selecione para salvar seu cartão
                </TextFinalizeSale>
              </ButtonSaveCard>
            </CreditContainer>
            <BankSlipContainer>
              <PrinterContainer>
                <IconContainer>
                  <Icon name="print" size={50} color="#000" />
                  <TextBankSlipDescription>
                    Imprima o Boleto e pague no banco
                  </TextBankSlipDescription>
                </IconContainer>
                <IconContainer>
                  <Icon name="computer" size={50} color="#000" />
                  <TextBankSlipDescription>
                    ou pague pela internet utilizando o código de barras do
                    boleto.
                  </TextBankSlipDescription>
                </IconContainer>
                <IconContainer>
                  <Icon name="event" size={50} color="#000" />
                  <TextBankSlipDescription>
                    O prazo de validade do boleto é de um dia útil.
                  </TextBankSlipDescription>
                </IconContainer>
              </PrinterContainer>
            </BankSlipContainer>
          </PaymentsContainer>
        </ItemScrollContainer>
      ),
    },
  ];

  return (
    <Background>
      <Container>
        <ProcessPayment
          ref={(ref) => {
            flatMenuList = ref;
          }}
          data={processPayment}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <>{item.component}</>}
        />
        <ButtonsNextBack>
          <ButtonController onPress={back}>
            <Icon name="keyboard-backspace" size={50} color="#fff" />
          </ButtonController>

          <ButtonController onPress={next}>
            <Icon name="done" size={50} color="#fff" />
          </ButtonController>
        </ButtonsNextBack>
      </Container>
    </Background>
  );
};

export default Payment;
